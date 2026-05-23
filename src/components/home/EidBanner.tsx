"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { designs } from "@/data";

export default function EidBanner() {
  const eidDesigns = designs.filter((d) => d.category === "eid-mehndi").slice(0, 6);

  return (
    <section className="py-8 sm:py-12 lg:py-14 px-4 sm:px-6 max-w-7xl mx-auto">
      <div
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, #120A04 0%, #2A0E3A 45%, #1A0A28 70%, #120A04 100%)" }}
      >
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #C8946A 1.5px, transparent 0)`,
          backgroundSize: "28px 28px",
        }} />

        {/* Glows — responsive sizes */}
        <div className="absolute -top-12 -right-12 sm:-top-24 sm:-right-24 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-purple-500/8 blur-3xl" />
        <div className="absolute -bottom-8 -left-8 sm:-bottom-16 sm:-left-16 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-henna-500/10 blur-3xl" />

        <div className="relative z-10 p-5 sm:p-8 lg:p-10">

          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-5 mb-6 sm:mb-8">
            <div>
              {/* Chip */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full border border-henna-400/25 bg-henna-400/10 mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm">🌙</span>
                <span className="text-henna-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Eid Special Collection 2026</span>
                <Sparkles size={10} className="text-henna-400" />
              </div>

              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-tight mb-1.5 sm:mb-2">
                Eid Mehndi Designs
              </h2>
              <p className="text-henna-300/60 text-xs sm:text-sm max-w-xs sm:max-w-sm">
                50+ hand-picked designs for Eid celebrations — from simple to elaborate
              </p>
            </div>

            <Link
              href="/eid-mehndi"
              className="self-start sm:self-center shrink-0 group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white transition-all duration-200 hover:scale-105 shadow-lg shadow-henna-700/30"
              style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)" }}
            >
              Browse All Eid
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Design grid — gradual column jump */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-2.5 lg:gap-3">
            {eidDesigns.map((d, i) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link href={`/design/${d.slug}`}>
                  <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-white/8 hover:border-henna-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-henna-400/20 group">
                    <Image
                      src={d.image}
                      alt={d.alt}
                      fill
                      sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom tag strip */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-5 sm:mt-6">
            {["Simple Eid Mehndi", "Arabic Eid", "Back Hand", "Finger Mehndi", "Quick Design", "Bridal Eid"].map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${encodeURIComponent(tag.toLowerCase())}`}
                className="text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1 rounded-full border border-henna-700/50 text-henna-400/70 hover:border-henna-400/60 hover:text-henna-300 transition-colors font-medium"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
