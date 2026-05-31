// Design type
export interface Design {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  alt: string;
  description: string;
  featured: boolean;
  trending: boolean;
  createdAt: string;
}

// Blog post type
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  alt: string;
  author: string;
  readTime: number;
  views: number;
  publishedAt: string;
  tags?: string[];
}

// Category type
export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  count: number;
  keyword: string;
  updatedAt?: string;
}

// ── Long-form article types (category style guides) ──────────────────────────
export type MotifName =
  | "paisley" | "floral" | "mandala" | "vine" | "lotus" | "border";

export interface ArticleSection {
  id: string;        // anchor slug, e.g. "how-to-apply"
  heading: string;   // H2 text
  html: string;      // inner HTML for this section's body (author-controlled, static)
  motif?: MotifName; // optional SVG divider rendered AFTER this section
}

export interface CategoryArticle {
  slug: string;                                         // matches Category.slug
  intro: string;                                        // lead paragraph HTML
  sections: ArticleSection[];                           // 7–9 sections (>2500 words)
  faqs: { question: string; answer: string }[];         // 5–6 per category
  contextualLinks?: { label: string; href: string }[];  // in-article deep links
}
