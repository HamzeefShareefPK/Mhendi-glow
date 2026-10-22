# IndexNow — Production Runbook

IndexNow notifies participating search engines (Bing, Yandex, and others)
when URLs are published or updated. **Google does not use IndexNow** — for
Google, keep the XML sitemaps healthy and submitted in Search Console.

Acceptance (HTTP 200/202) means the notification was received. It is **not**
proof that any engine has indexed the URL.

## Configuration

| Item | Value |
|---|---|
| Host | `mehndidesignpics.com` |
| Key file | `public/8f3a9c2e7b1d4f6a0c5e8b2d7a4f1c9e.txt` (contents = the key; served at `https://mehndidesignpics.com/8f3a9c2e7b1d4f6a0c5e8b2d7a4f1c9e.txt`) |
| `INDEXNOW_KEY` env | Optional override. The code default in `src/lib/indexnow.ts` and `scripts/submit-indexnow.mjs` matches the public key file. If the key is ever rotated, update the file name, the file contents, and the env var together. |
| `INDEXNOW_ADMIN_SECRET` env | **Required** for the admin route below. Must be set in the Vercel project environment (Production). Its value is not stored in this repo. Status from code alone: UNVERIFIED — check Vercel → Project → Settings → Environment Variables. |

## Submission paths

1. **Post-deploy script (primary):**
   ```bash
   npm run submit-indexnow           # submits only new/changed URLs
   npm run submit-indexnow -- --all  # force-submit every sitemap URL
   ```
   The script fetches the live sitemap, diffs it against
   `scripts/.indexnow-state.json` (gitignored, per-machine), submits only
   new or changed URLs in chunks of ≤10,000, retries each chunk up to 3
   times with backoff, and logs every HTTP status. Failed URLs are not
   marked submitted, so the next run retries them. The very first run
   submits the full sitemap once to establish the state baseline.

2. **Admin API route:** `POST /api/indexnow` with header
   `x-indexnow-secret: <INDEXNOW_ADMIN_SECRET>` and JSON body
   `{ "urls": ["https://mehndidesignpics.com/...", ...] }`.
   Uses `src/lib/indexnow.ts` (same chunking + retry + logging).
   The route lives under `/api/`, which robots.txt disallows.

## Rules

- Submit only canonical URLs that belong to this host and return 200.
- Never submit `/search` (noindex) — it is not in the sitemap, so the
  script never sees it.
- After a deploy that changes many URLs, a normal run is enough; the
  lastmod diff decides what is "changed".
