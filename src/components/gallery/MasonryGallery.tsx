"use client";

import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { LayoutGrid, Loader2 } from "lucide-react";
import DesignCard from "./DesignCard";
import { Design } from "@/types";

interface Props {
  designs: Design[];
  title?: string;
  showFilter?: boolean;
}

const CATEGORIES = ["All", "Bridal", "Arabic", "Pakistani", "Eid", "Finger", "Feet", "Minimal"];

const breakpoints = {
  default: 4,
  1280:    4,
  1024:    3,
  640:     2,
  480:     2,
  0:       1,
};

export default function MasonryGallery({ designs, title, showFilter = false }: Props) {
  const [active, setActive]       = useState("All");
  const [visible, setVisible]     = useState(24);
  const [loading, setLoading]     = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  const filtered = active === "All"
    ? designs
    : designs.filter((d) =>
        d.category.toLowerCase().includes(active.toLowerCase()) ||
        d.tags.some((t) => t.toLowerCase().includes(active.toLowerCase()))
      );

  const shown = filtered.slice(0, visible);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible((v) => v + 24);
      setLoading(false);
    }, 300);
  };

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 max-w-7xl mx-auto">

      {/* Title */}
      {title && (
        <div className="flex items-center gap-3 mb-7 sm:mb-9">
          <div className="w-9 h-9 rounded-xl bg-henna-100 dark:bg-henna-800 flex items-center justify-center shrink-0">
            <LayoutGrid size={15} className="text-henna-500" />
          </div>
          <h2 className="section-title mb-0 text-xl sm:text-2xl">{title}</h2>
        </div>
      )}

      {/* Filter pills */}
      {showFilter && (
        <div className="flex gap-2 overflow-x-auto pb-2 mb-7 sm:mb-8 snap-x scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0 sm:flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setVisible(24); }}
              className={`shrink-0 snap-start text-xs sm:text-sm px-4 py-2 rounded-full font-semibold transition-all duration-200 border ${
                active === cat
                  ? "bg-henna-400 text-white border-henna-400 shadow-sm shadow-henna-400/30"
                  : "tag-pill"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Count */}
      {showFilter && (
        <p className="text-xs text-henna-400 mb-5">
          Showing <span className="font-semibold text-henna-500">{Math.min(visible, filtered.length)}</span> of{" "}
          <span className="font-semibold text-henna-500">{filtered.length}</span> designs
        </p>
      )}

      {/* Masonry grid */}
      {isMounted ? (
        <Masonry
          breakpointCols={breakpoints}
          className="masonry-grid"
          columnClassName="masonry-col"
        >
          {shown.map((design) => (
            <div key={design.id}>
              <DesignCard design={design} />
            </div>
          ))}
        </Masonry>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {shown.map((design) => (
            <div key={design.id}>
              <DesignCard design={design} />
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-henna-400">
          <div className="text-4xl mb-3">🌸</div>
          <p className="text-lg font-serif font-semibold mb-1 text-henna-700 dark:text-henna-300">No designs found</p>
          <p className="text-sm opacity-60">Try selecting a different category</p>
        </div>
      )}

      {/* Load more button */}
      {visible < filtered.length && (
        <div className="text-center mt-10 sm:mt-14">
          <button
            onClick={loadMore}
            disabled={loading}
            className="inline-flex items-center gap-2.5 px-9 py-3.5 rounded-full border-2 border-henna-400 text-henna-500 font-bold text-sm hover:bg-henna-400 hover:text-white transition-all duration-200 disabled:opacity-50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-henna-400/25"
          >
            {loading ? (
              <><Loader2 size={15} className="animate-spin" /> Loading…</>
            ) : (
              `Load More Designs (${filtered.length - visible} remaining)`
            )}
          </button>
        </div>
      )}
    </section>
  );
}
