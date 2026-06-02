"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ChevronRight, Star, ArrowDown } from "lucide-react";

const STATS = [
  { value: "1000+", label: "Designs" },
  { value: "25+",   label: "Categories" },
  { value: "Free",  label: "Download" },
];

const PREVIEW_PHOTOS = [
  "1674884060571-96a46a9a7a72",
  "1568566240146-a5e26db3b29b",
  "1571150612716-ff39d1e9ef58",
  "1676134014048-bcc764ea015d",
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-henna-950"
      style={{ minHeight: "min(88vh, 680px)" }}
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1674884060571-96a46a9a7a72?w=1600&q=85&fit=crop&crop=entropy"
        alt="Beautiful bridal mehndi design — MehndiDesignPics"
        fill
        priority
        unoptimized
        className="object-cover object-center opacity-35"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-henna-950 via-henna-950/85 to-henna-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-henna-950/80 via-transparent to-henna-950/20" />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(200,148,106,0.9) 1px, transparent 0)`,
        backgroundSize: "36px 36px",
      }} />

      {/* Glow orb — responsive size */}
      <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] sm:w-[340px] sm:h-[340px] lg:w-[480px] lg:h-[480px] rounded-full bg-henna-600/6 blur-[80px] lg:blur-[100px] pointer-events-none" />

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center"
        style={{ minHeight: "min(88vh, 680px)" }}
      >
        <div className="py-12 sm:py-16 lg:py-20 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left: Text ── */}
          <div className="w-full max-w-xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-henna-400/25 bg-henna-400/8 backdrop-blur-sm mb-5 sm:mb-7"
            >
              <Sparkles size={11} className="text-henna-400" />
              <span className="text-henna-300 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase">
                1000+ Designs · Updated 2026
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif font-semibold text-white leading-[1.07] mb-4 sm:mb-5 tracking-tight"
              style={{ fontSize: "clamp(1.9rem, 5vw, 4rem)" }}
            >
              Discover<br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #D4A574 0%, #C8946A 45%, #E8B488 100%)" }}
              >
                Beautiful
              </span>
              <br />
              Mehndi Designs
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22, duration: 0.55 }}
              className="text-henna-200/70 text-sm sm:text-base lg:text-lg mb-7 sm:mb-9 leading-relaxed"
            >
              Bridal · Arabic · Pakistani · Eid · Minimal
              <span className="block mt-0.5 text-henna-300/50 text-xs sm:text-sm">Free to download — updated daily</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12"
            >
              <Link
                href="/bridal-mehndi-design"
                className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #C8946A 0%, #9A6838 100%)",
                  boxShadow: "0 6px 20px rgba(200,148,106,0.40)",
                }}
              >
                Browse Gallery
                <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/ai-generator"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-[15px] font-bold border border-white/20 text-white hover:bg-white/10 hover:border-white/35 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Sparkles size={14} className="text-henna-400" />
                AI Generator
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.44, duration: 0.55 }}
              className="flex flex-wrap items-center gap-y-3"
            >
              {STATS.map((s, i) => (
                <div key={s.label} className={`${i > 0 ? "pl-4 ml-4 sm:pl-5 sm:ml-5 lg:pl-7 lg:ml-7 border-l border-henna-700/50" : ""}`}>
                  <div className="font-serif text-lg sm:text-xl lg:text-3xl font-bold text-henna-400 leading-none">
                    {s.value}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-henna-400/55 mt-1 font-semibold tracking-[0.1em] uppercase">
                    {s.label}
                  </div>
                </div>
              ))}

              {/* Rating */}
              <div className="pl-4 ml-4 sm:pl-5 sm:ml-5 lg:pl-7 lg:ml-7 border-l border-henna-700/50 flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={9} className="text-henna-400 fill-henna-400" />
                  ))}
                </div>
                <span className="text-[9px] sm:text-[10px] text-henna-400/55 font-semibold tracking-wide">4.9</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Floating preview grid (desktop) ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.28, duration: 0.75 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="absolute inset-0 bg-henna-500/8 blur-3xl rounded-full" />

            <div className="relative grid grid-cols-2 gap-3 xl:gap-4">
              {PREVIEW_PHOTOS.map((photo, i) => (
                <motion.div
                  key={photo}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: i % 2 === 0 ? 0 : 22 }}
                  transition={{ delay: 0.48 + i * 0.1, duration: 0.55 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/55 border border-white/[0.07]"
                  style={{ width: "clamp(120px, 11vw, 160px)", height: "clamp(156px, 14vw, 208px)" }}
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${photo}?w=300&q=85&fit=crop&crop=entropy`}
                    alt="mehndi design preview"
                    fill
                    unoptimized
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="160px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </motion.div>
              ))}

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.95, duration: 0.4 }}
                className="absolute -bottom-5 -left-5 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-xl border border-henna-700/40"
                style={{ background: "rgba(18,10,4,0.96)", backdropFilter: "blur(12px)" }}
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0"
                  style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)" }}>
                  🌸
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-none">New Designs</p>
                  <p className="text-henna-400/60 text-[10px] mt-0.5">Added daily</p>
                </div>
              </motion.div>

              {/* Free Download badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.05, duration: 0.4 }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-[11px] font-bold shadow-lg tracking-wide"
                style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)", color: "#FDF8F2" }}
              >
                ✦ Free Download
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ArrowDown size={15} className="text-henna-400/45" />
        </motion.div>
      </motion.div>
    </section>
  );
}
