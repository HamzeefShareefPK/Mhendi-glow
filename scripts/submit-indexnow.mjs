// Post-deploy IndexNow submitter — hardened.
//
// Fetches the LIVE sitemap, diffs it against the last submitted state
// (scripts/.indexnow-state.json), and submits ONLY new or changed URLs to
// IndexNow (Bing/Yandex and other participating engines — Google does not
// use IndexNow). Retries each chunk with backoff and logs every response.
//
// Usage:
//   npm run submit-indexnow           # submit only new/changed URLs
//   npm run submit-indexnow -- --all  # force-submit every sitemap URL
//
// Run AFTER the new build is live. Pure Node — no app imports — so it runs
// against the deployed site, not localhost. The state file is gitignored:
// it records what THIS machine has already submitted.

import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "mehndidesignpics.com";
const BASE = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY = process.env.INDEXNOW_KEY || "8f3a9c2e7b1d4f6a0c5e8b2d7a4f1c9e";
const STATE_FILE = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  ".indexnow-state.json",
);
const FORCE_ALL = process.argv.includes("--all");
const MAX_ATTEMPTS = 3;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`);
  return res.text();
}

// Parse <url> entries into { loc, lastmod } pairs.
function extractEntries(xml) {
  const entries = [];
  const urlRe = /<url>([\s\S]*?)<\/url>/g;
  let m;
  while ((m = urlRe.exec(xml)) !== null) {
    const block = m[1];
    const loc = /<loc>([^<]+)<\/loc>/.exec(block)?.[1]?.trim().replace(/&amp;/g, "&");
    if (!loc) continue;
    const lastmod = /<lastmod>([^<]+)<\/lastmod>/.exec(block)?.[1]?.trim() ?? "";
    entries.push({ loc, lastmod });
  }
  return entries;
}

async function loadState() {
  if (!existsSync(STATE_FILE)) return {};
  try {
    return JSON.parse(await readFile(STATE_FILE, "utf8"));
  } catch {
    console.warn("State file unreadable — starting fresh.");
    return {};
  }
}

async function submitChunk(urlList, chunkNo) {
  const keyLocation = `${BASE}/${KEY}.txt`;
  let lastStatus = 0;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ host: HOST, key: KEY, keyLocation, urlList }),
      });
      lastStatus = res.status;
      // 200 = accepted, 202 = accepted & queued. Retry only on 429 / 5xx.
      if (res.status === 200 || res.status === 202) {
        console.log(`Chunk ${chunkNo}: HTTP ${res.status} (${urlList.length} urls, attempt ${attempt})`);
        return true;
      }
      console.warn(`Chunk ${chunkNo}: HTTP ${res.status} (attempt ${attempt})`);
      if (res.status !== 429 && res.status < 500) return false;
    } catch (err) {
      lastStatus = 0;
      console.warn(`Chunk ${chunkNo}: network error (attempt ${attempt}): ${err.message}`);
    }
    if (attempt < MAX_ATTEMPTS) await sleep(1000 * 3 ** (attempt - 1));
  }
  console.error(`Chunk ${chunkNo}: FAILED after ${MAX_ATTEMPTS} attempts (last status ${lastStatus})`);
  return false;
}

async function main() {
  console.log("Fetching live sitemap…");
  const xml = await fetchText(`${BASE}/sitemap.xml`);
  const entries = extractEntries(xml);
  console.log(`Sitemap contains ${entries.length} URLs.`);

  const state = await loadState();
  const previous = new Map(Object.entries(state));
  const current = new Map(entries.map((e) => [e.loc, e.lastmod]));

  const changed = entries.filter(
    (e) => FORCE_ALL || !previous.has(e.loc) || previous.get(e.loc) !== e.lastmod,
  );
  const removed = [...previous.keys()].filter((u) => !current.has(u));

  console.log(
    FORCE_ALL
      ? `--all: submitting all ${changed.length} URLs.`
      : `New/changed: ${changed.length} · unchanged: ${entries.length - changed.length} · removed since last run: ${removed.length}`,
  );
  if (removed.length > 0) {
    console.log("Removed URLs (engines will drop them on next crawl; resubmitting is unnecessary):");
    for (const u of removed.slice(0, 20)) console.log(`  - ${u}`);
    if (removed.length > 20) console.log(`  … and ${removed.length - 20} more`);
  }

  let submitted = 0;
  let failed = 0;
  const submittedEntries = [];
  for (let i = 0; i < changed.length; i += 10000) {
    const chunk = changed.slice(i, i + 10000);
    const ok = await submitChunk(chunk.map((e) => e.loc), i / 10000 + 1);
    if (ok) {
      submitted += chunk.length;
      submittedEntries.push(...chunk);
    } else {
      failed += chunk.length;
    }
    // Gentle pacing between chunks.
    if (i + 10000 < changed.length) await sleep(500);
  }

  // Persist state: mark successfully submitted URLs with their lastmod.
  // Failed URLs stay stale so the next run retries them.
  const newState = { ...state };
  for (const e of submittedEntries) newState[e.loc] = e.lastmod;
  for (const u of removed) delete newState[u];
  await writeFile(STATE_FILE, JSON.stringify(newState, null, 2));

  console.log(`Done. Submitted: ${submitted} · failed: ${failed} · state saved (${Object.keys(newState).length} URLs tracked).`);
  if (failed > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error("IndexNow submission failed:", err.message);
  process.exit(1);
});
