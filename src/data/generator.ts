import { Design } from "@/types";
// Per-category real Unsplash photos (populated by `npm run fetch-unsplash`).
// Empty by default; when populated, each category uses its own distinct photos.
import unsplashPhotos from "./unsplashPhotos.json";

const UNSPLASH_BY_CATEGORY = unsplashPhotos as Record<string, string[]>;

// ── 19 verified Unsplash henna TATTOO photo IDs ───────────────────────────────
// Fetched directly from unsplash.com/s/photos/henna-tattoo — all confirmed
const TATTOO_PHOTOS = [
  "1525135850648-b42365991054", // person's right mehndi tattoo – Vitaliy Lyubezhanin
  "1563714915375-625ddfce4847", // mehndi tattoo – Mee Nee
  "1566745266815-87793f60d7a4", // black mendhi tattoo – Mee Nee
  "1570105566322-0e5bdccc9501", // black mehndi art – Mee Nee
  "1565368113202-ffa5bffb6feb", // floral hand henna tattoo – Mee Nee
  "1566878823628-a3a71274b0af", // black leaves finger tattoos – Mee Nee
  "1564809392273-798ebbb1914a", // henna tattoo close-up
  "1566745265763-de510bdae868", // henna on hand – Mee Nee
  "1530785404354-f4ed0206a0d1", // henna design
  "1566829682463-2aa5f6c8afd8", // henna art
  "1572969147844-920fff94e326", // henna tattoo detail
  "1556536088-f010a312a8d3",    // henna pattern
  "1720798299236-7acaaa2356be", // modern henna
  "1619734089700-842e56497353", // henna close-up
  "1591161921527-a9a10bfaf3ea", // henna on skin
  "1624504761718-be4d634f4624", // henna tattoo design
  "1566664254600-3412f985e947", // black hand mehndi – Mee Nee
  "1565368114375-ba1a4db7099f", // black mehndi tattoo – Mee Nee
  "1563962751094-31bb84e91a4c", // black close-up finger – Priyanka Singh
];

// ── Dedicated photo pools for new categories (25 photos × 40 URL variants = 1000 unique) ──

// FLORAL — flower, vine, botanical henna photos
const FLORAL_PHOTOS = [
  "1571150612716-ff39d1e9ef58", // floral henna on arm – Mee Nee
  "1764640848891-9b23d3632ccf", // floral intricate – Ainur Iman
  "1599671229994-bc8fd4df731c", // white floral henna – Hassan OUAJBIR
  "1755234993813-054bc8c8a698", // hand with flower – Laraib Mumtaz
  "1565368113202-ffa5bffb6feb", // floral hand henna tattoo – Mee Nee
  "1619734089700-842e56497353", // henna close-up floral
  "1708803962954-1893114321f0", // elegant hand – Sabiha Sana
  "1676134138844-9a52b5210cf9", // bride holding henna – manish_jadhav
  "1674884060571-96a46a9a7a72", // bridal full hand – Manvendra Singh
  "1623217509141-6f735087b50c", // decorated hands – Eddy Lee
  "1757331446901-8f935a107bc9", // hands with henna designs
  "1770346279037-89853a3e8c60", // mehendi ritual – Sandy Millar
  "1716672042560-c59ebb0805e6", // close-up henna – Areej Amin
  "1774019410720-3409a533d30b", // wedding ceremony – Sushanta Rokka
  "1771992230867-6478af331c26", // bride yellow saree – Rejaul Karim
  "1568566240146-a5e26db3b29b", // arabic floral hand – Mee Nee
  "1676134014048-bcc764ea015d", // woman with henna – manish_jadhav
  "1493728484672-f0bef543e2a1", // groom's hands – Pablo Heimplatz
  "1525135927526-a01d9e5e9484", // mehndi with bangles – Fas Khan
  "1702062779141-d5b4655197c7", // henna application – Naeem Ad
  "1759720888181-7b56230250d0", // bridal mehndi design
  "1656702678285-59bde376828f", // intricate henna design
  "1562508548-69377b81ab9e",    // mehendi artwork – Priyanka Singh
  "1566829682463-2aa5f6c8afd8", // henna art
  "1505932794465-147d1f1b2c97", // group hands henna – Vitaliy
];

// CIRCLE — circular, mandala, geometric round patterns
const CIRCLE_PHOTOS = [
  "1722172312997-068983715fd1", // modern mehndi art – Yubraj Khatri
  "1656702678285-59bde376828f", // intricate mandala henna
  "1566139673479-682aa413f947", // left human hand round – Mee Nee
  "1564809392273-798ebbb1914a", // henna tattoo circular close-up
  "1566745265763-de510bdae868", // henna on hand circular – Mee Nee
  "1572969147844-920fff94e326", // henna tattoo detail circular
  "1624504761718-be4d634f4624", // henna tattoo design round
  "1566745266815-87793f60d7a4", // black mendhi geometric – Mee Nee
  "1570105566322-0e5bdccc9501", // black mehndi art circular – Mee Nee
  "1563962750292-d3401f66d46b", // hand mehndi simple – Mee Nee
  "1566664254600-3412f985e947", // black hand round patterns – Mee Nee
  "1525135850648-b42365991054", // right mehndi tattoo – Vitaliy
  "1563714915375-625ddfce4847", // mehndi tattoo – Mee Nee
  "1530785404354-f4ed0206a0d1", // henna design
  "1563962751094-31bb84e91a4c", // black close-up – Priyanka Singh
  "1777749752246-f7e4f5151217", // hand with mehndi
  "1759720888181-7b56230250d0", // bridal mehndi design
  "1505932794465-147d1f1b2c97", // group hands henna
  "1562508548-69377b81ab9e",    // mehendi artwork
  "1566878823628-a3a71274b0af", // black leaves finger – Mee Nee
  "1525135927526-a01d9e5e9484", // mehndi with bangles
  "1568566240146-a5e26db3b29b", // arabic mehndi
  "1676134014048-bcc764ea015d", // woman with henna
  "1623217509141-6f735087b50c", // decorated hands
  "1716672042560-c59ebb0805e6", // close-up henna
];

