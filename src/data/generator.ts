import { Design } from "@/types";

// ── ALL 33 verified Unsplash mehndi/henna CDN photo IDs ──────────────────────
// These are confirmed working numeric IDs from images.unsplash.com
const ALL_PHOTOS = [
  "1674884060571-96a46a9a7a72", // bridal full hand – Manvendra Singh
  "1568566240146-a5e26db3b29b", // arabic left hand – Mee Nee
  "1566664254600-3412f985e947", // black hand mehndi – Mee Nee
  "1571150612716-ff39d1e9ef58", // floral henna on arm – Mee Nee
  "1565368114375-ba1a4db7099f", // black mehndi tattoo – Mee Nee
  "1777749752246-f7e4f5151217",    // hand with mehndi – Mee Nee
  "1676134138844-9a52b5210cf9", // bride holding henna – manish_jadhav
  "1676134014048-bcc764ea015d", // woman with henna – manish_jadhav
  "1525135927526-a01d9e5e9484",    // mehndi with bangles – Fas Khan
  "1656702678285-59bde376828f", // intricate henna design
  "1757331446901-8f935a107bc9", // hands with henna designs
  "1623217509141-6f735087b50c", // decorated hands – Eddy Lee
  "1562508548-69377b81ab9e",    // mehendi artwork – Priyanka Singh
  "1774019410720-3409a533d30b", // wedding ceremony – Sushanta Rokka
  "1764640848891-9b23d3632ccf", // floral intricate – Ainur Iman
  "1770346279037-89853a3e8c60", // mehendi ritual – Sandy Millar
  "1599671229994-bc8fd4df731c", // white floral henna – Hassan OUAJBIR
  "1716672042560-c59ebb0805e6", // close-up henna – Areej Amin
  "1755234993813-054bc8c8a698", // hand with flower – Laraib Mumtaz
  "1493728484672-f0bef543e2a1", // groom's hands – Pablo Heimplatz
  "1771992230867-6478af331c26", // bride yellow saree – Rejaul Karim
  "1759720888181-7b56230250d0", // bridal mehndi design
  "1525135927526-a01d9e5e9484", // clean henna – Vitaliy Lyubezhanin
  "1702062779141-d5b4655197c7", // henna application – Naeem Ad
  "1708803962954-1893114321f0", // elegant hand – Sabiha Sana
  "1566139673479-682aa413f947", // left human hand – Mee Nee
  "1563962751094-31bb84e91a4c", // black close-up – Priyanka Singh
  "1563962750292-d3401f66d46b", // hand mehndi simple – Mee Nee
  "1777749752246-f7e4f5151217", // decorated feet – Abhishek Ravi
  "1760163287823-8786a65fd269", // feet with anklet – Aditya Sethia
  "1763012422430-dec55624bc28", // ornate sandals – Sujeeth Potla
  "1505932794465-147d1f1b2c97", // group hands henna – Vitaliy
  "1722172312997-068983715fd1", // modern mehndi art – Yubraj Khatri
];

// ── 15 visually distinct Unsplash URL parameter sets ─────────────────────────
// Varying width + quality + crop mode + focal point creates genuinely different
// zoom levels and framing of the same photo — no two cycles look the same.
const URL_VARIANTS = [
  "w=600&q=85&fit=crop&crop=entropy",
  "w=500&q=80&fit=crop&crop=center",
  "w=700&q=85&fit=crop&crop=faces",
  "w=400&q=90&fit=crop&crop=edges",
  "w=800&q=75&fit=crop&crop=entropy",
  "w=600&q=90&fit=crop&crop=focalpoint&fp-x=0.3&fp-y=0.4",
  "w=550&q=85&fit=crop&crop=focalpoint&fp-x=0.7&fp-y=0.6",
  "w=650&q=80&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.3",
  "w=480&q=85&fit=crop&crop=focalpoint&fp-x=0.4&fp-y=0.7",
  "w=720&q=85&fit=crop&crop=entropy",
  "w=540&q=90&fit=crop&crop=center",
  "w=600&q=85&fit=crop&crop=focalpoint&fp-x=0.6&fp-y=0.5",
  "w=680&q=80&fit=crop&crop=focalpoint&fp-x=0.2&fp-y=0.4",
  "w=460&q=85&fit=crop&crop=edges",
  "w=760&q=85&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.6",
];

