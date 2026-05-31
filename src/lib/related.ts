import type { BlogPost } from "@/types";

const STOP = new Set([
  "the", "and", "for", "with", "your", "how", "to", "a", "an", "of", "in",
  "on", "is", "best", "mehndi", "design", "designs", "henna", "2026", "2025",
]);

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
}

// Score-based related posts: same category first, then keyword/tag overlap on
// title + excerpt + tags, then recency. Replaces the naive `.slice(0, 3)`.
export function getRelatedPosts(
  post: BlogPost,
  all: BlogPost[],
  n = 3,
): BlogPost[] {
  const baseTokens = new Set([
    ...tokens(`${post.title} ${post.excerpt}`),
    ...(post.tags ?? []).map((t) => t.toLowerCase()),
  ]);

  const scored = all
    .filter((p) => p.id !== post.id)
    .map((p) => {
      let score = 0;
      if (p.category === post.category) score += 5;
      const pTokens = new Set([
        ...tokens(`${p.title} ${p.excerpt}`),
        ...(p.tags ?? []).map((t) => t.toLowerCase()),
      ]);
      pTokens.forEach((t) => {
        if (baseTokens.has(t)) score += 1;
      });
      // Tiebreaker: more recent posts rank slightly higher.
      const recency = new Date(p.publishedAt).getTime() / 1e13;
      return { post: p, score: score + recency };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, n).map((s) => s.post);
}
