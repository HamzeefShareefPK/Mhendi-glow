import { NextResponse } from "next/server";
import { designs, categories } from "@/data";

export async function GET() {
  const base = "https://mehndiglow.com";

  const designUrls = designs.map((d) => `
  <url>
    <loc>${base}/design/${d.slug}</loc>
    <image:image>
      <image:loc>${d.image}</image:loc>
      <image:title>${d.title}</image:title>
      <image:caption>${d.description}</image:caption>
      <image:geo_location>Pakistan</image:geo_location>
      <image:license>${base}/terms</image:license>
    </image:image>
  </url>`).join("\n");

  const categoryUrls = categories.map((c) => `
  <url>
    <loc>${base}/${c.slug}</loc>
    <image:image>
      <image:loc>${c.image}</image:loc>
      <image:title>${c.name} Mehndi Designs 2024</image:title>
      <image:caption>${c.description}</image:caption>
    </image:image>
  </url>`).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${designUrls}
${categoryUrls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
