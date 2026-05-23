"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data";

export default function BlogSection() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 sm:mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-henna-100 dark:bg-henna-800 flex items-center justify-center shadow-sm">
            <BookOpen size={17} className="text-henna-500" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-henna-400 leading-none mb-1">Tips & Tutorials</p>
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-henna-900 dark:text-henna-100 leading-none">
              Latest from the Blog
            </h2>
          </div>
        </div>
        <Link
          href="/blog"
          className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-henna-500 hover:text-henna-400 transition-colors group"
        >
          All Articles
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {latest.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            className="flex flex-col"
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </div>

      {/* Mobile link */}
      <div className="sm:hidden mt-5 text-center">
        <Link href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-henna-500 hover:text-henna-400 transition-colors">
          All Articles <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
