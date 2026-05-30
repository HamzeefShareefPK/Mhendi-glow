import type { Metadata } from "next";
import HeroSection     from "@/components/home/HeroSection";
import SearchBar       from "@/components/home/SearchBar";
import TrendingSection from "@/components/home/TrendingSection";
import CategoryGrid    from "@/components/home/CategoryGrid";
import MasonryGallery  from "@/components/gallery/MasonryGallery";
import BlogSection     from "@/components/home/BlogSection";
import EidBanner       from "@/components/home/EidBanner";
import Newsletter      from "@/components/home/Newsletter";
import HomeContent     from "@/components/home/HomeContent";
import FAQSection      from "@/components/seo/FAQSection";
import JsonLd          from "@/components/seo/JsonLd";
import { websiteSchema, organizationSchema } from "@/lib/seo";
import { generateCategoryDesigns } from "@/data/generator";

export const metadata: Metadata = {
  title: { absolute: "MehndiGlow — Discover 1000+ Beautiful Mehndi Designs 2026" },
  description:
    "Explore the most beautiful mehndi designs — bridal, Arabic, Pakistani, Eid, minimal and more. Free download. Updated daily. Your #1 mehndi inspiration source.",
  keywords: [
    "mehndi designs 2026","bridal mehndi designs","arabic mehndi designs",
    "eid mehndi designs","pakistani mehndi","simple mehndi designs",
    "mehndi designs for hands","henna designs","new mehndi designs",
    "beautiful mehndi designs","latest mehndi designs","mehndi for wedding",
    "mehndi design download","front hand mehndi","back hand mehndi",
    "full hand mehndi","minimal mehndi designs","mehndi design for girls",
    "indian mehndi designs","bridal henna designs","traditional mehndi",
    "mehndi patterns","flower mehndi design","finger mehndi designs",
    "feet mehndi designs","easy mehndi designs","stylish mehndi designs",
    "heavy mehndi designs","mehndi art","henna art","mehndi ka design",
    "dulhan mehndi","eid special mehndi","mehndi for kids",
    "modern mehndi designs","mehndi design pics","mehndi design photo",
    "best mehndi designs","trending mehndi designs","free mehndi designs",
    "mehndi design download free","henna mehndi designs","mehndi for bride",
    "arabic henna","pakistani bridal mehndi","mehndi design ideas",
    "simple henna designs","mehndi wale design","mehndi tattoo designs",
    "mehndidesignpics",
  ],
  alternates: { canonical: "https://mehndidesignpics.com" },
  openGraph: {
    title: "MehndiGlow — 1000+ Beautiful Mehndi Designs",
    description: "Discover bridal, arabic, eid, minimal mehndi designs. Free download.",
    images: [{ url: "https://mehndidesignpics.com/images/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

// Homepage FAQs — targets "People Also Ask" on Google
const HOME_FAQS = [
  {
    question: "What are the latest mehndi designs for 2026?",
    answer: "The latest mehndi trends for 2026 include minimal Arabic mehndi, geometric patterns, floral finger mehndi, and fusion bridal designs that combine Pakistani and Arabic styles. Minimal mehndi with negative space is especially popular this year.",
  },
  {
    question: "Which mehndi design is best for beginners?",
    answer: "For beginners, simple Arabic mehndi designs are the easiest to learn. Start with basic floral patterns, single stems, and leaf designs. Finger mehndi is also great for beginners as the designs are small and manageable.",
  },
  {
    question: "How long does mehndi last on hands?",
    answer: "Mehndi typically lasts 1–3 weeks on hands. The color starts as orange, darkens to deep brown/maroon within 24–48 hours, and gradually fades. Using natural henna, leaving it on for 6–8 hours, and avoiding water for the first 24 hours helps it last longer.",
  },
  {
    question: "What is the difference between Arabic and Pakistani mehndi?",
    answer: "Arabic mehndi features flowing floral patterns with lots of empty space between designs. Pakistani mehndi is more intricate and dense, with fine detailed patterns covering more of the hand. Pakistani bridal mehndi often includes more complex geometrical elements.",
  },
  {
    question: "How can I make my mehndi color darker?",
    answer: "To get a darker mehndi color: use natural henna paste, keep it on for 8+ hours, apply a lemon-sugar solution while drying, warm your hands near heat after removing, avoid water for 24 hours, and apply mustard oil or clove oil over dried mehndi.",
  },
  {
    question: "Is MehndiGlow free to use?",
    answer: "Yes! MehndiGlow is completely free. You can browse, download, and share all mehndi designs for personal use at no cost. We have 1000+ designs across 12 categories updated regularly.",
  },
];

// Generate 200 mixed mehndi designs from all 12 categories (≈17 per category)
const CATEGORIES = [
  "bridal-mehndi-design","arabic-mehndi-design","pakistani-mehndi-design","eid-mehndi-design",
  "finger-mehndi-design","feet-mehndi-design","minimal-mehndi-design","kids-mehndi-design",
  "back-hand-mehndi-design","indian-mehndi-design","stylish-mehndi-design","front-hand-mehndi-design",
];

function getMixedDesigns(total: number) {
  const perCat = Math.ceil(total / CATEGORIES.length);
  const pool = CATEGORIES.flatMap((cat) => generateCategoryDesigns(cat, perCat));
  // Interleave categories so gallery looks varied
  const mixed = [];
  const cols = CATEGORIES.length;
  const rows = Math.ceil(pool.length / cols);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = c * rows + r;
      if (pool[idx]) mixed.push(pool[idx]);
    }
  }
  return mixed.slice(0, total);
}

const HOME_GALLERY = getMixedDesigns(200);

export default function HomePage() {
  return (
    <>
      {/* Structured Data — WebSite + Organization */}
      <JsonLd data={[websiteSchema(), organizationSchema()]} />

      {/* ── Semantic HTML structure ── */}

      {/* Hero */}
      <HeroSection />

      {/* Search */}
      <SearchBar />

      {/* Main content */}
      <div>
        {/* Trending — <section> with aria-label */}
        <TrendingSection />

        {/* Categories — nav landmark */}
        <CategoryGrid />

        {/* Gallery — 200 mixed designs from all categories */}
        <MasonryGallery
          designs={HOME_GALLERY}
          title="✦ Latest Mehndi Designs"
          showFilter={true}
        />

        {/* Blog */}
        <BlogSection />

        {/* Seasonal */}
        <EidBanner />

        {/* Long-form SEO content — 3000 words across 9 sections */}
        <HomeContent />

        {/* FAQ — targets People Also Ask */}
        <FAQSection faqs={HOME_FAQS} title="Mehndi Design FAQ" />

        {/* Newsletter */}
        <Newsletter />
      </div>
    </>
  );
}
