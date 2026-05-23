import type { Metadata } from "next";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data";

export const metadata: Metadata = {
  title: "Mehndi Design Blog — Tips, Tutorials & Trends | MehndiGlow",
  description:
    "Read the latest mehndi design articles — bridal tips, arabic tutorials, eid ideas, and expert mehndi advice.",
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
