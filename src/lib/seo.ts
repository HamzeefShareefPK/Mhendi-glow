import type { Metadata } from "next";

const BASE_URL = "https://mehndiglow.com";
const SITE_NAME = "MehndiGlow";
const DEFAULT_IMAGE = `${BASE_URL}/images/og-image.jpg`;

// ─── Core SEO builder ───────────────────────────────────────────────────────
interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedAt?: string;
  modifiedAt?: string;
  author?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  keywords = [],
  image,
  url = "/",
  type = "website",
  publishedAt,
  modifiedAt,
  author = SITE_NAME,
  noIndex = false,
}: SEOProps): Metadata {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const ogImage = image || DEFAULT_IMAGE;
  const canonical = `${BASE_URL}${url}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, "mehndi designs", "henna designs", "mehndi 2024"],
    authors: [{ name: author }],
    creator: SITE_NAME,
    publisher: SITE_NAME,

    // Canonical URL
    alternates: { canonical },

    // Robots
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },

    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedAt && { publishedTime: publishedAt }),
      ...(modifiedAt  && { modifiedTime: modifiedAt }),
      ...(type === "article" && { authors: [author] }),
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      site: "@MehndiGlow",
      creator: "@MehndiGlow",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

// ─── Schema.org JSON-LD builders ────────────────────────────────────────────
export const BASE_URL_EXPORT = BASE_URL;
export const SITE_NAME_EXPORT = SITE_NAME;

/** WebSite schema — used on homepage */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    description: "Discover 1000+ beautiful mehndi designs — bridal, Arabic, Pakistani, Eid and more.",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/search?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
    publisher: organizationSchema(),
  };
}

/** Organization schema */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/images/logo.png` },
    sameAs: [
      "https://pinterest.com/mehndiglow",
      "https://instagram.com/mehndiglow",
      "https://facebook.com/mehndiglow",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@mehndiglow.com",
      contactType: "customer support",
    },
  };
}

/** BreadcrumbList schema */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

/** ImageObject schema — for design pages */
export function imageObjectSchema({
  name, description, imageUrl, slug, category, tags, publishedAt,
}: {
  name: string; description: string; imageUrl: string;
  slug: string; category: string; tags: string[]; publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name,
    description,
    contentUrl: imageUrl,
    thumbnailUrl: imageUrl,
    url: `${BASE_URL}/design/${slug}`,
    keywords: tags.join(", "),
    about: { "@type": "Thing", name: category.replace(/-/g, " ") },
    author: organizationSchema(),
    publisher: organizationSchema(),
    datePublished: publishedAt,
    dateModified: publishedAt,
    license: `${BASE_URL}/terms`,
    acquireLicensePage: `${BASE_URL}/contact`,
    copyrightNotice: `© ${new Date().getFullYear()} ${SITE_NAME}`,
  };
}

/** Article schema — for blog posts */
export function articleSchema({
  title, description, imageUrl, slug, author, publishedAt, modifiedAt, keywords,
}: {
  title: string; description: string; imageUrl: string;
  slug: string; author: string; publishedAt: string; modifiedAt: string; keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [imageUrl],
    url: `${BASE_URL}/blog/${slug}`,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: { "@type": "Person", name: author, url: `${BASE_URL}/about` },
    publisher: organizationSchema(),
    keywords: keywords.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/blog/${slug}` },
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };
}

/** CollectionPage schema — for category pages */
export function collectionPageSchema({
  name, description, url, imageUrl, count,
}: {
  name: string; description: string; url: string; imageUrl: string; count: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${name} Mehndi Designs`,
    description,
    url: `${BASE_URL}${url}`,
    image: imageUrl,
    numberOfItems: count,
    publisher: organizationSchema(),
    inLanguage: "en-US",
  };
}

/** FAQPage schema — for blog posts / category pages */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** HowTo schema — for tutorial blog posts */
export function howToSchema({
  name, description, imageUrl, steps, totalTime,
}: {
  name: string; description: string; imageUrl: string;
  steps: { name: string; text: string }[]; totalTime: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    image: imageUrl,
    totalTime,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
    publisher: organizationSchema(),
  };
}
