// Site-wide SEO QA harness.
//
// Crawls every URL in the sitemap on a running production server and checks
// the invariants both SEO master prompts require:
//   - every sitemap URL returns HTTP 200
//   - every sitemap URL has a self-referencing canonical (production origin)
//   - no sitemap URL is noindexed; /search stays noindex AND out of the sitemap
//   - page titles are unique; exactly one <h1> per page
//   - zero orphan pages: every sitemap URL has >= 1 inbound internal link
//     from another crawled page
//   - unknown design/category/blog slugs return a genuine 404
//   - robots.txt references both sitemaps and the AI-crawler policy group
//   - the IndexNow key-verification file is served and matches the key
//   - sitemap-images.xml is valid and carries no geo_location assertions
//   - every blog post renders its OWN FAQ set (>= 3 questions, no question
//     repeated on another post — guards the per-post FAQ data in
//     src/data/blogFaqs.ts against shared-boilerplate regressions)
//   - category / design / blog templates emit page-level twitter:card tags
//     whose title matches the page's own og:title (not the root default)
//   - design-page deduplication guards: no numbered-duplicate titles
//     ("Title 2" / "Title 3"), every design page has substantive visible
//     text and renders its category FAQ schema, lead photos are not
//     mass-reused, no generated page asserts the 2026-01-01 batch date,
//     and the homepage HTML stays under the weight ceiling
//
// Usage:
//   npm run build && npm run start        (terminal 1, port 3107 below)
//   QA_BASE=http://localhost:3107 npm run qa:seo
// Writes a per-URL CSV report to QA_OUT (default ./qa-report.csv) and exits
// non-zero if any check fails.

import { writeFile } from "node:fs/promises";

const BASE = process.env.QA_BASE || "http://localhost:3107";
const ORIGIN = "https://mehndidesignpics.com";
const OUT = process.env.QA_OUT || "./qa-report.csv";
const INDEXNOW_KEY = "8f3a9c2e7b1d4f6a0c5e8b2d7a4f1c9e";
const CONCURRENCY = 12;

