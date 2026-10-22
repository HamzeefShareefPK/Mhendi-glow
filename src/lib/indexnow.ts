// IndexNow client — instantly notifies Bing, Yandex and other participating
// engines when URLs are added or updated. (Google does NOT use IndexNow; keep
// submitting sitemaps in Google Search Console separately.)
//
// The key must also be served as a static file at:
//   https://mehndidesignpics.com/<INDEXNOW_KEY>.txt   (contents === the key)
// See public/8f3a9c2e7b1d4f6a0c5e8b2d7a4f1c9e.txt

const HOST = "mehndidesignpics.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const DEFAULT_KEY = "8f3a9c2e7b1d4f6a0c5e8b2d7a4f1c9e";

export function indexNowKey(): string {
  return process.env.INDEXNOW_KEY || DEFAULT_KEY;
}

// Submit a batch of absolute URLs. Best-effort: never throws, chunks to the
// IndexNow 10,000-URL limit, retries each chunk up to 3 times with backoff
// on network errors / 429 / 5xx, logs per-chunk outcomes, and returns the
// per-chunk HTTP statuses (0 = network failure after retries).
export async function submitUrls(
  urls: string[],
  key: string = indexNowKey(),
): Promise<number[]> {
  const unique = Array.from(new Set(urls)).filter((u) => u.startsWith("http"));
  if (unique.length === 0) return [];

  const keyLocation = `https://${HOST}/${key}.txt`;
  const statuses: number[] = [];

  for (let i = 0; i < unique.length; i += 10000) {
    const urlList = unique.slice(i, i + 10000);
    let status = 0;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
        });
        status = res.status;
        if (status === 200 || status === 202) break;
        if (status !== 429 && status < 500) break; // non-retryable
      } catch {
        status = 0; // network error — retry below
      }
      if (attempt < 3) await new Promise((r) => setTimeout(r, 1000 * 3 ** (attempt - 1)));
    }
    console.info(`[indexnow] chunk ${i / 10000 + 1}: ${urlList.length} urls -> HTTP ${status}`);
    statuses.push(status);
  }
  return statuses;
}
