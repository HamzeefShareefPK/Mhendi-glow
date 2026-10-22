import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      // ── AI search & retrieval crawlers ─────────────────────────────
      // Explicitly welcomed: these power AI search answers and citations
      // (ChatGPT Search, Perplexity, Claude, Gemini grounding, Copilot),
      // which send referral traffic to the site. Same access as the
      // general rule — public content yes, API endpoints no.
      // Policy rationale: see AI_CRAWLERS.md at the repo root.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "Meta-ExternalAgent",
          "cohere-ai",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: [
      "https://mehndidesignpics.com/sitemap.xml",
      "https://mehndidesignpics.com/sitemap-images.xml",
    ],
    host: "https://mehndidesignpics.com",
  };
}
