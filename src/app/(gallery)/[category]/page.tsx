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
import { CATEGORY_FAQS } from "@/data/categoryFaqs";
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
      `${cat.name.toLowerCase()} henna designs`,
      `${cat.name.toLowerCase()} mehndi designs`,
      `best ${cat.name.toLowerCase()} mehndi designs`,
      `${cat.name.toLowerCase()} mehndi download`,
      `${cat.name.toLowerCase()} mehndi images`,
      "mehndi designs 2026",
    ],
    alternates: { canonical: `https://mehndidesignpics.com/${params.category}` },
    openGraph: {
      title: `${cat.name} Mehndi Designs 2026`,
      description: cat.description,
      images: [{ url: cat.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cat.name} Mehndi Designs 2026`,
      description: cat.description,
      images: [cat.image],
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  // One published page per unique title: 20 per category. The previous 60
  // republished every title three times ("Title", "Title 2", "Title 3"),
  // cycling the same small pool of stock photos with different crop
  // parameters — near-duplicate pages that Google crawled and declined to
  // index ("Crawled – currently not indexed"). At 20, each category page
  // set has unique titles, and each design's lead photo is used at most
  // once within its category wherever the photo pool allows.
  const DESIGNS_PER_CATEGORY = 20;
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
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: `${cat.name} Mehndi Designs`, url: `/${params.category}` },
        ]),
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
              or intricate bridal patterns, MehndiDesignPics has the perfect {cat.name.toLowerCase()} mehndi design for you.
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
          initialVisible={designCount}
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

