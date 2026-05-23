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
}

// Category type
export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  count: number;
  keyword: string;
}
