import type { Metadata } from "next";
import { notFound }    from "next/navigation";
import Image           from "next/image";
import Link            from "next/link";
import { Download, ArrowLeft, Tag, Calendar } from "lucide-react";
import ShareButton from "@/components/gallery/ShareButton";
import DesignCard      from "@/components/gallery/DesignCard";
import Breadcrumb      from "@/components/seo/Breadcrumb";
import JsonLd          from "@/components/seo/JsonLd";
import { imageObjectSchema } from "@/lib/seo";
import { designs } from "@/data";
import { getAllDesigns } from "@/data/generator";

// Lookup must cover EVERY design a category page can render, otherwise those
// card links 404. Category pages render up to 1000 designs per category
// (see NEW_CATEGORY_COUNT in [category]/page.tsx), so the lookup uses 1000.
const LOOKUP_COUNT = 1000;

// Merge hardcoded designs with all generated designs (deduplicated by slug)
function getMergedDesigns() {
  const generated = getAllDesigns(LOOKUP_COUNT);
  const existingSlugs = new Set(designs.map((d) => d.slug));
  const newDesigns = generated.filter((d) => !existingSlugs.has(d.slug));
  return [...designs, ...newDesigns];
}

// Cache at module level so it's computed once per server start
const allDesigns = getMergedDesigns();

interface Props {
  params: { slug: string };
}

