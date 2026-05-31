import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data";
import PopularSearches from "@/components/seo/PopularSearches";

export const metadata: Metadata = {
  title: "All Mehndi Design Categories",
  description: "Browse all mehndi categories — bridal, arabic, pakistani, eid, finger, feet, minimal and more.",
  alternates: { canonical: "https://mehndidesignpics.com/categories" },
  keywords: [
    "mehndi design categories","bridal mehndi","arabic mehndi",
    "pakistani mehndi","eid mehndi","finger mehndi","feet mehndi",
    "minimal mehndi","kids mehndi","back hand mehndi","indian mehndi",
    "stylish mehndi","front hand mehndi","all mehndi designs",
    "mehndi types","henna categories","mehndi collection",
    "mehndi designs list","types of mehndi","mehndi styles",
    "bridal henna category","arabic henna styles","traditional mehndi types",
    "modern mehndi styles","mehndi design gallery","mehndi photo gallery",
    "free mehndi designs","mehndi design images","mehndi wallpapers",
    "mehndi design download","henna design gallery","mehndi art styles",
    "henna art types","mehndi patterns collection","best mehndi categories",
    "mehndi 2026 categories","new mehndi styles","mehndi design finder",
    "mehndi design search","mehndi for wedding","mehndi for eid",
    "mehndi for kids","simple mehndi types","heavy mehndi styles",
    "light mehndi designs","cute mehndi designs","mehndi design variety",
    "mehndi for beginners","easy henna styles","mehndidesignpics categories",
  ],
};

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

      <div className="text-center mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-henna-900 dark:text-henna-100 mb-3">
          All Mehndi Categories
        </h1>
        <p className="text-henna-600 dark:text-henna-400 max-w-xl mx-auto">
          Explore {categories.length} categories with 1000+ beautiful mehndi designs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/${cat.slug}`} className="group block">
            <div className="relative h-52 rounded-2xl overflow-hidden border border-henna-200 dark:border-henna-800">
              <Image
                src={cat.image}
                alt={`${cat.name} mehndi designs`}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-henna-900/80 via-henna-900/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h2 className="font-serif text-xl font-semibold text-white mb-0.5">
                  {cat.name} Mehndi
                </h2>
                <p className="text-henna-300 text-sm line-clamp-1">{cat.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-henna-400 text-xs font-medium">{cat.count}+ designs</span>
                  <span className="text-henna-400 text-xs font-medium group-hover:translate-x-1 transition-transform inline-block">
                    Browse →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-henna-200 dark:border-henna-800">
        <PopularSearches />
      </div>
    </div>
  );
}
