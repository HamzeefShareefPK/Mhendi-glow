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
    ],
    sitemap: [
      "https://mehndidesignpics.com/sitemap.xml",
      "https://mehndidesignpics.com/sitemap-images.xml",
    ],
    host: "https://mehndidesignpics.com",
  };
}
