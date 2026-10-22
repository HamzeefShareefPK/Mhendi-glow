# AI Crawler Policy

This site is a free design-inspiration gallery. Its business model depends on
being discovered — in classic search results **and** in AI-generated answers
that cite and link back to source pages. The robots policy therefore
welcomes search and retrieval crawlers while keeping non-content endpoints
off-limits.

The policy is implemented in `src/app/robots.ts` and served at
`https://mehndidesignpics.com/robots.txt`.

## Allowed (explicit rule group)

| User agent | Powers |
|---|---|
| `GPTBot`, `OAI-SearchBot`, `ChatGPT-User` | ChatGPT search & browsing |
| `ClaudeBot`, `Claude-SearchBot`, `Claude-User` | Claude search & retrieval |
| `PerplexityBot`, `Perplexity-User` | Perplexity answers |
| `Google-Extended` | Gemini grounding / AI Overviews signals |
| `Applebot-Extended` | Apple AI features |
| `Meta-ExternalAgent` | Meta AI retrieval |
| `cohere-ai` | Cohere retrieval |

Rules for this group: `Allow: /` + `Disallow: /api/` — identical to the
general `*` rule, stated explicitly so the intent is unambiguous and future
edits to the general rule cannot accidentally block AI search.

Classic crawlers (`Googlebot`, `Googlebot-Image`, Bingbot via `*`) are
covered by the general rules.

## Blocked for everyone

- `/api/` — functional endpoints (IndexNow admin, image proxies), not content.
- `/_next/`, `/admin/`, `/private/` — framework internals / non-existent
  private areas (general rule only).

## Deliberate non-goals

- No `llms.txt` or AI-specific content files: they are not a substitute for
  crawlable HTML, correct canonicals and structured data, which this site
  already maintains.
- FAQ answers are rendered in server HTML (see
  `src/components/seo/FAQSection.tsx`) so answer engines can read every
  Q&A without executing click interactions.