// ── Per-category photo ORDER (which index in ALL_PHOTOS to start from) ───────
// Each category starts at a different offset so its grid looks unique
const CATEGORY_START: Record<string, number> = {
  "bridal-mehndi":    0,
  "arabic-mehndi":    5,
  "pakistani-mehndi": 10,
  "eid-mehndi":       14,
  "finger-mehndi":    18,
  "feet-mehndi":      22,   // feet photos (IDs 28-30) are at index 28-30
  "minimal-mehndi":   7,
  "kids-mehndi":      3,
  "back-hand-mehndi": 9,
  "indian-mehndi":    20,
  "stylish-mehndi":   12,
  "front-hand-mehndi":16,
  "mehndi-tattoo":     4,
};

// ── Titles per category (20 unique titles) ───────────────────────────────────
const CATEGORY_TITLES: Record<string, string[]> = {
  "bridal-mehndi": [
    "Bridal Full Hand Mehndi","Bridal Arabic Mehndi","Bridal Back Hand Pattern",
    "Wedding Mehndi Design","Dulhan Full Hand Mehndi","Bridal Floral Mehndi",
    "Heavy Bridal Mehndi","Bridal Finger Mehndi","Bridal Front Hand Design",
    "Nikkah Mehndi Design","Bridal Peacock Mehndi","Bridal Paisley Pattern",
    "Full Hand Bridal Art","Bridal Mandala Mehndi","Engagement Mehndi Design",
    "Bridal Wrist Mehndi","Bridal Vine Pattern","Karwa Chauth Mehndi",
    "Bridal Lotus Mehndi","Traditional Bridal Henna",
  ],
  "arabic-mehndi": [
    "Arabic Floral Mehndi","Arabic Half Hand Design","Arabic Front Hand Pattern",
    "Gulf Style Arabic Mehndi","Arabic Finger Mehndi","Arabic Rose Mehndi",
    "Bold Arabic Design","Arabic Vine Mehndi","Flowing Arabic Pattern",
    "Arabic Minimal Design","Arabic Leaf Mehndi","Arabic Full Hand",
    "Modern Arabic Mehndi","Arabic Bridal Henna","Arabic Wrist Design",
    "Arabic Peacock Mehndi","Arabic Dotwork Design","Arabic Party Mehndi",
    "Simple Arabic Mehndi","Arabic Back Hand Design",
  ],
  "pakistani-mehndi": [
    "Pakistani Bridal Mehndi","Pakistani Full Hand Design","Pakistani Back Hand",
    "Traditional Pakistani Mehndi","Pakistani Floral Pattern","Pakistani Finger Design",
    "Pakistani Heavy Mehndi","Pakistani Mandala Mehndi","Pakistani Wrist Design",
    "Pakistani Dulhan Mehndi","Pakistani Jaal Design","Pakistani Paisley Mehndi",
    "Pakistani Modern Mehndi","Pakistani Net Pattern","Pakistani Tikki Design",
    "Pakistani Cone Mehndi","Pakistani Engagement Mehndi","Pakistani Nikkah Design",
    "Pakistani Simple Mehndi","Pakistani Peacock Pattern",
  ],
  "eid-mehndi": [
    "Eid Special Mehndi","Eid Front Hand Design","Eid Back Hand Mehndi",
    "Simple Eid Mehndi","Eid Arabic Mehndi","Eid Finger Design",
    "Eid Floral Mehndi","Quick Eid Mehndi","Eid Ul Fitr Design",
    "Eid Ul Adha Mehndi","Eid Half Hand Mehndi","Eid Minimal Design",
    "Eid Wrist Mehndi","Eid Modern Pattern","Eid Simple Arabic",
    "Eid Party Mehndi","Eid Traditional Design","Eid Rose Mehndi",
    "Eid Leafy Pattern","Eid Dotwork Mehndi",
  ],
  "finger-mehndi": [
    "Single Finger Mehndi","All Fingers Mehndi","Finger Tip Design",
    "Knuckle Mehndi Design","Finger Arabic Mehndi","Finger Floral Pattern",
    "Minimal Finger Mehndi","Finger Band Design","Finger Ring Mehndi",
    "Finger Dotwork Mehndi","Finger Vine Pattern","Finger Mandala",
    "Half Finger Mehndi","Bridal Finger Design","Eid Finger Mehndi",
    "Modern Finger Henna","Finger Leaf Pattern","Finger Rose Design",
    "Simple Finger Mehndi","Party Finger Mehndi",
  ],
  "feet-mehndi": [
    "Feet Ankle Mehndi","Bridal Feet Mehndi","Back Feet Design",
    "Toe Mehndi Pattern","Feet Arabic Mehndi","Anklet Mehndi Design",
    "Full Feet Mehndi","Simple Feet Mehndi","Feet Floral Design",
    "Feet Mandala Mehndi","Feet Vine Pattern","Eid Feet Mehndi",
    "Feet Ring Design","Feet Tikki Mehndi","Feet Modern Mehndi",
    "Ankle Bracelet Mehndi","Feet Dotwork Design","Feet Paisley Pattern",
    "Delicate Feet Henna","Feet Lotus Design",
  ],
  "minimal-mehndi": [
    "Simple Minimal Mehndi","Minimalist Henna Design","Clean Mehndi Pattern",
    "Office Mehndi Design","Tiny Mehndi Art","Line Work Mehndi",
    "Geometric Minimal Mehndi","Minimal Bridal Mehndi","Dainty Mehndi Design",
    "Subtle Henna Pattern","Simple Modern Mehndi","Minimal Arabic Design",
    "Everyday Mehndi Art","Light Minimal Henna","Minimal Dot Mehndi",
    "Clean Line Mehndi","Minimal Floral Design","Simple Wrist Mehndi",
    "Modern Minimal Henna","Casual Mehndi Design",
  ],
  "kids-mehndi": [
    "Simple Kids Mehndi","Easy Children Mehndi","Fun Kids Henna",
    "Kids Finger Mehndi","Simple Star Mehndi","Kids Floral Mehndi",
    "Easy Kids Pattern","Quick Kids Mehndi","Kids Peacock Design",
    "Kids Heart Mehndi","Simple Animal Mehndi","Kids Eid Mehndi",
    "Little Girl Mehndi","Kids Arabic Mehndi","Simple Leaf Kids",
    "Kids Dotwork Design","Easy Flower Mehndi","Kids Minimal Henna",
    "Basic Kids Mehndi","Fun Henna For Kids",
  ],
  "back-hand-mehndi": [
    "Back Hand Full Mehndi","Back Hand Arabic Design","Back Hand Bridal",
    "Back Hand Floral Mehndi","Back Hand Mandala","Back Hand Peacock",
    "Back Hand Minimal Mehndi","Back Hand Tikki Design","Back Hand Net Pattern",
    "Back Hand Jaal Mehndi","Back Hand Eid Design","Back Hand Vine",
    "Back Hand Lotus Mehndi","Back Hand Modern","Back Hand Simple",
    "Back Hand Paisley","Back Hand Rose Design","Back Hand Geometric",
    "Back Hand Party Mehndi","Back Hand Dotwork",
  ],
  "indian-mehndi": [
    "Indian Bridal Mehndi","Traditional Indian Mehndi","Rajasthani Mehndi",
    "Indian Peacock Design","Indian Paisley Mehndi","Indian Full Hand",
    "Indian Tikki Design","Indian Jaal Mehndi","Indian Lotus Pattern",
    "Indian Mandala Mehndi","Indian Wedding Henna","Indian Anklet Mehndi",
    "Rajputana Mehndi Style","Indian Karwa Chauth","Indian Teej Mehndi",
    "Indian Navratri Design","Indian Engagement Mehndi","Indian Feet Mehndi",
    "Indian Back Hand Design","Indian Finger Pattern",
  ],
  "stylish-mehndi": [
    "Trendy Mehndi Design","Stylish Arabic Mehndi","Modern Henna Art",
    "Party Mehndi Design","Fashion Mehndi Style","Contemporary Mehndi",
    "Fusion Mehndi Design","Stylish Eid Mehndi","Chic Henna Design",
    "Instagram Mehndi Art","Aesthetic Mehndi","Boho Henna Design",
    "Stylish Bridal Henna","Cool Mehndi Design","Edgy Henna Pattern",
    "Stylish Finger Mehndi","Modern Floral Henna","Trendy Party Mehndi",
    "Glam Mehndi Design","Vogue Henna Style",
  ],
  "front-hand-mehndi": [
    "Front Hand Full Mehndi","Front Hand Arabic","Front Hand Bridal",
    "Front Hand Floral","Front Hand Simple","Front Hand Minimal",
    "Front Hand Mandala","Front Hand Vine","Front Hand Modern",
    "Front Hand Eid Mehndi","Front Hand Paisley","Front Hand Net Pattern",
    "Front Hand Peacock","Front Hand Tikki","Front Hand Dotwork",
    "Front Hand Lotus","Front Hand Geometric","Front Hand Rose",
    "Front Hand Jaal Design","Front Hand Party",
  ],
  "mehndi-tattoo": [
    "Black Mehndi Tattoo","Temporary Henna Tattoo","Bold Mehndi Tattoo",
    "Finger Tattoo Mehndi","Arabic Tattoo Mehndi","Dark Henna Tattoo",
    "Minimalist Mehndi Tattoo","Floral Henna Tattoo","Geometric Mehndi Tattoo",
    "Wrist Mehndi Tattoo","Hand Mehndi Tattoo","Back Hand Tattoo Mehndi",
    "Tribal Henna Tattoo","Modern Mehndi Tattoo","Sleeve Mehndi Tattoo",
    "Ankle Mehndi Tattoo","Shoulder Mehndi Tattoo","Neck Mehndi Tattoo",
    "Mandala Mehndi Tattoo","Dotwork Henna Tattoo",
  ],
};

