import type { Metadata } from "next";
import Link from "next/link";
import { categories, blogPosts, designs } from "@/data";

export const metadata: Metadata = {
  title: "Sitemap — MehndiGlow",
  description: "Browse all pages, categories, designs, and blog posts on MehndiGlow.",
  robots: { index: true, follow: true },
};

interface SitemapGroup {
  title: string;
  icon: string;
  links: { label: string; url: string; desc?: string }[];
}

export default function SitemapPage() {
  const groups: SitemapGroup[] = [
    {
      title: "Main Pages",
      icon: "🏠",
      links: [
        { label: "Homepage",        url: "/",               desc: "Browse all mehndi designs" },
        { label: "Blog",            url: "/blog",           desc: "Mehndi tips, tutorials & trends" },
        { label: "All Categories",  url: "/categories",     desc: "Browse by design category" },
        { label: "About Us",        url: "/about",          desc: "Our story and mission" },
        { label: "Contact",         url: "/contact",        desc: "Get in touch with us" },
      ],
    },
    {
      title: "Mehndi Categories",
      icon: "🌸",
      links: categories.map((c) => ({
        label: `${c.name} Mehndi`,
        url:   `/${c.slug}`,
        desc:  `${c.count}+ designs`,
      })),
    },
    {
      title: "Latest Blog Posts",
      icon: "📝",
      links: blogPosts.map((p) => ({
        label: p.title,
        url:   `/blog/${p.slug}`,
        desc:  `${p.readTime} min read`,
      })),
    },
    {
      title: "Featured Designs",
      icon: "✨",
      links: designs
        .filter((d) => d.featured)
        .map((d) => ({
          label: d.title,
          url:   `/design/${d.slug}`,
          desc:  d.category.replace(/-/g, " "),
        })),
    },
    {
      title: "Legal Pages",
      icon: "📋",
      links: [
        { label: "Privacy Policy",    url: "/privacy-policy",  desc: "How we use your data" },
        { label: "Disclaimer",        url: "/disclaimer",      desc: "Content disclaimer" },
        { label: "Terms & Conditions",url: "/terms",           desc: "Usage terms" },
        { label: "DMCA Policy",       url: "/dmca",            desc: "Copyright & removal requests" },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <nav className="text-xs text-henna-500 mb-3 flex items-center gap-1">
          <Link href="/" className="hover:text-henna-400">Home</Link>
          <span>/</span>
          <span className="text-henna-700 dark:text-henna-300">Sitemap</span>
        </nav>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-henna-900 dark:text-henna-100 mb-2">
          Website Sitemap
        </h1>
        <p className="text-henna-600 dark:text-henna-400">
          A complete overview of all pages on MehndiGlow. Find any page quickly.
        </p>

        {/* XML sitemap link */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-henna-100 dark:bg-henna-800 border border-henna-200 dark:border-henna-700">
          <span className="text-xs text-henna-600 dark:text-henna-400">XML Sitemap for Google:</span>
          <a
            href="/sitemap.xml"
            target="_blank"
            className="text-xs text-henna-400 hover:underline font-medium"
          >
            /sitemap.xml →
          </a>
          <a
            href="/sitemap-images.xml"
            target="_blank"
            className="text-xs text-henna-400 hover:underline font-medium"
          >
            /sitemap-images.xml →
          </a>
        </div>
      </div>

      {/* Sitemap groups */}
      <div className="space-y-10">
        {groups.map((group) => (
          <section key={group.title} aria-labelledby={`group-${group.title}`}>
            <h2
              id={`group-${group.title}`}
              className="flex items-center gap-2 font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-4 pb-2 border-b border-henna-200 dark:border-henna-800"
            >
              <span>{group.icon}</span>
              {group.title}
              <span className="text-sm font-normal text-henna-400 ml-1">
                ({group.links.length})
              </span>
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {group.links.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="flex items-start gap-2 p-3 rounded-xl hover:bg-henna-100 dark:hover:bg-henna-800 transition-colors group"
                  >
                    <span className="text-henna-400 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                    <div>
                      <span className="text-sm font-medium text-henna-800 dark:text-henna-200 group-hover:text-henna-400 transition-colors">
                        {link.label}
                      </span>
                      {link.desc && (
                        <span className="block text-xs text-henna-500 mt-0.5 capitalize">
                          {link.desc}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-12 p-6 bg-henna-100 dark:bg-henna-800 rounded-2xl border border-henna-200 dark:border-henna-700">
        <h2 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-4">
          📊 Website Stats
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Designs",    value: designs.length.toString() + "+" },
            { label: "Categories",       value: categories.length.toString() },
            { label: "Blog Articles",    value: blogPosts.length.toString() + "+" },
            { label: "Sitemap Entries",  value: (designs.length + blogPosts.length + categories.length + 10).toString() + "+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-2xl font-semibold text-henna-400">{stat.value}</div>
              <div className="text-xs text-henna-600 dark:text-henna-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