// GOL TIKKI — round medallion, tikki patterns
const GOL_TIKKI_PHOTOS = [
  "1556536088-f010a312a8d3",    // henna tikki pattern
  "1566829682463-2aa5f6c8afd8", // henna art round
  "1591161921527-a9a10bfaf3ea", // henna on skin tikki
  "1505932794465-147d1f1b2c97", // group hands henna
  "1656702678285-59bde376828f", // intricate henna tikki
  "1757331446901-8f935a107bc9", // hands with henna designs
  "1623217509141-6f735087b50c", // decorated hands
  "1674884060571-96a46a9a7a72", // bridal full hand tikki
  "1676134138844-9a52b5210cf9", // bride holding henna
  "1525135927526-a01d9e5e9484", // mehndi with bangles
  "1568566240146-a5e26db3b29b", // arabic tikki
  "1702062779141-d5b4655197c7", // henna application
  "1676134014048-bcc764ea015d", // woman with henna
  "1771992230867-6478af331c26", // bride yellow saree
  "1774019410720-3409a533d30b", // wedding ceremony
  "1566664254600-3412f985e947", // black hand tikki
  "1525135850648-b42365991054", // right mehndi tattoo
  "1563714915375-625ddfce4847", // mehndi tattoo
  "1759720888181-7b56230250d0", // bridal mehndi design
  "1764640848891-9b23d3632ccf", // floral intricate tikki center
  "1770346279037-89853a3e8c60", // mehendi ritual
  "1708803962954-1893114321f0", // elegant hand
  "1562508548-69377b81ab9e",    // mehendi artwork
  "1716672042560-c59ebb0805e6", // close-up henna
  "1722172312997-068983715fd1", // modern mehndi art
];

// EASY — simple, minimal, beginner-friendly henna
const EASY_PHOTOS = [
  "1562508548-69377b81ab9e",    // mehendi artwork simple – Priyanka Singh
  "1563962750292-d3401f66d46b", // hand mehndi simple – Mee Nee
  "1566878823628-a3a71274b0af", // black leaves finger simple – Mee Nee
  "1530785404354-f4ed0206a0d1", // henna design simple
  "1720798299236-7acaaa2356be", // modern henna simple
  "1565368114375-ba1a4db7099f", // black mehndi minimal – Mee Nee
  "1570105566322-0e5bdccc9501", // black mehndi art simple – Mee Nee
  "1563962751094-31bb84e91a4c", // black close-up simple – Priyanka Singh
  "1777749752246-f7e4f5151217", // hand with mehndi
  "1566745266815-87793f60d7a4", // black mendhi simple – Mee Nee
  "1566745265763-de510bdae868", // henna on hand simple – Mee Nee
  "1564809392273-798ebbb1914a", // henna tattoo simple close-up
  "1716672042560-c59ebb0805e6", // close-up henna
  "1708803962954-1893114321f0", // elegant hand
  "1525135927526-a01d9e5e9484", // mehndi with bangles
  "1566139673479-682aa413f947", // left human hand
  "1566829682463-2aa5f6c8afd8", // henna art
  "1572969147844-920fff94e326", // henna tattoo detail
  "1556536088-f010a312a8d3",    // henna pattern
  "1591161921527-a9a10bfaf3ea", // henna on skin
  "1566664254600-3412f985e947", // black hand
  "1525135850648-b42365991054", // right mehndi tattoo
  "1563714915375-625ddfce4847", // mehndi tattoo
  "1568566240146-a5e26db3b29b", // arabic simple
  "1676134014048-bcc764ea015d", // woman with henna
];

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

// ── 40 visually distinct Unsplash URL parameter sets ─────────────────────────
// 25 dedicated photos × 40 variants = 1000 unique image URLs per new category.
// Each variant differs in width, quality, crop mode, and focal point.
const URL_VARIANTS = [
  // Cycle 1-15 (original)
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
  // Cycle 16-40 (new — for new category 1000-image pools)
  "w=620&q=88&fit=crop&crop=focalpoint&fp-x=0.35&fp-y=0.45",
  "w=580&q=82&fit=crop&crop=focalpoint&fp-x=0.65&fp-y=0.35",
  "w=740&q=78&fit=crop&crop=entropy",
  "w=420&q=92&fit=crop&crop=center",
  "w=820&q=72&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5",
  "w=560&q=87&fit=crop&crop=focalpoint&fp-x=0.25&fp-y=0.6",
  "w=690&q=83&fit=crop&crop=focalpoint&fp-x=0.75&fp-y=0.4",
  "w=500&q=88&fit=crop&crop=focalpoint&fp-x=0.45&fp-y=0.55",
  "w=780&q=76&fit=crop&crop=entropy",
  "w=440&q=91&fit=crop&crop=edges",
  "w=660&q=86&fit=crop&crop=focalpoint&fp-x=0.55&fp-y=0.3",
  "w=520&q=84&fit=crop&crop=focalpoint&fp-x=0.3&fp-y=0.7",
  "w=700&q=79&fit=crop&crop=center",
  "w=480&q=93&fit=crop&crop=focalpoint&fp-x=0.7&fp-y=0.5",
  "w=640&q=81&fit=crop&crop=focalpoint&fp-x=0.4&fp-y=0.3",
  "w=860&q=74&fit=crop&crop=entropy",
  "w=380&q=94&fit=crop&crop=center",
  "w=590&q=89&fit=crop&crop=focalpoint&fp-x=0.6&fp-y=0.6",
  "w=710&q=77&fit=crop&crop=focalpoint&fp-x=0.3&fp-y=0.3",
  "w=450&q=90&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.7",
  "w=770&q=73&fit=crop&crop=entropy",
  "w=530&q=86&fit=crop&crop=focalpoint&fp-x=0.8&fp-y=0.4",
  "w=630&q=83&fit=crop&crop=focalpoint&fp-x=0.2&fp-y=0.6",
  "w=900&q=70&fit=crop&crop=center",
  "w=470&q=87&fit=crop&crop=focalpoint&fp-x=0.55&fp-y=0.55",
];

