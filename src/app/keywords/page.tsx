import type { Metadata } from "next";
import Link from "next/link";
import { Tag, TrendingUp, Search, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Mehndi Design Keywords — 50 Popular Mehndi Searches | MehndiDesignPics",
  description:
    "Explore 50 most popular mehndi design keywords — bridal mehndi, arabic mehndi, eid mehndi, pakistani mehndi, finger mehndi, feet mehndi and more. Find your perfect henna design.",
  keywords: [
    "mehndi design keywords","popular mehndi searches","mehndi tags",
    "mehndi design topics","henna keywords","mehndi design categories",
    "bridal mehndi designs","arabic mehndi designs","eid mehndi designs",
    "pakistani mehndi","simple mehndi designs","mehndi designs for hands",
    "henna designs","new mehndi designs","beautiful mehndi designs",
    "latest mehndi designs","mehndi for wedding","mehndi design download",
    "front hand mehndi","back hand mehndi","full hand mehndi",
    "minimal mehndi designs","mehndi design for girls","indian mehndi designs",
    "bridal henna designs","traditional mehndi","mehndi patterns",
    "flower mehndi design","finger mehndi designs","feet mehndi designs",
    "easy mehndi designs","stylish mehndi designs","heavy mehndi designs",
    "mehndi art","henna art","mehndi ka design","dulhan mehndi",
    "eid special mehndi","mehndi for kids","modern mehndi designs",
    "mehndi design pics","mehndi design photo","best mehndi designs",
    "trending mehndi designs","free mehndi designs","mehndi design download free",
    "henna mehndi designs","mehndi for bride","arabic henna",
    "mehndi design ideas","mehndidesignpics",
  ],
  alternates: { canonical: "https://mehndidesignpics.com/keywords" },
  openGraph: {
    title: "50 Popular Mehndi Design Keywords | MehndiDesignPics",
    description: "Explore 50 most popular mehndi design searches — find bridal, arabic, eid, minimal and more.",
    type: "website",
  },
};

