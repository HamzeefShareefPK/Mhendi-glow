import { MetadataRoute } from "next";
import { designs, blogPosts, categories } from "@/data";
import { getAllDesigns, generateCategoryDesigns } from "@/data/generator";

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

  // ── 3. Hardcoded design pages ──────────────────────
  const hardcodedDesignPages: MetadataRoute.Sitemap = designs.map((d) => ({
    url:             `${base}/design/${d.slug}`,
    lastModified:    new Date(d.createdAt),
    changeFrequency: "monthly" as const,
    priority:        d.featured ? 0.8 : 0.7,
  }));

  // ── 4. Generated design pages (20 per category × 13 = 260) ───
  const generatedDesigns = getAllDesigns(20);
  const generatedDesignPages: MetadataRoute.Sitemap = generatedDesigns.map((d) => ({
    url:             `${base}/design/${d.slug}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.65,
  }));

  // ── 5. Blog post pages (all 91 posts) ─────────────
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url:             `${base}/blog/${p.slug}`,
    lastModified:    new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority:        0.75,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...hardcodedDesignPages,
    ...generatedDesignPages,
    ...blogPages,
  ];
}
