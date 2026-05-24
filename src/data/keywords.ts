// Complete keyword research for MehndiGlow
// Use these in: page titles, descriptions, blog posts, image alt text, tags

export interface Keyword {
  keyword: string;
  volume: string;      // Monthly search volume estimate
  difficulty: string;  // LOW / MEDIUM / HIGH
  intent: string;      // INFO / NAVIGATE / COMMERCIAL / TRANSACTIONAL
  priority: string;    // HIGH / MEDIUM / LOW
  usedIn: string;      // Where to use this keyword
}

// ── PRIMARY KEYWORDS (Target first) ─────────────────────────────────────────
export const primaryKeywords: Keyword[] = [
  { keyword: "mehndi designs",                    volume: "1M+",  difficulty: "HIGH",   intent: "INFO",   priority: "HIGH",   usedIn: "Homepage H1, Title, Meta" },
  { keyword: "mehndi designs 2026",               volume: "500K", difficulty: "MEDIUM", intent: "INFO",   priority: "HIGH",   usedIn: "Homepage, Category pages" },
  { keyword: "bridal mehndi designs",             volume: "300K", difficulty: "HIGH",   intent: "INFO",   priority: "HIGH",   usedIn: "Bridal category H1, Blog titles" },
  { keyword: "arabic mehndi designs",             volume: "250K", difficulty: "MEDIUM", intent: "INFO",   priority: "HIGH",   usedIn: "Arabic category, Blog" },
  { keyword: "eid mehndi designs 2026",           volume: "200K", difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Eid category, Seasonal blog" },
  { keyword: "simple mehndi designs",             volume: "150K", difficulty: "MEDIUM", intent: "INFO",   priority: "HIGH",   usedIn: "Blog, Beginner section" },
  { keyword: "new mehndi designs",                volume: "120K", difficulty: "MEDIUM", intent: "INFO",   priority: "HIGH",   usedIn: "Homepage, Trending section" },
  { keyword: "mehndi designs for hands",          volume: "100K", difficulty: "MEDIUM", intent: "INFO",   priority: "HIGH",   usedIn: "Category pages, Design alt text" },
  { keyword: "pakistani mehndi designs",          volume: "80K",  difficulty: "MEDIUM", intent: "INFO",   priority: "HIGH",   usedIn: "Pakistani category" },
  { keyword: "henna designs",                     volume: "200K", difficulty: "HIGH",   intent: "INFO",   priority: "HIGH",   usedIn: "Alt text, Meta keywords" },
];

// ── CATEGORY KEYWORDS ────────────────────────────────────────────────────────
export const categoryKeywords: Keyword[] = [
  { keyword: "bridal mehndi designs 2026",        volume: "90K",  difficulty: "MEDIUM", intent: "INFO",   priority: "HIGH",   usedIn: "/bridal-mehndi-design H1, Title" },
  { keyword: "arabic mehndi design new style",    volume: "60K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "/arabic-mehndi-design" },
  { keyword: "eid mehndi 2026",                   volume: "80K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "/eid-mehndi-design" },
  { keyword: "finger mehndi designs",             volume: "40K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "/finger-mehndi-design" },
  { keyword: "feet mehndi designs",               volume: "30K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "/feet-mehndi-design" },
  { keyword: "minimal mehndi designs",            volume: "35K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "/minimal-mehndi-design" },
  { keyword: "back hand mehndi designs",          volume: "45K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "/back-hand-mehndi-design" },
  { keyword: "front hand mehndi designs",         volume: "25K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "/front-hand-mehndi-design" },
  { keyword: "kids mehndi designs",               volume: "20K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "/kids-mehndi-design" },
  { keyword: "indian mehndi designs",             volume: "70K",  difficulty: "MEDIUM", intent: "INFO",   priority: "HIGH",   usedIn: "/indian-mehndi-design" },
  { keyword: "stylish mehndi designs",            volume: "25K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "/stylish-mehndi-design" },
  { keyword: "pakistani mehndi",                  volume: "55K",  difficulty: "MEDIUM", intent: "INFO",   priority: "HIGH",   usedIn: "/pakistani-mehndi-design" },
];

// ── LONG-TAIL KEYWORDS (Easy to rank) ───────────────────────────────────────
export const longTailKeywords: Keyword[] = [
  { keyword: "simple mehndi designs for beginners",         volume: "22K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Blog post, Beginner category" },
  { keyword: "easy mehndi design step by step",             volume: "18K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "How-to blog posts" },
  { keyword: "arabic mehndi design 2026 new style",         volume: "15K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Arabic category, Blog" },
  { keyword: "bridal mehndi front hand design",             volume: "12K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Design pages, Blog" },
  { keyword: "simple mehndi design for kids easy",          volume: "10K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Kids category, Blog" },
  { keyword: "feet mehndi design easy 2026",                volume: "8K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Feet category" },
  { keyword: "arabic mehndi back hand full design",         volume: "9K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Design page titles" },
  { keyword: "minimal mehndi for office",                   volume: "5K",  difficulty: "LOW",  intent: "INFO",   priority: "MEDIUM", usedIn: "Design tags, Blog" },
  { keyword: "bridal mehndi design for small hands",        volume: "7K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Blog post" },
  { keyword: "how to make mehndi color darker",             volume: "12K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "How-to blog post" },
  { keyword: "how long to leave mehndi on",                 volume: "8K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Blog, FAQ" },
  { keyword: "eid mehndi designs for kids",                 volume: "6K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Eid + Kids category" },
  { keyword: "dulhan mehndi design full hand",              volume: "11K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Bridal design pages" },
  { keyword: "mehndi design for eid ul adha 2026",          volume: "10K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Eid seasonal blog" },
  { keyword: "simple arabic mehndi for beginners",          volume: "7K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Arabic blog post" },
  { keyword: "bridal mehndi back hand 2026",                volume: "9K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Design slug, title" },
  { keyword: "new style mehndi design 2026",                volume: "14K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Homepage, New designs section" },
  { keyword: "mehndi design for marriage",                  volume: "8K",  difficulty: "LOW",  intent: "INFO",   priority: "MEDIUM", usedIn: "Bridal category, Blog" },
  { keyword: "latest mehndi designs for hands",             volume: "13K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Homepage title variant" },
  { keyword: "pakistani bridal mehndi designs 2026",        volume: "8K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Pakistani + Bridal category" },
];

// ── SEASONAL / TRENDING KEYWORDS ─────────────────────────────────────────────
export const seasonalKeywords: Keyword[] = [
  { keyword: "eid mehndi designs 2026",                     volume: "80K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Publish 2 weeks before Eid" },
  { keyword: "eid ul adha mehndi 2026",                     volume: "40K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Eid ul Adha blog + category" },
  { keyword: "chand raat mehndi designs",                   volume: "25K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Chand raat blog post" },
  { keyword: "wedding season mehndi 2026",                  volume: "15K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Wedding season blog" },
  { keyword: "karwa chauth mehndi 2026",                    volume: "20K", difficulty: "LOW",  intent: "INFO",   priority: "MEDIUM", usedIn: "October seasonal post" },
  { keyword: "diwali mehndi designs 2026",                  volume: "18K", difficulty: "LOW",  intent: "INFO",   priority: "MEDIUM", usedIn: "October seasonal post" },
  { keyword: "navratri mehndi 2026",                        volume: "12K", difficulty: "LOW",  intent: "INFO",   priority: "MEDIUM", usedIn: "October seasonal post" },
  { keyword: "teej mehndi designs",                         volume: "10K", difficulty: "LOW",  intent: "INFO",   priority: "MEDIUM", usedIn: "July–August seasonal post" },
  { keyword: "rakshabandhan mehndi 2026",                   volume: "15K", difficulty: "LOW",  intent: "INFO",   priority: "MEDIUM", usedIn: "August seasonal post" },
  { keyword: "mehndi designs for shadi",                    volume: "12K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Wedding season blog" },
];

// ── QUESTION KEYWORDS (For FAQ / Blog / PAA) ────────────────────────────────
export const questionKeywords: Keyword[] = [
  { keyword: "which mehndi design is best for bridal",      volume: "5K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "FAQ section, Blog post" },
  { keyword: "how to apply mehndi cone step by step",       volume: "8K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "HowTo blog post" },
  { keyword: "how to make mehndi at home",                  volume: "10K", difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Blog how-to post" },
  { keyword: "what is arabic mehndi",                       volume: "4K",  difficulty: "LOW",  intent: "INFO",   priority: "MEDIUM", usedIn: "Arabic category description" },
  { keyword: "how long does mehndi last",                   volume: "9K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "FAQ, Blog" },
  { keyword: "how to remove mehndi quickly",                volume: "6K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "How-to blog post" },
  { keyword: "what to apply after mehndi",                  volume: "5K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "FAQ, Blog tips" },
  { keyword: "why is my mehndi not dark",                   volume: "4K",  difficulty: "LOW",  intent: "INFO",   priority: "HIGH",   usedIn: "Tips blog post" },
  { keyword: "is black mehndi safe",                        volume: "3K",  difficulty: "LOW",  intent: "INFO",   priority: "MEDIUM", usedIn: "Safety blog post" },
  { keyword: "which henna is best for dark color",          volume: "5K",  difficulty: "LOW",  intent: "COMMERCIAL", priority: "HIGH", usedIn: "Product recommendation blog" },
];

// ── IMAGE SEO KEYWORDS (For alt text and file names) ─────────────────────────
export const imageSeoKeywords: string[] = [
  "bridal mehndi design 2026",
  "arabic mehndi back hand",
  "simple mehndi front hand",
  "eid mehndi design",
  "pakistani bridal mehndi full hand",
  "minimal mehndi design",
  "finger mehndi simple",
  "feet mehndi beautiful",
  "kids easy mehndi",
  "latest mehndi 2026",
  "arabic floral mehndi",
  "dulhan mehndi design",
  "indian traditional mehndi",
  "stylish mehndi modern",
  "back hand mehndi pattern",
];

// ── CONTENT CALENDAR based on keywords ──────────────────────────────────────
export const contentCalendar = [
  // Month 1 — Foundation posts
  { month: "Month 1", title: "50 Most Beautiful Bridal Mehndi Designs 2026",         keyword: "bridal mehndi designs 2026",     priority: "HIGH"   },
  { month: "Month 1", title: "40 Stunning Arabic Mehndi Designs for 2026",           keyword: "arabic mehndi designs",          priority: "HIGH"   },
  { month: "Month 1", title: "Simple Mehndi Designs for Beginners (Step by Step)",   keyword: "simple mehndi for beginners",    priority: "HIGH"   },
  { month: "Month 1", title: "How to Apply Mehndi Cone — Complete Guide",            keyword: "how to apply mehndi",            priority: "HIGH"   },
  { month: "Month 1", title: "New Style Mehndi Designs 2026 — Latest Trends",        keyword: "new style mehndi 2026",          priority: "HIGH"   },
  { month: "Month 1", title: "Easy Mehndi Designs That Look Hard",                   keyword: "easy mehndi designs",            priority: "MEDIUM" },
  { month: "Month 1", title: "Mehndi Design for Small Hands — 20 Best Ideas",       keyword: "mehndi for small hands",         priority: "MEDIUM" },
  { month: "Month 1", title: "How to Make Mehndi Darker Naturally (6 Tips)",         keyword: "how to make mehndi darker",      priority: "HIGH"   },

  // Month 2 — Eid focus (publish 3–4 weeks early)
  { month: "Month 2", title: "Eid Mehndi Designs 2026 — 50 Best Ideas",             keyword: "eid mehndi 2026",                priority: "HIGH"   },
  { month: "Month 2", title: "Simple Eid Mehndi in 5 Minutes",                       keyword: "simple eid mehndi",              priority: "HIGH"   },
  { month: "Month 2", title: "Eid ul Adha Mehndi Designs 2026",                      keyword: "eid ul adha mehndi 2026",        priority: "HIGH"   },
  { month: "Month 2", title: "Chand Raat Mehndi Ideas — Traditional & Modern",      keyword: "chand raat mehndi",              priority: "HIGH"   },
  { month: "Month 2", title: "Eid Mehndi for Kids — 25 Cute Designs",               keyword: "eid mehndi for kids",            priority: "HIGH"   },
  { month: "Month 2", title: "Minimal Mehndi for Eid — Modern & Stylish",            keyword: "minimal eid mehndi",             priority: "MEDIUM" },

  // Month 3 — Bridal + Pakistani focus
  { month: "Month 3", title: "Pakistani Bridal Mehndi vs Indian Bridal Mehndi",      keyword: "pakistani vs indian mehndi",     priority: "HIGH"   },
  { month: "Month 3", title: "Full Hand Bridal Mehndi Designs — 30+ Photos",        keyword: "full hand bridal mehndi",        priority: "HIGH"   },
  { month: "Month 3", title: "Bridal Mehndi Care Tips — Before & After",             keyword: "bridal mehndi tips",             priority: "HIGH"   },
  { month: "Month 3", title: "Dulhan Mehndi Designs with Groom's Name",              keyword: "dulhan mehndi",                  priority: "HIGH"   },
  { month: "Month 3", title: "How Long Should Bridal Mehndi Stay On?",              keyword: "bridal mehndi how long",         priority: "MEDIUM" },

  // Month 4 — SEO + Beginner focus
  { month: "Month 4", title: "Mehndi Design Trends 2026 — Complete Guide",          keyword: "mehndi trends 2026",             priority: "HIGH"   },
  { month: "Month 4", title: "10 Common Mehndi Mistakes to Avoid",                   keyword: "mehndi mistakes",                priority: "MEDIUM" },
  { month: "Month 4", title: "Natural Henna vs Chemical Henna — Which Is Safer?",   keyword: "natural vs chemical henna",      priority: "HIGH"   },
  { month: "Month 4", title: "Best Mehndi Cones Available in Pakistan 2026",        keyword: "best mehndi cones pakistan",     priority: "HIGH"   },
  { month: "Month 4", title: "Mehndi Business: How to Start and Earn in 2026",      keyword: "mehndi business",                priority: "HIGH"   },
];

// ── 2025 / 2026 UPDATED KEYWORDS ────────────────────────────────────────────
export const updatedYearKeywords: Keyword[] = [
  { keyword: "mehndi designs 2025",                           volume: "400K", difficulty: "MEDIUM", intent: "INFO",   priority: "HIGH",   usedIn: "Homepage, all category titles" },
  { keyword: "bridal mehndi designs 2025",                    volume: "200K", difficulty: "MEDIUM", intent: "INFO",   priority: "HIGH",   usedIn: "Bridal category H1" },
  { keyword: "arabic mehndi 2025",                            volume: "150K", difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Arabic category" },
  { keyword: "eid mehndi designs 2025",                       volume: "180K", difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Eid category, seasonal blog" },
  { keyword: "new mehndi designs 2025",                       volume: "100K", difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Homepage trending section" },
  { keyword: "latest mehndi designs 2025",                    volume: "90K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Homepage, blog" },
  { keyword: "simple mehndi designs 2025",                    volume: "80K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Minimal category, blog" },
  { keyword: "pakistani mehndi designs 2025",                 volume: "70K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Pakistani category" },
  { keyword: "indian mehndi designs 2025",                    volume: "60K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Indian category" },
  { keyword: "mehndi design 2025 new style",                  volume: "55K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Stylish category, blog" },
];

// ── AI GENERATOR KEYWORDS ─────────────────────────────────────────────────────
export const aiGeneratorKeywords: Keyword[] = [
  { keyword: "ai mehndi design generator",                    volume: "8K",   difficulty: "LOW",    intent: "TRANSACTIONAL", priority: "HIGH",   usedIn: "/ai-generator title, meta" },
  { keyword: "mehndi design generator online",                volume: "12K",  difficulty: "LOW",    intent: "TRANSACTIONAL", priority: "HIGH",   usedIn: "/ai-generator" },
  { keyword: "henna design generator",                        volume: "6K",   difficulty: "LOW",    intent: "TRANSACTIONAL", priority: "HIGH",   usedIn: "/ai-generator" },
  { keyword: "mehndi design maker",                           volume: "10K",  difficulty: "LOW",    intent: "TRANSACTIONAL", priority: "HIGH",   usedIn: "/ai-generator" },
  { keyword: "create mehndi design online",                   volume: "5K",   difficulty: "LOW",    intent: "TRANSACTIONAL", priority: "MEDIUM", usedIn: "/ai-generator" },
  { keyword: "free mehndi design generator",                  volume: "7K",   difficulty: "LOW",    intent: "TRANSACTIONAL", priority: "HIGH",   usedIn: "/ai-generator meta" },
  { keyword: "ai henna art generator",                        volume: "3K",   difficulty: "LOW",    intent: "TRANSACTIONAL", priority: "MEDIUM", usedIn: "/ai-generator" },
  { keyword: "mehndi design app online",                      volume: "9K",   difficulty: "LOW",    intent: "TRANSACTIONAL", priority: "HIGH",   usedIn: "/ai-generator" },
];

// ── REGIONAL / CULTURAL KEYWORDS ─────────────────────────────────────────────
export const regionalKeywords: Keyword[] = [
  { keyword: "mehndi designs for hands pakistani 2025",       volume: "40K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Pakistani category" },
  { keyword: "rajasthani mehndi designs",                     volume: "35K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Indian category, blog" },
  { keyword: "marwari mehndi design",                         volume: "20K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Indian category" },
  { keyword: "gujarati mehndi design",                        volume: "18K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Indian category" },
  { keyword: "bengali mehndi design",                         volume: "12K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Indian category" },
  { keyword: "kashmiri mehndi design",                        volume: "8K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Indian category" },
  { keyword: "khaleeji mehndi designs",                       volume: "15K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Arabic category" },
  { keyword: "moroccan henna designs",                        volume: "10K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Arabic category, blog" },
  { keyword: "bangladeshi mehndi design",                     volume: "14K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Indian/Pakistani category" },
  { keyword: "lahori mehndi design",                          volume: "9K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Pakistani category" },
  { keyword: "karachi mehndi design",                         volume: "7K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Pakistani category" },
  { keyword: "sudanese henna designs",                        volume: "5K",   difficulty: "LOW",    intent: "INFO",   priority: "LOW",    usedIn: "Blog" },
];

// ── OCCASION-SPECIFIC KEYWORDS ───────────────────────────────────────────────
export const occasionKeywords: Keyword[] = [
  { keyword: "engagement mehndi designs",                     volume: "45K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Bridal category, blog" },
  { keyword: "nikah mehndi designs",                          volume: "30K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Bridal category" },
  { keyword: "walima mehndi design",                          volume: "12K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Bridal category, blog" },
  { keyword: "mehndi for function",                           volume: "18K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Eid, Stylish category" },
  { keyword: "mehendi ceremony designs",                      volume: "25K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Bridal category" },
  { keyword: "party mehndi designs",                          volume: "20K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Stylish category" },
  { keyword: "office mehndi design",                          volume: "8K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Minimal category" },
  { keyword: "college mehndi design",                         volume: "6K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Minimal, Stylish category" },
  { keyword: "mehndi for guests wedding",                     volume: "7K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Blog, Simple category" },
  { keyword: "mehndi for reception",                          volume: "9K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Bridal category" },
  { keyword: "haldi mehndi design",                           volume: "11K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Indian category, blog" },
  { keyword: "sangeet mehndi design",                         volume: "8K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Indian category" },
];

// ── STYLE-SPECIFIC LONG-TAIL KEYWORDS ───────────────────────────────────────
export const styleLongTailKeywords: Keyword[] = [
  { keyword: "floral mehndi designs",                         volume: "35K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Arabic, Bridal category" },
  { keyword: "geometric mehndi design",                       volume: "18K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Minimal, Stylish category" },
  { keyword: "peacock mehndi design",                         volume: "40K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Indian, Bridal category" },
  { keyword: "mandala mehndi design",                         volume: "28K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Minimal category, blog" },
  { keyword: "vine mehndi design",                            volume: "12K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Arabic, Front hand category" },
  { keyword: "lotus mehndi design",                           volume: "10K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Indian category" },
  { keyword: "rose mehndi design",                            volume: "14K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Arabic category" },
  { keyword: "paisley mehndi design",                         volume: "9K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Indian, Pakistani category" },
  { keyword: "dotwork mehndi design",                         volume: "8K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Finger, Minimal category" },
  { keyword: "jaal mehndi design",                            volume: "22K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Pakistani, Bridal category" },
  { keyword: "tikki mehndi design",                           volume: "16K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Indian, Pakistani category" },
  { keyword: "glitter mehndi design",                         volume: "7K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Stylish category" },
  { keyword: "white mehndi design",                           volume: "11K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Stylish, Minimal category" },
  { keyword: "black mehndi design",                           volume: "25K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Pakistani, Finger category" },
  { keyword: "cone mehndi design",                            volume: "6K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Blog, How-to" },
  { keyword: "heavy mehndi design",                           volume: "20K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Bridal, Pakistani category" },
  { keyword: "net mehndi design",                             volume: "13K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Pakistani category" },
  { keyword: "half hand mehndi design",                       volume: "30K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Arabic, Front hand category" },
  { keyword: "full hand mehndi design",                       volume: "50K",  difficulty: "MEDIUM", intent: "INFO",   priority: "HIGH",   usedIn: "Bridal, Back hand category" },
  { keyword: "wrist mehndi design",                           volume: "15K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Minimal, Arabic category" },
];

// ── BODY PART SPECIFIC KEYWORDS ──────────────────────────────────────────────
export const bodyPartKeywords: Keyword[] = [
  { keyword: "palm mehndi design",                            volume: "18K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Front hand category" },
  { keyword: "elbow mehndi design",                           volume: "5K",   difficulty: "LOW",    intent: "INFO",   priority: "LOW",    usedIn: "Blog" },
  { keyword: "arm mehndi design",                             volume: "20K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Category pages, blog" },
  { keyword: "shoulder mehndi design",                        volume: "6K",   difficulty: "LOW",    intent: "INFO",   priority: "LOW",    usedIn: "Blog" },
  { keyword: "neck mehndi design",                            volume: "4K",   difficulty: "LOW",    intent: "INFO",   priority: "LOW",    usedIn: "Blog" },
  { keyword: "back mehndi design",                            volume: "8K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Blog" },
  { keyword: "ankle mehndi design",                           volume: "22K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Feet category" },
  { keyword: "toe mehndi design",                             volume: "8K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Feet category" },
  { keyword: "leg mehndi design",                             volume: "10K",  difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Feet category, blog" },
  { keyword: "knuckle mehndi design",                         volume: "5K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Finger category" },
  { keyword: "thumb mehndi design",                           volume: "4K",   difficulty: "LOW",    intent: "INFO",   priority: "LOW",    usedIn: "Finger category" },
  { keyword: "index finger mehndi",                           volume: "3K",   difficulty: "LOW",    intent: "INFO",   priority: "LOW",    usedIn: "Finger category" },
];

// ── DIFFICULTY-LEVEL KEYWORDS ────────────────────────────────────────────────
export const difficultyKeywords: Keyword[] = [
  { keyword: "beginner mehndi design",                        volume: "25K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Kids, Minimal category, blog" },
  { keyword: "easy mehndi design 5 minutes",                  volume: "15K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Blog how-to" },
  { keyword: "quick mehndi design for eid",                   volume: "12K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Eid category, blog" },
  { keyword: "advanced mehndi designs",                       volume: "8K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Bridal, Heavy category" },
  { keyword: "mehndi for beginners step by step pictures",    volume: "18K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Blog tutorial" },
  { keyword: "simple 5 minute mehndi",                        volume: "10K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Blog, Minimal category" },
  { keyword: "no cone mehndi design",                         volume: "5K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Blog" },
  { keyword: "stencil mehndi design",                         volume: "7K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Blog, Kids category" },
];

// ── MORE LONG-TAIL KEYWORDS ──────────────────────────────────────────────────
export const extraLongTailKeywords: Keyword[] = [
  { keyword: "mehndi design for small kids easy",             volume: "8K",   difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Kids category" },
  { keyword: "bridal mehndi with groom name",                 volume: "14K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Bridal category, blog" },
  { keyword: "mehndi designs that look hard but are easy",    volume: "9K",   difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Blog title" },
  { keyword: "arabic mehndi full hand both sides",            volume: "11K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Arabic, Back/Front hand" },
  { keyword: "dulhan mehndi for feet and hands",              volume: "10K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Bridal + Feet category" },
  { keyword: "mehndi design with name inside",                volume: "7K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Bridal blog" },
  { keyword: "mehndi henna paste recipe homemade",            volume: "6K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Blog how-to" },
  { keyword: "how to make mehndi paste at home",              volume: "9K",   difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Blog how-to" },
  { keyword: "best mehndi for dark skin",                     volume: "5K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Blog tips" },
  { keyword: "mehndi for light color tips",                   volume: "4K",   difficulty: "LOW",    intent: "INFO",   priority: "MEDIUM", usedIn: "Blog tips" },
  { keyword: "mehndi design for engagement function",         volume: "8K",   difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Bridal category" },
  { keyword: "arabic mehndi for fingers only",                volume: "7K",   difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Finger category" },
  { keyword: "indian bridal mehndi full hand both sides",     volume: "9K",   difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Indian + Bridal" },
  { keyword: "mehndi designs for teenage girls",              volume: "10K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Stylish, Minimal category" },
  { keyword: "beautiful mehndi for hands 2025",               volume: "20K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Homepage, blog" },
  { keyword: "mehndi design images download",                 volume: "30K",  difficulty: "LOW",    intent: "TRANSACTIONAL", priority: "HIGH", usedIn: "All gallery pages" },
  { keyword: "free mehndi design images",                     volume: "25K",  difficulty: "LOW",    intent: "TRANSACTIONAL", priority: "HIGH", usedIn: "All gallery pages, meta" },
  { keyword: "mehndi design photos hd",                       volume: "22K",  difficulty: "LOW",    intent: "TRANSACTIONAL", priority: "HIGH", usedIn: "Gallery pages" },
  { keyword: "mehndi design wallpaper",                       volume: "15K",  difficulty: "LOW",    intent: "TRANSACTIONAL", priority: "MEDIUM", usedIn: "Blog, gallery" },
  { keyword: "mehndi ke design",                              volume: "18K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Homepage meta, blog" },
  { keyword: "mehndi design simple ghar par",                 volume: "12K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Blog (Urdu/Hindi audience)" },
  { keyword: "asan mehndi design",                            volume: "8K",   difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Blog, Kids category" },
  { keyword: "dulhan ki mehndi",                              volume: "15K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Bridal category" },
  { keyword: "shadi ki mehndi design",                        volume: "10K",  difficulty: "LOW",    intent: "INFO",   priority: "HIGH",   usedIn: "Bridal category" },
];

// ── KEYWORD GROUPS for internal linking ─────────────────────────────────────
export const keywordClusters = {
  "Bridal Hub": [
    "bridal mehndi designs 2026",
    "dulhan mehndi design",
    "full hand bridal mehndi",
    "bridal back hand mehndi",
    "bridal feet mehndi",
    "bridal mehndi color tips",
  ],
  "Arabic Hub": [
    "arabic mehndi designs",
    "arabic half hand mehndi",
    "arabic mehndi for beginners",
    "arabic floral mehndi",
    "simple arabic mehndi",
  ],
  "Eid Hub": [
    "eid mehndi 2026",
    "eid ul adha mehndi",
    "chand raat mehndi",
    "simple eid mehndi",
    "eid mehndi for kids",
  ],
  "Beginner Hub": [
    "simple mehndi for beginners",
    "how to apply mehndi",
    "easy mehndi step by step",
    "mehndi cone technique",
    "how to make mehndi darker",
  ],
  "AI Generator Hub": [
    "ai mehndi design generator",
    "mehndi design generator online",
    "free mehndi design generator",
    "henna design generator",
    "mehndi design maker online",
  ],
  "Style Hub": [
    "floral mehndi designs",
    "geometric mehndi design",
    "peacock mehndi design",
    "mandala mehndi design",
    "jaal mehndi design",
    "tikki mehndi design",
  ],
  "Regional Hub": [
    "rajasthani mehndi designs",
    "khaleeji mehndi designs",
    "lahori mehndi design",
    "gujarati mehndi design",
    "moroccan henna designs",
  ],
  "Occasion Hub": [
    "engagement mehndi designs",
    "nikah mehndi designs",
    "mehendi ceremony designs",
    "party mehndi designs",
    "haldi mehndi design",
  ],
  "Download Hub": [
    "mehndi design images download",
    "free mehndi design images",
    "mehndi design photos hd",
    "mehndi design wallpaper",
    "mehndi ke design",
  ],
};
