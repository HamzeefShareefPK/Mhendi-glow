import type { Metadata } from "next";
import { notFound }    from "next/navigation";
import Image           from "next/image";
import MasonryGallery  from "@/components/gallery/MasonryGallery";
import FAQSection      from "@/components/seo/FAQSection";
import Breadcrumb      from "@/components/seo/Breadcrumb";
import JsonLd          from "@/components/seo/JsonLd";
import { collectionPageSchema, breadcrumbSchema } from "@/lib/seo";
import { categories } from "@/data";
import { generateCategoryDesigns } from "@/data/generator";
import { getCategoryArticle } from "@/data/categoryContent";
import CategoryArticle from "@/components/category/CategoryArticle";
import RelatedCategories from "@/components/seo/RelatedCategories";

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return {};
  return {
    title: `${cat.name} Mehndi Designs 2026 — ${cat.count}+ Beautiful Patterns`,
    description: `Discover ${cat.count}+ beautiful ${cat.name} mehndi designs for 2026. ${cat.description}. Free download available.`,
    keywords: [
      cat.keyword,
      `${cat.name.toLowerCase()} mehndi 2026`,
      `${cat.name.toLowerCase()} henna`,
      `${cat.name.toLowerCase()} mehndi designs`,
      `best ${cat.name.toLowerCase()} mehndi`,
      `beautiful ${cat.name.toLowerCase()} mehndi`,
      `${cat.name.toLowerCase()} mehndi download`,
      `${cat.name.toLowerCase()} mehndi images`,
      `${cat.name.toLowerCase()} mehndi photos`,
      `${cat.name.toLowerCase()} mehndi patterns`,
      "mehndi designs 2026","bridal mehndi designs","arabic mehndi designs",
      "eid mehndi designs","pakistani mehndi","simple mehndi designs",
      "mehndi designs for hands","henna designs","beautiful mehndi designs",
      "latest mehndi designs","mehndi for wedding","mehndi design download",
      "front hand mehndi","back hand mehndi","full hand mehndi",
      "minimal mehndi designs","mehndi design for girls","indian mehndi designs",
      "bridal henna designs","traditional mehndi","mehndi patterns",
      "flower mehndi design","finger mehndi designs","feet mehndi designs",
      "easy mehndi designs","stylish mehndi designs","heavy mehndi designs",
      "mehndi art","henna art","mehndi ka design","dulhan mehndi",
      "eid special mehndi","mehndi for kids","modern mehndi designs",
      "mehndi design pics","mehndi design photo","best mehndi designs",
      "trending mehndi designs","free mehndi designs","mehndi design download free",
      "henna mehndi designs","mehndi for bride","arabic henna",
      "mehndi design ideas","mehndidesignpics",
    ],
    alternates: { canonical: `https://mehndidesignpics.com/${params.category}` },
    openGraph: {
      title: `${cat.name} Mehndi Designs 2026`,
      description: cat.description,
      images: [{ url: cat.image }],
    },
  };
}

