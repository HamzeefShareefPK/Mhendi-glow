import Link from "next/link";
import type { Category, CategoryArticle as CategoryArticleData } from "@/types";
import { PROSE_CLASS } from "@/lib/prose";
import { MehndiMotif } from "@/components/svg/MehndiMotifs";

// Renders a long-form style guide for a mehndi category. Server component —
// the article HTML stays in the static payload (crawlable, no client JS).
// `article.*.html` is author-controlled static content (see categoryContent.ts),
// so dangerouslySetInnerHTML is safe here (never interpolate user input).
export default function CategoryArticle({
  category,
  article,
}: {
  category: Category;
  article: CategoryArticleData;
}) {
  return (
    <section
      className="max-w-3xl mx-auto px-4 sm:px-6 py-10"
      aria-label={`${category.name} mehndi guide`}
    >
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-henna-900 dark:text-henna-100 mb-4">
        The Complete Guide to {category.name} Mehndi Designs
      </h2>

      {/* Lead / intro */}
      <div
        className={PROSE_CLASS}
        dangerouslySetInnerHTML={{ __html: article.intro }}
      />

      {/* In-page table of contents (anchor links — crawlable, aids navigation) */}
      {article.sections.length > 2 && (
        <nav
          aria-label="On this page"
          className="my-6 p-4 rounded-2xl bg-henna-100/70 dark:bg-henna-800/50 border border-henna-200 dark:border-henna-700"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-henna-600 dark:text-henna-300 mb-2">
            On this page
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
            {article.sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-henna-600 dark:text-henna-300 hover:text-henna-800 hover:underline underline-offset-2"
                >
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Body sections */}
      {article.sections.map((s) => (
        <div key={s.id}>
          <section id={s.id} className="scroll-mt-24">
            <h2 className="font-serif text-2xl font-semibold text-henna-900 dark:text-henna-100 mt-8 mb-3">
              {s.heading}
            </h2>
            <div
              className={PROSE_CLASS}
              dangerouslySetInnerHTML={{ __html: s.html }}
            />
          </section>
          {s.motif && <MehndiMotif name={s.motif} />}
        </div>
      ))}

      {/* Contextual interlinks */}
      {article.contextualLinks && article.contextualLinks.length > 0 && (
        <div className="mt-8 pt-6 border-t border-henna-200 dark:border-henna-800">
          <p className="text-xs text-henna-500 mb-2">Explore related mehndi styles & guides:</p>
          <div className="flex flex-wrap gap-2">
            {article.contextualLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="tag-pill text-xs capitalize"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
