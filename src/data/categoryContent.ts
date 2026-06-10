import type { CategoryArticle } from "@/types";

// Long-form style guides (2500+ words each) for the in-depth mehndi style pages.
// Each guide lives in its own file under ./articles/ (authored as a unique,
// human-written piece). This module aggregates them and exposes the lookup.

// ── Batch 1 (original 12) ──────────────────────────────────────────────────
import { article as engagement } from "./articles/engagement-mehndi-design";
import { article as peacock }    from "./articles/peacock-mehndi-design";
import { article as mandala }    from "./articles/mandala-mehndi-design";
import { article as dulhan }     from "./articles/dulhan-mehndi-design";
import { article as jewellery }  from "./articles/jewellery-mehndi-design";
import { article as halfHand }   from "./articles/half-hand-mehndi-design";
import { article as wrist }      from "./articles/wrist-mehndi-design";
import { article as rajasthani } from "./articles/rajasthani-mehndi-design";
import { article as moroccan }   from "./articles/moroccan-mehndi-design";
import { article as jaal }       from "./articles/jaal-mehndi-design";
import { article as khafif }     from "./articles/khafif-mehndi-design";
import { article as shaded }     from "./articles/shaded-mehndi-design";

// ── Batch 2 (available so far) ────────────────────────────────────────────
import { article as lotus }      from "./articles/lotus-mehndi-design";
import { article as rose }       from "./articles/rose-mehndi-design";
import { article as vine }       from "./articles/vine-mehndi-design";
import { article as dotwork }    from "./articles/dotwork-mehndi-design";
import { article as mughal }     from "./articles/mughal-mehndi-design";
import { article as sudani }     from "./articles/sudani-mehndi-design";
import { article as kundan }     from "./articles/kundan-mehndi-design";
import { article as indoArabic } from "./articles/indo-arabic-mehndi-design";
import { article as leg }        from "./articles/leg-mehndi-design";
import { article as shoulder }   from "./articles/shoulder-mehndi-design";
import { article as nail }       from "./articles/nail-mehndi-design";

