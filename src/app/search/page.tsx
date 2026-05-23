"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import DesignCard from "@/components/gallery/DesignCard";
import BlogCard from "@/components/blog/BlogCard";
import { designs, blogPosts } from "@/data";
import { Search } from "lucide-react";

function SearchResults() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  const matchedDesigns = designs.filter(
    (d) =>
      d.title.toLowerCase().includes(q.toLowerCase()) ||
      d.category.toLowerCase().includes(q.toLowerCase()) ||
      d.tags.some((t) => t.toLowerCase().includes(q.toLowerCase()))
  );

  const matchedPosts = blogPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.category.toLowerCase().includes(q.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Search size={18} className="text-henna-400" />
          <h1 className="font-serif text-2xl font-semibold text-henna-900 dark:text-henna-100">
            Search Results
          </h1>
        </div>
        <p className="text-henna-600 dark:text-henna-400 text-sm">
          {matchedDesigns.length + matchedPosts.length} results for &ldquo;<strong>{q}</strong>&rdquo;
        </p>
      </div>

      {/* Design results */}
      {matchedDesigns.length > 0 && (
        <div className="mb-12">
          <h2 className="section-title">Designs ({matchedDesigns.length})</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {matchedDesigns.map((d) => (
              <DesignCard key={d.id} design={d} />
            ))}
          </div>
        </div>
      )}

      {/* Blog results */}
      {matchedPosts.length > 0 && (
        <div>
          <h2 className="section-title">Articles ({matchedPosts.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedPosts.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      )}

      {/* No results */}
      {matchedDesigns.length === 0 && matchedPosts.length === 0 && (
        <div className="text-center py-20">
          <span className="text-5xl mb-4 block">🌸</span>
          <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-2">
            No results found for &ldquo;{q}&rdquo;
          </h2>
          <p className="text-henna-500 text-sm">Try searching for bridal, arabic, eid, or minimal mehndi</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-henna-400">Searching...</div>}>
      <SearchResults />
    </Suspense>
  );
}