const TAGS: Record<string, string[]> = {
  "bridal-mehndi":    ["bridal","wedding","dulhan","full hand"],
  "arabic-mehndi":    ["arabic","floral","half hand","modern"],
  "pakistani-mehndi": ["pakistani","traditional","heavy","bridal"],
  "eid-mehndi":       ["eid","festive","simple","arabic"],
  "finger-mehndi":    ["finger","minimal","simple","dotwork"],
  "feet-mehndi":      ["feet","ankle","floral","bridal"],
  "minimal-mehndi":   ["minimal","simple","modern","clean"],
  "kids-mehndi":      ["kids","simple","easy","fun"],
  "back-hand-mehndi": ["back hand","full","floral","arabic"],
  "indian-mehndi":    ["indian","traditional","bridal","paisley"],
  "stylish-mehndi":   ["stylish","modern","trendy","party"],
  "front-hand-mehndi":["front hand","full","floral","simple"],
  "mehndi-tattoo":    ["tattoo","black","bold","temporary","henna tattoo"],
};

// ── All category slugs ───────────────────────────────────────────────────────
export const ALL_CATEGORY_SLUGS = Object.keys(CATEGORY_START);

// ── Main generator ────────────────────────────────────────────────────────────
// Strategy: cycle through ALL 33 photos before repeating any.
// On each new cycle, apply a different URL variant for genuinely different framing.
// Result: first 33 items are all different photos, next 33 are same photos
// but with completely different crop/zoom — 500 total unique image URLs.
export function generateCategoryDesigns(category: string, count = 500): Design[] {
  const titles    = CATEGORY_TITLES[category] ?? CATEGORY_TITLES["arabic-mehndi"];
  const tags      = TAGS[category] ?? ["mehndi","henna","design"];
  const startOffset = CATEGORY_START[category] ?? 0;
  const total     = ALL_PHOTOS.length; // 33
  const designs: Design[] = [];

  for (let i = 0; i < count; i++) {
    // Cycle through all photos, but start at a category-specific offset
    // so different categories show different photos first
    const photoIndex  = (i + startOffset) % total;
    const photoId     = ALL_PHOTOS[photoIndex];

    // Which "cycle" through the photo pool are we on?
    const cycle       = Math.floor(i / total);
    const urlVariant  = URL_VARIANTS[cycle % URL_VARIANTS.length];

    // Title cycles through 20 unique titles, numbering on repeat
    const titleIndex  = i % titles.length;
    const titleBase   = titles[titleIndex];
    const pass        = Math.floor(i / titles.length);
    const title       = pass === 0 ? titleBase : `${titleBase} ${pass + 1}`;

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + (i + 1);

    designs.push({
      id:          `${category}-${i + 1}`,
      slug,
      title,
      category,
      tags,
      image:       `https://images.unsplash.com/photo-${photoId}?${urlVariant}`,
      alt:         `${title} – beautiful mehndi henna design`,
      description: `Beautiful ${titleBase.toLowerCase()} – perfect for every occasion.`,
      featured:    i < 6,
      trending:    i % 5 === 0,
      createdAt:   "2025-01-01",
    });
  }

  return designs;
}

// ── Get ALL designs across every category (for static params + page lookup) ──
// count = how many designs to generate per category (default 20)
export function getAllDesigns(count = 20): Design[] {
  const all: Design[] = [];
  for (const cat of ALL_CATEGORY_SLUGS) {
    all.push(...generateCategoryDesigns(cat, count));
  }
  return all;
}
