// Fetch distinct Unsplash photos per mehndi category and write them to
// src/data/unsplashPhotos.json. The generator uses that file (when populated)
// so every category shows its own real, varied images instead of the small
// shared stock pool.
//
// Usage:
//   1. Get a free Unsplash Access Key: https://unsplash.com/developers
//   2. Set it:  $env:UNSPLASH_ACCESS_KEY="your_key"   (PowerShell)
//   3. Run:     npm run fetch-unsplash
//   4. Rebuild: npm run build   (and commit src/data/unsplashPhotos.json)
//
// Free "demo" keys allow 50 requests/hour. This makes ~29 requests (one per
// category, 30 photos each). If you hit a limit, wait an hour and re-run; it
// merges into the existing JSON.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "src", "data", "unsplashPhotos.json");

const KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!KEY) {
  console.error("Missing UNSPLASH_ACCESS_KEY. Get a free key at https://unsplash.com/developers");
  process.exit(1);
}

// Per-category search queries (tuned so each style returns different photos).
const QUERIES = {
  "bridal-mehndi-design": "bridal mehndi henna hands",
  "arabic-mehndi-design": "arabic mehndi henna",
  "pakistani-mehndi-design": "pakistani mehndi henna",
  "eid-mehndi-design": "eid mehndi henna",
  "finger-mehndi-design": "finger mehndi henna",
  "feet-mehndi-design": "feet henna mehndi",
  "minimal-mehndi-design": "minimal henna tattoo",
  "kids-mehndi-design": "kids henna hand",
  "back-hand-mehndi-design": "henna back hand",
  "indian-mehndi-design": "indian mehndi henna",
  "stylish-mehndi-design": "stylish henna design",
  "front-hand-mehndi-design": "henna front hand",
  "mehndi-tattoo-design": "henna tattoo",
  "floral-mehndi-design": "floral henna flower",
  "circle-mehndi-design": "mandala henna circle",
  "gol-tikki-mehndi-design": "henna medallion hand",
  "easy-mehndi-design": "simple henna design",
  "engagement-mehndi-design": "engagement henna ring",
  "peacock-mehndi-design": "peacock henna mehndi",
  "mandala-mehndi-design": "mandala henna hand",
  "dulhan-mehndi-design": "bridal henna full hand",
  "jewellery-mehndi-design": "hand jewellery henna",
  "half-hand-mehndi-design": "henna half hand arabic",
  "wrist-mehndi-design": "wrist henna bracelet",
  "rajasthani-mehndi-design": "rajasthani henna bridal",
  "moroccan-mehndi-design": "moroccan henna geometric",
  "jaal-mehndi-design": "henna net pattern hand",
  "khafif-mehndi-design": "light henna design hand",
  "shaded-mehndi-design": "shaded henna rose hand",
};

const PER_PAGE = 30;

async function fetchCategory(query) {
  const params = new URLSearchParams({
    query,
    per_page: String(PER_PAGE),
    page: "1",
    orientation: "portrait",
    content_filter: "high",
  });
  const res = await fetch(`https://api.unsplash.com/search/photos?${params}`, {
    headers: { Authorization: `Client-ID ${KEY}` },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  const data = await res.json();
  return (data.results || []).map((p) => `${p.urls.raw}&w=600&q=80&fit=crop`);
}

async function main() {
  const existing = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
  const out = { ...existing };
  let ok = 0;
  for (const [slug, query] of Object.entries(QUERIES)) {
    try {
      const urls = await fetchCategory(query);
      if (urls.length) {
        out[slug] = urls;
        ok++;
        console.log(`${slug}: ${urls.length} photos`);
      } else {
        console.warn(`${slug}: 0 photos (kept existing)`);
      }
    } catch (e) {
      console.warn(`${slug}: failed (${e.message}) — kept existing`);
    }
  }
  writeFileSync(OUT, JSON.stringify(out, null, 0) + "\n");
  console.log(`\nWrote ${OUT} (${ok}/${Object.keys(QUERIES).length} categories updated).`);
}

main().catch((e) => { console.error(e); process.exit(1); });