// Category-specific FAQs for Semantic SEO
const CATEGORY_FAQS: Record<string, { question: string; answer: string }[]> = {
  "bridal-mehndi-design": [
    { question: "What is the best bridal mehndi design for 2026?", answer: "The best bridal mehndi designs for 2026 include full hand Arabic patterns, minimal geometric designs, and fusion styles combining Pakistani and Arabic elements. Designs with groom's name hidden in the pattern are also very popular." },
    { question: "How many days before the wedding should mehndi be applied?", answer: "Mehndi should be applied 1–2 days before the wedding. This gives the color time to develop fully — it peaks in darkness at 24–48 hours after application." },
    { question: "How long should bridal mehndi stay on?", answer: "For bridal mehndi, keep it on for at least 8–12 hours, ideally overnight. The longer you leave it, the darker and longer-lasting the color." },
  ],
  "arabic-mehndi-design": [
    { question: "What makes Arabic mehndi different from other styles?", answer: "Arabic mehndi is characterized by bold, flowing floral designs with lots of negative space. Unlike Indian mehndi which covers the entire hand densely, Arabic mehndi uses elegant isolated motifs that look modern and stylish." },
    { question: "Is Arabic mehndi easy for beginners?", answer: "Yes! Arabic mehndi is actually one of the easiest styles for beginners because the patterns are less dense and more forgiving. Simple Arabic flower and leaf designs are perfect to start with." },
  ],
  "eid-mehndi-design": [
    { question: "What mehndi designs are best for Eid?", answer: "For Eid, simple to medium-complexity Arabic and Pakistani designs are most popular. Finger mehndi, half-hand designs, and minimal floral patterns are trending. The key is designs that look beautiful but don't take too long to apply." },
    { question: "How do I do mehndi quickly for Eid?", answer: "For quick Eid mehndi, stick to finger mehndi, simple arabic flowers on the back hand, or ready-made mehndi stencils. A simple 5-minute mehndi design can look stunning when done neatly." },
  ],
  "mehndi-tattoo-design": [
    { question: "What is mehndi tattoo?", answer: "Mehndi tattoo (also called henna tattoo) is a temporary body art made from natural henna paste. It stains the skin dark brown or black and lasts 1–3 weeks. Unlike permanent tattoos, mehndi tattoos are completely safe, painless, and fade naturally over time." },
    { question: "How long does a mehndi tattoo last?", answer: "A mehndi tattoo typically lasts 1 to 3 weeks depending on skin type, placement, and aftercare. Areas with thicker skin like palms and soles last longest. Keeping the design moisturized with oil daily extends its life significantly." },
    { question: "Is mehndi tattoo safe for skin?", answer: "Yes — natural henna mehndi tattoos are completely safe for all skin types including children. Always use 100% natural henna. Avoid black henna which contains PPD (paraphenylenediamine), a chemical dye that can cause severe allergic reactions and skin damage." },
  ],
  "floral-mehndi-design": [
    { question: "What are floral mehndi designs?", answer: "Floral mehndi designs feature flowers, roses, lotus blossoms, jasmine, and botanical vine patterns. They are the most romantic and feminine style of henna, perfect for weddings, Eid, and everyday wear. Roses and lotus flowers are the most popular motifs in 2026." },
    { question: "Which flowers are most popular in floral mehndi?", answer: "Roses, lotus flowers, jasmine vines, daisy clusters, and peony patterns are the most popular floral mehndi motifs. Arabic-style roses with bold outlines and Indian-style lotus patterns are particularly trending in 2026 for bridal and Eid mehndi." },
    { question: "Is floral mehndi suitable for beginners?", answer: "Yes! Simple single-flower designs — like a rose on the thumb or a daisy on the back hand — are perfect for beginners. Start with one large flower and add leaf details around it. Floral patterns are forgiving because they naturally look hand-drawn and organic." },
  ],
  "circle-mehndi-design": [
    { question: "What is circle mehndi design?", answer: "Circle mehndi features round mandala patterns, concentric circles, and geometric ring designs. The circular motif is placed in the center of the palm or back hand with detailed patterns radiating outward. It is one of the most striking and symmetric mehndi styles." },
    { question: "How to draw a mandala circle mehndi?", answer: "Start with a small circle in the center of your hand. Draw petals outward from this center, then add a ring of dots, then larger petal shapes, and continue adding layers outward. Work in rings and keep spacing even. Practice on paper first to maintain symmetry." },
    { question: "Is circle mehndi good for the back hand?", answer: "Yes — circle and mandala mehndi looks especially stunning on the back hand where there is more flat space for the pattern to expand. A large central mandala on the back hand with vine extensions to the fingers is one of the most sought-after designs in 2026." },
  ],
  "gol-tikki-mehndi-design": [
    { question: "What is gol tikki mehndi?", answer: "Gol tikki mehndi features round filled-circle medallions (tikkis) as the main motif. The gol (round) tikki is placed in the center of the palm, surrounded by intricate jaal (net) patterns, vines, and fine detail work. It is a traditional Pakistani and Indian mehndi style." },
    { question: "What is the difference between gol tikki and mandala mehndi?", answer: "Gol tikki typically refers to a solid filled round dot or medallion, while mandala mehndi is an elaborate circular pattern with many concentric rings and petal details. Tikki designs are generally simpler and bolder, while mandalas are more intricate and symmetrical." },
    { question: "Which occasions suit gol tikki mehndi?", answer: "Gol tikki mehndi is perfect for weddings, Eid, engagements, and festive occasions. Its traditional appearance makes it especially popular for Pakistani and Indian bridal mehndi. It pairs beautifully with heavy embroidered outfits and traditional jewellery." },
  ],
  "easy-mehndi-design": [
    { question: "What are the easiest mehndi designs for beginners?", answer: "The easiest mehndi designs for beginners include single Arabic flowers on the back hand, simple vine patterns along the fingers, small leaf clusters on the wrist, and basic dotwork patterns. These require minimal cone control and look beautiful even when done by a first-timer." },
    { question: "How long does easy mehndi take to apply?", answer: "Simple mehndi designs take just 5–15 minutes to apply, making them perfect for Eid morning or last-minute occasions. A single Arabic flower back hand design can be done in under 10 minutes. Quick finger mehndi takes just 3–5 minutes per hand." },
    { question: "How can I learn mehndi at home easily?", answer: "Start with simple single-line patterns and basic flower shapes. Use a ready-made mehndi cone for easier control. Practice on paper first, then on your own hand. MehndiGlow has 1000+ easy mehndi designs with step-by-step reference images to help you practice." },
  ],
};

