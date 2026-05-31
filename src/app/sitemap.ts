import { MetadataRoute } from "next";
import { designs, blogPosts, categories } from "@/data";
import { getAllDesigns } from "@/data/generator";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mehndidesignpics.com";
  const now  = new Date();

  // ── 1. Static pages ────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                        lastModified: now, changeFrequency: "daily",   priority: 1.0 },
    { url: `${base}/blog`,              lastModified: now, changeFrequency: "daily",   priority: 0.9 },
    { url: `${base}/categories`,        lastModified: now, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${base}/ai-generator`,      lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/search`,            lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/keywords`,          lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/about`,             lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`,           lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy-policy`,    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/disclaimer`,        lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,             lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/dmca`,              lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  // ── 2. Category pages (slugs already include -design suffix) ──
  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url:             `${base}/${c.slug}`,
    lastModified:    now,
    changeFrequency: "weekly" as const,
    priority:        0.85,
  }));

  // ── 3. Design pages (hardcoded + generated, deduplicated by slug) ──
  // Every generated design (60 per category) is unique and prerendered, so we
  // surface all of them here. Keep this count in sync with DESIGNS_PER_CATEGORY
  // in [category]/page.tsx and LOOKUP_COUNT in design/[slug]/page.tsx.
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

  // 3b. Generated designs (skip any slug already added by the hardcoded set)
  for (const d of getAllDesigns(60)) {
    if (seenDesignSlugs.has(d.slug)) continue;
    seenDesignSlugs.add(d.slug);
    designPages.push({
      url:             `${base}/design/${d.slug}`,
      lastModified:    now,
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