const checks = [];
function check(name, ok, detail = "") {
  checks.push({ name, ok, detail });
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? ` — ${detail}` : ""}`);
}

async function fetchText(url) {
  const res = await fetch(url);
  return { status: res.status, text: await res.text() };
}

function pathOf(u) {
  const p = new URL(u).pathname;
  return p === "" ? "/" : p;
}

async function mapPool(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx], idx);
      }
    }),
  );
  return out;
}

async function main() {
  // ── robots.txt ────────────────────────────────────────────────
  const robots = await fetchText(`${BASE}/robots.txt`);
  check("robots.txt 200", robots.status === 200);
  check("robots.txt references sitemap.xml", robots.text.includes(`${ORIGIN}/sitemap.xml`));
  check("robots.txt references sitemap-images.xml", robots.text.includes(`${ORIGIN}/sitemap-images.xml`));
  check("robots.txt has AI-crawler policy (GPTBot)", robots.text.includes("GPTBot"));

  // ── Sitemap inventory ─────────────────────────────────────────
  const sm = await fetchText(`${BASE}/sitemap.xml`);
  check("sitemap.xml 200", sm.status === 200);
  const sitemapUrls = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const sitemapPaths = new Set(sitemapUrls.map(pathOf));
  console.log(`Sitemap URLs: ${sitemapUrls.length}`);
  check("/search is NOT in sitemap", !sitemapPaths.has("/search"));

  // ── Crawl every sitemap URL ───────────────────────────────────
  const rows = await mapPool(sitemapUrls, CONCURRENCY, async (url) => {
    const path = pathOf(url);
    const { status, text } = await fetchText(`${BASE}${path}`);
    const canonical =
      /<link[^>]*rel="canonical"[^>]*href="([^"]+)"/.exec(text)?.[1] ??
      /<link[^>]*href="([^"]+)"[^>]*rel="canonical"/.exec(text)?.[1] ??
      "";
    const robotsMeta = /<meta[^>]*name="robots"[^>]*content="([^"]+)"/.exec(text)?.[1] ?? "";
    const title = /<title>([^<]*)<\/title>/.exec(text)?.[1] ?? "";
    const h1Count = (text.match(/<h1[\s>]/g) ?? []).length;
    const links = new Set(
      [...text.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1].split("?")[0]),
    );
    const metaContent = (attr, name) =>
      new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"`).exec(text)?.[1] ??
      new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${attr}="${name}"`).exec(text)?.[1] ??
      "";
    const twitterTitle = metaContent("name", "twitter:title");
    const twitterImage = metaContent("name", "twitter:image");
    const ogTitle = metaContent("property", "og:title");
    const ogImage = metaContent("property", "og:image");
    // Visible-text word count (scripts/styles stripped) — the thin-content
    // regression guard for design pages.
    const visibleText = text
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const visibleWords = visibleText ? visibleText.split(" ").length : 0;
    const hasFaqSchema = text.includes('"FAQPage"');
    // The generated-design batch date must never be asserted as a per-page
    // publication date (visible date line or schema) — false freshness.
    const hasBatchDate = text.includes("January 1, 2026") || text.includes('"datePublished":"2026-01-01"') || text.includes('"datePublished": "2026-01-01"');
    // FAQPage questions from JSON-LD (blog posts): used to prove no two
    // posts share a generic FAQ block.
    let faqQuestions = [];
    if (path.startsWith("/blog/")) {
      for (const m of text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
        try {
          const parsed = JSON.parse(m[1]);
          for (const node of Array.isArray(parsed) ? parsed : [parsed]) {
            if (node && node["@type"] === "FAQPage" && Array.isArray(node.mainEntity)) {
              faqQuestions = node.mainEntity.map((q) => q.name).filter(Boolean);
            }
          }
        } catch { /* invalid JSON-LD is caught by hasJsonLd consumers elsewhere */ }
      }
    }
    return { url, path, status, canonical, robotsMeta, title, h1Count, links, hasJsonLd: text.includes("application/ld+json"), twitterTitle, twitterImage, ogTitle, faqQuestions, ogImage, visibleWords, hasFaqSchema, hasBatchDate, rawBytes: text.length };
  });

  const non200 = rows.filter((r) => r.status !== 200);
  check("all sitemap URLs return 200", non200.length === 0, non200.slice(0, 5).map((r) => `${r.path}:${r.status}`).join(", "));

  const badCanonical = rows.filter((r) => !r.canonical || pathOf(r.canonical) !== r.path);
  check("all sitemap URLs self-canonical", badCanonical.length === 0, badCanonical.slice(0, 5).map((r) => `${r.path} -> ${r.canonical || "(none)"}`).join(", "));

  const noindexed = rows.filter((r) => /noindex/i.test(r.robotsMeta));
  check("no sitemap URL is noindexed", noindexed.length === 0, noindexed.slice(0, 5).map((r) => r.path).join(", "));

  const titleMap = new Map();
  for (const r of rows) titleMap.set(r.title, (titleMap.get(r.title) ?? 0) + 1);
  const dupTitles = [...titleMap.entries()].filter(([, n]) => n > 1);
  check("page titles unique", dupTitles.length === 0, dupTitles.slice(0, 5).map(([t, n]) => `"${t}" x${n}`).join(", "));

  const badH1 = rows.filter((r) => r.h1Count !== 1);
  check("exactly one H1 per page", badH1.length === 0, badH1.slice(0, 5).map((r) => `${r.path}:${r.h1Count}`).join(", "));

  // ── Orphan check (inbound links from other crawled pages) ────
  const inbound = new Map([...sitemapPaths].map((p) => [p, 0]));
  for (const r of rows) {
    for (const href of r.links) {
      const hp = href.endsWith("/") && href.length > 1 ? href.slice(0, -1) : href;
      for (const cand of [href, hp]) {
        if (inbound.has(cand) && cand !== r.path) {
          inbound.set(cand, inbound.get(cand) + 1);
          break;
        }
      }
    }
  }
  const orphans = rows.filter((r) => r.path !== "/" && (inbound.get(r.path) ?? 0) === 0);
  check("zero orphan sitemap URLs", orphans.length === 0, orphans.slice(0, 10).map((r) => r.path).join(", "));

  // ── Blog FAQ uniqueness (per-post FAQs, no shared boilerplate) ──
  const blogRows = rows.filter((r) => r.path.startsWith("/blog/"));
  const postsWithoutFaq = blogRows.filter((r) => r.faqQuestions.length < 3);
  check("every blog post renders >= 3 FAQ questions", postsWithoutFaq.length === 0,
    postsWithoutFaq.slice(0, 5).map((r) => `${r.path}:${r.faqQuestions.length}`).join(", "));
  const questionOwners = new Map();
  for (const r of blogRows) {
    for (const q of r.faqQuestions) {
      const key = q.toLowerCase();
      if (!questionOwners.has(key)) questionOwners.set(key, []);
      questionOwners.get(key).push(r.path);
    }
  }
  const repeatedQuestions = [...questionOwners.entries()].filter(([, owners]) => owners.length > 1);
  check("no FAQ question repeats across blog posts", repeatedQuestions.length === 0,
    repeatedQuestions.slice(0, 5).map(([q, owners]) => `"${q}" on ${owners.join(", ")}`).join("; "));

  // ── Page-level Twitter cards (category / design / blog) ─────────
  const GENERIC_TWITTER_TITLE = "MehndiDesignPics — Beautiful Mehndi Designs";
  const STATIC_SINGLE_SEGMENT = new Set(["/about", "/contact", "/blog", "/categories", "/keywords", "/terms", "/dmca", "/disclaimer", "/privacy-policy", "/ai-generator", "/sitemap-page", "/search"]);
  const categorySample = rows.find((r) => r.path.split("/").filter(Boolean).length === 1 && !STATIC_SINGLE_SEGMENT.has(r.path));
  const designSample = rows.find((r) => r.path.startsWith("/design/"));
  const blogSample = blogRows[0];
  for (const [kind, sample] of [["category", categorySample], ["design", designSample], ["blog", blogSample]]) {
    check(`${kind} page has page-level twitter card`,
      !!sample && sample.twitterTitle.length > 0 && sample.twitterTitle !== GENERIC_TWITTER_TITLE && sample.twitterTitle === sample.ogTitle && sample.twitterImage.length > 0,
      sample ? `${sample.path} twitter:title="${sample.twitterTitle}"` : "no sample row found");
  }

  // ── Design-page deduplication & depth guards ────────────────────
  // Regression guards for the thin/near-duplicate fix: one published page
  // per unique title (no "Title 2" / "Title 3" republications), real
  // content depth on every design page, category FAQs present, lead
  // images not mass-reused, and no fake batch publication dates.
  const designRows = rows.filter((r) => r.path.startsWith("/design/"));
  check("design page count is the deduplicated set (<= 1100)",
    designRows.length <= 1100, `${designRows.length} design pages in sitemap`);

  const numberedTitles = designRows.filter((r) => {
    const base = r.title.replace(/ — Free Download.*$/, "").replace(/ \([^)]*\)$/, "");
    return / \d+$/.test(base) && !/ 2026$/.test(base);
  });
  check("no design page has a numbered-duplicate title",
    numberedTitles.length === 0, numberedTitles.slice(0, 5).map((r) => r.title).join(", "));

  const thinDesigns = designRows.filter((r) => r.visibleWords < 700);
  check("every design page carries substantive visible text (>= 700 words)",
    thinDesigns.length === 0,
    thinDesigns.slice(0, 5).map((r) => `${r.path}:${r.visibleWords}w`).join(", ") ||
      (designRows.length ? `min ${Math.min(...designRows.map((r) => r.visibleWords))}w` : "no design rows"));

  const designsNoFaq = designRows.filter((r) => !r.hasFaqSchema);
  check("every design page renders its category FAQ schema",
    designsNoFaq.length === 0, designsNoFaq.slice(0, 5).map((r) => r.path).join(", "));

  const batchDated = designRows.filter((r) => r.hasBatchDate);
  check("no design page asserts the generated batch date (2026-01-01)",
    batchDated.length === 0, batchDated.slice(0, 5).map((r) => r.path).join(", "));

  const photoUse = new Map();
  for (const r of designRows) {
    const m = /photo-(\d+-[a-f0-9]+)/.exec(r.ogImage ?? "");
    if (m) photoUse.set(m[1], (photoUse.get(m[1]) ?? 0) + 1);
  }
  const worstPhoto = Math.max(0, ...photoUse.values());
  check("design lead photos are not mass-reused (>= 40 distinct, worst <= 8% of pages)",
    photoUse.size >= 40 && worstPhoto <= Math.max(10, designRows.length * 0.08),
    `${photoUse.size} distinct photos; worst used ${worstPhoto}x of ${designRows.length}`);

  // ── Homepage weight guard ────────────────────────────────────────
  const homeRow = rows.find((r) => r.path === "/");
  check("homepage HTML stays lean (< 600 KB)",
    !!homeRow && homeRow.rawBytes < 600_000,
    homeRow ? `${(homeRow.rawBytes / 1024).toFixed(0)} KB` : "homepage row missing");

  // ── /search behaviour ─────────────────────────────────────────
  const search = await fetchText(`${BASE}/search`);
  const searchRobots = /<meta[^>]*name="robots"[^>]*content="([^"]+)"/.exec(search.text)?.[1] ?? "";
  check("/search is noindex,follow", /noindex/i.test(searchRobots), searchRobots);

  // ── Invalid routes -> genuine 404 ─────────────────────────────
  for (const p of ["/design/zz-no-such-design", "/zz-no-such-category", "/blog/zz-no-such-post"]) {
    const r = await fetchText(`${BASE}${p}`);
    check(`404 for ${p}`, r.status === 404, `got ${r.status}`);
  }

  // ── IndexNow key file ─────────────────────────────────────────
  const key = await fetchText(`${BASE}/${INDEXNOW_KEY}.txt`);
  check("IndexNow key file served + matches key", key.status === 200 && key.text.trim() === INDEXNOW_KEY);

  // ── Image sitemap ─────────────────────────────────────────────
  const img = await fetchText(`${BASE}/sitemap-images.xml`);
  check("sitemap-images.xml 200 with image entries", img.status === 200 && img.text.includes("<image:image"));
  check("sitemap-images.xml has no geo_location assertions", !img.text.includes("geo_location"));

  // ── Report ────────────────────────────────────────────────────
  const csv = [
    "url,path,status,canonical,title,h1,inbound_links,jsonld,issues",
    ...rows.map((r) => {
      const issues = [];
      if (r.status !== 200) issues.push("status");
      if (!r.canonical || pathOf(r.canonical) !== r.path) issues.push("canonical");
      if (/noindex/i.test(r.robotsMeta)) issues.push("noindex");
      if (r.h1Count !== 1) issues.push("h1");
      if (r.path !== "/" && (inbound.get(r.path) ?? 0) === 0) issues.push("orphan");
      const esc = (s) => `"${String(s).replace(/"/g, '""')}"`;
      return [esc(r.url), esc(r.path), r.status, esc(r.canonical), esc(r.title), r.h1Count, inbound.get(r.path) ?? 0, r.hasJsonLd, esc(issues.join(";"))].join(",");
    }),
  ].join("\n");
  await writeFile(OUT, csv);

  const failed = checks.filter((c) => !c.ok);
  console.log(`\nQA: ${checks.length - failed.length}/${checks.length} checks passed, ${rows.length} CSV rows -> ${OUT}`);
  if (failed.length > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error("QA harness failed:", err);
  process.exit(1);
});
