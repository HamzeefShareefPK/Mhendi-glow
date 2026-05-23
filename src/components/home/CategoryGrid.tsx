"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { categories } from "@/data";

export default function CategoryGrid() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 sm:mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-henna-100 dark:bg-henna-800 flex items-center justify-center shadow-sm">
            <LayoutGrid size={17} className="text-henna-500" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-henna-400 leading-none mb-1">Explore</p>
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-henna-900 dark:text-henna-100 leading-none tracking-tight">
              Browse by Category
            </h2>
          </div>
        </div>
        <Link
          href="/categories"
          className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-henna-500 hover:text-henna-600 transition-colors group"
        >
          All Categories
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/${cat.slug}`} className="group block">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-henna-200/50 dark:border-henna-800/50 shadow-sm group-hover:shadow-lg group-hover:shadow-henna-400/12 transition-all duration-300 group-hover:-translate-y-1.5 bg-henna-100 dark:bg-henna-800">

              {/* Image */}
              <Image
                src={cat.image}
                alt={`${cat.name} mehndi designs`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 17vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Hover glow ring */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-henna-400/50 transition-all duration-300" />

              {/* Count chip — shows on hover */}
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full font-bold text-white"
                  style={{ background: "rgba(200,148,106,0.85)", backdropFilter: "blur(4px)" }}
                >
                  {cat.count}+
                </span>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 inset-x-0 p-3">
                <p className="text-white text-sm font-bold font-serif leading-tight drop-shadow-sm">
                  {cat.name}
                </p>
                <p className="text-henna-300/80 text-[11px] mt-0.5 font-medium group-hover:text-henna-300 transition-colors">
                  {cat.count}+ designs
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile link */}
      <div className="sm:hidden mt-6 text-center">
        <Link
          href="/categories"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-henna-500 hover:text-henna-600 transition-colors"
        >
          View all categories <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}
