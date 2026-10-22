// Helpers for deriving structured data from a blog post's OWN rendered
// content, so schema always matches what is visible on the page.

export interface ContentSection {
  heading: string;
  /** Plain-text prose from the section (first paragraph text). */
  text: string;
}

function decodeEntities(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rdquo;/g, "”")
    .replace(/&ldquo;/g, "“")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–");
}

export function stripHtml(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function firstSentences(text: string, maxChars: number): string {
  const parts = text.match(/[^.!?]+[.!?]+["'”’]?\s*/g) || [text];
  let out = "";
  for (const raw of parts) {
    const s = raw.trim();
    if (!s) continue;
    if (out && out.length + s.length > maxChars) break;
    out = out ? out + " " + s : s;
    if (out.length >= maxChars * 0.6) break;
  }
  return out.trim();
}

/** Split a post's HTML content into its h2 sections, in order. */
export function extractSections(html: string): ContentSection[] {
  if (!html) return [];
  const chunks = html.split(/<h2[^>]*>/i).slice(1);
  const sections: ContentSection[] = [];
  for (const chunk of chunks) {
    const end = chunk.indexOf("</h2>");
    if (end < 0) continue;
    const heading = stripHtml(chunk.slice(0, end)).replace(/^\d+\.\s*/, "").trim();
    const body = chunk.slice(end + 5).replace(/<blockquote[\s\S]*?<\/blockquote>/gi, " ");
    const paras = Array.from(body.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi))
      .map((m) => stripHtml(m[1]))
      .filter((t) => t.length >= 40);
    if (!heading || paras.length === 0) continue;
    sections.push({ heading, text: firstSentences(paras.join(" "), 600) });
  }
  return sections;
}

/**
 * Build HowTo steps from the post's own sections — the step names and texts
 * are the article's real section headings and prose, i.e. exactly what a
 * reader sees on the page. Only used for genuine step-by-step tutorials.
 */
export function howToStepsFromContent(
  html: string,
  maxSteps = 12,
): { name: string; text: string }[] {
  return extractSections(html)
    .slice(0, maxSteps)
    .map((s) => ({ name: s.heading, text: firstSentences(s.text, 320) }))
    .filter((s) => s.name.length > 0 && s.text.length >= 40);
}
