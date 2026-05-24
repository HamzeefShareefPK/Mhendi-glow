"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, Flame } from "lucide-react";
import { designs } from "@/data";

export default function TrendingSection() {
  const trending = designs.filter((d) => d.trending).slice(0, 10);

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">

      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md shadow-henna-400/20"
            style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)" }}
          >
            <TrendingUp size={16} className="text-white" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-henna-400 leading-none mb-1">
              What&apos;s Hot
            </p>
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-henna-900 dark:text-henna-100 leading-none tracking-tight">
              Trending Now
            </h2>
          </div>
        </div>
        <Link
          href="/bridal-mehndi-design"
          className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-henna-500 hover:text-henna-600 transition-colors group"
        >
          View All
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0">
        {trending.map((design, i) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.38 }}
            className="flex-shrink-0 snap-start"
          >
            <Link href={`/design/${design.slug}`} className="group block">
              <div
                className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-henna-400/15 transition-all duration-300 hover:-translate-y-2 border border-henna-200/30 dark:border-henna-800/30"
                style={{ width: "clamp(115px, 24vw, 142px)", aspectRatio: "3/4" }}
              >
                <Image
                  src={design.image}
                  alt={design.alt}
                  fill
                  sizes="145px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* Trending badge */}
                {design.trending && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-henna-500 flex items-center justify-center shadow-md">
                    <Flame size={10} className="text-white fill-white" />
                  </div>
                )}

                {/* Category chip */}
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <span
                    className="inline-block text-[10px] px-2 py-0.5 rounded-full font-bold tracking-wide"
                    style={{ background: "rgba(200,148,106,0.22)", color: "#F0C8A0", backdropFilter: "blur(6px)" }}
                  >
                    {design.category.replace("-mehndi","").replace(/-/g," ")}
                  </span>
                </div>
              </div>

              {/* Title */}
              <p className="text-[12px] text-henna-700 dark:text-henna-300 mt-2 font-semibold line-clamp-1 max-w-[145px] group-hover:text-henna-500 transition-colors leading-tight">
                {design.title}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile view all */}
      <div className="sm:hidden mt-5 text-center">
        <Link href="/bridal-mehndi-design"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-henna-500 hover:text-henna-600 transition-colors">
          View all trending <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}