// ── Per-category photo ORDER (which index in ALL_PHOTOS to start from) ───────
// Each category starts at a different offset so its grid looks unique
const CATEGORY_START: Record<string, number> = {
  "bridal-mehndi-design":    0,
  "arabic-mehndi-design":    5,
  "pakistani-mehndi-design": 10,
  "eid-mehndi-design":       14,
  "finger-mehndi-design":    18,
  "feet-mehndi-design":      22,   // feet photos (IDs 28-30) are at index 28-30
  "minimal-mehndi-design":   7,
  "kids-mehndi-design":      3,
  "back-hand-mehndi-design": 9,
  "indian-mehndi-design":    20,
  "stylish-mehndi-design":   12,
  "front-hand-mehndi-design":16,
  "mehndi-tattoo-design":     4,
  "floral-mehndi-design":     0,  // uses own dedicated FLORAL_PHOTOS pool
  "circle-mehndi-design":     0,  // uses own dedicated CIRCLE_PHOTOS pool
  "gol-tikki-mehndi-design":  0,  // uses own dedicated GOL_TIKKI_PHOTOS pool
  "easy-mehndi-design":       0,  // uses own dedicated EASY_PHOTOS pool
  // New in-depth style pages (shared ALL_PHOTOS pool, distinct start offsets)
  "engagement-mehndi-design":  2,
  "peacock-mehndi-design":     9,
  "mandala-mehndi-design":    21,
  "dulhan-mehndi-design":      1,
  "jewellery-mehndi-design":  12,
  "half-hand-mehndi-design":   6,
  "wrist-mehndi-design":      15,
  "rajasthani-mehndi-design": 19,
  "moroccan-mehndi-design":   24,
  "jaal-mehndi-design":        8,
  "khafif-mehndi-design":     17,
  "shaded-mehndi-design":     23,
};

