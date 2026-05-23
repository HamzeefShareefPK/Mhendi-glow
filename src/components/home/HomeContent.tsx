"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Lightbulb, Star, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

/* ── Reusable section wrapper ── */
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Section heading ── */
function SectionHeading({ chip, title, subtitle }: { chip: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-henna-500 bg-henna-100 dark:bg-henna-800/60 px-3 py-1 rounded-full mb-3">
        <Sparkles size={10} /> {chip}
      </span>
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-henna-900 dark:text-henna-100 leading-tight mb-3">{title}</h2>
      {subtitle && <p className="text-henna-600 dark:text-henna-400 text-sm sm:text-base leading-relaxed max-w-3xl">{subtitle}</p>}
    </div>
  );
}

/* ── Inline image with caption ── */
function ContentImage({ src, alt, caption, className = "" }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={`rounded-2xl overflow-hidden border border-henna-200/60 dark:border-henna-800/60 shadow-md ${className}`}>
      <div className="relative">
        <Image src={src} alt={alt} width={800} height={500} className="w-full h-auto object-cover" loading="lazy" />
      </div>
      {caption && (
        <figcaption className="text-center text-xs text-henna-500 bg-henna-50 dark:bg-henna-900 py-2.5 px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ── Tip card ── */
function TipCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="flex gap-4 p-5 bg-white dark:bg-henna-900 rounded-2xl border border-henna-200/60 dark:border-henna-800 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 rounded-xl bg-henna-100 dark:bg-henna-800 flex items-center justify-center text-xl shrink-0">{icon}</div>
      <div>
        <h4 className="font-semibold text-henna-900 dark:text-henna-100 text-sm mb-1">{title}</h4>
        <p className="text-henna-600 dark:text-henna-400 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export default function HomeContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-28 py-10 sm:py-16">

      {/* ════════════════════════════════════════════
          SECTION 1 — What is Mehndi
      ════════════════════════════════════════════ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              chip="About Mehndi"
              title="What is Mehndi? The Ancient Art of Henna"
              subtitle="Mehndi, also known as henna, is one of the world's oldest forms of body art. For thousands of years, women across South Asia, the Middle East, and North Africa have adorned their hands and feet with intricate mehndi patterns as a symbol of beauty, celebration, and tradition."
            />
            <div className="space-y-4 text-henna-600 dark:text-henna-400 text-sm sm:text-base leading-relaxed">
              <p>
                The word <strong className="text-henna-800 dark:text-henna-200">mehndi</strong> comes from the Sanskrit word <em>mendhikā</em>, which refers to the henna plant (<em>Lawsonia inermis</em>). The leaves of this plant contain a natural dye called lawsone that bonds with the keratin protein in skin and hair, creating a rich reddish-brown stain that can last 1 to 3 weeks.
              </p>
              <p>
                In South Asian culture, mehndi is an essential part of wedding ceremonies. A bride&apos;s mehndi is believed to represent the depth of love in her marriage — the darker the mehndi color, the stronger the bond between the couple. Mehndi ceremonies, called <strong className="text-henna-800 dark:text-henna-200">Mehndi Rasam</strong>, are joyful pre-wedding celebrations where family and friends gather, sing traditional songs, and apply henna.
              </p>
              <p>
                Beyond weddings, mehndi is applied during Eid, Diwali, Teej, Karva Chauth, and many other festivals. Today, mehndi has evolved into a global art form, with modern artists combining traditional patterns with contemporary geometric and minimalist designs.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              {["Bridal Mehndi","Arabic Mehndi","Eid Mehndi","Minimal Mehndi"].map((cat) => (
                <Link key={cat} href={`/${cat.toLowerCase().replace(/ /g,"-")}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-full border border-henna-300 dark:border-henna-700 text-henna-600 dark:text-henna-300 hover:bg-henna-400 hover:text-white hover:border-henna-400 transition-all">
                  {cat} <ArrowRight size={11} />
                </Link>
              ))}
            </div>
          </div>
          <ContentImage
            src="https://images.unsplash.com/photo-1770346279037-89853a3e8c60?w=800&q=85&fit=crop"
            alt="Traditional mehndi ceremony — women applying henna at a wedding"
            caption="A traditional mehndi ceremony — a joyful pre-wedding celebration in South Asian culture"
          />
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 2 — Types of Mehndi Designs
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          chip="Design Styles"
          title="Popular Types of Mehndi Designs in 2025"
          subtitle="From heavy bridal patterns to simple everyday mehndi, there is a design for every occasion and skill level. Here are the most popular styles you will find on MehndiGlow."
        />

        {/* Style cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {[
            {
              photo: "1674884060571-96a46a9a7a72",
              name: "Bridal Mehndi",
              slug: "bridal-mehndi",
              desc: "The most elaborate and detailed style, covering the full hand and arms. Bridal mehndi often includes the groom's name hidden within the pattern, peacock motifs, and intricate paisley designs. It is applied 1–2 days before the wedding.",
            },
            {
              photo: "1568566240146-a5e26db3b29b",
              name: "Arabic Mehndi",
              slug: "arabic-mehndi",
              desc: "Characterized by bold, flowing floral patterns with generous negative space. Arabic mehndi looks modern and elegant, making it perfect for Eid, parties, and everyday wear. Its loose, free-flowing style is also great for beginners.",
            },
            {
              photo: "1566664254600-3412f985e947",
              name: "Pakistani Mehndi",
              slug: "pakistani-mehndi",
              desc: "Known for its fine, dense patterns and intricate detailing. Pakistani mehndi covers more of the hand than Arabic style and features complex jaal (net) patterns, tikki motifs, and elaborate geometric arrangements.",
            },
            {
              photo: "1571150612716-ff39d1e9ef58",
              name: "Eid Mehndi",
              slug: "eid-mehndi",
              desc: "Designed for festive celebrations, Eid mehndi ranges from simple finger designs to elaborate half-hand patterns. These designs are usually quicker to apply and dry faster — perfect for the busy Eid celebrations.",
            },
            {
              photo: "1565368114375-ba1a4db7099f",
              name: "Minimal Mehndi",
              slug: "minimal-mehndi",
              desc: "Clean, simple mehndi designs with fine lines, single motifs, and elegant placement. Minimal mehndi is perfect for office wear, casual events, and anyone who prefers subtle beauty. Small finger mehndi falls under this category.",
            },
            {
              photo: "1777749752246-f7e4f5151217",
              name: "Feet Mehndi",
              slug: "feet-mehndi",
              desc: "Beautiful henna applied on the feet and ankles, often for bridal occasions and festivals. Feet mehndi includes toe designs, ankle bracelet patterns, and full foot coverage that complements bridal hand mehndi.",
            },
          ].map((style, i) => (
            <motion.div
              key={style.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <Link href={`/${style.slug}`} className="group block h-full">
                <div className="h-full bg-white dark:bg-henna-900 rounded-2xl border border-henna-200/60 dark:border-henna-800 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-henna-400/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-${style.photo}?w=600&q=80&fit=crop&crop=entropy`}
                      alt={`${style.name} designs 2025`}
                      fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-bold text-white bg-henna-500/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {style.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-henna-600 dark:text-henna-400 leading-relaxed line-clamp-3">{style.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-henna-500 mt-3 group-hover:gap-1.5 transition-all">
                      View Designs <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 3 — Bridal Mehndi Guide
      ════════════════════════════════════════════ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <ContentImage
            src="https://images.unsplash.com/photo-1674884060571-96a46a9a7a72?w=800&q=85&fit=crop&crop=faces"
            alt="Heavy bridal mehndi full hand 2025 — beautiful wedding henna design"
            caption="Heavy bridal full hand mehndi — the most requested design for brides in 2025"
          />
          <div>
            <SectionHeading
              chip="Bridal Guide"
              title="The Complete Bridal Mehndi Guide for 2025"
              subtitle="Your wedding day is the most important occasion, and bridal mehndi deserves careful planning. Here is everything you need to know."
            />
            <div className="space-y-4 text-sm sm:text-base text-henna-600 dark:text-henna-400 leading-relaxed">
              <p>
                <strong className="text-henna-800 dark:text-henna-200">When to apply bridal mehndi:</strong> The ideal time to apply bridal mehndi is 1–2 days before the wedding. This allows the color to fully oxidize and reach its peak darkness. Applying it too early (3+ days) may cause the color to fade, while applying it on the wedding day leaves no time for the color to develop.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">How long to keep it on:</strong> For the deepest bridal color, keep the mehndi on for a minimum of 8–12 hours. Many brides sleep with the mehndi on overnight, wrapping their hands lightly in tissue paper to protect clothing and bedding. The longer you leave it, the darker and longer-lasting the color.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Choosing the right design:</strong> In 2025, the most popular bridal mehndi styles include full-hand Arabic patterns, fusion Pakistani-Arabic designs, portrait mehndi (groom&apos;s face), and minimal bridal designs for modern brides. The style you choose should complement your bridal outfit and personal taste.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Finding a mehndi artist:</strong> Always book your mehndi artist at least 2–3 months before your wedding, especially during peak wedding season. Ask to see their portfolio and request a patch test if you have sensitive skin.
              </p>
            </div>
            <div className="mt-6 p-4 bg-henna-50 dark:bg-henna-800/50 rounded-2xl border border-henna-200/60 dark:border-henna-700">
              <p className="text-sm font-semibold text-henna-700 dark:text-henna-300 flex items-center gap-2">
                <Lightbulb size={15} className="text-henna-500" /> Pro Tip for Darker Bridal Mehndi
              </p>
              <p className="text-sm text-henna-600 dark:text-henna-400 mt-1 leading-relaxed">
                After removing the dried mehndi, avoid washing with water for at least 6 hours. Apply a thin layer of mustard oil or clove oil over the design — the heat from cloves reacts with the henna to produce a significantly darker color.
              </p>
            </div>
            <Link href="/bridal-mehndi" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-sm font-bold text-white shadow-md hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)" }}>
              Browse Bridal Designs <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 4 — Arabic Mehndi + 3-col image row
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          chip="Arabic Style"
          title="Arabic Mehndi Designs — Elegant, Modern & Beginner-Friendly"
          subtitle="Arabic mehndi is the most popular style worldwide thanks to its bold floral motifs, flowing vines, and beautiful use of negative space. It looks stunning on both the front and back of the hand."
        />

        {/* 3 column image grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-8">
          {[
            { photo: "1568566240146-a5e26db3b29b", label: "Classic Arabic Floral" },
            { photo: "1656702678285-59bde376828f", label: "Intricate Arabic Back Hand" },
            { photo: "1716672042560-c59ebb0805e6", label: "Modern Arabic Design" },
          ].map((img) => (
            <figure key={img.photo} className="rounded-2xl overflow-hidden border border-henna-200/60 dark:border-henna-800 shadow-sm">
              <div className="relative aspect-[3/4]">
                <Image
                  src={`https://images.unsplash.com/photo-${img.photo}?w=500&q=85&fit=crop&crop=entropy`}
                  alt={`${img.label} mehndi design 2025`}
                  fill className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 33vw, 25vw"
                />
              </div>
              <figcaption className="text-center text-[11px] text-henna-500 py-2 bg-henna-50 dark:bg-henna-900">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base text-henna-600 dark:text-henna-400 leading-relaxed">
          <div className="space-y-4">
            <p>
              What distinguishes Arabic mehndi from other styles is the strategic use of empty space. Instead of densely covering the entire hand, Arabic designs use bold single motifs — a large rose, a graceful leaf cluster, or an intricate vine — surrounded by open skin. This negative space makes each element stand out dramatically.
            </p>
            <p>
              <strong className="text-henna-800 dark:text-henna-200">Arabic mehndi for beginners:</strong> If you are learning mehndi at home, Arabic style is the best place to start. Simple Arabic flowers and teardrop shapes require only basic cone control and can be mastered in a few practice sessions. Start with single flowers on individual fingers before attempting full hand designs.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              <strong className="text-henna-800 dark:text-henna-200">Gulf vs. Moroccan Arabic styles:</strong> Gulf Arabic mehndi tends to use thicker lines and bold fills, while Moroccan Arabic mehndi features more geometric patterns and fine detail work. Both are beautiful in their own way and are often combined in modern fusion designs.
            </p>
            <p>
              In 2025, the trending Arabic styles include asymmetric designs (different patterns on different fingers), rose-heavy patterns, Arabic with white henna accents, and Arabic bridal designs that incorporate the groom&apos;s initials subtly within the floral patterns.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/arabic-mehndi" className="inline-flex items-center gap-1.5 text-sm font-semibold text-henna-500 hover:text-henna-400 transition-colors group">
            View All Arabic Mehndi Designs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 5 — How to Apply Mehndi at Home
      ════════════════════════════════════════════ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading
              chip="DIY Guide"
              title="How to Apply Mehndi at Home — Step-by-Step Guide"
              subtitle="You do not need to visit a parlour to get beautiful mehndi. With the right henna paste, a good cone, and a little practice, you can create stunning designs at home."
            />

            <ol className="space-y-5">
              {[
                {
                  num: "01",
                  title: "Prepare Your Henna Paste",
                  text: "Mix 100g natural henna powder with 2 tablespoons of lemon juice, 1 teaspoon of sugar, and 2–3 drops of eucalyptus oil. Blend until smooth, cover with plastic wrap and let it rest for 6–12 hours. The longer it rests, the darker the dye release.",
                },
                {
                  num: "02",
                  title: "Prepare Your Skin",
                  text: "Wash your hands thoroughly and dry completely. For better absorption, apply a thin layer of eucalyptus oil or clove oil on your skin before applying mehndi. Avoid using lotions or moisturizers as they can create a barrier.",
                },
                {
                  num: "03",
                  title: "Fill Your Mehndi Cone",
                  text: "Use a plastic mehndi cone or create your own from a zip-lock bag. Fill it ¾ full to avoid excessive pressure. Practice the pressure and flow on paper before starting on skin. Cut a tiny opening at the tip — smaller = finer lines.",
                },
                {
                  num: "04",
                  title: "Start with the Outline",
                  text: "Begin with the main outline of your chosen design. Keep your hand relaxed and move the cone smoothly. Work from one side to the other to avoid smudging. Reference a design from MehndiGlow on your phone or tablet.",
                },
                {
                  num: "05",
                  title: "Add Details & Fill",
                  text: "Once the outline is complete, add inner details, dots, and fill in the shaded areas. For a professional finish, keep consistent spacing between design elements.",
                },
                {
                  num: "06",
                  title: "Dry & Seal",
                  text: "Allow the mehndi to air-dry for 30–45 minutes. Once dry, apply a lemon-sugar solution (equal parts lemon juice and sugar) using a cotton ball to keep the mehndi moist and seal the design. This significantly darkens the final color.",
                },
                {
                  num: "07",
                  title: "Remove & Reveal",
                  text: "After 6–12 hours, scrape off the dried mehndi — do not wash it off with water. Rub mustard oil or coconut oil over the design. Avoid water for another 6 hours. Your mehndi will continue to darken over the next 24–48 hours.",
                },
              ].map((step) => (
                <li key={step.num} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-henna-100 dark:bg-henna-800 flex items-center justify-center text-xs font-bold text-henna-500 shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-semibold text-henna-900 dark:text-henna-100 text-sm mb-1">{step.title}</h4>
                    <p className="text-sm text-henna-600 dark:text-henna-400 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-5 lg:sticky lg:top-24">
            <ContentImage
              src="https://images.unsplash.com/photo-1702062779141-d5b4655197c7?w=700&q=85&fit=crop"
              alt="Applying mehndi cone on hand — step by step mehndi application guide"
              caption="Fresh mehndi application — the key is consistent pressure on the cone"
            />
            <ContentImage
              src="https://images.unsplash.com/photo-1623217509141-6f735087b50c?w=700&q=85&fit=crop"
              alt="Finished mehndi design on decorated hands"
              caption="Beautiful finished mehndi after overnight drying — deep reddish-brown color"
            />
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 6 — Tips for Dark Color
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          chip="Pro Tips"
          title="7 Proven Tips to Get the Darkest Mehndi Color"
          subtitle="The color depth of mehndi depends on many factors — the quality of henna, preparation, application technique, and aftercare. Follow these proven tips for the best results."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {[
            { icon: "🌿", title: "Use Natural Henna Only",       text: "Always use 100% natural henna powder without chemical additives. Black henna contains PPD which is harmful. Pure henna gives the best natural reddish-brown color." },
            { icon: "🍋", title: "Lemon-Sugar Sealant",          text: "Apply a lemon-sugar mixture on dried mehndi every hour while wearing it. This keeps the paste moist and pushes more dye into the skin for a darker stain." },
            { icon: "⏰", title: "Keep It On Longer",            text: "The absolute most important tip: keep the mehndi on for 8–12 hours minimum. Overnight application is ideal. Every extra hour of contact time means significantly darker color." },
            { icon: "🔥", title: "Warmth Helps Dye Release",    text: "After applying mehndi, exposing your hands to gentle heat — like sitting near a heater or warm lamp — speeds up the dye release and intensifies the color." },
            { icon: "💧", title: "Avoid Water for 24 Hours",     text: "Do not wash the design area for at least 12–24 hours after removing the paste. Water exposure immediately after removal is the #1 cause of light, patchy mehndi." },
            { icon: "🫒", title: "Oil After Removal",            text: "After scraping off the paste, immediately rub mustard oil or clove oil into the design. The compound eugenol in clove oil reacts with henna to produce a significantly darker stain." },
            { icon: "🧴", title: "Moisturize Daily",            text: "Apply coconut oil or body oil to your mehndi design every day. Well-moisturized skin retains mehndi color for up to 3 weeks, while dry skin causes rapid fading." },
          ].map((tip) => (
            <TipCard key={tip.title} icon={tip.icon} title={tip.title} text={tip.text} />
          ))}
        </div>

        {/* Image side by side — before & after */}
        <div className="grid sm:grid-cols-2 gap-5">
          <ContentImage
            src="https://images.unsplash.com/photo-1563962750292-d3401f66d46b?w=700&q=85&fit=crop"
            alt="Fresh mehndi just applied — light orange color"
            caption="Freshly applied mehndi — begins as light orange"
          />
          <ContentImage
            src="https://images.unsplash.com/photo-1757331446901-8f935a107bc9?w=700&q=85&fit=crop"
            alt="Dark mehndi after 48 hours — deep reddish brown color"
            caption="After 48 hours — mehndi develops into deep reddish-brown"
          />
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 7 — Mehndi Trends 2025
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          chip="Trends 2025"
          title="Top Mehndi Design Trends to Watch in 2025"
          subtitle="Mehndi art evolves every year with new styles, fusion techniques, and innovative motifs. Here are the hottest mehndi trends taking over Instagram and weddings in 2025."
        />

        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          <div className="space-y-5 text-sm sm:text-base text-henna-600 dark:text-henna-400 leading-relaxed">
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">
                1. Minimal Fine-Line Mehndi
              </h3>
              <p>
                The minimalist movement has hit mehndi in a big way. Thin, precise lines, single flower motifs, and barely-there finger designs are dominating 2025. This style appeals to modern brides and working women who want elegant mehndi that doesn&apos;t overwhelm.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">
                2. Fusion Pakistani-Arabic Designs
              </h3>
              <p>
                Artists are combining the dense detail of Pakistani mehndi with the flowing floral elegance of Arabic style, creating dramatic designs that have the best of both worlds. These fusion designs are particularly popular for bridal mehndi in 2025.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">
                3. Portrait & Personalized Mehndi
              </h3>
              <p>
                Incorporating portraits of the bride and groom, couples&apos; hobbies, travel destinations, and meaningful symbols into mehndi designs is a growing trend. Every design becomes a unique story told through henna.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">
                4. White Henna Accents
              </h3>
              <p>
                White henna (actually a body paint, not true henna) is being used alongside traditional henna to create striking two-tone designs. White accents add a jewellery-like quality to mehndi patterns.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-henna-600 dark:text-henna-400 leading-relaxed">
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">
                5. Geometric & Modern Patterns
              </h3>
              <p>
                Sharp geometric shapes — triangles, hexagons, mandalas, and grid patterns — are replacing some traditional motifs in contemporary mehndi designs. These patterns look striking on the back of the hand and forearm.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">
                6. Floral Sleeve Mehndi
              </h3>
              <p>
                Full arm mehndi designs that extend from wrist to elbow — or even shoulder — are gaining popularity. These elaborate sleeve designs, inspired by floral tattoos, are especially sought-after for bridal occasions.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">
                7. Eid Quick-Apply Designs
              </h3>
              <p>
                Ready-to-apply designs that take under 10 minutes are trending for Eid and festive occasions. Simple arabesque finger mehndi, single roses on the wrist, and thumb nail mehndi patterns allow everyone to look festive without hours of waiting.
              </p>
            </div>
          </div>
        </div>

        {/* 4 trend images in a row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { photo: "1764640848891-9b23d3632ccf", label: "Floral Sleeve Design" },
            { photo: "1771992230867-6478af331c26", label: "Bridal Portrait Mehndi" },
            { photo: "1708803962954-1893114321f0", label: "Minimal Fine-Line" },
            { photo: "1722172312997-068983715fd1", label: "Modern Geometric" },
          ].map((img) => (
            <figure key={img.photo} className="rounded-2xl overflow-hidden border border-henna-200/60 dark:border-henna-800 shadow-sm">
              <div className="relative aspect-square">
                <Image
                  src={`https://images.unsplash.com/photo-${img.photo}?w=400&q=80&fit=crop&crop=entropy`}
                  alt={`${img.label} mehndi trend 2025`}
                  fill className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <figcaption className="text-center text-[11px] text-henna-500 py-2 px-2 bg-henna-50 dark:bg-henna-900 truncate">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 8 — Occasions
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          chip="Occasions"
          title="Mehndi for Every Occasion — Find the Perfect Design"
          subtitle="Whether you are a bride, celebrating Eid, attending a family event, or just want beautiful everyday mehndi, there is a perfect design for every moment."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {[
            {
              occasion: "Wedding & Bridal",
              slug: "bridal-mehndi",
              photo: "1674884060571-96a46a9a7a72",
              text: "The most important mehndi of a woman's life. Bridal mehndi covers both hands completely and often extends to the elbows and feet. It is the centrepiece of the Mehndi ceremony and takes 3–6 hours to complete.",
              tags: ["Full Hand","Both Hands","Wedding Night"],
            },
            {
              occasion: "Eid ul-Fitr & Eid ul-Adha",
              slug: "eid-mehndi",
              photo: "1571150612716-ff39d1e9ef58",
              text: "Eid mehndi is a beloved tradition across Pakistan, India, and the Middle East. Simple to medium complexity designs are applied on Eid eve to celebrate the festival. Quick Arabic designs, finger mehndi, and back hand patterns are most popular.",
              tags: ["Simple","Quick Apply","Back Hand"],
            },
            {
              occasion: "Parties & Mehfils",
              slug: "stylish-mehndi",
              photo: "1759720888181-7b56230250d0",
              text: "For parties and social events, stylish and trendy designs make a statement. Half-hand Arabic patterns, wrist bands, and statement back hand designs are perfect for mehndi parties and family gatherings.",
              tags: ["Trendy","Half Hand","Statement"],
            },
            {
              occasion: "Everyday & Office Wear",
              slug: "minimal-mehndi",
              photo: "1525135927526-a01d9e5e9484",
              text: "Minimal mehndi has become mainstream for everyday wear. Single finger designs, delicate wrist patterns, and small motifs on the thumb or index finger look professional and sophisticated without being too elaborate.",
              tags: ["Minimal","Office Friendly","Small Designs"],
            },
            {
              occasion: "Kids & Children",
              slug: "kids-mehndi",
              photo: "1676134138844-9a52b5210cf9",
              text: "Safe, fun, and simple designs for children. Stars, hearts, flowers, butterflies, and cartoon-inspired patterns make mehndi exciting for kids. Always use natural, chemical-free henna for children's sensitive skin.",
              tags: ["Safe for Kids","Simple","Fun Designs"],
            },
            {
              occasion: "Dholki & Pre-Wedding",
              slug: "arabic-mehndi",
              photo: "1505932794465-147d1f1b2c97",
              text: "Dholki functions and pre-wedding celebrations call for cheerful, medium-complexity designs. Arabic florals, Pakistani patterns, and coordinated mehndi for multiple family members are popular at these joyful events.",
              tags: ["Group Mehndi","Festive","Medium Complexity"],
            },
          ].map((occ, i) => (
            <motion.div
              key={occ.slug + i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <Link href={`/${occ.slug}`} className="group block h-full">
                <div className="h-full bg-white dark:bg-henna-900 rounded-2xl border border-henna-200/60 dark:border-henna-800 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-henna-400/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-${occ.photo}?w=500&q=80&fit=crop`}
                      alt={`${occ.occasion} mehndi designs`}
                      fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-base font-semibold text-henna-900 dark:text-henna-100 mb-2">{occ.occasion}</h3>
                    <p className="text-xs text-henna-600 dark:text-henna-400 leading-relaxed mb-3 line-clamp-3">{occ.text}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {occ.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-henna-100 dark:bg-henna-800 text-henna-600 dark:text-henna-400 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 9 — Why MehndiGlow
      ════════════════════════════════════════════ */}
      <Section>
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12"
          style={{ background: "linear-gradient(135deg, #2E1A0E 0%, #4A2810 50%, #2E1A0E 100%)" }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #C8946A 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }} />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-henna-400 bg-henna-400/10 border border-henna-400/25 px-3 py-1 rounded-full mb-5">
              <Star size={10} className="fill-henna-400" /> Why MehndiGlow
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-4 leading-tight">
              Pakistan&apos;s #1 Free Mehndi Design Gallery
            </h2>
            <p className="text-henna-300/80 text-sm sm:text-base leading-relaxed mb-8">
              MehndiGlow is your ultimate destination for mehndi design inspiration. We curate the most beautiful, trending, and traditional mehndi designs from across South Asia and the Middle East — completely free. Whether you are a bride, a mehndi artist, or simply a mehndi enthusiast, you will find everything you need here.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { value: "1000+", label: "Curated Designs" },
                { value: "12",    label: "Design Categories" },
                { value: "100%",  label: "Free to Download" },
                { value: "Daily", label: "New Additions" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-henna-400">{stat.value}</div>
                  <div className="text-xs text-henna-400/60 mt-1 font-medium tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "✓ No registration required",    },
                { label: "✓ Free download for personal use" },
                { label: "✓ New designs added daily"       },
                { label: "✓ All styles and skill levels"   },
              ].map((f) => (
                <span key={f.label} className="text-xs font-semibold text-henna-300/80 bg-henna-400/10 border border-henna-400/20 px-3 py-1.5 rounded-full">
                  {f.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

    </div>
  );
}