export default function CategoryPage({ params }: Props) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  // Quality over quantity: a focused set of genuinely distinct designs per
  // category indexes far better than thousands of near-duplicate pages built
  // from the same handful of stock photos (Google treats those as thin
  // content and refuses to index them). 60 covers all 20 unique titles three
  // times over with varied imagery and unique descriptions.
  const DESIGNS_PER_CATEGORY = 60;
  const designCount = DESIGNS_PER_CATEGORY;
  const catDesigns = generateCategoryDesigns(params.category, designCount);
  const article = getCategoryArticle(params.category);
  // Prefer the in-depth article's FAQs; fall back to the legacy per-category set.
  const faqs = article?.faqs ?? CATEGORY_FAQS[params.category] ?? [];

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={[
        collectionPageSchema({
          name: cat.name,
          description: cat.description,
          url: `/${params.category}`,
          imageUrl: cat.image,
          count: cat.count,
        }),
      ]} />

      <div>
        {/* Category Hero */}
        <div className="relative h-52 sm:h-72 overflow-hidden">
          <Image
            src={cat.image}
            alt={`${cat.name} mehndi designs 2026 collection`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-henna-900/85 to-henna-900/40" />

          <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-4 sm:px-8 w-full">
            <div>
              {/* Breadcrumb */}
              <Breadcrumb items={[{ name: `${cat.name} Mehndi`, url: `/${params.category}` }]} />

              {/* H1 — Primary keyword */}
              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-2">
                {cat.name} Mehndi Designs 2026
              </h1>

              {/* Description — secondary keyword */}
              <p className="text-henna-200 text-sm max-w-lg">{cat.description}</p>

              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="text-xs px-3 py-1 rounded-full bg-henna-400/20 text-henna-300 border border-henna-400/30">
                  {cat.count}+ designs
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-henna-400/20 text-henna-300 border border-henna-400/30">
                  Free download
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-henna-400/20 text-henna-300 border border-henna-400/30">
                  Updated 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category description — Topical Authority text */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="bg-henna-100 dark:bg-henna-800 rounded-2xl p-6 border border-henna-200 dark:border-henna-700">
            {/* H2 — Secondary keyword */}
            <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-3">
              About {cat.name} Mehndi Designs
            </h2>
            <p className="text-henna-700 dark:text-henna-300 text-sm leading-relaxed">
              {cat.description}. Browse our collection of {cat.count}+ hand-picked {cat.name.toLowerCase()} mehndi patterns,
              updated regularly with the latest trends. Whether you are looking for simple designs for beginners
              or intricate bridal patterns, MehndiGlow has the perfect {cat.name.toLowerCase()} mehndi design for you.
              All designs are free to view and download for personal use.
            </p>

            {/* Keyword-rich tags — Semantic SEO */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                `${cat.name} Mehndi 2026`,
                `${cat.name} Henna Designs`,
                `New ${cat.name} Mehndi`,
                `Simple ${cat.name} Mehndi`,
                `${cat.name} Mehndi for Beginners`,
              ].map((tag) => (
                <span key={tag} className="tag-pill text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* In-depth style guide (2500+ words) — only for pages that have one */}
        {article && <CategoryArticle category={cat} article={article} />}

        {/* Gallery */}
        <MasonryGallery
          designs={catDesigns}
          showFilter={false}
        />

        {/* FAQ Section — targets "People Also Ask" */}
        {faqs.length > 0 && (
          <FAQSection
            faqs={faqs}
            title={`${cat.name} Mehndi FAQ`}
          />
        )}

        {/* Related styles — internal linking */}
        <RelatedCategories currentSlug={params.category} />
      </div>
    </>
  );
}