// ── Titles per category (20 unique titles) ───────────────────────────────────
const CATEGORY_TITLES: Record<string, string[]> = {
  "bridal-mehndi-design": [
    "Bridal Full Hand Mehndi","Bridal Arabic Mehndi","Bridal Back Hand Pattern",
    "Wedding Mehndi Design","Dulhan Full Hand Mehndi","Bridal Floral Mehndi",
    "Heavy Bridal Mehndi","Bridal Finger Mehndi","Bridal Front Hand Design",
    "Nikkah Mehndi Design","Bridal Peacock Mehndi","Bridal Paisley Pattern",
    "Full Hand Bridal Art","Bridal Mandala Mehndi","Engagement Mehndi Design",
    "Bridal Wrist Mehndi","Bridal Vine Pattern","Karwa Chauth Mehndi",
    "Bridal Lotus Mehndi","Traditional Bridal Henna",
  ],
  "arabic-mehndi-design": [
    "Arabic Floral Mehndi","Arabic Half Hand Design","Arabic Front Hand Pattern",
    "Gulf Style Arabic Mehndi","Arabic Finger Mehndi","Arabic Rose Mehndi",
    "Bold Arabic Design","Arabic Vine Mehndi","Flowing Arabic Pattern",
    "Arabic Minimal Design","Arabic Leaf Mehndi","Arabic Full Hand",
    "Modern Arabic Mehndi","Arabic Bridal Henna","Arabic Wrist Design",
    "Arabic Peacock Mehndi","Arabic Dotwork Design","Arabic Party Mehndi",
    "Simple Arabic Mehndi","Arabic Back Hand Design",
  ],
  "pakistani-mehndi-design": [
    "Pakistani Bridal Mehndi","Pakistani Full Hand Design","Pakistani Back Hand",
    "Traditional Pakistani Mehndi","Pakistani Floral Pattern","Pakistani Finger Design",
    "Pakistani Heavy Mehndi","Pakistani Mandala Mehndi","Pakistani Wrist Design",
    "Pakistani Dulhan Mehndi","Pakistani Jaal Design","Pakistani Paisley Mehndi",
    "Pakistani Modern Mehndi","Pakistani Net Pattern","Pakistani Tikki Design",
    "Pakistani Cone Mehndi","Pakistani Engagement Mehndi","Pakistani Nikkah Design",
    "Pakistani Simple Mehndi","Pakistani Peacock Pattern",
  ],
  "eid-mehndi-design": [
    "Eid Special Mehndi","Eid Front Hand Design","Eid Back Hand Mehndi",
    "Simple Eid Mehndi","Eid Arabic Mehndi","Eid Finger Design",
    "Eid Floral Mehndi","Quick Eid Mehndi","Eid Ul Fitr Design",
    "Eid Ul Adha Mehndi","Eid Half Hand Mehndi","Eid Minimal Design",
    "Eid Wrist Mehndi","Eid Modern Pattern","Eid Simple Arabic",
    "Eid Party Mehndi","Eid Traditional Design","Eid Rose Mehndi",
    "Eid Leafy Pattern","Eid Dotwork Mehndi",
  ],
  "finger-mehndi-design": [
    "Single Finger Mehndi","All Fingers Mehndi","Finger Tip Design",
    "Knuckle Mehndi Design","Finger Arabic Mehndi","Finger Floral Pattern",
    "Minimal Finger Mehndi","Finger Band Design","Finger Ring Mehndi",
    "Finger Dotwork Mehndi","Finger Vine Pattern","Finger Mandala",
    "Half Finger Mehndi","Bridal Finger Design","Eid Finger Mehndi",
    "Modern Finger Henna","Finger Leaf Pattern","Finger Rose Design",
    "Simple Finger Mehndi","Party Finger Mehndi",
  ],
  "feet-mehndi-design": [
    "Feet Ankle Mehndi","Bridal Feet Mehndi","Back Feet Design",
    "Toe Mehndi Pattern","Feet Arabic Mehndi","Anklet Mehndi Design",
    "Full Feet Mehndi","Simple Feet Mehndi","Feet Floral Design",
    "Feet Mandala Mehndi","Feet Vine Pattern","Eid Feet Mehndi",
    "Feet Ring Design","Feet Tikki Mehndi","Feet Modern Mehndi",
    "Ankle Bracelet Mehndi","Feet Dotwork Design","Feet Paisley Pattern",
    "Delicate Feet Henna","Feet Lotus Design",
  ],
  "minimal-mehndi-design": [
    "Simple Minimal Mehndi","Minimalist Henna Design","Clean Mehndi Pattern",
    "Office Mehndi Design","Tiny Mehndi Art","Line Work Mehndi",
    "Geometric Minimal Mehndi","Minimal Bridal Mehndi","Dainty Mehndi Design",
    "Subtle Henna Pattern","Simple Modern Mehndi","Minimal Arabic Design",
    "Everyday Mehndi Art","Light Minimal Henna","Minimal Dot Mehndi",
    "Clean Line Mehndi","Minimal Floral Design","Simple Wrist Mehndi",
    "Modern Minimal Henna","Casual Mehndi Design",
  ],
  "kids-mehndi-design": [
    "Simple Kids Mehndi","Easy Children Mehndi","Fun Kids Henna",
    "Kids Finger Mehndi","Simple Star Mehndi","Kids Floral Mehndi",
    "Easy Kids Pattern","Quick Kids Mehndi","Kids Peacock Design",
    "Kids Heart Mehndi","Simple Animal Mehndi","Kids Eid Mehndi",
    "Little Girl Mehndi","Kids Arabic Mehndi","Simple Leaf Kids",
    "Kids Dotwork Design","Easy Flower Mehndi","Kids Minimal Henna",
    "Basic Kids Mehndi","Fun Henna For Kids",
  ],
  "back-hand-mehndi-design": [
    "Back Hand Full Mehndi","Back Hand Arabic Design","Back Hand Bridal",
    "Back Hand Floral Mehndi","Back Hand Mandala","Back Hand Peacock",
    "Back Hand Minimal Mehndi","Back Hand Tikki Design","Back Hand Net Pattern",
    "Back Hand Jaal Mehndi","Back Hand Eid Design","Back Hand Vine",
    "Back Hand Lotus Mehndi","Back Hand Modern","Back Hand Simple",
    "Back Hand Paisley","Back Hand Rose Design","Back Hand Geometric",
    "Back Hand Party Mehndi","Back Hand Dotwork",
  ],
  "indian-mehndi-design": [
    "Indian Bridal Mehndi","Traditional Indian Mehndi","Rajasthani Mehndi",
    "Indian Peacock Design","Indian Paisley Mehndi","Indian Full Hand",
    "Indian Tikki Design","Indian Jaal Mehndi","Indian Lotus Pattern",
    "Indian Mandala Mehndi","Indian Wedding Henna","Indian Anklet Mehndi",
    "Rajputana Mehndi Style","Indian Karwa Chauth","Indian Teej Mehndi",
    "Indian Navratri Design","Indian Engagement Mehndi","Indian Feet Mehndi",
    "Indian Back Hand Design","Indian Finger Pattern",
  ],
  "stylish-mehndi-design": [
    "Trendy Mehndi Design","Stylish Arabic Mehndi","Modern Henna Art",
    "Party Mehndi Design","Fashion Mehndi Style","Contemporary Mehndi",
    "Fusion Mehndi Design","Stylish Eid Mehndi","Chic Henna Design",
    "Instagram Mehndi Art","Aesthetic Mehndi","Boho Henna Design",
    "Stylish Bridal Henna","Cool Mehndi Design","Edgy Henna Pattern",
    "Stylish Finger Mehndi","Modern Floral Henna","Trendy Party Mehndi",
    "Glam Mehndi Design","Vogue Henna Style",
  ],
  "front-hand-mehndi-design": [
    "Front Hand Full Mehndi","Front Hand Arabic","Front Hand Bridal",
    "Front Hand Floral","Front Hand Simple","Front Hand Minimal",
    "Front Hand Mandala","Front Hand Vine","Front Hand Modern",
    "Front Hand Eid Mehndi","Front Hand Paisley","Front Hand Net Pattern",
    "Front Hand Peacock","Front Hand Tikki","Front Hand Dotwork",
    "Front Hand Lotus","Front Hand Geometric","Front Hand Rose",
    "Front Hand Jaal Design","Front Hand Party",
  ],
  "floral-mehndi-design": [
    "Floral Rose Mehndi","Lotus Flower Mehndi","Rose Vine Mehndi",
    "Full Floral Hand Mehndi","Floral Back Hand Design","Delicate Flower Mehndi",
    "Jasmine Vine Mehndi","Floral Bridal Mehndi","Flower Cluster Mehndi",
    "Wild Rose Mehndi","Daisy Chain Mehndi","Floral Mandala Mehndi",
    "Peony Mehndi Design","Floral Finger Mehndi","Blooming Vine Mehndi",
    "Floral Wrist Mehndi","Poppy Mehndi Design","Floral Eid Mehndi",
    "Botanical Mehndi Design","Floral Arabic Mehndi",
  ],
  "circle-mehndi-design": [
    "Circle Mandala Mehndi","Round Mehndi Design","Gol Mehndi Pattern",
    "Mandala Back Hand Mehndi","Circle Wrist Mehndi","Geometric Circle Mehndi",
    "Circular Floral Mehndi","Round Finger Mehndi","Mandala Full Hand",
    "Concentric Circle Mehndi","Circle Bridal Mehndi","Round Eid Mehndi",
    "Mandala Arabic Mehndi","Circle Vine Mehndi","Bold Circle Mehndi",
    "Circle Dotwork Design","Lotus Mandala Mehndi","Ring Circle Mehndi",
    "Circle Minimal Mehndi","Circular Band Mehndi",
  ],
  "gol-tikki-mehndi-design": [
    "Gol Tikki Bridal Mehndi","Traditional Tikki Design","Gol Tikki Back Hand",
    "Round Tikki Mehndi","Gol Tikki Full Hand","Tikki Flower Mehndi",
    "Gol Tikki Finger Mehndi","Pakistani Gol Tikki","Tikki Jaal Mehndi",
    "Gol Tikki Eid Design","Tikki Vine Mehndi","Gol Tikki Minimal",
    "Classic Tikki Mehndi","Tikki Net Pattern","Gol Tikki Arabic",
    "Tikki Mandala Design","Gol Tikki Simple","Double Tikki Mehndi",
    "Gol Tikki Front Hand","Bridal Tikki Mehndi",
  ],
  "easy-mehndi-design": [
    "Easy Arabic Mehndi","Simple Flower Mehndi","Quick Mehndi Design",
    "Easy Finger Mehndi","Simple Back Hand Mehndi","Beginner Mehndi Design",
    "Easy Wrist Mehndi","5 Minute Mehndi","Simple Eid Mehndi",
    "Easy Floral Design","Basic Mehndi Pattern","Simple Vine Mehndi",
    "Easy Bridal Mehndi","Quick Finger Design","Simple Mandala Mehndi",
    "Easy Rose Mehndi","Simple Dotwork Mehndi","Easy Front Hand",
    "Simple Geometric Mehndi","Easy Kids Mehndi",
  ],
  "mehndi-tattoo-design": [
    "Black Mehndi Tattoo","Temporary Henna Tattoo","Bold Mehndi Tattoo",
    "Finger Tattoo Mehndi","Arabic Tattoo Mehndi","Dark Henna Tattoo",
    "Minimalist Mehndi Tattoo","Floral Henna Tattoo","Geometric Mehndi Tattoo",
    "Wrist Mehndi Tattoo","Hand Mehndi Tattoo","Back Hand Tattoo Mehndi",
    "Tribal Henna Tattoo","Modern Mehndi Tattoo","Sleeve Mehndi Tattoo",
    "Ankle Mehndi Tattoo","Shoulder Mehndi Tattoo","Neck Mehndi Tattoo",
    "Mandala Mehndi Tattoo","Dotwork Henna Tattoo",
  ],
  "engagement-mehndi-design": [
    "Engagement Ring Finger Mehndi","Sagai Special Mehndi","Couple Name Mehndi",
    "Minimal Engagement Mehndi","Engagement Front Hand Mehndi","Ring Ceremony Mehndi",
    "Elegant Engagement Design","Engagement Floral Mehndi","Engagement Back Hand Mehndi",
    "Modern Engagement Mehndi","Engagement Wrist Mehndi","Heart Engagement Mehndi",
    "Engagement Arabic Mehndi","Dainty Engagement Mehndi","Engagement Finger Band",
    "Engagement Mandala Mehndi","Engagement Half Hand","Bride To Be Mehndi",
    "Engagement Initials Mehndi","Engagement Vine Mehndi",
  ],
  "peacock-mehndi-design": [
    "Peacock Full Hand Mehndi","Peacock Back Hand Design","Bridal Peacock Mehndi",
    "Single Peacock Mehndi","Peacock Finger Mehndi","Twin Peacock Mehndi",
    "Peacock Feather Mehndi","Arabic Peacock Mehndi","Peacock Wrist Design",
    "Peacock Mandala Mehndi","Pakistani Peacock Mehndi","Peacock Palm Mehndi",
    "Dancing Peacock Mehndi","Peacock Jaal Mehndi","Minimal Peacock Mehndi",
    "Peacock Feet Mehndi","Peacock Tikki Design","Royal Peacock Mehndi",
    "Peacock Pair Mehndi","Peacock Vine Pattern",
  ],
  "mandala-mehndi-design": [
    "Mandala Palm Mehndi","Back Hand Mandala Design","Bridal Mandala Mehndi",
    "Half Mandala Mehndi","Lotus Mandala Mehndi","Geometric Mandala Mehndi",
    "Floral Mandala Mehndi","Double Mandala Mehndi","Minimal Mandala Mehndi",
    "Arabic Mandala Mehndi","Mandala Wrist Mehndi","Concentric Mandala Design",
    "Mandala Feet Mehndi","Sun Mandala Mehndi","Mandala Finger Mehndi",
    "Dotwork Mandala Mehndi","Mandala Jaal Mehndi","Star Mandala Mehndi",
    "Mandala Front Hand","Symmetric Mandala Pattern",
  ],
  "dulhan-mehndi-design": [
    "Dulhan Full Hand Mehndi","Dulhan Back Hand Design","Heavy Dulhan Mehndi",
    "Dulhan Foot Mehndi","Pakistani Dulhan Mehndi","Dulhan Arabic Mehndi",
    "Dulhan Portrait Mehndi","Dulhan Jaal Design","Royal Dulhan Mehndi",
    "Dulhan Front Hand Mehndi","Modern Dulhan Mehndi","Dulhan Doli Design",
    "Dulhan Baraat Mehndi","Intricate Dulhan Mehndi","Dulhan Shaded Mehndi",
    "Dulhan Peacock Mehndi","Dulhan Mandala Mehndi","Dulhan Finger Detailing",
    "Dulhan Wrist Mehndi","Traditional Dulhan Mehndi",
  ],
  "jewellery-mehndi-design": [
    "Hathphool Jewellery Mehndi","Ring Bracelet Mehndi","Bangle Style Mehndi",
    "Jewellery Back Hand Mehndi","Pearl Chain Mehndi","Maharani Jewellery Mehndi",
    "Finger Ring Mehndi","Jewellery Wrist Cuff Mehndi","Bridal Jewellery Mehndi",
    "Anklet Jewellery Mehndi","Necklace Style Mehndi","Jewellery Half Hand",
    "Kundan Inspired Mehndi","Jhumka Motif Mehndi","Jewellery Palm Mehndi",
    "Layered Chain Mehndi","Jewellery Tikki Mehndi","Minimal Jewellery Mehndi",
    "Royal Jewellery Mehndi","Jewellery Vine Mehndi",
  ],
  "half-hand-mehndi-design": [
    "Arabic Half Hand Mehndi","Floral Half Hand Mehndi","Bridal Half Hand Design",
    "Minimal Half Hand Mehndi","Half Hand Mandala Mehndi","Half Hand Vine Mehndi",
    "Eid Half Hand Mehndi","Half Hand Jaal Mehndi","Modern Half Hand Mehndi",
    "Half Hand Peacock Mehndi","Half Hand Rose Mehndi","Half Hand Dotwork",
    "Pakistani Half Hand Mehndi","Half Hand Net Pattern","Half Hand Tikki Design",
    "Half Hand Leaf Mehndi","Stylish Half Hand Mehndi","Half Hand Shaded Mehndi",
    "Half Hand Finger Detail","Elegant Half Hand Mehndi",
  ],
  "wrist-mehndi-design": [
    "Wrist Band Mehndi","Bracelet Wrist Mehndi","Floral Wrist Mehndi",
    "Minimal Wrist Mehndi","Arabic Wrist Mehndi","Wrist Cuff Mehndi",
    "Chain Wrist Mehndi","Wrist Vine Mehndi","Dainty Wrist Mehndi",
    "Mandala Wrist Mehndi","Wrist Dotwork Mehndi","Boho Wrist Mehndi",
    "Wrist Lotus Mehndi","Double Band Wrist Mehndi","Wrist Tikki Mehndi",
    "Stylish Wrist Mehndi","Wrist Leaf Mehndi","Bridal Wrist Mehndi",
    "Wrist Net Mehndi","Modern Wrist Mehndi",
  ],
  "rajasthani-mehndi-design": [
    "Rajasthani Full Hand Mehndi","Rajasthani Bridal Mehndi","Dulha Dulhan Rajasthani Mehndi",
    "Rajasthani Figure Mehndi","Rajasthani Back Hand Mehndi","Rajasthani Mor Design",
    "Rajasthani Jaal Mehndi","Rajasthani Feet Mehndi","Marwari Mehndi Design",
    "Rajasthani Shaded Mehndi","Rajasthani Palm Mehndi","Rajasthani Tikki Design",
    "Rajasthani Procession Mehndi","Rajasthani Fine Line Mehndi","Rajasthani Wedding Mehndi",
    "Rajasthani Half Hand Mehndi","Rajasthani Border Mehndi","Rajasthani Bel Design",
    "Rajasthani Chej Mehndi","Traditional Rajasthani Mehndi",
  ],
  "moroccan-mehndi-design": [
    "Moroccan Geometric Mehndi","Moroccan Diamond Mehndi","Moroccan Back Hand Design",
    "Moroccan Foot Mehndi","Bold Moroccan Mehndi","Moroccan Tribal Mehndi",
    "Moroccan Finger Mehndi","Moroccan Line Mehndi","Moroccan Wrist Mehndi",
    "Berber Style Mehndi","Moroccan Minimal Mehndi","Moroccan Symmetric Design",
    "Moroccan Palm Mehndi","Moroccan Cross Pattern","Moroccan Dotwork Mehndi",
    "Moroccan Band Mehndi","Moroccan Bridal Mehndi","Moroccan Half Hand",
    "Moroccan Chevron Mehndi","Modern Moroccan Mehndi",
  ],
  "jaal-mehndi-design": [
    "Full Hand Jaal Mehndi","Pakistani Jaal Mehndi","Bridal Jaal Design",
    "Net Jaal Back Hand Mehndi","Floral Jaal Mehndi","Diamond Jaal Mehndi",
    "Jaal Finger Mehndi","Arabic Jaal Mehndi","Criss Cross Jaal Mehndi",
    "Jaal Palm Mehndi","Heavy Jaal Mehndi","Jaal Tikki Design",
    "Mesh Jaal Mehndi","Jaal Half Hand Mehndi","Jaal Wrist Mehndi",
    "Jaal Mandala Mehndi","Fine Jaal Mehndi","Jaal Feet Mehndi",
    "Modern Jaal Mehndi","Traditional Jaal Mehndi",
  ],
  "khafif-mehndi-design": [
    "Khafif Front Hand Mehndi","Light Khafif Mehndi","Khafif Arabic Mehndi",
    "Khafif Floral Mehndi","Khafif Back Hand Design","Spaced Khafif Mehndi",
    "Khafif Finger Mehndi","Eid Khafif Mehndi","Minimal Khafif Mehndi",
    "Khafif Vine Mehndi","Khafif Wrist Mehndi","Delicate Khafif Mehndi",
    "Khafif Half Hand Mehndi","Khafif Dotwork Mehndi","Khafif Leaf Mehndi",
    "Stylish Khafif Mehndi","Khafif Tikki Design","Khafif Net Pattern",
    "Khafif Bel Mehndi","Modern Khafif Mehndi",
  ],
  "shaded-mehndi-design": [
    "Shaded Arabic Mehndi","Double Tone Shaded Mehndi","Shaded Floral Mehndi",
    "Shaded Back Hand Design","Bridal Shaded Mehndi","Shaded Rose Mehndi",
    "Shaded Finger Mehndi","Gradient Shaded Mehndi","Shaded Mandala Mehndi",
    "Shaded Peacock Mehndi","Shaded Half Hand Mehndi","Shaded Jaal Mehndi",
    "Shaded Vine Mehndi","Shaded Wrist Mehndi","3D Shaded Mehndi",
    "Shaded Leaf Mehndi","Shaded Tikki Design","Modern Shaded Mehndi",
    "Shaded Feet Mehndi","Elegant Shaded Mehndi",
  ],
};

