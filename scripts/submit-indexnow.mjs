// Post-deploy IndexNow submitter.
//
// Fetches the LIVE sitemap, extracts all <loc> URLs, and submits them to
// IndexNow (Bing/Yandex). Run AFTER the new build is live, e.g. via a deploy
// hook or `npm run submit-indexnow`. Pure Node — no app imports — so it runs
// against the deployed site, not localhost.

const HOST = "mehndidesignpics.com";
const BASE = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY = process.env.INDEXNOW_KEY || "8f3a9c2e7b1d4f6a0c5e8b2d7a4f1c9e";

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`);
  return res.text();
}

function extractLocs(xml) {
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    locs.push(m[1].trim().replace(/&amp;/g, "&"));
  }
  return locs;
}

async function main() {
  console.log("Fetching sitemap…");
  const xml = await fetchText(`${BASE}/sitemap.xml`);
  const urls = Array.from(new Set(extractLocs(xml))).filter((u) => u.startsWith("http"));
  console.log(`Found ${urls.length} URLs. Submitting to IndexNow…`);

  const keyLocation = `${BASE}/${KEY}.txt`;
  for (let i = 0; i < urls.length; i += 10000) {
    const urlList = urls.slice(i, i + 10000);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation, urlList }),
    });
    console.log(`Chunk ${i / 10000 + 1}: HTTP ${res.status} (${urlList.length} urls)`);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error("IndexNow submission failed:", err.message);
  process.exit(1);
});
