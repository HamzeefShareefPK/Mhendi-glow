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
// IndexNow 10,000-URL limit, returns the per-chunk HTTP statuses.
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
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
      });
      statuses.push(res.status);
    } catch {
      statuses.push(0); // network error — best-effort, keep going
    }
  }
  return statuses;
}