// Pre-render the hardcoded designs + the first 24 designs of every category at
// build time for instant loads. The remaining designs are resolved on-demand
// (dynamicParams defaults to true) from the full `allDesigns` lookup above —
// this keeps build times reasonable while ensuring NO design link 404s.
export async function generateStaticParams() {
  const prerender = getAllDesigns(24);
  const slugs = new Set<string>();
  [...designs, ...prerender].forEach((d) => slugs.add(d.slug));
  return Array.from(slugs, (slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = allDesigns.find((x) => x.slug === params.slug);
  if (!d) return {};
  const catDisplay = d.category.replace(/-mehndi$/, "").replace(/-/g, " ");
  return {
    title: `${d.title} — Free Download`,
    description: `${d.description} Download this beautiful ${catDisplay} mehndi design for free. Part of our ${catDisplay} mehndi collection 2026.`,
    keywords: [
      ...d.tags,
      d.category.replace(/-/g, " "),
      d.title.toLowerCase(),
      `${d.title.toLowerCase()} download`,
      `${d.title.toLowerCase()} image`,
      `${d.category.replace(/-/g, " ")} 2026`,
      `beautiful ${d.category.replace(/-mehndi$/, "").replace(/-/g, " ")} mehndi`,
      `best ${d.category.replace(/-mehndi$/, "").replace(/-/g, " ")} mehndi`,
      "mehndi design","free download","henna","mehndi designs 2026",
      "bridal mehndi designs","arabic mehndi designs","eid mehndi designs",
      "pakistani mehndi","simple mehndi designs","mehndi designs for hands",
      "henna designs","beautiful mehndi designs","latest mehndi designs",
      "mehndi for wedding","mehndi design download","front hand mehndi",
      "back hand mehndi","full hand mehndi","minimal mehndi designs",
      "mehndi design for girls","indian mehndi designs","bridal henna designs",
      "traditional mehndi","mehndi patterns","flower mehndi design",
      "finger mehndi designs","feet mehndi designs","easy mehndi designs",
      "stylish mehndi designs","heavy mehndi designs","mehndi art",
      "henna art","dulhan mehndi","eid special mehndi","modern mehndi designs",
      "mehndi design photo","best mehndi designs","free mehndi designs",
      "mehndidesignpics",
    ],
    alternates: { canonical: `https://mehndidesignpics.com/design/${d.slug}` },
    openGraph: {
      title: d.title,
      description: d.description,
      images: [{ url: d.image, alt: d.alt }],
      type: "article",
    },
  };
}

export default function DesignPage({ params }: Props) {
  const design = allDesigns.find((d) => d.slug === params.slug);
  if (!design) notFound();

  // Related: same category, different design
  const related = allDesigns
    .filter((d) => d.category === design.category && d.id !== design.id)
    .slice(0, 4);

  // More from same tags
  const moreLike = allDesigns
    .filter((d) => d.id !== design.id && d.tags.some((t) => design.tags.includes(t)))
    .slice(0, 4);

  const catName = design.category.replace("-mehndi", "").replace(/-/g, " ");

  return (
    <>
      {/* Structured Data — ImageObject */}
      <JsonLd data={imageObjectSchema({
        name:        design.title,
        description: design.description,
        imageUrl:    design.image,
        slug:        design.slug,
        category:    design.category,
        tags:        design.tags,
        publishedAt: design.createdAt,
      })} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* Breadcrumb */}
        <Breadcrumb items={[
          { name: `${catName} Mehndi`,  url: `/${design.category}` },
          { name: design.title,         url: `/design/${design.slug}` },
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* Image — with semantic figure/figcaption */}
          <figure className="relative rounded-2xl overflow-hidden border border-henna-200 dark:border-henna-800">
            <Image
              src={design.image}
              alt={design.alt}   // Keyword-rich alt text
              width={600}
              height={750}
              className="w-full h-auto object-cover"
              priority
              itemProp="image"
            />
            <figcaption className="sr-only">{design.alt}</figcaption>
          </figure>

          {/* Info — semantic article */}
          <article
            itemScope
            itemType="https://schema.org/ImageObject"
            className="flex flex-col"
          >
            {/* Category badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="cat-badge capitalize" itemProp="about">{catName} Mehndi</span>
              {design.trending && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-henna-400 text-white">Trending</span>
              )}
              {design.featured && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-rose-mehndi text-white">Featured</span>
              )}
            </div>

            {/* H1 — Primary keyword */}
            <h1
              className="font-serif text-2xl sm:text-3xl font-semibold text-henna-900 dark:text-henna-100 mb-3 leading-tight"
              itemProp="name"
            >
              {design.title}
            </h1>

            {/* Date */}
            <div className="flex items-center gap-2 text-xs text-henna-500 mb-4">
              <Calendar size={12} />
              <time dateTime={design.createdAt} itemProp="datePublished">
                {new Date(design.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            </div>

            {/* Description — semantic SEO paragraph */}
            <p
              className="text-henna-600 dark:text-henna-400 mb-4 leading-relaxed text-sm"
              itemProp="description"
            >
              {design.description}
            </p>

            {/* Extended description — topical authority */}
            <p className="text-henna-600 dark:text-henna-400 mb-6 leading-relaxed text-sm">
              This {catName} mehndi design is perfect for{" "}
              {design.tags.slice(0, 2).join(", ")} occasions.
              The intricate pattern features traditional motifs with a modern touch,
              making it suitable for brides, mehndi artists, and mehndi enthusiasts.
              Download this design for free and recreate it at home.
            </p>

            {/* Tags — Semantic keywords */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="flex items-center gap-1 text-xs text-henna-500">
                <Tag size={12} />
                <span>Tags:</span>
              </div>
              {design.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/search?q=${encodeURIComponent(tag)}`}
                  className="tag-pill text-xs capitalize"
                  rel="tag"
                  itemProp="keywords"
                >
                  {tag}
                </Link>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={design.image}
                download={design.slug}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
                aria-label={`Download ${design.title}`}
              >
                <Download size={16} />
                Download Free
              </a>
              <ShareButton title={design.title} slug={design.slug} />
            </div>

            {/* Tip box */}
            <div className="p-4 bg-henna-100 dark:bg-henna-800 rounded-xl border-l-4 border-henna-400 text-sm">
              <p className="text-henna-700 dark:text-henna-300">
                <strong className="text-henna-400">📌 Pro Tip:</strong>{" "}
                Save this design on Pinterest to find it later easily. Share on WhatsApp with your mehndi artist!
              </p>
            </div>

            {/* Internal links — important for SEO */}
            <div className="mt-6 pt-5 border-t border-henna-200 dark:border-henna-800">
              <p className="text-xs text-henna-500 mb-2">More collections:</p>
              <div className="flex flex-wrap gap-2">
                {["bridal-mehndi-design", "arabic-mehndi-design", "eid-mehndi-design"].map((cat) => (
                  <Link
                    key={cat}
                    href={`/${cat}`}
                    className="text-xs text-henna-400 hover:underline capitalize"
                  >
                    {cat.replace(/-/g, " ")} →
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* Related Designs — same category */}
        {related.length > 0 && (
          <section className="mt-14" aria-label="Related mehndi designs">
            <h2 className="section-title">
              More {catName} Mehndi Designs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map((d) => <DesignCard key={d.id} design={d} />)}
            </div>
          </section>
        )}

        {/* You May Also Like — cross-category */}
        {moreLike.length > 0 && (
          <section className="mt-10" aria-label="Similar mehndi designs">
            <h2 className="section-title">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {moreLike.map((d) => <DesignCard key={d.id} design={d} />)}
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="mt-8">
          <Link
            href={`/${design.category}`}
            className="inline-flex items-center gap-2 text-sm text-henna-400 hover:text-henna-500 font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Back to {catName} mehndi designs
          </Link>
        </div>
      </div>
    </>
  );
}
