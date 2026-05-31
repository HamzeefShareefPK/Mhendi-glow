import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data";
import { CATEGORY_RELATIONS } from "@/data/categoryContent";

// Internal-linking module: surfaces sibling mehndi styles as crawlable links.
// Uses the editorial CATEGORY_RELATIONS map when available, otherwise falls
// back to other categories. Server component — links are in the static HTML.
export default function RelatedCategories({
  currentSlug,
  heading = "Explore More Mehndi Styles",
  limit = 6,
}: {
  currentSlug?: string;
  heading?: string;
  limit?: number;
}) {
  const relatedSlugs = (currentSlug && CATEGORY_RELATIONS[currentSlug]) || [];

  // Build an ordered, de-duplicated list: editorial relations first, then
  // other categories to fill up to `limit`.
  const ordered = [
    ...relatedSlugs,
    ...categories.map((c) => c.slug),
  ].filter((slug, i, arr) => slug !== currentSlug && arr.indexOf(slug) === i);

  const picks = ordered
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is (typeof categories)[number] => Boolean(c))
    .slice(0, limit);

  if (picks.length === 0) return null;

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 py-10 border-t border-henna-200 dark:border-henna-800"
      aria-label={heading}
    >
      <h2 className="section-title">{heading}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {picks.map((c) => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="group rounded-2xl overflow-hidden border border-henna-200 dark:border-henna-800 bg-white dark:bg-henna-900 hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-square">
              <Image
                src={c.image}
                alt={`${c.name} mehndi designs`}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 16vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-center text-xs font-medium text-henna-800 dark:text-henna-200 py-2 px-1">
              {c.name} Mehndi
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
