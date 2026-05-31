import { NextResponse } from "next/server";
import { designs, categories } from "@/data";
import { getAllDesigns } from "@/data/generator";

// Escape characters that are illegal in XML text/attribute content.
// Critically, the Unsplash image URLs contain "&" (e.g. ?w=600&q=85) which
// MUST be escaped as "&amp;" or Google rejects the entire sitemap as invalid.
function xml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const base = "https://mehndidesignpics.com";

  // Design pages: hardcoded designs + the first 20 generated per category,
  // deduplicated by slug. Each entry exposes its image to Google Images.
  const seen = new Set<string>();
  const designEntries: string[] = [];

  const pushDesign = (
    slug: string,
    image: string,
    title: string,
    caption: string,
  ) => {
    if (seen.has(slug)) return;
    seen.add(slug);
    designEntries.push(`
  <url>
    <loc>${xml(`${base}/design/${slug}`)}</loc>
    <image:image>
      <image:loc>${xml(image)}</image:loc>
      <image:title>${xml(title)}</image:title>
      <image:caption>${xml(caption)}</image:caption>
      <image:geo_location>Pakistan</image:geo_location>
      <image:license>${xml(`${base}/terms`)}</image:license>
    </image:image>
  </url>`);
  };

  designs.forEach((d) => pushDesign(d.slug, d.image, d.title, d.description));
  getAllDesigns(60).forEach((d) => pushDesign(d.slug, d.image, d.title, d.description));

  const categoryUrls = categories
    .map(
      (c) => `
  <url>
    <loc>${xml(`${base}/${c.slug}`)}</loc>
    <image:image>
      <image:loc>${xml(c.image)}</image:loc>
      <image:title>${xml(`${c.name} Mehndi Designs 2026`)}</image:title>
      <image:caption>${xml(c.description)}</image:caption>
    </image:image>
  </url>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${designEntries.join("\n")}
${categoryUrls}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
