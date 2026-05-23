import type { Metadata } from "next";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data";

export const metadata: Metadata = {
  title: "Mehndi Design Blog — Tips, Tutorials & Trends | MehndiGlow",
  description:
    "Read the latest mehndi design articles — bridal tips, arabic tutorials, eid ideas, and expert mehndi advice.",
  keywords: [
    "mehndi blog","mehndi tips","henna tips","mehndi tutorials",
    "how to apply mehndi","mehndi design tips","bridal mehndi tips",
    "arabic mehndi tutorial","eid mehndi ideas","mehndi aftercare",
    "mehndi color tips","dark mehndi tips","mehndi for beginners",
    "mehndi paste recipe","how to make mehndi","mehndi cone tips",
    "mehndi removal tips","mehndi care guide","henna tutorial",
    "mehndi design guide","mehndi step by step","mehndi diy",
    "mehndi at home","mehndi artist tips","professional mehndi",
    "mehndi design blog 2026","mehndi trends 2026","latest mehndi trends",
    "best mehndi tips","henna art blog","mehndi news","mehndi ideas",
    "mehndi patterns blog","bridal henna tips","wedding mehndi guide",
    "mehndi inspiration","mehndi design articles","mehndi how to",
    "natural henna tips","henna powder guide","mehndi powder tips",
    "mehndi application guide","mehndi design help","mehndi questions",
    "henna how to","mehndi technique","mehndi color dark tips",
    "mehndi stain tips","mehndi blog 2026","henna blog","mehndi info",
  ],
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-henna-900 dark:text-henna-100 mb-3">
          Mehndi Blog
        </h1>
        <p className="text-henna-600 dark:text-henna-400 max-w-xl mx-auto">
          Tips, tutorials, trends and inspiration — everything about mehndi in one place.
        </p>
      </div>

      {/* Blog grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
