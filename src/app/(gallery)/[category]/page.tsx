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
    title: `${cat.name} Mehndi Designs 2024 — ${cat.count}+ Beautiful Patterns | MehndiGlow`,
    description: `Discover ${cat.count}+ beautiful ${cat.name} mehndi designs for 2024. ${cat.description}. Free download available.`,
    keywords: [cat.keyword, `${cat.name.toLowerCase()} mehndi 2024`, `${cat.name.toLowerCase()} henna`, "mehndi designs"],
    alternates: { canonical: `https://mehndiglow.com/${params.category}` },
    openGraph: {
      title: `${cat.name} Mehndi Designs 2024`,
      description: cat.description,
      images: [{ url: cat.image }],
    },
  };
}

// Category-specific FAQs for Semantic SEO
const CATEGORY_FAQS: Record<string, { question: string; answer: string }[]> = {
  "bridal-mehndi": [
    { question: "What is the best bridal mehndi design for 2024?", answer: "The best bridal mehndi designs for 2024 include full hand Arabic patterns, minimal geometric designs, and fusion styles combining Pakistani and Arabic elements. Designs with groom's name hidden in the pattern are also very popular." },
    { question: "How many days before the wedding should mehndi be applied?", answer: "Mehndi should be applied 1–2 days before the wedding. This gives the color time to develop fully — it peaks in darkness at 24–48 hours after application." },
    { question: "How long should bridal mehndi stay on?", answer: "For bridal mehndi, keep it on for at least 8–12 hours, ideally overnight. The longer you leave it, the darker and longer-lasting the color." },
  ],
  "arabic-mehndi": [
    { question: "What makes Arabic mehndi different from other styles?", answer: "Arabic mehndi is characterized by bold, flowing floral designs with lots of negative space. Unlike Indian mehndi which covers the entire hand densely, Arabic mehndi uses elegant isolated motifs that look modern and stylish." },
    { question: "Is Arabic mehndi easy for beginners?", answer: "Yes! Arabic mehndi is actually one of the easiest styles for beginners because the patterns are less dense and more forgiving. Simple Arabic flower and leaf designs are perfect to start with." },
  ],
  "eid-mehndi": [
    { question: "What mehndi designs are best for Eid?", answer: "For Eid, simple to medium-complexity Arabic and Pakistani designs are most popular. Finger mehndi, half-hand designs, and minimal floral patterns are trending. The key is designs that look beautiful but don't take too long to apply." },
    { question: "How do I do mehndi quickly for Eid?", answer: "For quick Eid mehndi, stick to finger mehndi, simple arabic flowers on the back hand, or ready-made mehndi stencils. A simple 5-minute mehndi design can look stunning when done neatly." },
  ],
};

export default function CategoryPage({ params }: Props) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  const catDesigns = generateCategoryDesigns(params.category, 500);
  const faqs = CATEGORY_FAQS[params.category] || [];

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
            alt={`${cat.name} mehndi designs 2024 collection`}
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
                {cat.name} Mehndi Designs 2024
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
                  Updated 2024
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
                `${cat.name} Mehndi 2024`,
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
      </div>
    </>
  );
}
