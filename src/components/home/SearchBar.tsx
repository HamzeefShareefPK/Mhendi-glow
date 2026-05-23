"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, TrendingUp, Crown, Flower2, Moon, Star, Minus, Hand, Footprints, Baby, ArrowRight } from "lucide-react";

const QUICK_TAGS = [
  { label: "Bridal",    icon: Crown,       slug: "bridal" },
  { label: "Arabic",    icon: Flower2,     slug: "arabic" },
  { label: "Eid",       icon: Moon,        slug: "eid" },
  { label: "Pakistani", icon: Star,        slug: "pakistani" },
  { label: "Minimal",   icon: Minus,       slug: "minimal" },
  { label: "Finger",    icon: Hand,        slug: "finger" },
  { label: "Feet",      icon: Footprints,  slug: "feet" },
  { label: "Kids",      icon: Baby,        slug: "kids" },
];

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <section className="relative -mt-6 z-20 max-w-2xl mx-auto px-4 sm:px-6 pb-2">

      <div className={`bg-white dark:bg-henna-900 rounded-3xl border transition-all duration-300 ${
        focused
          ? "border-henna-300 dark:border-henna-700 shadow-xl shadow-henna-400/15"
          : "border-henna-200/80 dark:border-henna-800 shadow-lg shadow-henna-900/8"
      } p-4 sm:p-5`}>

        {/* Search form */}
        <form onSubmit={handleSearch}>
          <div className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-200 ${
            focused
              ? "bg-henna-50 dark:bg-henna-800/80 ring-2 ring-henna-400/25"
              : "bg-henna-50/70 dark:bg-henna-800/40 ring-1 ring-henna-200/50 dark:ring-henna-700/40"
          }`}>
            <Search
              size={16}
              className={`shrink-0 transition-colors duration-200 ${focused ? "text-henna-500" : "text-henna-400/50"}`}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search bridal, arabic, eid mehndi designs…"
              className="flex-1 bg-transparent text-henna-800 dark:text-henna-100 placeholder:text-henna-400/45 text-sm sm:text-[15px] py-1 outline-none font-medium"
            />
            <button
              type="submit"
              disabled={!query.trim()}
              className="shrink-0 inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-sm font-bold disabled:opacity-35 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-md hover:shadow-henna-400/25 hover:-translate-y-px active:scale-95"
              style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)", color: "#FDF8F2" }}
            >
              Search
              <ArrowRight size={13} className="hidden sm:block" />
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-4 mb-3.5">
          <div className="flex-1 h-px bg-henna-100 dark:bg-henna-800/60" />
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-henna-400/55 uppercase tracking-[0.12em]">
            <TrendingUp size={9} />
            Popular Searches
          </div>
          <div className="flex-1 h-px bg-henna-100 dark:bg-henna-800/60" />
        </div>

        {/* Quick tag pills */}
        <div className="flex flex-wrap gap-1.5">
          {QUICK_TAGS.map((tag) => (
            <button
              key={tag.label}
              onClick={() => router.push(`/search?q=${encodeURIComponent(tag.slug)}`)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border border-henna-200/70 dark:border-henna-700/60 text-henna-600/80 dark:text-henna-400 bg-white dark:bg-transparent hover:bg-henna-400 hover:text-white hover:border-henna-400 dark:hover:bg-henna-400 dark:hover:border-henna-400 dark:hover:text-white transition-all duration-200 hover:-translate-y-px hover:shadow-sm hover:shadow-henna-400/20 tracking-wide"
            >
              <tag.icon size={10} />
              {tag.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
