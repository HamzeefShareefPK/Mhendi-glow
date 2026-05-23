import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data";

export const metadata: Metadata = {
  title: "All Mehndi Design Categories — MehndiGlow",
  description: "Browse all mehndi categories — bridal, arabic, pakistani, eid, finger, feet, minimal and more.",
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
    </div>
  );
}