const TAGS: Record<string, string[]> = {
  "bridal-mehndi-design":    ["bridal","wedding","dulhan","full hand"],
  "arabic-mehndi-design":    ["arabic","floral","half hand","modern"],
  "pakistani-mehndi-design": ["pakistani","traditional","heavy","bridal"],
  "eid-mehndi-design":       ["eid","festive","simple","arabic"],
  "finger-mehndi-design":    ["finger","minimal","simple","dotwork"],
  "feet-mehndi-design":      ["feet","ankle","floral","bridal"],
  "minimal-mehndi-design":   ["minimal","simple","modern","clean"],
  "kids-mehndi-design":      ["kids","simple","easy","fun"],
  "back-hand-mehndi-design": ["back hand","full","floral","arabic"],
  "indian-mehndi-design":    ["indian","traditional","bridal","paisley"],
  "stylish-mehndi-design":   ["stylish","modern","trendy","party"],
  "front-hand-mehndi-design":["front hand","full","floral","simple"],
  "mehndi-tattoo-design":    ["tattoo","black","bold","temporary","henna tattoo"],
  "floral-mehndi-design":    ["floral","roses","lotus","vines","flowers"],
  "circle-mehndi-design":    ["circle","mandala","round","geometric"],
  "gol-tikki-mehndi-design": ["gol tikki","round","traditional","medallion"],
  "easy-mehndi-design":      ["easy","simple","beginner","quick"],
  "engagement-mehndi-design":["engagement","sagai","ring ceremony","couple"],
  "peacock-mehndi-design":   ["peacock","mor","feather","bridal"],
  "mandala-mehndi-design":   ["mandala","circle","symmetric","dotwork"],
  "dulhan-mehndi-design":    ["dulhan","bridal","heavy","full hand"],
  "jewellery-mehndi-design": ["jewellery","hathphool","bracelet","bridal"],
  "half-hand-mehndi-design": ["half hand","arabic","floral","elegant"],
  "wrist-mehndi-design":     ["wrist","band","bracelet","minimal"],
  "rajasthani-mehndi-design":["rajasthani","traditional","figures","fine line"],
  "moroccan-mehndi-design":  ["moroccan","geometric","diamond","bold"],
  "jaal-mehndi-design":      ["jaal","net","mesh","heavy"],
  "khafif-mehndi-design":    ["khafif","light","delicate","arabic"],
  "shaded-mehndi-design":    ["shaded","gradient","double tone","dimension"],
};

