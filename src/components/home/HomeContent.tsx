"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Star, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

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
                The word <strong className="text-henna-800 dark:text-henna-200">mehndi</strong> comes from the Sanskrit word <em>mendhikā</em>, which refers to the henna plant (<em>Lawsonia inermis</em>). The leaves of this plant contain a natural dye called lawsone that bonds with the keratin protein in skin and hair, creating a rich reddish-brown stain that can last 1 to 3 weeks. The henna plant grows in hot, arid climates — it is cultivated in abundance in Rajasthan (India), Pakistan, Yemen, Egypt, and Morocco.
              </p>
              <p>
                In South Asian culture, mehndi is an essential part of wedding ceremonies. A bride&apos;s mehndi is believed to represent the depth of love in her marriage — the darker the mehndi color, the stronger the bond between the couple. Mehndi ceremonies, called <strong className="text-henna-800 dark:text-henna-200">Mehndi Rasam</strong>, are joyful pre-wedding celebrations where family and friends gather, sing traditional songs, and apply henna. The function is typically held 1–2 nights before the wedding and is considered as important as the nikah itself in many families.
              </p>
              <p>
                Beyond weddings, mehndi is applied during Eid, Diwali, Teej, Karva Chauth, Navratri, and many other festivals. It is also applied for birthdays, engagements, baby showers (Godh Bharai), and as everyday adornment. Today, mehndi has evolved into a global art form, with modern artists combining traditional patterns with contemporary geometric and minimalist designs, and professional mehndi artists charging thousands of rupees for a single bridal application.
              </p>
              <p>
                Archaeological evidence suggests that mehndi was used in ancient Egypt — mummies have been found with henna-stained nails and fingertips dating back over 5,000 years. In the Mughal era, mehndi was elevated into a fine art form in the Indian subcontinent, and many patterns that are popular today trace their origins to that royal period. The intricate paisley (mango motif), floral jaal patterns, and peacock designs that define classic mehndi all flourished under Mughal patronage.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {[
            {
              photo: "1674884060571-96a46a9a7a72",
              name: "Bridal Mehndi",
              slug: "bridal-mehndi",
              desc: "The most elaborate and detailed style, covering the full hand and arms. Bridal mehndi often includes the groom's name hidden within the pattern, peacock motifs, and intricate paisley designs. It is applied 1–2 days before the wedding and can take 4–8 hours to complete.",
            },
            {
              photo: "1568566240146-a5e26db3b29b",
              name: "Arabic Mehndi",
              slug: "arabic-mehndi",
              desc: "Characterized by bold, flowing floral patterns with generous negative space. Arabic mehndi looks modern and elegant, making it perfect for Eid, parties, and everyday wear. Its loose, free-flowing style is also great for beginners who are learning to apply mehndi at home.",
            },
            {
              photo: "1566664254600-3412f985e947",
              name: "Pakistani Mehndi",
              slug: "pakistani-mehndi",
              desc: "Known for its fine, dense patterns and intricate detailing. Pakistani mehndi covers more of the hand than Arabic style and features complex jaal (net) patterns, tikki motifs, and elaborate geometric arrangements that can take hours of skilled work to complete.",
            },
            {
              photo: "1571150612716-ff39d1e9ef58",
              name: "Eid Mehndi",
              slug: "eid-mehndi",
              desc: "Designed for festive celebrations, Eid mehndi ranges from simple finger designs to elaborate half-hand patterns. These designs are usually quicker to apply and dry faster — perfect for the busy Eid celebrations when you want to look beautiful without spending hours.",
            },
            {
              photo: "1565368114375-ba1a4db7099f",
              name: "Minimal Mehndi",
              slug: "minimal-mehndi",
              desc: "Clean, simple mehndi designs with fine lines, single motifs, and elegant placement. Minimal mehndi is perfect for office wear, casual events, and anyone who prefers subtle beauty. Small finger mehndi, wrist bands, and single-flower thumb designs fall under this category.",
            },
            {
              photo: "1777749752246-f7e4f5151217",
              name: "Feet Mehndi",
              slug: "feet-mehndi",
              desc: "Beautiful henna applied on the feet and ankles, often for bridal occasions and festivals. Feet mehndi includes toe designs, ankle bracelet patterns, and full foot coverage that complements bridal hand mehndi. It lasts longer on feet due to thicker skin.",
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
                <strong className="text-henna-800 dark:text-henna-200">When to apply bridal mehndi:</strong> The ideal time to apply bridal mehndi is 1–2 days before the wedding. This allows the color to fully oxidize and reach its peak darkness. Applying it too early (3+ days) may cause the color to fade, while applying it on the wedding day leaves no time for the color to develop. Most experienced mehndi artists recommend the night before as the sweet spot.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">How long to keep it on:</strong> For the deepest bridal color, keep the mehndi on for a minimum of 8–12 hours. Many brides sleep with the mehndi on overnight, wrapping their hands lightly in tissue paper to protect clothing and bedding. The longer you leave it, the darker and longer-lasting the color. Removing it after only 2–3 hours will give a pale orange result.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Choosing the right design:</strong> In 2025, the most popular bridal mehndi styles include full-hand Arabic patterns, fusion Pakistani-Arabic designs, portrait mehndi (groom&apos;s face), and minimal bridal designs for modern brides. The style you choose should complement your bridal outfit — heavy traditional dresses pair beautifully with full Pakistani designs, while lighter outfits suit elegant Arabic patterns.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Bridal mehndi for both hands:</strong> Traditional mehndi covers both hands fully, often extending up the forearms. Many modern brides opt for a heavy design on one hand and a lighter complementary design on the other. Feet mehndi is also traditionally applied to match the hand designs.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Finding a mehndi artist:</strong> Always book your mehndi artist at least 2–3 months before your wedding, especially during peak wedding season (October–March in Pakistan). Ask to see their portfolio, check their Instagram, and request a patch test if you have sensitive skin. Confirm the appointment and design details one week before the wedding.
              </p>
            </div>
            <div className="mt-6 p-4 bg-henna-50 dark:bg-henna-800/50 rounded-2xl border border-henna-200/60 dark:border-henna-700">
              <p className="text-sm font-semibold text-henna-700 dark:text-henna-300 flex items-center gap-2">
                <Lightbulb size={15} className="text-henna-500" /> Pro Tip for Darker Bridal Mehndi
              </p>
              <p className="text-sm text-henna-600 dark:text-henna-400 mt-1 leading-relaxed">
                After removing the dried mehndi, avoid washing with water for at least 6 hours. Apply a thin layer of mustard oil or clove oil over the design — the heat from cloves reacts with the henna to produce a significantly darker color. You can also hold your hands briefly over warm steam to boost color intensity.
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
          SECTION 4 — Arabic Mehndi
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          chip="Arabic Style"
          title="Arabic Mehndi Designs — Elegant, Modern & Beginner-Friendly"
          subtitle="Arabic mehndi is the most popular style worldwide thanks to its bold floral motifs, flowing vines, and beautiful use of negative space. It looks stunning on both the front and back of the hand."
        />

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
              What distinguishes Arabic mehndi from other styles is the strategic use of empty space. Instead of densely covering the entire hand, Arabic designs use bold single motifs — a large rose, a graceful leaf cluster, or an intricate vine — surrounded by open skin. This negative space makes each element stand out dramatically and gives the design a modern, fashion-forward quality.
            </p>
            <p>
              <strong className="text-henna-800 dark:text-henna-200">Arabic mehndi for beginners:</strong> If you are learning mehndi at home, Arabic style is the best place to start. Simple Arabic flowers and teardrop shapes require only basic cone control and can be mastered in a few practice sessions. Start with single flowers on individual fingers before attempting full hand designs. Use a toothpick to add fine dot details until your cone work improves.
            </p>
            <p>
              <strong className="text-henna-800 dark:text-henna-200">Popular Arabic motifs:</strong> The most common Arabic mehndi elements include large roses, lotus flowers, leafy vines, peacock feathers, mandala centers, paisleys, and crescent moon shapes. Combining just two or three of these creates a beautiful and balanced design without overwhelming the hand.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              <strong className="text-henna-800 dark:text-henna-200">Gulf vs. Moroccan Arabic styles:</strong> Gulf Arabic mehndi tends to use thicker lines and bold fills, while Moroccan Arabic mehndi features more geometric patterns and fine detail work. Both are beautiful in their own way and are often combined in modern fusion designs.
            </p>
            <p>
              In 2025, the trending Arabic styles include asymmetric designs (different patterns on different fingers), rose-heavy patterns, Arabic with white henna accents, and Arabic bridal designs that incorporate the groom&apos;s initials subtly within the floral patterns.
            </p>
            <p>
              <strong className="text-henna-800 dark:text-henna-200">Arabic mehndi for Eid:</strong> Arabic style is especially beloved for Eid celebrations because it can be applied quickly and looks instantly polished. A simple Arabic back hand design can be completed in under 30 minutes, making it ideal for applying fresh mehndi on Eid eve or even Eid morning.
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
          SECTION 5 — Pakistani Mehndi Deep Dive
      ════════════════════════════════════════════ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading
              chip="Pakistani Style"
              title="Pakistani Mehndi — The Art of Fine Detail & Dense Patterns"
              subtitle="Pakistani mehndi is celebrated worldwide for its unmatched intricacy. Dense jaal patterns, fine tikki work, and elaborate geometric arrangements make Pakistani designs the gold standard for bridal mehndi."
            />
            <div className="space-y-4 text-sm sm:text-base text-henna-600 dark:text-henna-400 leading-relaxed">
              <p>
                Pakistani mehndi is distinguished by its extreme density and fine linework. Where Arabic mehndi embraces space, Pakistani designs fill every inch of the hand with intricate patterns. A single Pakistani bridal design can contain hundreds of tiny motifs — flowers, paisleys, geometric nets (jaal), dots, and fine cross-hatching — all layered together into a breathtaking composition.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Key elements of Pakistani mehndi:</strong> The signature elements include jaal (a fine net or lattice pattern), tikki (round filled medallion motifs), kairi (mango/paisley shapes), and intricate border work along the wrists and fingers. The tips of all fingers are usually fully filled with henna, creating a dramatic frame for the hand design.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Pakistani bridal mehndi:</strong> Pakistani bridal mehndi is among the most elaborate in the world. It covers both hands fully, extends up the forearms, and is paired with detailed feet mehndi. The groom&apos;s name is traditionally hidden within the design — the wedding night often begins with the groom searching for his name, creating a playful tradition.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Regional variations:</strong> Lahori mehndi is known for its extremely fine, dense work. Karachi designs tend to incorporate more modern elements and fusion styles. Multan and interior Sindh have distinct regional patterns featuring local motifs and brighter color applications using natural additives.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">How long does Pakistani mehndi take?</strong> Due to its complexity, Pakistani full-hand bridal mehndi typically takes 4–8 hours to apply. Some highly detailed designs require two sessions spread across two days. Professional mehndi artists in Pakistan train for years to develop the speed and precision needed for this style.
              </p>
            </div>
            <Link href="/pakistani-mehndi" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-henna-500 hover:text-henna-400 transition-colors group">
              Explore Pakistani Mehndi Designs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <ContentImage
            src="https://images.unsplash.com/photo-1566664254600-3412f985e947?w=800&q=85&fit=crop"
            alt="Intricate Pakistani mehndi full hand design with dense jaal patterns"
            caption="Pakistani full hand mehndi — dense jaal patterns and tikki motifs define this style"
          />
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 6 — How to Apply Mehndi at Home
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
                  text: "Mix 100g natural henna powder with 2 tablespoons of lemon juice, 1 teaspoon of sugar, and 2–3 drops of eucalyptus oil. Blend until smooth, cover with plastic wrap and let it rest for 6–12 hours. The longer it rests, the darker the dye release. The paste should be the consistency of thick toothpaste — not too runny, not too stiff.",
                },
                {
                  num: "02",
                  title: "Prepare Your Skin",
                  text: "Wash your hands thoroughly and dry completely. For better absorption, apply a thin layer of eucalyptus oil or clove oil on your skin before applying mehndi. Avoid using lotions or moisturizers as they create a barrier that prevents henna dye from penetrating deeply into the skin.",
                },
                {
                  num: "03",
                  title: "Fill Your Mehndi Cone",
                  text: "Use a plastic mehndi cone or create your own from a zip-lock bag. Fill it ¾ full to avoid excessive pressure. Practice the pressure and flow on paper before starting on skin. Cut a tiny opening at the tip — smaller opening equals finer lines. Wrapping the filled end with tape helps maintain consistent pressure.",
                },
                {
                  num: "04",
                  title: "Start with the Outline",
                  text: "Begin with the main outline of your chosen design. Keep your hand relaxed and move the cone smoothly and consistently. Work from one side of the design to the other to avoid smudging. Reference a design from MehndiGlow on your phone or tablet. If you make a mistake, wait for the paste to dry slightly and then scrape it off carefully with a toothpick.",
                },
                {
                  num: "05",
                  title: "Add Details & Fill",
                  text: "Once the outline is complete, add inner details, dots, and fill in the shaded areas. For a professional finish, keep consistent spacing between design elements. Dot patterns (bindi work) are created by holding the cone vertically and pressing gently without moving — practice this separately before adding it to your design.",
                },
                {
                  num: "06",
                  title: "Dry & Seal",
                  text: "Allow the mehndi to air-dry for 30–45 minutes. Once dry, apply a lemon-sugar solution (equal parts lemon juice and sugar) using a cotton ball to keep the mehndi moist and seal the design. This significantly darkens the final color by preventing the paste from cracking and falling off prematurely.",
                },
                {
                  num: "07",
                  title: "Remove & Reveal",
                  text: "After 6–12 hours, scrape off the dried mehndi — do not wash it off with water. Rub mustard oil or coconut oil over the design. Avoid water for another 6 hours. Your mehndi will continue to darken over the next 24–48 hours as the dye oxidizes in contact with air.",
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
          SECTION 7 — Tips for Dark Color
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          chip="Pro Tips"
          title="7 Proven Tips to Get the Darkest Mehndi Color"
          subtitle="The color depth of mehndi depends on many factors — the quality of henna, preparation, application technique, and aftercare. Follow these proven tips for the best results."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {[
            { icon: "🌿", title: "Use Natural Henna Only",    text: "Always use 100% natural henna powder without chemical additives. Black henna contains PPD which can cause severe allergic reactions and is harmful to skin. Pure henna gives the best natural reddish-brown color and is safe for all skin types including children." },
            { icon: "🍋", title: "Lemon-Sugar Sealant",       text: "Apply a lemon-sugar mixture on dried mehndi every hour while wearing it. This keeps the paste moist and pushes more dye into the skin for a darker stain. The acid in lemon juice also helps break down the skin's surface slightly, allowing deeper dye penetration." },
            { icon: "⏰", title: "Keep It On Longer",         text: "The most important tip: keep the mehndi on for 8–12 hours minimum. Overnight application is ideal. Every extra hour of contact time means significantly darker color. Removing mehndi after only 2–3 hours will result in a pale, orange stain that fades quickly." },
            { icon: "🔥", title: "Warmth Helps Dye Release", text: "After applying mehndi, exposing your hands to gentle heat — like sitting near a heater or warm lamp — speeds up the dye release and intensifies the color. The warmth opens skin pores slightly, allowing the lawsone dye to penetrate more deeply into the keratin layer." },
            { icon: "💧", title: "Avoid Water for 24 Hours", text: "Do not wash the design area for at least 12–24 hours after removing the paste. Water exposure immediately after removal is the number one cause of light, patchy mehndi. The color needs time to fully oxidize in air before it can withstand water contact." },
            { icon: "🫒", title: "Oil After Removal",         text: "After scraping off the paste, immediately rub mustard oil or clove oil into the design. The compound eugenol in clove oil reacts with henna to produce a significantly darker stain. Warming the oil slightly before applying enhances this effect." },
            { icon: "🧴", title: "Moisturize Daily",         text: "Apply coconut oil or body oil to your mehndi design every day. Well-moisturized skin retains mehndi color for up to 3 weeks, while dry skin causes rapid fading. Avoid exfoliating or scrubbing the design area while you want to preserve the mehndi." },
          ].map((tip) => (
            <TipCard key={tip.title} icon={tip.icon} title={tip.title} text={tip.text} />
          ))}
        </div>

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
          SECTION 8 — Mehndi Trends 2025
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
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">1. Minimal Fine-Line Mehndi</h3>
              <p>The minimalist movement has hit mehndi in a big way. Thin, precise lines, single flower motifs, and barely-there finger designs are dominating 2025. This style appeals to modern brides and working women who want elegant mehndi that does not overwhelm. Fine-line mehndi requires exceptional cone control and a very thin tip — the result looks almost like delicate tattoo art.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">2. Fusion Pakistani-Arabic Designs</h3>
              <p>Artists are combining the dense detail of Pakistani mehndi with the flowing floral elegance of Arabic style, creating dramatic designs that have the best of both worlds. These fusion designs feature Arabic florals in the center with Pakistani jaal borders — particularly popular for bridal mehndi in 2025 across both Pakistan and India.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">3. Portrait & Personalized Mehndi</h3>
              <p>Incorporating portraits of the bride and groom, couples&apos; hobbies, travel destinations, and meaningful symbols into mehndi designs is a growing trend. Every design becomes a unique story told through henna. Skilled artists can capture facial likenesses in as little as 4×4 cm — a remarkable technical achievement.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">4. White Henna Accents</h3>
              <p>White henna (actually a body-safe paint, not true henna) is being used alongside traditional henna to create striking two-tone designs. White accents add a jewellery-like quality to mehndi patterns and photograph beautifully, which has driven their popularity in the age of Instagram and bridal photography.</p>
            </div>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-henna-600 dark:text-henna-400 leading-relaxed">
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">5. Geometric & Modern Patterns</h3>
              <p>Sharp geometric shapes — triangles, hexagons, mandalas, and grid patterns — are replacing some traditional motifs in contemporary mehndi designs. These patterns look striking on the back of the hand and forearm. The geometric trend bridges the gap between mehndi and modern body art, attracting younger audiences who may not traditionally have worn mehndi.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">6. Floral Sleeve Mehndi</h3>
              <p>Full arm mehndi designs that extend from wrist to elbow — or even shoulder — are gaining popularity. These elaborate sleeve designs, inspired by floral tattoos, are especially sought-after for bridal occasions and are often combined with traditional hand mehndi for a seamless, full-coverage look.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">7. Eid Quick-Apply Designs</h3>
              <p>Ready-to-apply designs that take under 10 minutes are trending for Eid and festive occasions. Simple arabesque finger mehndi, single roses on the wrist, and thumb nail mehndi patterns allow everyone to look festive without hours of waiting. Ready-made mehndi cones from parlours make these even more accessible.</p>
            </div>
          </div>
        </div>

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
          SECTION 9 — Eid Mehndi Special Guide
      ════════════════════════════════════════════ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <ContentImage
            src="https://images.unsplash.com/photo-1571150612716-ff39d1e9ef58?w=800&q=85&fit=crop"
            alt="Beautiful Eid mehndi design on hands — festive henna for Eid 2025"
            caption="Eid mehndi — one of Pakistan's most beloved festive traditions"
          />
          <div>
            <SectionHeading
              chip="Eid Special"
              title="Eid Mehndi Designs — Celebrate in Style"
              subtitle="Eid is incomplete without mehndi. From quick finger designs to elaborate back hand patterns, discover everything about choosing and applying the perfect Eid mehndi."
            />
            <div className="space-y-4 text-sm sm:text-base text-henna-600 dark:text-henna-400 leading-relaxed">
              <p>
                Across Pakistan, India, Bangladesh, and Muslim communities worldwide, applying mehndi before Eid is a beloved tradition. The Prophet (PBUH) encouraged the use of henna, and it has become an integral part of Eid celebrations for women and girls of all ages. The excitement of applying new mehndi the night before Eid adds to the festive anticipation.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Best Eid mehndi designs for 2025:</strong> Simple Arabic florals remain the top choice for Eid because they look beautiful and apply quickly. Back hand designs with a central flower and extending vine work are very popular. Finger mehndi — covering just the fingers with graduated patterns — is perfect for those short on time. For girls who want more coverage, half-hand designs strike the perfect balance.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">When to apply Eid mehndi:</strong> Apply mehndi on Chand Raat (the night before Eid) for the best results. This gives the henna 8–10 hours to develop overnight, and by the time you wake up for Eid prayers, the mehndi will have reached its deepest color. The whole family can apply mehndi together — it is a cherished part of the Chand Raat celebration.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Eid mehndi for children:</strong> Children love mehndi for Eid. Simple stars, hearts, small flowers, and their name written in mehndi make them feel special. Always use natural henna for children and keep designs small and quick-drying. Avoid leaving mehndi on children for more than 2–3 hours as their skin is more sensitive.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Mehndi parlours on Chand Raat:</strong> Professional mehndi artists set up stalls and parlours on Chand Raat in bazaars, parks, and shopping areas across Pakistan. They offer a wide range of designs at affordable prices. If you plan to visit a parlour, go early to avoid long queues — popular artists can have waiting lists of 2–3 hours on Chand Raat evening.
              </p>
            </div>
            <Link href="/eid-mehndi" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-henna-500 hover:text-henna-400 transition-colors group">
              View All Eid Mehndi Designs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 10 — Mehndi for Every Occasion
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
              text: "The most important mehndi of a woman's life. Bridal mehndi covers both hands completely and often extends to the elbows and feet. It is the centrepiece of the Mehndi ceremony and takes 3–6 hours to complete. The bride's design should complement her bridal outfit color and embroidery style.",
              tags: ["Full Hand","Both Hands","Wedding Night"],
            },
            {
              occasion: "Eid ul-Fitr & Eid ul-Adha",
              slug: "eid-mehndi",
              photo: "1571150612716-ff39d1e9ef58",
              text: "Eid mehndi is a beloved tradition across Pakistan, India, and the Middle East. Simple to medium complexity designs are applied on Eid eve to celebrate the festival. Quick Arabic designs, finger mehndi, and back hand patterns are most popular for their elegant look and quick application.",
              tags: ["Simple","Quick Apply","Back Hand"],
            },
            {
              occasion: "Parties & Mehfils",
              slug: "stylish-mehndi",
              photo: "1759720888181-7b56230250d0",
              text: "For parties and social events, stylish and trendy designs make a statement. Half-hand Arabic patterns, wrist bands, and statement back hand designs are perfect for mehndi parties and family gatherings where you want to look polished without a full bridal commitment.",
              tags: ["Trendy","Half Hand","Statement"],
            },
            {
              occasion: "Everyday & Office Wear",
              slug: "minimal-mehndi",
              photo: "1525135927526-a01d9e5e9484",
              text: "Minimal mehndi has become mainstream for everyday wear. Single finger designs, delicate wrist patterns, and small motifs on the thumb or index finger look professional and sophisticated without being too elaborate. Many working women now wear subtle mehndi year-round.",
              tags: ["Minimal","Office Friendly","Small Designs"],
            },
            {
              occasion: "Kids & Children",
              slug: "kids-mehndi",
              photo: "1676134138844-9a52b5210cf9",
              text: "Safe, fun, and simple designs for children. Stars, hearts, flowers, butterflies, and cartoon-inspired patterns make mehndi exciting for kids at Eid and weddings. Always use natural, chemical-free henna for children's sensitive skin and keep designs small with a shorter application time.",
              tags: ["Safe for Kids","Simple","Fun Designs"],
            },
            {
              occasion: "Dholki & Pre-Wedding",
              slug: "arabic-mehndi",
              photo: "1505932794465-147d1f1b2c97",
              text: "Dholki functions and pre-wedding celebrations call for cheerful, medium-complexity designs. Arabic florals, Pakistani patterns, and coordinated matching mehndi for multiple family members are popular at these joyful events where mehndi application becomes a group activity.",
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
          SECTION 11 — Mehndi Tools & Supplies
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          chip="Tools & Supplies"
          title="Mehndi Tools & Supplies — Everything You Need"
          subtitle="Having the right tools makes all the difference between amateur and professional-looking mehndi. Here is a complete guide to the supplies you need to get started."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {[
            {
              icon: "🪄",
              title: "Mehndi Cones",
              text: "Ready-made plastic mehndi cones are available at every mehndi supply shop and online. For beginners, buy a pack of 12–24 pre-filled natural henna cones. For advanced users, buy empty cones and fill them with fresh homemade paste. The quality of the cone tip directly affects line precision — invest in quality cones.",
            },
            {
              icon: "🌿",
              title: "Natural Henna Powder",
              text: "Always choose body-quality henna powder with a bright green color and fresh earthy smell. Rajasthani henna from Sojat (India) is considered the finest quality globally. Store henna powder in an airtight container in a cool, dry place. Old or poorly stored henna gives weak, pale stains regardless of technique.",
            },
            {
              icon: "🍋",
              title: "Lemon Juice & Sugar",
              text: "Fresh lemon juice is essential both in the henna paste and as a sealant applied during wear. Sugar adds stickiness that helps the paste adhere to skin and prevents early cracking. Mix equal parts lemon juice and sugar, heat gently until sugar dissolves, and apply with a cotton swab while wearing mehndi.",
            },
            {
              icon: "🫙",
              title: "Essential Oils",
              text: "Eucalyptus oil, clove oil, cajeput oil, and lavender oil are all used in mehndi paste to boost dye release. A few drops of these oils in the paste significantly deepen the final color. Eucalyptus and tea tree oils also help preserve the paste and prevent bacterial growth during the resting period.",
            },
            {
              icon: "🔍",
              title: "Reference Designs",
              text: "Good design references are essential for quality mehndi. MehndiGlow offers 1000+ high-resolution designs across 12 categories, all free to browse. Print your chosen design or keep it on your phone screen for reference while applying. Professional artists build a design library over years of practice.",
            },
            {
              icon: "🧴",
              title: "Aftercare Oils",
              text: "Mustard oil, coconut oil, olive oil, and clove oil are all used for mehndi aftercare. Apply immediately after removing the dried paste and continue applying daily to maintain color. Avoid petroleum-based products and heavy chemical creams on mehndi as these can strip the color faster.",
            },
          ].map((item) => (
            <TipCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>

        <div className="p-6 bg-henna-50 dark:bg-henna-900/50 rounded-2xl border border-henna-200/60 dark:border-henna-800">
          <h3 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-3">
            Common Mehndi Mistakes to Avoid
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-henna-600 dark:text-henna-400 leading-relaxed">
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-henna-400 font-bold shrink-0">✗</span> Using chemical or black henna — always use natural henna only</li>
              <li className="flex gap-2"><span className="text-henna-400 font-bold shrink-0">✗</span> Washing hands with soap immediately after removing mehndi paste</li>
              <li className="flex gap-2"><span className="text-henna-400 font-bold shrink-0">✗</span> Applying mehndi on top of lotion or moisturizer</li>
              <li className="flex gap-2"><span className="text-henna-400 font-bold shrink-0">✗</span> Removing mehndi too early (before 6 hours minimum)</li>
            </ul>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-henna-500 font-bold shrink-0">✗</span> Using old or poorly stored henna powder</li>
              <li className="flex gap-2"><span className="text-henna-500 font-bold shrink-0">✗</span> Skipping the lemon-sugar sealant during wear</li>
              <li className="flex gap-2"><span className="text-henna-500 font-bold shrink-0">✗</span> Exfoliating or scrubbing over fresh mehndi design</li>
              <li className="flex gap-2"><span className="text-henna-500 font-bold shrink-0">✗</span> Swimming or prolonged water exposure within 24 hours of removal</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 12 — Mehndi for Kids
      ════════════════════════════════════════════ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              chip="Kids Mehndi"
              title="Safe & Fun Mehndi Designs for Children"
              subtitle="Children love mehndi, especially at Eid and weddings. Here is everything parents need to know about safe mehndi application for kids and the best designs for little hands."
            />
            <div className="space-y-4 text-sm sm:text-base text-henna-600 dark:text-henna-400 leading-relaxed">
              <p>
                Children are naturally drawn to mehndi — they see their mothers and older sisters getting decorated and want the same. The good news is that <strong className="text-henna-800 dark:text-henna-200">100% natural henna is safe for children</strong> of all ages when used correctly. The key is to use pure, natural henna without any chemical additives, and to keep the design time shorter than for adults.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Safe application for children:</strong> For children under 5, keep mehndi designs very small and simple — a single flower or star on one hand. For children aged 5–12, simple finger designs, small back hand patterns, and single motifs on the palm are all appropriate. Limit wear time to 1–2 hours for younger children and 3–4 hours for older children. Never apply mehndi near a child&apos;s face, eyes, or mouth.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Warning about black henna:</strong> Never use black henna or chemical paste on children. Black henna contains para-phenylenediamine (PPD), a chemical dye that can cause severe allergic reactions, blistering, permanent scarring, and even chemical burns — especially on children&apos;s sensitive skin. Always verify that the henna being used is 100% natural before applying to a child.
              </p>
              <p>
                <strong className="text-henna-800 dark:text-henna-200">Fun designs kids love:</strong> Children enjoy themed mehndi designs featuring their favourite things — cartoon characters, animals, stars, hearts, butterflies, their name written in Arabic calligraphy, small crowns, or flower arrangements. Letting children choose their design makes it a fun, memorable experience.
              </p>
            </div>
            <Link href="/kids-mehndi" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-henna-500 hover:text-henna-400 transition-colors group">
              Browse Kids Mehndi Designs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <ContentImage
            src="https://images.unsplash.com/photo-1676134138844-9a52b5210cf9?w=800&q=85&fit=crop"
            alt="Simple mehndi design for kids — safe natural henna for children"
            caption="Simple, fun mehndi for children — always use 100% natural henna"
          />
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 13 — History & Culture
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          chip="History & Culture"
          title="The Rich History & Cultural Significance of Mehndi"
          subtitle="Mehndi is far more than decoration — it is a living cultural tradition with thousands of years of history, symbolism, and meaning woven into every design."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 text-sm sm:text-base text-henna-600 dark:text-henna-400 leading-relaxed">
          <div className="space-y-3">
            <h3 className="font-serif text-base font-semibold text-henna-900 dark:text-henna-100">Ancient Origins</h3>
            <p>The history of mehndi stretches back at least 5,000 years. Ancient Egyptian mummies have been discovered with henna-stained nails and hair, indicating it was used long before the birth of Islam or the establishment of the Mughal Empire. Cave paintings in parts of India also suggest early use of henna-based body decoration.</p>
            <p>In ancient times, henna was valued primarily for its cooling properties. People in hot desert climates would apply henna paste to their palms and soles of feet to lower body temperature — the decorative art emerged naturally from this medicinal practice.</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-serif text-base font-semibold text-henna-900 dark:text-henna-100">Mughal Golden Age</h3>
            <p>The art of mehndi reached its greatest refinement during the Mughal period (16th–18th centuries) in the Indian subcontinent. Royal courts employed professional mehndi artists, and elaborate designs became a mark of culture and sophistication. Many motifs that define classic mehndi today — the peacock, the lotus, the paisley (kairi) — were popularized during this era.</p>
            <p>Mughal emperors Humayun and Akbar are said to have encouraged mehndi as an art form at court. The tradition of applying mehndi at weddings was formalized during this period and spread throughout the subcontinent.</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-serif text-base font-semibold text-henna-900 dark:text-henna-100">Symbolism & Meaning</h3>
            <p>Every element in traditional mehndi carries meaning. The peacock represents beauty and prosperity. The lotus symbolizes purity and spiritual awakening. Paisleys (mango shapes) represent fertility and good luck. The sun and moon motifs together symbolize eternal love. Fish (machhli) are symbols of fertility and abundance in many regional traditions.</p>
            <p>The tradition of hiding the groom&apos;s name in bridal mehndi is symbolic of the bride&apos;s love — the more cleverly hidden the name, the more devoted the bride. It also serves as a romantic game on the wedding night, strengthening the bond between the new couple.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="p-6 bg-white dark:bg-henna-900 rounded-2xl border border-henna-200/60 dark:border-henna-800 shadow-sm">
            <h3 className="font-serif text-base font-semibold text-henna-900 dark:text-henna-100 mb-3">Regional Mehndi Traditions</h3>
            <ul className="space-y-3 text-sm text-henna-600 dark:text-henna-400 leading-relaxed">
              <li><strong className="text-henna-700 dark:text-henna-300">Pakistan:</strong> Dense Pakistani patterns with jaal work and tikki motifs. The Karachi and Lahore styles each have distinctive characteristics. Mehndi is central to every wedding and Eid celebration.</li>
              <li><strong className="text-henna-700 dark:text-henna-300">Rajasthan, India:</strong> Home of the finest henna, Rajasthani mehndi features the most intricate detailing globally. The Rajasthani bridal design is considered the gold standard.</li>
              <li><strong className="text-henna-700 dark:text-henna-300">Gulf Arab States:</strong> Bold, flowing Arabic designs with thick outlines and strategic empty space. Gulf mehndi influenced the now-globally-popular Arabic style.</li>
              <li><strong className="text-henna-700 dark:text-henna-300">Morocco:</strong> Geometric, symbol-heavy Berber-influenced designs using black henna paste in precise angular patterns — very different from South Asian florals.</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-henna-900 rounded-2xl border border-henna-200/60 dark:border-henna-800 shadow-sm">
            <h3 className="font-serif text-base font-semibold text-henna-900 dark:text-henna-100 mb-3">Mehndi in Modern Times</h3>
            <ul className="space-y-3 text-sm text-henna-600 dark:text-henna-400 leading-relaxed">
              <li><strong className="text-henna-700 dark:text-henna-300">Global popularity:</strong> Mehndi went global in the 1990s when Western celebrities and musicians began wearing henna at music festivals, introducing the art to international audiences.</li>
              <li><strong className="text-henna-700 dark:text-henna-300">Social media influence:</strong> Instagram and Pinterest have transformed mehndi into a global visual art form. Pakistani and Indian artists now have millions of followers worldwide.</li>
              <li><strong className="text-henna-700 dark:text-henna-300">Professional industry:</strong> Mehndi has grown into a multi-billion rupee professional industry. Top bridal artists in Pakistan charge Rs. 50,000–500,000+ for a single bridal application.</li>
              <li><strong className="text-henna-700 dark:text-henna-300">Digital inspiration:</strong> Platforms like MehndiGlow have democratized access to design inspiration, enabling women everywhere to find and share beautiful designs for free.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 14 — Why MehndiGlow
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
              MehndiGlow is your ultimate destination for mehndi design inspiration. We curate the most beautiful, trending, and traditional mehndi designs from across South Asia and the Middle East — completely free. Whether you are a bride planning your wedding mehndi, a professional mehndi artist looking for fresh ideas, a girl wanting Eid mehndi inspiration, or simply a mehndi enthusiast who loves this art form, you will find everything you need here. Our collection spans 12 categories with over 1000 curated designs, updated daily with the latest trends from Pakistan, India, and beyond.
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
                "✓ No registration required",
                "✓ Free download for personal use",
                "✓ New designs added daily",
                "✓ All styles and skill levels",
                "✓ Mobile-friendly browsing",
                "✓ Bridal, Eid & everyday designs",
              ].map((f) => (
                <span key={f} className="text-xs font-semibold text-henna-300/80 bg-henna-400/10 border border-henna-400/20 px-3 py-1.5 rounded-full">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

    </div>
  );
}
