"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Share2, Eye, Flame, Star } from "lucide-react";
import { Design } from "@/types";

interface Props {
  design: Design;
}

export default function DesignCard({ design }: Props) {

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

  const catLabel = design.category.replace("-mehndi", "").replace(/-/g, " ");

  return (
    <div className="design-card group rounded-2xl border border-henna-200/50 dark:border-henna-800/40 bg-white dark:bg-henna-900/70 overflow-hidden">
      <Link href={`/design/${design.slug}`}>

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
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Hover action buttons — desktop */}
          <div className="overlay hidden sm:flex">
            <div className="overlay-btns">
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
              <div className="overlay-btn" title="View" aria-label="View design">
                <Eye size={13} />
              </div>
            </div>
          </div>

          {/* Mobile action buttons */}
          <div className="sm:hidden absolute bottom-0 inset-x-0 flex items-center justify-end gap-1.5 p-2 bg-gradient-to-t from-black/55 to-transparent">
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
            <div className="absolute top-2.5 left-2.5">
              <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full bg-henna-500 text-white font-bold shadow-md tracking-wide">
                <Flame size={8} className="fill-white" /> Trending
              </span>
            </div>
          )}
          {design.featured && !design.trending && (
            <div className="absolute top-2.5 left-2.5">
              <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full bg-white/90 text-henna-700 font-bold shadow-md tracking-wide">
                <Star size={8} className="fill-henna-500 text-henna-500" /> Featured
              </span>
            </div>
          )}
        </div>

        {/* Card body */}
        <div className="px-3 py-3 sm:px-4 sm:py-3.5">
          <span className="cat-badge capitalize">
            {catLabel}
          </span>
          <h3 className="text-[13px] sm:text-sm font-semibold text-henna-800 dark:text-henna-200 mt-2 leading-snug line-clamp-2 group-hover:text-henna-500 dark:group-hover:text-henna-400 transition-colors">
            {design.title}
          </h3>
        </div>
      </Link>
    </div>
  );
}