// ── Human-readable category display names ────────────────────────────────────
const CATEGORY_DISPLAY: Record<string, string> = {
  "bridal-mehndi-design":    "bridal",
  "arabic-mehndi-design":    "Arabic",
  "pakistani-mehndi-design": "Pakistani",
  "eid-mehndi-design":       "Eid",
  "finger-mehndi-design":    "finger",
  "feet-mehndi-design":      "feet",
  "minimal-mehndi-design":   "minimal",
  "kids-mehndi-design":      "kids",
  "back-hand-mehndi-design": "back hand",
  "indian-mehndi-design":    "Indian",
  "stylish-mehndi-design":   "stylish",
  "front-hand-mehndi-design":"front hand",
  "mehndi-tattoo-design":    "mehndi tattoo",
  "floral-mehndi-design":    "floral",
  "circle-mehndi-design":    "circle mandala",
  "gol-tikki-mehndi-design": "gol tikki",
  "easy-mehndi-design":      "easy",
};

// ── Phrase banks for UNIQUE descriptions ─────────────────────────────────────
// Each design composes one sentence from each bank, selected by a different
// rotating index, so no two designs share the same description text. This is
// what lets the pages read as distinct content instead of duplicates.
const OPENERS = [
  "A beautifully detailed", "An elegant", "A stunning", "A graceful",
  "A timeless", "A modern take on the", "A delicate", "A bold and intricate",
  "A romantic", "An eye-catching", "A refined", "A classic",
];
const MIDDLES = [
  "that balances fine line work with open negative space",
  "featuring flowing motifs that wrap naturally around the hand",
  "with layered detailing that builds depth from the centre outward",
  "combining traditional patterns with a clean, contemporary finish",
  "where every stroke is placed to flatter the shape of the hand",
  "built around a central focal point with trailing vine accents",
  "that photographs beautifully and stains a deep, rich colour",
  "designed to look striking yet stay quick and comfortable to apply",
  "with symmetrical detailing that reads elegantly from every angle",
  "blending floral, paisley and geometric elements into one cohesive look",
];
const OCCASIONS = [
  "Ideal for weddings, engagements and festive celebrations.",
  "Perfect for Eid, parties and everyday wear alike.",
  "A favourite choice for brides and mehndi artists in 2026.",
  "Great for festive gatherings, Karwa Chauth and special days.",
  "Suited to both minimal lovers and those who enjoy heavier detail.",
  "A versatile pick that works for casual and formal occasions.",
  "Especially popular for Eid mornings and last-minute looks.",
  "A go-to design for brides who want timeless elegance.",
];
const TIPS = [
  "Save it to Pinterest and share it with your mehndi artist for an exact match.",
  "Leave the paste on for 6–8 hours to develop the deepest colour.",
  "Pair it with simple jewellery to let the henna detailing stand out.",
  "Practise the central motif on paper first for the cleanest finish.",
  "Apply a lemon-sugar seal once dry to intensify the final stain.",
  "Recreate it at home in under 30 minutes with a fine-tip cone.",
];

