import type { CategoryArticle } from "@/types";

// Long-form style guides (2500+ words each) for the in-depth mehndi style pages.
// Each guide lives in its own file under ./articles/ (authored as a unique,
// human-written piece). This module aggregates them and exposes the lookup.
import { article as engagement } from "./articles/engagement-mehndi-design";
import { article as peacock } from "./articles/peacock-mehndi-design";
import { article as mandala } from "./articles/mandala-mehndi-design";
import { article as dulhan } from "./articles/dulhan-mehndi-design";
import { article as jewellery } from "./articles/jewellery-mehndi-design";
import { article as halfHand } from "./articles/half-hand-mehndi-design";
import { article as wrist } from "./articles/wrist-mehndi-design";
import { article as rajasthani } from "./articles/rajasthani-mehndi-design";
import { article as moroccan } from "./articles/moroccan-mehndi-design";
import { article as jaal } from "./articles/jaal-mehndi-design";
import { article as khafif } from "./articles/khafif-mehndi-design";
import { article as shaded } from "./articles/shaded-mehndi-design";

// Sibling-style relationships used by the RelatedCategories module.
export const CATEGORY_RELATIONS: Record<string, string[]> = {
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
};

const ALL: CategoryArticle[] = [
  engagement, peacock, mandala, dulhan, jewellery, halfHand,
  wrist, rajasthani, moroccan, jaal, khafif, shaded,
];

export const categoryArticles: Record<string, CategoryArticle> = Object.fromEntries(
  ALL.map((a) => [a.slug, a]),
);

export function getCategoryArticle(slug: string): CategoryArticle | undefined {
  return categoryArticles[slug];
}
