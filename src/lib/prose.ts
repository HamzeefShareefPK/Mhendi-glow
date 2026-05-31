// Shared long-form typography classes.
//
// We intentionally do NOT use the @tailwindcss/typography plugin (it is not
// installed). This Tailwind arbitrary-variant string is the single source of
// truth for styling author-controlled article HTML, reused by the blog post
// page and the category style-guide articles so every long-form surface looks
// identical.
export const PROSE_CLASS =
  "max-w-none text-henna-700 dark:text-henna-300 leading-relaxed text-sm sm:text-base " +
  "[&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-henna-900 [&_h2]:dark:text-henna-100 [&_h2]:mt-8 [&_h2]:mb-3 " +
  "[&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-henna-800 [&_h3]:dark:text-henna-200 [&_h3]:mt-6 [&_h3]:mb-2 " +
  "[&_p]:mb-4 [&_p.lead]:text-base [&_p.lead]:sm:text-lg [&_p.lead]:font-medium [&_p.lead]:text-henna-800 [&_p.lead]:dark:text-henna-200 " +
  "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mb-4 " +
  "[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_ol]:mb-4 " +
  "[&_li]:text-henna-700 [&_li]:dark:text-henna-300 " +
  "[&_strong]:text-henna-800 [&_strong]:dark:text-henna-200 [&_strong]:font-semibold " +
  "[&_blockquote]:my-8 [&_blockquote]:p-5 [&_blockquote]:bg-henna-100 [&_blockquote]:dark:bg-henna-800 [&_blockquote]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-henna-400 " +
  "[&_blockquote_p]:text-henna-800 [&_blockquote_p]:dark:text-henna-200 [&_blockquote_p]:font-medium [&_blockquote_p]:italic [&_blockquote_p]:mb-0 " +
  "[&_a]:text-henna-600 [&_a]:dark:text-henna-300 [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-henna-700";
