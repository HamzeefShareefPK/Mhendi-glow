import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Eye, ArrowLeft, Calendar, User } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import Breadcrumb from "@/components/seo/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd";
import FAQSection from "@/components/seo/FAQSection";
import { articleSchema, howToSchema } from "@/lib/seo";
import { blogPosts } from "@/data";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | MehndiGlow`,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(), post.title.toLowerCase(),
      "mehndi designs 2026","bridal mehndi designs","arabic mehndi designs",
      "eid mehndi designs","pakistani mehndi","simple mehndi designs",
      "mehndi designs for hands","henna designs","beautiful mehndi designs",
      "latest mehndi designs","mehndi tips","henna tips","mehndi tutorials",
      "how to apply mehndi","mehndi design tips","bridal mehndi tips",
      "arabic mehndi tutorial","eid mehndi ideas","mehndi aftercare",
      "mehndi color tips","dark mehndi tips","mehndi for beginners",
      "mehndi paste recipe","how to make mehndi","mehndi cone tips",
      "mehndi removal tips","mehndi care guide","henna tutorial",
      "mehndi design guide","mehndi step by step","mehndi diy",
      "mehndi at home","mehndi artist tips","professional mehndi",
      "mehndi trends 2026","latest mehndi trends","best mehndi tips",
      "henna art blog","mehndi inspiration","mehndi design articles",
      "natural henna tips","henna powder guide","mehndi application guide",
      "mehndi technique","mehndi color dark tips","mehndi stain tips",
      "mehndi blog 2026","henna blog","mehndidesignpics blog",
    ],
    alternates: { canonical: `https://mehndidesignpics.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, alt: post.alt }],
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

