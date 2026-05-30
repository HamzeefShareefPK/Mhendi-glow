"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Download, Share2, Eye, Flame, Star, X } from "lucide-react";
import { Design } from "@/types";

interface Props {
  design: Design;
}

export default function DesignCard({ design }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Lock body scroll + close on Escape while lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxOpen(false); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen]);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const a = document.createElement("a");
    a.href = design.image;
    a.download = design.slug + ".jpg";
    a.target = "_blank";
    a.click();
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/design/${design.slug}`;
    if (navigator.share) {
      navigator.share({ title: design.title, url });
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLightboxOpen(true);
  };

  const catLabel = design.category.replace("-mehndi", "").replace(/-/g, " ");

  return (
    <div className="design-card group relative rounded-2xl border border-henna-200/50 dark:border-henna-800/40 bg-white dark:bg-henna-900/70 overflow-hidden">

      {/* Image wrapper */}
      <div className="relative overflow-hidden">
        <Image
          src={design.image}
          alt={design.alt}
          width={400}
          height={520}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Navigation link covering the image (behind action buttons) */}
        <Link
          href={`/design/${design.slug}`}
          className="absolute inset-0 z-[1]"
          aria-label={design.title}
        />

        {/* Hover action buttons — desktop (above the nav link) */}
        <div className="overlay hidden sm:flex z-[2] pointer-events-none">
          <div className="overlay-btns pointer-events-auto">
            <button
              onClick={handleDownload}
              className="overlay-btn"
              title="Download"
              aria-label="Download design"
            >
              <Download size={13} />
            </button>
            <button
              onClick={handleShare}
              className="overlay-btn"
              title="Share"
              aria-label="Share design"
            >
              <Share2 size={13} />
            </button>
            <button
              onClick={openLightbox}
              className="overlay-btn"
              title="Quick view"
              aria-label="Quick view design"
            >
              <Eye size={13} />
            </button>
          </div>
        </div>

        {/* Mobile action buttons (above the nav link) */}
        <div className="sm:hidden absolute bottom-0 inset-x-0 z-[2] flex items-center justify-end gap-1.5 p-2 bg-gradient-to-t from-black/55 to-transparent">
          <button
            onClick={openLightbox}
            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white active:scale-95 transition-transform"
            aria-label="Quick view design"
          >
            <Eye size={12} />
          </button>
          <button
            onClick={handleDownload}
            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white active:scale-95 transition-transform"
            aria-label="Download design"
          >
            <Download size={12} />
          </button>
          <button
            onClick={handleShare}
            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white active:scale-95 transition-transform"
            aria-label="Share design"
          >
            <Share2 size={12} />
          </button>
        </div>

        {/* Badges */}
        {design.trending && (
          <div className="absolute top-2.5 left-2.5 z-[2] pointer-events-none">
            <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full bg-henna-500 text-white font-bold shadow-md tracking-wide">
              <Flame size={8} className="fill-white" /> Trending
            </span>
          </div>
        )}
        {design.featured && !design.trending && (
          <div className="absolute top-2.5 left-2.5 z-[2] pointer-events-none">
            <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full bg-white/90 text-henna-700 font-bold shadow-md tracking-wide">
              <Star size={8} className="fill-henna-500 text-henna-500" /> Featured
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <Link href={`/design/${design.slug}`} className="block px-3 py-3 sm:px-4 sm:py-3.5">
        <span className="cat-badge capitalize">
          {catLabel}
        </span>
        <h3 className="text-[13px] sm:text-sm font-semibold text-henna-800 dark:text-henna-200 mt-2 leading-snug line-clamp-2 group-hover:text-henna-500 dark:group-hover:text-henna-400 transition-colors">
          {design.title}
        </h3>
      </Link>

      {/* Lightbox modal */}
      {mounted && lightboxOpen && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-[fadeIn_.15s_ease]"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={design.title}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          <div
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col bg-henna-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 min-h-0 bg-black flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={design.image}
                alt={design.alt}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-3 p-4 bg-henna-900">
              <div className="min-w-0">
                <h3 className="text-white font-serif text-base sm:text-lg truncate">{design.title}</h3>
                <span className="text-henna-300 text-xs capitalize">{catLabel} mehndi</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-henna-400 hover:bg-henna-500 text-white text-sm font-semibold transition-colors"
                >
                  <Download size={14} /> Download
                </button>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
                  aria-label="Share design"
                >
                  <Share2 size={15} />
                </button>
                <Link
                  href={`/design/${design.slug}`}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
                  aria-label="Open full design page"
                  onClick={() => setLightboxOpen(false)}
                >
                  <Eye size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