// 50 keywords with display label, link, and category color
const KEYWORDS = [
  // Bridal
  { label: "Bridal Mehndi Designs",       href: "/bridal-mehndi",      color: "bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200",      group: "Bridal" },
  { label: "Dulhan Mehndi",               href: "/bridal-mehndi",      color: "bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200",      group: "Bridal" },
  { label: "Wedding Mehndi",              href: "/bridal-mehndi",      color: "bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200",      group: "Bridal" },
  { label: "Heavy Bridal Mehndi",         href: "/bridal-mehndi",      color: "bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200",      group: "Bridal" },
  { label: "Full Hand Bridal Mehndi",     href: "/bridal-mehndi",      color: "bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200",      group: "Bridal" },
  // Arabic
  { label: "Arabic Mehndi Designs",       href: "/arabic-mehndi",      color: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200",  group: "Arabic" },
  { label: "Arabic Floral Mehndi",        href: "/arabic-mehndi",      color: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200",  group: "Arabic" },
  { label: "Gulf Style Mehndi",           href: "/arabic-mehndi",      color: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200",  group: "Arabic" },
  { label: "Arabic Half Hand Mehndi",     href: "/arabic-mehndi",      color: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200",  group: "Arabic" },
  // Pakistani
  { label: "Pakistani Mehndi",            href: "/pakistani-mehndi",   color: "bg-green-100 text-green-700 border-green-200 hover:bg-green-200",  group: "Pakistani" },
  { label: "Pakistani Bridal Mehndi",     href: "/pakistani-mehndi",   color: "bg-green-100 text-green-700 border-green-200 hover:bg-green-200",  group: "Pakistani" },
  { label: "Traditional Pakistani Henna", href: "/pakistani-mehndi",   color: "bg-green-100 text-green-700 border-green-200 hover:bg-green-200",  group: "Pakistani" },
  // Eid
  { label: "Eid Mehndi Designs",          href: "/eid-mehndi",         color: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200", group: "Eid" },
  { label: "Eid Special Mehndi",          href: "/eid-mehndi",         color: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200", group: "Eid" },
  { label: "Eid Ul Fitr Mehndi",          href: "/eid-mehndi",         color: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200", group: "Eid" },
  // Finger
  { label: "Finger Mehndi Designs",       href: "/finger-mehndi",      color: "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200", group: "Finger" },
  { label: "Minimal Finger Mehndi",       href: "/finger-mehndi",      color: "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200", group: "Finger" },
  { label: "Single Finger Mehndi",        href: "/finger-mehndi",      color: "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200", group: "Finger" },
  // Feet
  { label: "Feet Mehndi Designs",         href: "/feet-mehndi",        color: "bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200",       group: "Feet" },
  { label: "Ankle Mehndi Design",         href: "/feet-mehndi",        color: "bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200",       group: "Feet" },
  { label: "Bridal Feet Mehndi",          href: "/feet-mehndi",        color: "bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200",       group: "Feet" },
  // Minimal
  { label: "Simple Mehndi Designs",       href: "/minimal-mehndi",     color: "bg-sky-100 text-sky-700 border-sky-200 hover:bg-sky-200",           group: "Minimal" },
  { label: "Minimal Mehndi",              href: "/minimal-mehndi",     color: "bg-sky-100 text-sky-700 border-sky-200 hover:bg-sky-200",           group: "Minimal" },
  { label: "Easy Mehndi Designs",         href: "/minimal-mehndi",     color: "bg-sky-100 text-sky-700 border-sky-200 hover:bg-sky-200",           group: "Minimal" },
  { label: "Office Mehndi Design",        href: "/minimal-mehndi",     color: "bg-sky-100 text-sky-700 border-sky-200 hover:bg-sky-200",           group: "Minimal" },
  // Indian
  { label: "Indian Mehndi Designs",       href: "/indian-mehndi",      color: "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200", group: "Indian" },
  { label: "Rajasthani Mehndi",           href: "/indian-mehndi",      color: "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200", group: "Indian" },
  { label: "Traditional Indian Henna",    href: "/indian-mehndi",      color: "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200", group: "Indian" },
  // Back Hand
  { label: "Back Hand Mehndi",            href: "/back-hand-mehndi",   color: "bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-200",       group: "Back Hand" },
  { label: "Back Hand Full Mehndi",       href: "/back-hand-mehndi",   color: "bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-200",       group: "Back Hand" },
  // Front Hand
  { label: "Front Hand Mehndi",           href: "/front-hand-mehndi",  color: "bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-200", group: "Front Hand" },
  { label: "Full Front Hand Mehndi",      href: "/front-hand-mehndi",  color: "bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-200", group: "Front Hand" },
  // Kids
  { label: "Kids Mehndi Designs",         href: "/kids-mehndi",        color: "bg-lime-100 text-lime-700 border-lime-200 hover:bg-lime-200",       group: "Kids" },
  { label: "Easy Kids Mehndi",            href: "/kids-mehndi",        color: "bg-lime-100 text-lime-700 border-lime-200 hover:bg-lime-200",       group: "Kids" },
  // Stylish
  { label: "Stylish Mehndi Designs",      href: "/stylish-mehndi",     color: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200 hover:bg-fuchsia-200", group: "Stylish" },
  { label: "Modern Mehndi Designs",       href: "/stylish-mehndi",     color: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200 hover:bg-fuchsia-200", group: "Stylish" },
  { label: "Trendy Mehndi 2026",          href: "/stylish-mehndi",     color: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200 hover:bg-fuchsia-200", group: "Stylish" },
  // General / Search
  { label: "Mehndi Designs 2026",         href: "/categories",         color: "bg-henna-100 text-henna-700 border-henna-200 hover:bg-henna-200",   group: "General" },
  { label: "Beautiful Mehndi Designs",    href: "/categories",         color: "bg-henna-100 text-henna-700 border-henna-200 hover:bg-henna-200",   group: "General" },
  { label: "New Mehndi Designs",          href: "/categories",         color: "bg-henna-100 text-henna-700 border-henna-200 hover:bg-henna-200",   group: "General" },
  { label: "Henna Designs",               href: "/categories",         color: "bg-henna-100 text-henna-700 border-henna-200 hover:bg-henna-200",   group: "General" },
  { label: "Free Mehndi Design Download", href: "/categories",         color: "bg-henna-100 text-henna-700 border-henna-200 hover:bg-henna-200",   group: "General" },
  { label: "Mehndi Design Photos",        href: "/categories",         color: "bg-henna-100 text-henna-700 border-henna-200 hover:bg-henna-200",   group: "General" },
  { label: "Latest Mehndi Designs",       href: "/categories",         color: "bg-henna-100 text-henna-700 border-henna-200 hover:bg-henna-200",   group: "General" },
  { label: "Mehndi Design for Girls",     href: "/categories",         color: "bg-henna-100 text-henna-700 border-henna-200 hover:bg-henna-200",   group: "General" },
  { label: "Mehndi Ka Design",            href: "/categories",         color: "bg-henna-100 text-henna-700 border-henna-200 hover:bg-henna-200",   group: "General" },
  { label: "Mehndi Design for Bride",     href: "/bridal-mehndi",      color: "bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200",      group: "Bridal" },
  // Tattoo
  { label: "Mehndi Tattoo Designs",       href: "/mehndi-tattoo",      color: "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200",         group: "Tattoo" },
  { label: "Black Mehndi Tattoo",         href: "/mehndi-tattoo",      color: "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200",         group: "Tattoo" },
  { label: "Temporary Henna Tattoo",      href: "/mehndi-tattoo",      color: "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200",         group: "Tattoo" },
  // AI
  { label: "AI Mehndi Generator",         href: "/ai-generator",       color: "bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200", group: "Tools" },
  { label: "Mehndi Design Generator",     href: "/ai-generator",       color: "bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200", group: "Tools" },
];

// Group names and their badge colors
const GROUP_BADGE: Record<string, string> = {
  Bridal:      "bg-rose-500",
  Arabic:      "bg-amber-500",
  Pakistani:   "bg-green-600",
  Eid:         "bg-yellow-500",
  Finger:      "bg-purple-500",
  Feet:        "bg-pink-500",
  Minimal:     "bg-sky-500",
  Indian:      "bg-orange-500",
  "Back Hand": "bg-teal-500",
  "Front Hand":"bg-indigo-500",
  Kids:        "bg-lime-600",
  Stylish:     "bg-fuchsia-500",
  General:     "bg-henna-500",
  Tattoo:      "bg-gray-600",
  Tools:       "bg-violet-500",
};

const groups = Array.from(new Set(KEYWORDS.map((k) => k.group)));

export default function KeywordsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-henna-50/60 to-white dark:from-henna-950 dark:to-henna-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-henna-400/10 border border-henna-400/30 text-henna-500 text-xs font-semibold mb-4">
            <Tag size={13} />
            50 Popular Keywords
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-henna-900 dark:text-henna-100 mb-4 leading-tight">
            Mehndi Design Keywords
          </h1>
          <p className="text-henna-600 dark:text-henna-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Browse 50 most popular mehndi design searches. Click any keyword to explore
            beautiful designs — bridal, arabic, eid, minimal and more.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6">
            {[
              { icon: <TrendingUp size={15} />, label: "50 Keywords" },
              { icon: <Search size={15} />,    label: "12 Categories" },
              { icon: <Sparkles size={15} />,  label: "1000+ Designs" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-1.5 text-sm text-henna-500">
                {s.icon}
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* All 50 keywords — Tag Cloud */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-henna-900 dark:text-henna-100 mb-6 text-center">
            All 50 Mehndi Keywords
          </h2>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {KEYWORDS.map((kw) => (
              <Link
                key={kw.label}
                href={kw.href}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${kw.color}`}
              >
                <Tag size={12} />
                {kw.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Keywords by Category */}
        <section>
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-henna-900 dark:text-henna-100 mb-8 text-center">
            Keywords by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {groups.map((group) => {
              const groupKws = KEYWORDS.filter((k) => k.group === group);
              const badgeColor = GROUP_BADGE[group] ?? "bg-henna-500";
              return (
                <div
                  key={group}
                  className="bg-white dark:bg-henna-900 rounded-2xl border border-henna-200/60 dark:border-henna-800 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2.5 h-2.5 rounded-full ${badgeColor}`} />
                    <h3 className="font-semibold text-henna-900 dark:text-henna-100 text-sm">
                      {group} Mehndi
                    </h3>
                    <span className="ml-auto text-xs text-henna-400 bg-henna-100 dark:bg-henna-800 px-2 py-0.5 rounded-full">
                      {groupKws.length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {groupKws.map((kw) => (
                      <Link
                        key={kw.label}
                        href={kw.href}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all hover:-translate-y-px ${kw.color}`}
                      >
                        {kw.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-14 text-center p-8 rounded-2xl bg-gradient-to-r from-henna-100 to-henna-50 dark:from-henna-900 dark:to-henna-800 border border-henna-200/60 dark:border-henna-700">
          <h2 className="font-serif text-2xl font-semibold text-henna-900 dark:text-henna-100 mb-3">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-henna-600 dark:text-henna-400 text-sm mb-5">
            Use our AI Generator to describe your exact mehndi style and get instant design inspiration.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/ai-generator"
              className="btn-primary"
            >
              <Sparkles size={15} />
              Try AI Generator
            </Link>
            <Link
              href="/categories"
              className="btn-outline"
            >
              Browse All Categories
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
