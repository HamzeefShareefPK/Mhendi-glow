import { MetadataRoute } from "next";
import { designs, blogPosts, categories } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mehndiglow.com";
  const now  = new Date();

  // ── 1. Static pages ────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                      lastModified: now, changeFrequency: "daily",   priority: 1.0 },
    { url: `${base}/blog`,            lastModified: now, changeFrequency: "daily",   priority: 0.9 },
    { url: `${base}/categories`,      lastModified: now, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${base}/search`,          lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/about`,           lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`,         lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy-policy`,  lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/disclaimer`,      lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,           lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/dmca`,            lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  // ── 2. Category pages ──────────────────────────────
  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url:             `${base}/${c.slug}`,
    lastModified:    now,
    changeFrequency: "weekly" as const,
    priority:        0.85,
  }));

  // ── 3. Individual design pages ─────────────────────
  const designPages: MetadataRoute.Sitemap = designs.map((d) => ({
    url:             `${base}/design/${d.slug}`,
    lastModified:    new Date(d.createdAt),
    changeFrequency: "monthly" as const,
    priority:        d.featured ? 0.8 : 0.7,
  }));

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
