import type { Metadata } from "next";
import {
  primaryKeywords, categoryKeywords, longTailKeywords,
  seasonalKeywords, questionKeywords, contentCalendar,
  keywordClusters, updatedYearKeywords, aiGeneratorKeywords,
  regionalKeywords, occasionKeywords, styleLongTailKeywords,
  bodyPartKeywords, difficultyKeywords, extraLongTailKeywords,
} from "@/data/keywords";

export const metadata: Metadata = {
  title: "Keyword Strategy — MehndiGlow",
  robots: { index: false, follow: false }, // Don't index this internal page
};

const DIFF_COLOR: Record<string, string> = {
  LOW:    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  MEDIUM: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  HIGH:   "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};
const PRI_COLOR: Record<string, string> = {
  HIGH:   "bg-henna-400 text-white",
  MEDIUM: "bg-henna-200 text-henna-800",
  LOW:    "bg-henna-100 text-henna-600",
};

export default function KeywordsPage() {
  const allKeywords = [
    ...primaryKeywords, ...categoryKeywords, ...longTailKeywords,
    ...seasonalKeywords, ...questionKeywords, ...updatedYearKeywords,
    ...aiGeneratorKeywords, ...regionalKeywords, ...occasionKeywords,
    ...styleLongTailKeywords, ...bodyPartKeywords, ...difficultyKeywords,
    ...extraLongTailKeywords,
  ];

  const sections = [
    { title: "🎯 Primary Keywords",       data: primaryKeywords,       desc: "Main keywords — use in titles, H1, homepage" },
    { title: "📅 2025/2026 Keywords",     data: updatedYearKeywords,   desc: "Updated year keywords — add to all page titles" },
    { title: "🤖 AI Generator Keywords",  data: aiGeneratorKeywords,   desc: "Use on /ai-generator page title, meta, H1" },
    { title: "📁 Category Keywords",      data: categoryKeywords,      desc: "One per category page H1 and title" },
    { title: "🎨 Style Keywords",         data: styleLongTailKeywords, desc: "Design style specific — use in design titles and alt text" },
    { title: "🌍 Regional Keywords",      data: regionalKeywords,      desc: "Regional mehndi styles — build dedicated blog posts" },
    { title: "🎉 Occasion Keywords",      data: occasionKeywords,      desc: "Event/occasion based — high buyer intent" },
    { title: "💪 Body Part Keywords",     data: bodyPartKeywords,      desc: "Specific body parts — use in design alt text" },
    { title: "⭐ Difficulty Keywords",    data: difficultyKeywords,    desc: "Skill level based — great for blog how-tos" },
    { title: "🐾 Long-Tail Keywords",     data: longTailKeywords,      desc: "Easy to rank — use in blog posts and design pages" },
    { title: "📦 Extra Long-Tail",        data: extraLongTailKeywords, desc: "Urdu/Hindi + download intent keywords" },
    { title: "📅 Seasonal Keywords",      data: seasonalKeywords,      desc: "Publish 3–4 weeks before the occasion" },
    { title: "❓ Question Keywords",      data: questionKeywords,      desc: "Use in FAQ sections and blog post H2s" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-semibold text-henna-900 dark:text-henna-100 mb-2">
          🔑 MehndiGlow Keyword Strategy
        </h1>
        <p className="text-henna-600 dark:text-henna-400 text-sm">
          Complete keyword research — <strong>{allKeywords.length}</strong> keywords across 13 categories.
        </p>
        <div className="flex flex-wrap gap-3 mt-3">
          {[
            { label: "LOW difficulty",  color: "bg-green-100 text-green-700" },
            { label: "MEDIUM difficulty", color: "bg-yellow-100 text-yellow-700" },
            { label: "HIGH difficulty",  color: "bg-red-100 text-red-700" },
          ].map((b) => (
            <span key={b.label} className={`text-xs px-2 py-1 rounded-full ${b.color}`}>{b.label}</span>
          ))}
        </div>
      </div>

      {/* Keyword tables */}
      {sections.map((sec) => (
        <section key={sec.title} className="mb-12">
          <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-1">
            {sec.title}
          </h2>
          <p className="text-xs text-henna-500 mb-4">{sec.desc}</p>

          <div className="overflow-x-auto rounded-xl border border-henna-200 dark:border-henna-800">
            <table className="w-full text-sm">
              <thead className="bg-henna-100 dark:bg-henna-800">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-henna-700 dark:text-henna-300 uppercase tracking-wider">Keyword</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-henna-700 dark:text-henna-300 uppercase tracking-wider">Volume</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-henna-700 dark:text-henna-300 uppercase tracking-wider">Difficulty</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-henna-700 dark:text-henna-300 uppercase tracking-wider">Intent</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-henna-700 dark:text-henna-300 uppercase tracking-wider">Priority</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-henna-700 dark:text-henna-300 uppercase tracking-wider">Use In</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-henna-100 dark:divide-henna-800">
                {sec.data.map((kw, i) => (
                  <tr key={i} className="hover:bg-henna-50 dark:hover:bg-henna-900/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-henna-800 dark:text-henna-200 min-w-[200px]">
                      {kw.keyword}
                    </td>
                    <td className="px-4 py-3 text-henna-600 dark:text-henna-400 font-mono text-xs">
                      {kw.volume}/mo
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${DIFF_COLOR[kw.difficulty] || ""}`}>
                        {kw.difficulty}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-henna-500">{kw.intent}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${PRI_COLOR[kw.priority] || ""}`}>
                        {kw.priority}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-henna-500 max-w-[180px]">{kw.usedIn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* Content Calendar */}
      <section className="mb-12">
        <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-1">
          📅 Content Calendar (4 Months)
        </h2>
        <p className="text-xs text-henna-500 mb-4">Publish these blog posts in order for maximum topical authority</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Month 1", "Month 2", "Month 3", "Month 4"].map((month) => (
            <div key={month} className="border border-henna-200 dark:border-henna-800 rounded-xl overflow-hidden">
              <div className="bg-henna-400 px-4 py-2">
                <h3 className="text-sm font-semibold text-white">{month}</h3>
              </div>
              <ul className="divide-y divide-henna-100 dark:divide-henna-800">
                {contentCalendar
                  .filter((c) => c.month === month)
                  .map((item, i) => (
                    <li key={i} className="px-4 py-3">
                      <p className="text-xs font-medium text-henna-800 dark:text-henna-200 line-clamp-2 mb-1">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${PRI_COLOR[item.priority] || ""}`}>
                          {item.priority}
                        </span>
                        <span className="text-xs text-henna-400 line-clamp-1">{item.keyword}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Keyword Clusters */}
      <section>
        <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-1">
          🕸️ Topical Clusters (Internal Linking)
        </h2>
        <p className="text-xs text-henna-500 mb-4">Link pages within each cluster to build topical authority</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(keywordClusters).map(([cluster, kws]) => (
            <div key={cluster} className="border border-henna-200 dark:border-henna-800 rounded-xl p-4">
              <h3 className="font-semibold text-sm text-henna-900 dark:text-henna-100 mb-3">{cluster}</h3>
              <ul className="space-y-1.5">
                {kws.map((kw) => (
                  <li key={kw} className="flex items-start gap-1.5">
                    <span className="text-henna-400 mt-0.5 flex-shrink-0 text-xs">→</span>
                    <span className="text-xs text-henna-600 dark:text-henna-400">{kw}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