// How-To steps for tutorial posts
const HOW_TO_STEPS = [
  { name: "Prepare your henna paste",   text: "Mix natural henna powder with lemon juice, sugar, and essential oil. Let it rest for 6–8 hours." },
  { name: "Fill the cone",              text: "Fill a mehndi cone with the prepared paste. Seal the back tightly." },
  { name: "Clean and prep your skin",   text: "Wash hands thoroughly and apply a thin layer of eucalyptus oil for better color." },
  { name: "Start with basic outline",   text: "Begin with the main design outline. Keep the cone at a 45-degree angle for consistent lines." },
  { name: "Add details and fill",       text: "Add inner details, dots, and fill in the pattern areas for depth." },
  { name: "Let it dry completely",      text: "Allow the mehndi to dry for 6–8 hours. Apply lemon-sugar solution to keep it moist." },
  { name: "Remove and moisturize",      text: "Scrape off dried mehndi (don't wash). Apply mustard oil for a deeper color." },
];

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const isHowTo = post.title.toLowerCase().includes("how to") || post.title.toLowerCase().includes("step by step");

  const schemas = [
    articleSchema({
      title:       post.title,
      description: post.excerpt,
      imageUrl:    post.coverImage,
      slug:        post.slug,
      author:      post.author,
      publishedAt: post.publishedAt,
      modifiedAt:  post.publishedAt,
      keywords:    [post.category, "mehndi", "henna"],
    }),
    ...(isHowTo ? [howToSchema({
      name:        post.title,
      description: post.excerpt,
      imageUrl:    post.coverImage,
      steps:       HOW_TO_STEPS,
      totalTime:   "PT30M",
    })] : []),
  ];

  const POST_FAQS = [
    { question: `How to do ${post.category.toLowerCase()} mehndi at home?`, answer: `To do ${post.category.toLowerCase()} mehndi at home, you need a good henna cone, a steady hand, and a reference design. Start with simple patterns and practice on paper first. Natural henna paste gives the best color.` },
    { question: `What is the best henna brand for ${post.category.toLowerCase()} mehndi?`, answer: "The best henna brands are Neha Henna, Al Noor, and Golecha. Always use natural henna without chemicals for safe, dark color." },
    { question: "How long does it take to learn mehndi?", answer: "Basic mehndi patterns can be learned in 2–4 weeks of daily practice. Intermediate designs take 2–3 months. Professional-level bridal mehndi may take 6–12 months of consistent practice." },
  ];

  return (
    <>
      <JsonLd data={schemas} />

      <article
        className="max-w-3xl mx-auto px-4 sm:px-6 py-10"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { name: "Blog",       url: "/blog" },
          { name: post.title,   url: `/blog/${post.slug}` },
        ]} />

        {/* Category + meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="cat-badge" itemProp="articleSection">{post.category}</span>
          <span className="flex items-center gap-1 text-xs text-henna-500">
            <Calendar size={11} />
            <time dateTime={post.publishedAt} itemProp="datePublished">
              {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          </span>
          <span className="flex items-center gap-1 text-xs text-henna-500">
            <User size={11} />
            <span itemProp="author">{post.author}</span>
          </span>
          <span className="flex items-center gap-1 text-xs text-henna-500">
            <Clock size={11} /> {post.readTime} min read
          </span>
          <span className="flex items-center gap-1 text-xs text-henna-500">
            <Eye size={11} /> {post.views.toLocaleString()} views
          </span>
        </div>

        {/* H1 — Primary keyword */}
        <h1
          className="font-serif text-3xl sm:text-4xl font-semibold text-henna-900 dark:text-henna-100 leading-tight mb-6"
          itemProp="headline"
        >
          {post.title}
        </h1>

        {/* Cover image */}
        <figure className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-henna-200 dark:border-henna-800">
          <Image
            src={post.coverImage}
            alt={post.alt}
            fill
            className="object-cover"
            priority
            itemProp="image"
          />
          <figcaption className="sr-only">{post.alt}</figcaption>
        </figure>

        {/* Article content */}
        <div
          className="prose prose-henna max-w-none text-henna-700 dark:text-henna-300 leading-relaxed text-sm sm:text-base
            [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-henna-900 [&_h2]:dark:text-henna-100 [&_h2]:mt-8 [&_h2]:mb-3
            [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-henna-800 [&_h3]:dark:text-henna-200 [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:mb-4 [&_p.lead]:text-base [&_p.lead]:sm:text-lg [&_p.lead]:font-medium [&_p.lead]:text-henna-800 [&_p.lead]:dark:text-henna-200
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mb-4
            [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_ol]:mb-4
            [&_li]:text-henna-700 [&_li]:dark:text-henna-300
            [&_strong]:text-henna-800 [&_strong]:dark:text-henna-200 [&_strong]:font-semibold
            [&_blockquote]:my-8 [&_blockquote]:p-5 [&_blockquote]:bg-henna-100 [&_blockquote]:dark:bg-henna-800 [&_blockquote]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-henna-400
            [&_blockquote_p]:text-henna-800 [&_blockquote_p]:dark:text-henna-200 [&_blockquote_p]:font-medium [&_blockquote_p]:italic [&_blockquote_p]:mb-0
            [&_a]:text-henna-400 [&_a]:hover:underline"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-henna-200 dark:border-henna-800">
          {["mehndi", "henna", post.category.toLowerCase(), "mehndi designs 2026", "mehndi tips"].map((tag) => (
            <Link
              key={tag}
              href={`/search?q=${encodeURIComponent(tag)}`}
              className="tag-pill text-xs"
              rel="tag"
            >
              #{tag}
            </Link>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-henna-400 hover:text-henna-500 font-medium transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </article>

      {/* FAQ — People Also Ask */}
      <FAQSection faqs={POST_FAQS} title="Mehndi Questions & Answers" />

      {/* Related posts */}
      {related.length > 0 && (
        <section
          className="max-w-7xl mx-auto px-4 sm:px-6 py-10 border-t border-henna-200 dark:border-henna-800"
          aria-label="Related articles"
        >
          <h2 className="section-title">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => <BlogCard key={p.id} post={p} />)}
          </div>
        </section>
      )}
    </>
  );
}