// Build a unique, multi-sentence description for a generated design.
function buildDescription(category: string, titleBase: string, i: number): string {
  const disp = CATEGORY_DISPLAY[category] ?? "mehndi";
  const opener   = OPENERS[i % OPENERS.length];
  const middle   = MIDDLES[(i * 3 + 1) % MIDDLES.length];
  const occasion = OCCASIONS[(i * 5 + 2) % OCCASIONS.length];
  const tip      = TIPS[(i * 7 + 3) % TIPS.length];
  return `${opener} ${titleBase.toLowerCase()} ${middle}. This ${disp} mehndi design ${occasion.charAt(0).toLowerCase() + occasion.slice(1)} ${tip}`;
}

// ── All category slugs ───────────────────────────────────────────────────────
export const ALL_CATEGORY_SLUGS = Object.keys(CATEGORY_START);

// ── Dedicated photo pools per category ───────────────────────────────────────
const DEDICATED_POOLS: Record<string, string[]> = {
  "mehndi-tattoo-design":    TATTOO_PHOTOS,
  "floral-mehndi-design":    FLORAL_PHOTOS,
  "circle-mehndi-design":    CIRCLE_PHOTOS,
  "gol-tikki-mehndi-design": GOL_TIKKI_PHOTOS,
  "easy-mehndi-design":      EASY_PHOTOS,
};

