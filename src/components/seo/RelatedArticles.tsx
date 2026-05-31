import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data";
import { getRelatedPosts } from "@/lib/related";
import type { BlogPost } from "@/types";

// Internal-linking module: surfaces related blog posts. Pass a `post` to get
// scored related articles, or a `category` to surface posts in that area.
// This is what creates blog→blog and gallery→blog links that didn't exist.
export default function RelatedArticles({
  post,
  category,
  heading = "Related Mehndi Guides & Articles",
  limit = 3,
}: {
  post?: BlogPost;
  category?: string;
  heading?: string;
  limit?: number;
}) {
  let picks: BlogPost[] = [];

  if (post) {
    picks = getRelatedPosts(post, blogPosts, limit);
  } else if (category) {
    const cat = category.toLowerCase();
    const matches = blogPosts.filter(
      (p) =>
        p.category.toLowerCase().includes(cat) ||
        cat.includes(p.category.toLowerCase()) ||
        (p.tags ?? []).some((t) => cat.includes(t.toLowerCase())),
    );
    picks = (matches.length ? matches : blogPosts).slice(0, limit);
  } else {
    picks = blogPosts.slice(0, limit);
  }

  if (picks.length === 0) return null;

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 py-10 border-t border-henna-200 dark:border-henna-800"
      aria-label={heading}
    >
      <h2 className="section-title">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {picks.map((p) => (
          <BlogCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  );
}
