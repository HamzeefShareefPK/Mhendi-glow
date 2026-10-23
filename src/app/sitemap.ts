import { MetadataRoute } from "next";
import { designs, blogPosts, categories } from "@/data";
import { getAllDesigns } from "@/data/generator";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mehndidesignpics.com";
  // Stable lastModified for content that doesn't change every build. Using a
  // fixed date (rather than the deploy time) stops crawlers from learning to
  // ignore our lastmod signal because it changes on every deploy. The only
  // deploy-time value previously used was for the home/blog/categories hubs;
  // the blog hub now truthfully carries the newest post's date instead.
  const stable = new Date("2026-05-20");
  const latestPostDate = new Date(
    Math.max(...blogPosts.map((p) => new Date(p.publishedAt).getTime())),
  );

  // ── 1. Static pages ────────────────────────────────
  // NOTE: /search is intentionally NOT listed here — search results are
  // noindex (see src/app/search/layout.tsx), and noindex URLs must not be
  // submitted in a sitemap. Legal/utility pages use the stable date: they do
  // not change on every deploy, so a fresh lastmod would be a false signal.
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                        lastModified: stable, changeFrequency: "daily",   priority: 1.0 },
    { url: `${base}/blog`,              lastModified: latestPostDate, changeFrequency: "daily",   priority: 0.9 },
    { url: `${base}/categories`,        lastModified: stable, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${base}/ai-generator`,      lastModified: stable, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/keywords`,          lastModified: stable, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/sitemap-page`,      lastModified: stable, changeFrequency: "weekly",  priority: 0.4 },
    { url: `${base}/about`,             lastModified: stable, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`,           lastModified: stable, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy-policy`,    lastModified: stable, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/disclaimer`,        lastModified: stable, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,             lastModified: stable, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/dmca`,              lastModified: stable, changeFrequency: "yearly",  priority: 0.3 },
  ];

  // ── 2. Category pages (slugs already include -design suffix) ──
  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url:             `${base}/${c.slug}`,
    lastModified:    c.updatedAt ? new Date(c.updatedAt) : stable,
    changeFrequency: "weekly" as const,
    priority:        0.85,
  }));

  // ── 3. Design pages (hardcoded + generated, deduplicated by slug) ──
  // Every published design (20 generated per category — one per unique
  // title) is prerendered, so we surface all of them here. Keep this count
  // in sync with DESIGNS_PER_CATEGORY in [category]/page.tsx and
  // LOOKUP_COUNT in design/[slug]/page.tsx.
  const seenDesignSlugs = new Set<string>();
  const designPages: MetadataRoute.Sitemap = [];

  // 3a. Hardcoded designs first (higher priority, real createdAt dates)
  for (const d of designs) {
    if (seenDesignSlugs.has(d.slug)) continue;
    seenDesignSlugs.add(d.slug);
    designPages.push({
      url:             `${base}/design/${d.slug}`,
      lastModified:    new Date(d.createdAt),
      changeFrequency: "monthly",
      priority:        d.featured ? 0.8 : 0.7,
    });
  }

  // 3b. Generated designs (skip any slug already added by the hardcoded set).
  // No lastModified: generated designs have no truthful per-design date
  // (their createdAt is a batch constant), and asserting one bulk date for
  // a thousand URLs is exactly the kind of false signal that teaches
  // crawlers to ignore lastmod. Omitting it is spec-valid.
  for (const d of getAllDesigns(20)) {
    if (seenDesignSlugs.has(d.slug)) continue;
    seenDesignSlugs.add(d.slug);
    designPages.push({
      url:             `${base}/design/${d.slug}`,
      changeFrequency: "monthly",
      priority:        0.65,
    });
  }

  // ── 4. Blog post pages ─────────────────────────────
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url:             `${base}/blog/${p.slug}`,
    lastModified:    new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority:        0.75,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...designPages,
    ...blogPages,
  ];
}