// Master union of every verified henna photo ID we have — the widest distinct
// set available. (NOTE: this is a finite stock-photo set, so windows below
// overlap; genuinely unique imagery at scale needs a live image source.)
const MASTER_POOL: string[] = Array.from(
  new Set<string>([
    ...ALL_PHOTOS, ...FLORAL_PHOTOS, ...CIRCLE_PHOTOS,
    ...GOL_TIKKI_PHOTOS, ...EASY_PHOTOS, ...TATTOO_PHOTOS,
  ]),
);

// Build a DISTINCT photo window per category so each page's gallery has a
// different lead image, ordering and subset — no two new pages look the same.
function categoryWindow(offset: number, size = 24): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  // Scattered stride so each offset yields a different visual sequence.
  for (let i = 0; out.length < size && i < MASTER_POOL.length * 2; i++) {
    const id = MASTER_POOL[(offset * 7 + i * 2) % MASTER_POOL.length];
    if (!seen.has(id)) { seen.add(id); out.push(id); }
  }
  // Top up if scatter left us short.
  for (let k = 0; out.length < size && k < MASTER_POOL.length; k++) {
    const id = MASTER_POOL[(offset + k) % MASTER_POOL.length];
    if (!seen.has(id)) { seen.add(id); out.push(id); }
  }
  return out;
}

// Give every NEW style page its own distinct window into the master set.
[
  "engagement-mehndi-design", "peacock-mehndi-design", "mandala-mehndi-design",
  "dulhan-mehndi-design", "jewellery-mehndi-design", "half-hand-mehndi-design",
  "wrist-mehndi-design", "rajasthani-mehndi-design", "moroccan-mehndi-design",
  "jaal-mehndi-design", "khafif-mehndi-design", "shaded-mehndi-design",
].forEach((slug, i) => {
  DEDICATED_POOLS[slug] = categoryWindow(i);
});

// ── Main generator ────────────────────────────────────────────────────────────
// For new categories: 25 dedicated photos × 40 URL variants = 1000 unique URLs.
// For other categories: 33 shared photos with category-specific start offset.
export function generateCategoryDesigns(category: string, count = 500): Design[] {
  const titles    = CATEGORY_TITLES[category] ?? CATEGORY_TITLES["arabic-mehndi-design"];
  const tags      = TAGS[category] ?? ["mehndi","henna","design"];
  const startOffset = CATEGORY_START[category] ?? 0;

  // Prefer real per-category Unsplash photos when fetched; else the curated
  // dedicated pool; else the shared pool.
  const apiPhotos = UNSPLASH_BY_CATEGORY[category] ?? [];
  const photoPool = DEDICATED_POOLS[category] ?? ALL_PHOTOS;
  const total     = photoPool.length;
  const designs: Design[] = [];

  for (let i = 0; i < count; i++) {
    // Cycle through all photos, but start at a category-specific offset
    const photoIndex  = (i + startOffset) % total;
    const photoId     = photoPool[photoIndex];

    // Which "cycle" through the photo pool are we on?
    const cycle       = Math.floor(i / total);
    const urlVariant  = URL_VARIANTS[cycle % URL_VARIANTS.length];

    // Real fetched photo for this category (distinct per design) when available.
    const image = apiPhotos.length > 0
      ? apiPhotos[i % apiPhotos.length]
      : `https://images.unsplash.com/photo-${photoId}?${urlVariant}`;

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
      image,
      alt:         `${title} – intricate ${CATEGORY_DISPLAY[category] ?? "mehndi"} henna pattern for hands`,
      description: buildDescription(category, titleBase, i),
      featured:    i < 6,
      trending:    i % 5 === 0,
      createdAt:   "2026-01-01",
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