// Sibling-style relationships used by the RelatedCategories module.
export const CATEGORY_RELATIONS: Record<string, string[]> = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────
  "engagement-mehndi-design": ["dulhan-mehndi-design", "bridal-mehndi-design", "minimal-mehndi-design", "jewellery-mehndi-design"],
  "peacock-mehndi-design":    ["bridal-mehndi-design", "rajasthani-mehndi-design", "mandala-mehndi-design", "indian-mehndi-design"],
  "mandala-mehndi-design":    ["circle-mehndi-design", "gol-tikki-mehndi-design", "back-hand-mehndi-design", "floral-mehndi-design"],
  "dulhan-mehndi-design":     ["bridal-mehndi-design", "pakistani-mehndi-design", "jaal-mehndi-design", "rajasthani-mehndi-design"],
  "jewellery-mehndi-design":  ["bridal-mehndi-design", "wrist-mehndi-design", "engagement-mehndi-design", "finger-mehndi-design"],
  "half-hand-mehndi-design":  ["arabic-mehndi-design", "khafif-mehndi-design", "floral-mehndi-design", "front-hand-mehndi-design"],
  "wrist-mehndi-design":      ["minimal-mehndi-design", "jewellery-mehndi-design", "finger-mehndi-design", "easy-mehndi-design"],
  "rajasthani-mehndi-design": ["indian-mehndi-design", "dulhan-mehndi-design", "peacock-mehndi-design", "bridal-mehndi-design"],
  "moroccan-mehndi-design":   ["minimal-mehndi-design", "feet-mehndi-design", "arabic-mehndi-design", "mehndi-tattoo-design"],
  "jaal-mehndi-design":       ["pakistani-mehndi-design", "dulhan-mehndi-design", "back-hand-mehndi-design", "bridal-mehndi-design"],
  "khafif-mehndi-design":     ["arabic-mehndi-design", "easy-mehndi-design", "minimal-mehndi-design", "half-hand-mehndi-design"],
  "shaded-mehndi-design":     ["arabic-mehndi-design", "floral-mehndi-design", "dulhan-mehndi-design", "stylish-mehndi-design"],
  // ── Batch 2 (available) ─────────────────────────────────────────────────
  "lotus-mehndi-design":        ["mandala-mehndi-design", "floral-mehndi-design", "dulhan-mehndi-design", "shaded-mehndi-design"],
  "rose-mehndi-design":         ["floral-mehndi-design", "arabic-mehndi-design", "engagement-mehndi-design", "wrist-mehndi-design"],
  "vine-mehndi-design":         ["floral-mehndi-design", "half-hand-mehndi-design", "arabic-mehndi-design", "feet-mehndi-design"],
  "dotwork-mehndi-design":      ["mandala-mehndi-design", "shaded-mehndi-design", "minimal-mehndi-design", "moroccan-mehndi-design"],
  "mughal-mehndi-design":       ["rajasthani-mehndi-design", "bridal-mehndi-design", "dulhan-mehndi-design", "jaal-mehndi-design"],
  "sudani-mehndi-design":       ["moroccan-mehndi-design", "arabic-mehndi-design", "minimal-mehndi-design", "feet-mehndi-design"],
  // ── Batch 2 (coming soon — articles being written) ──────────────────────
  "indo-arabic-mehndi-design":  ["arabic-mehndi-design", "indian-mehndi-design", "pakistani-mehndi-design", "half-hand-mehndi-design"],
  "leg-mehndi-design":          ["feet-mehndi-design", "arabic-mehndi-design", "bridal-mehndi-design", "floral-mehndi-design"],
  "shoulder-mehndi-design":     ["wrist-mehndi-design", "arabic-mehndi-design", "minimal-mehndi-design", "floral-mehndi-design"],
  "nail-mehndi-design":         ["finger-mehndi-design", "easy-mehndi-design", "wrist-mehndi-design", "minimal-mehndi-design"],
  "white-mehndi-design":        ["arabic-mehndi-design", "bridal-mehndi-design", "floral-mehndi-design", "minimal-mehndi-design"],
  "glitter-mehndi-design":      ["bridal-mehndi-design", "arabic-mehndi-design", "engagement-mehndi-design", "dulhan-mehndi-design"],
  "kundan-mehndi-design":       ["jewellery-mehndi-design", "bridal-mehndi-design", "dulhan-mehndi-design", "rajasthani-mehndi-design"],
  "paisley-mehndi-design":      ["floral-mehndi-design", "rajasthani-mehndi-design", "indian-mehndi-design", "jaal-mehndi-design"],
  "heart-mehndi-design":        ["easy-mehndi-design", "engagement-mehndi-design", "wrist-mehndi-design", "finger-mehndi-design"],
  "groom-mehndi-design":        ["dulhan-mehndi-design", "bridal-mehndi-design", "engagement-mehndi-design", "indian-mehndi-design"],
  "karwa-chauth-mehndi-design": ["bridal-mehndi-design", "floral-mehndi-design", "engagement-mehndi-design", "dulhan-mehndi-design"],
  "teej-mehndi-design":         ["floral-mehndi-design", "rajasthani-mehndi-design", "bridal-mehndi-design", "indian-mehndi-design"],
  "palm-mehndi-design":         ["arabic-mehndi-design", "bridal-mehndi-design", "floral-mehndi-design", "mandala-mehndi-design"],
  "heavy-mehndi-design":        ["bridal-mehndi-design", "dulhan-mehndi-design", "jaal-mehndi-design", "mughal-mehndi-design"],
  "full-hand-mehndi-design":    ["bridal-mehndi-design", "dulhan-mehndi-design", "jaal-mehndi-design", "arabic-mehndi-design"],
  "godh-bharai-mehndi-design":  ["bridal-mehndi-design", "floral-mehndi-design", "engagement-mehndi-design", "dulhan-mehndi-design"],
  "diwali-mehndi-design":       ["floral-mehndi-design", "arabic-mehndi-design", "easy-mehndi-design", "minimal-mehndi-design"],
  "wedding-guest-mehndi-design":["arabic-mehndi-design", "easy-mehndi-design", "floral-mehndi-design", "half-hand-mehndi-design"],
};

const ALL: CategoryArticle[] = [
  // Batch 1
  engagement, peacock, mandala, dulhan, jewellery, halfHand,
  wrist, rajasthani, moroccan, jaal, khafif, shaded,
  // Batch 2 (available)
  lotus, rose, vine, dotwork, mughal, sudani, kundan,
  indoArabic, leg, shoulder, nail,
];

export const categoryArticles: Record<string, CategoryArticle> = Object.fromEntries(
  ALL.map((a) => [a.slug, a]),
);

export function getCategoryArticle(slug: string): CategoryArticle | undefined {
  return categoryArticles[slug];
}
