/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Image optimization ────────────────────────────────
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
    formats: ["image/avif", "image/webp"],   // Serve WebP/AVIF automatically
    minimumCacheTTL: 60 * 60 * 24 * 30,     // Cache images 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ── Compression ───────────────────────────────────────
  compress: true,

  // ── Headers: security + SEO + performance ─────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",     value: "nosniff" },
          { key: "X-Frame-Options",             value: "DENY" },
          { key: "X-XSS-Protection",            value: "1; mode=block" },
          { key: "Referrer-Policy",             value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",          value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // ── Redirects for SEO ─────────────────────────────────
  async redirects() {
    return [
      // Redirect www → non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mehndiglow.com" }],
        destination: "https://mehndiglow.com/:path*",
        permanent: true,
      },
    ];
  },

  // ── Poweredby header remove ───────────────────────────
  poweredByHeader: false,

  // ── Trailing slash canonical ──────────────────────────
  trailingSlash: false,
};

module.exports = nextConfig;
