import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Lato } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Header    from "@/components/layout/Header";
import Footer    from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import WebVitals from "@/components/seo/WebVitals";

// Self-hosted via next/font — eliminates the render-blocking Google Fonts
// @import and serves font files from our own origin (faster LCP, no FOUT).
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: true,
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lato",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-QP3L90D7F1";

export const viewport: Viewport = {
  themeColor: "#C8946A",
};

export const metadata: Metadata = {
  title: {
    default:  "MehndiDesignPics — Discover Beautiful Mehndi Designs 2026",
    template: "%s | MehndiDesignPics",
  },
  description:
    "Explore 1000+ mehndi designs — bridal, Arabic, Pakistani, Eid, minimal and more. Your daily dose of mehndi inspiration.",
  keywords: [
    "mehndi designs", "bridal mehndi", "arabic mehndi", "eid mehndi 2026",
    "pakistani mehndi", "simple mehndi", "mehndi designs 2026",
  ],
  authors:      [{ name: "MehndiGlow" }],
  creator:      "MehndiGlow",
  publisher:    "MehndiGlow",
  metadataBase: new URL("https://mehndidesignpics.com"),

  // ── Open Graph ───────────────────────────────────────
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         "https://mehndidesignpics.com",
    siteName:    "MehndiDesignPics",
    title:       "MehndiDesignPics — Beautiful Mehndi Designs",
    description: "Explore 1000+ mehndi designs for every occasion.",
    images:      [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "MehndiDesignPics — Mehndi Designs" }],
  },

  // ── Twitter Card ─────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    site:        "@MehndiDesignPics",
    creator:     "@MehndiDesignPics",
    title:       "MehndiDesignPics — Beautiful Mehndi Designs",
    description: "Explore 1000+ mehndi designs for every occasion.",
  },

  // ── Robots ───────────────────────────────────────────
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  // ── Verification ─────────────────────────────────────
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in your hosting env (Vercel /
  // .env) to the token from Google Search Console → Settings → Ownership
  // verification → HTML tag. The placeholder is omitted when unset so no
  // broken verification meta tag is emitted.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),

  // ── App-specific ─────────────────────────────────────
  applicationName: "MehndiGlow",
  category:        "lifestyle",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`} suppressHydrationWarning>
      <head>
        {/* DNS prefetch / preconnect — only for the remaining cross-origin host
            (Unsplash). Fonts are now self-hosted via next/font. */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* Favicon set */}
        <link rel="icon"             href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon"             href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon"    href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="manifest"         href="/manifest.json" />
      </head>
      <body>
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen flex flex-col bg-henna-50 dark:bg-henna-900">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
            <WebVitals />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
