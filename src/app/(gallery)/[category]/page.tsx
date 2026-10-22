import type { Metadata } from "next";
import { notFound }    from "next/navigation";
import Image           from "next/image";
import MasonryGallery  from "@/components/gallery/MasonryGallery";
import FAQSection      from "@/components/seo/FAQSection";
import Breadcrumb      from "@/components/seo/Breadcrumb";
import JsonLd          from "@/components/seo/JsonLd";
import { collectionPageSchema, breadcrumbSchema } from "@/lib/seo";
import { categories } from "@/data";
import { generateCategoryDesigns } from "@/data/generator";
import { getCategoryArticle } from "@/data/categoryContent";
import CategoryArticle from "@/components/category/CategoryArticle";
import RelatedCategories from "@/components/seo/RelatedCategories";

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return {};
  return {
    title: `${cat.name} Mehndi Designs 2026 — ${cat.count}+ Beautiful Patterns`,
    description: `Discover ${cat.count}+ beautiful ${cat.name} mehndi designs for 2026. ${cat.description}. Free download available.`,
    keywords: [
      cat.keyword,
      `${cat.name.toLowerCase()} mehndi 2026`,
      `${cat.name.toLowerCase()} henna`,
      `${cat.name.toLowerCase()} mehndi designs`,
      `best ${cat.name.toLowerCase()} mehndi`,
      `beautiful ${cat.name.toLowerCase()} mehndi`,
      `${cat.name.toLowerCase()} mehndi download`,
      `${cat.name.toLowerCase()} mehndi images`,
      `${cat.name.toLowerCase()} mehndi photos`,
      `${cat.name.toLowerCase()} mehndi patterns`,
      "mehndi designs 2026","bridal mehndi designs","arabic mehndi designs",
      "eid mehndi designs","pakistani mehndi","simple mehndi designs",
      "mehndi designs for hands","henna designs","beautiful mehndi designs",
      "latest mehndi designs","mehndi for wedding","mehndi design download",
      "front hand mehndi","back hand mehndi","full hand mehndi",
      "minimal mehndi designs","mehndi design for girls","indian mehndi designs",
      "bridal henna designs","traditional mehndi","mehndi patterns",
      "flower mehndi design","finger mehndi designs","feet mehndi designs",
      "easy mehndi designs","stylish mehndi designs","heavy mehndi designs",
      "mehndi art","henna art","mehndi ka design","dulhan mehndi",
      "eid special mehndi","mehndi for kids","modern mehndi designs",
      "mehndi design pics","mehndi design photo","best mehndi designs",
      "trending mehndi designs","free mehndi designs","mehndi design download free",
      "henna mehndi designs","mehndi for bride","arabic henna",
      "mehndi design ideas","mehndidesignpics",
    ],
    alternates: { canonical: `https://mehndidesignpics.com/${params.category}` },
    openGraph: {
      title: `${cat.name} Mehndi Designs 2026`,
      description: cat.description,
      images: [{ url: cat.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cat.name} Mehndi Designs 2026`,
      description: cat.description,
      images: [cat.image],
    },
  };
}

// Category-specific FAQs for Semantic SEO
const CATEGORY_FAQS: Record<string, { question: string; answer: string }[]> = {
  "bridal-mehndi-design": [
    { question: "What is the best bridal mehndi design for 2026?", answer: "The best bridal mehndi designs for 2026 include full hand Arabic patterns, minimal geometric designs, and fusion styles combining Pakistani and Arabic elements. Designs with groom's name hidden in the pattern are also very popular." },
    { question: "How many days before the wedding should mehndi be applied?", answer: "Mehndi should be applied 1–2 days before the wedding. This gives the color time to develop fully — it peaks in darkness at 24–48 hours after application." },
    { question: "How long should bridal mehndi stay on?", answer: "For bridal mehndi, keep it on for at least 8–12 hours, ideally overnight. The longer you leave it, the darker and longer-lasting the color." },
    { question: "What should a bride prepare before her mehndi session?", answer: "Wear comfortable short or sleeveless clothing, finish waxing and manicures at least a day before (they strip the stain afterwards), keep oil-free clean skin ready, and arrange food, water and help beforehand — you will not be able to use your hands for hours." },
    { question: "Can bridal mehndi include the groom's name or portrait?", answer: "Yes — hiding the groom's name or initials in the pattern is a beloved bridal tradition, and skilled artists can also draw small couple figures, wedding scenes and motifs that tell the couple's story." },
  ],
  "arabic-mehndi-design": [
    { question: "What makes Arabic mehndi different from other styles?", answer: "Arabic mehndi is characterized by bold, flowing floral designs with lots of negative space. Unlike Indian mehndi which covers the entire hand densely, Arabic mehndi uses elegant isolated motifs that look modern and stylish." },
    { question: "Is Arabic mehndi easy for beginners?", answer: "Yes! Arabic mehndi is actually one of the easiest styles for beginners because the patterns are less dense and more forgiving. Simple Arabic flower and leaf designs are perfect to start with." },
    { question: "How long does Arabic mehndi take to apply?", answer: "A typical Arabic back-hand design takes fifteen to thirty minutes, and even fuller Arabic layouts are usually done within an hour — much faster than dense Indian bridal work." },
    { question: "What is the difference between Arabic and Indian mehndi?", answer: "Arabic mehndi uses bold outlines, large floral motifs and open spaces, while Indian mehndi is finer and covers the skin densely with detailed motifs like peacocks and paisleys. Arabic designs look modern and graphic; Indian designs look rich and traditional." },
    { question: "Which occasions suit Arabic mehndi best?", answer: "Arabic mehndi works for almost everything — Eid, parties, weddings (especially for guests and modern brides), and everyday wear when you want an elegant design without a long application time." },
  ],
  "eid-mehndi-design": [
    { question: "What mehndi designs are best for Eid?", answer: "For Eid, simple to medium-complexity Arabic and Pakistani designs are most popular. Finger mehndi, half-hand designs, and minimal floral patterns are trending. The key is designs that look beautiful but don't take too long to apply." },
    { question: "How do I do mehndi quickly for Eid?", answer: "For quick Eid mehndi, stick to finger mehndi, simple arabic flowers on the back hand, or ready-made mehndi stencils. A simple 5-minute mehndi design can look stunning when done neatly." },
    { question: "When is the best time to apply Eid mehndi?", answer: "Apply it on Chand Raat (the night before Eid) or one to two days earlier, so the colour reaches its deepest shade on Eid morning. Chand Raat mehndi gatherings are a tradition in many families." },
    { question: "What are the best Eid mehndi designs for kids?", answer: "Small flowers, stars, moons and simple finger bands are perfect for children — quick to apply, easy to sit through, and festive in photos. Always use natural henna for kids, never black henna." },
    { question: "How can I make my Eid mehndi stain darker?", answer: "Leave the paste on for six to eight hours or overnight, keep your hands warm, apply lemon-sugar sealant once it dries, and avoid water for twelve hours after removal. The colour keeps deepening for 24–48 hours." },
  ],
  "mehndi-tattoo-design": [
    { question: "What is mehndi tattoo?", answer: "Mehndi tattoo (also called henna tattoo) is a temporary body art made from natural henna paste. It stains the skin dark brown or black and lasts 1–3 weeks. Unlike permanent tattoos, mehndi tattoos are completely safe, painless, and fade naturally over time." },
    { question: "How long does a mehndi tattoo last?", answer: "A mehndi tattoo typically lasts 1 to 3 weeks depending on skin type, placement, and aftercare. Areas with thicker skin like palms and soles last longest. Keeping the design moisturized with oil daily extends its life significantly." },
    { question: "Is mehndi tattoo safe for skin?", answer: "Yes — natural henna mehndi tattoos are completely safe for all skin types including children. Always use 100% natural henna. Avoid black henna which contains PPD (paraphenylenediamine), a chemical dye that can cause severe allergic reactions and skin damage." },
  ],
  "floral-mehndi-design": [
    { question: "What are floral mehndi designs?", answer: "Floral mehndi designs feature flowers, roses, lotus blossoms, jasmine, and botanical vine patterns. They are the most romantic and feminine style of henna, perfect for weddings, Eid, and everyday wear. Roses and lotus flowers are the most popular motifs in 2026." },
    { question: "Which flowers are most popular in floral mehndi?", answer: "Roses, lotus flowers, jasmine vines, daisy clusters, and peony patterns are the most popular floral mehndi motifs. Arabic-style roses with bold outlines and Indian-style lotus patterns are particularly trending in 2026 for bridal and Eid mehndi." },
    { question: "Is floral mehndi suitable for beginners?", answer: "Yes! Simple single-flower designs — like a rose on the thumb or a daisy on the back hand — are perfect for beginners. Start with one large flower and add leaf details around it. Floral patterns are forgiving because they naturally look hand-drawn and organic." },
  ],
  "circle-mehndi-design": [
    { question: "What is circle mehndi design?", answer: "Circle mehndi features round mandala patterns, concentric circles, and geometric ring designs. The circular motif is placed in the center of the palm or back hand with detailed patterns radiating outward. It is one of the most striking and symmetric mehndi styles." },
    { question: "How to draw a mandala circle mehndi?", answer: "Start with a small circle in the center of your hand. Draw petals outward from this center, then add a ring of dots, then larger petal shapes, and continue adding layers outward. Work in rings and keep spacing even. Practice on paper first to maintain symmetry." },
    { question: "Is circle mehndi good for the back hand?", answer: "Yes — circle and mandala mehndi looks especially stunning on the back hand where there is more flat space for the pattern to expand. A large central mandala on the back hand with vine extensions to the fingers is one of the most sought-after designs in 2026." },
  ],
  "gol-tikki-mehndi-design": [
    { question: "What is gol tikki mehndi?", answer: "Gol tikki mehndi features round filled-circle medallions (tikkis) as the main motif. The gol (round) tikki is placed in the center of the palm, surrounded by intricate jaal (net) patterns, vines, and fine detail work. It is a traditional Pakistani and Indian mehndi style." },
    { question: "What is the difference between gol tikki and mandala mehndi?", answer: "Gol tikki typically refers to a solid filled round dot or medallion, while mandala mehndi is an elaborate circular pattern with many concentric rings and petal details. Tikki designs are generally simpler and bolder, while mandalas are more intricate and symmetrical." },
    { question: "Which occasions suit gol tikki mehndi?", answer: "Gol tikki mehndi is perfect for weddings, Eid, engagements, and festive occasions. Its traditional appearance makes it especially popular for Pakistani and Indian bridal mehndi. It pairs beautifully with heavy embroidered outfits and traditional jewellery." },
  ],
  "easy-mehndi-design": [
    { question: "What are the easiest mehndi designs for beginners?", answer: "The easiest mehndi designs for beginners include single Arabic flowers on the back hand, simple vine patterns along the fingers, small leaf clusters on the wrist, and basic dotwork patterns. These require minimal cone control and look beautiful even when done by a first-timer." },
    { question: "How long does easy mehndi take to apply?", answer: "Simple mehndi designs take just 5–15 minutes to apply, making them perfect for Eid morning or last-minute occasions. A single Arabic flower back hand design can be done in under 10 minutes. Quick finger mehndi takes just 3–5 minutes per hand." },
    { question: "How can I learn mehndi at home easily?", answer: "Start with simple single-line patterns and basic flower shapes. Use a ready-made mehndi cone for easier control. Practice on paper first, then on your own hand. MehndiDesignPics has 3000+ easy mehndi designs with step-by-step reference images to help you practice." },
  ],
  "pakistani-mehndi-design": [
    { question: "What is Pakistani mehndi style?", answer: "Pakistani mehndi is known for its fine, intricate linework that blends Indian density with Arabic flowing motifs. It often features detailed jaal (net) patterns, fine dots, and delicate shading, and is a favourite for bridal mehndi in Pakistan." },
    { question: "How is Pakistani mehndi different from Indian mehndi?", answer: "Indian mehndi usually covers the hand densely with peacock, mango (paisley) and figure motifs, while Pakistani mehndi leaves slightly more breathing room and uses finer, more delicate lines with Arabic-style florals mixed in. Both are traditional — the choice is a matter of taste." },
    { question: "How long does Pakistani bridal mehndi take to apply?", answer: "A detailed Pakistani bridal design for both hands can take two to four hours depending on how far up the arms it goes and how fine the linework is. Book your artist well in advance during wedding season." },
    { question: "Which occasions suit Pakistani mehndi?", answer: "Pakistani mehndi is most popular for weddings (mehndi and baraat days), Eid, engagements and festive events. Simpler Pakistani patterns with bold outlines also work beautifully for parties and family gatherings." },
  ],
  "finger-mehndi-design": [
    { question: "What is finger mehndi?", answer: "Finger mehndi concentrates the design on the fingers — bands, rings, chains, tips and small motifs — instead of covering the whole hand. It gives a jewellery-like look and pairs beautifully with rings and nail polish." },
    { question: "How long does finger mehndi take to apply?", answer: "Most finger mehndi designs take just five to ten minutes per hand, which makes them perfect for last-minute plans, office days and small celebrations." },
    { question: "Does finger mehndi stain well?", answer: "Yes — fingertips have thicker skin, so natural henna stains them deeply. Because fingers are washed often, the stain fades a little faster than on the back of the hand; applying oil before washing helps it last." },
    { question: "Can beginners do finger mehndi?", answer: "Absolutely. Simple finger bands, dots and leaf trails are some of the easiest mehndi patterns to learn, and small mistakes are easy to correct or build into the design." },
  ],
  "feet-mehndi-design": [
    { question: "Why does mehndi stain darker on the feet?", answer: "The soles and tops of the feet have thicker skin than most of the body, and thicker skin absorbs more lawsone (the henna dye), producing a deeper, richer stain — similar to palms." },
    { question: "How long should mehndi stay on the feet?", answer: "Leave the paste on for at least six to eight hours, ideally overnight. Keep feet warm and avoid walking on the drying paste; once it is dry, cover loosely with socks to protect the design." },
    { question: "How do I stop feet mehndi from smudging?", answer: "Let each section dry fully before moving, apply a lemon-sugar sealant once the surface is dry, and avoid water for the first twelve hours after removing the paste. Wear open footwear while it sets." },
    { question: "Which feet mehndi designs are most popular?", answer: "Anklet-style bands, toe rings patterns, mandalas on the top of the foot and bridal designs that climb towards the calves are the most loved feet mehndi styles." },
  ],
  "minimal-mehndi-design": [
    { question: "What is minimal mehndi?", answer: "Minimal mehndi uses a few clean lines, small motifs and lots of negative space instead of dense coverage. Think a single flower on the back hand, a fine vine along one finger, or a small mandala on the wrist." },
    { question: "Is minimal mehndi suitable for work or office?", answer: "Yes — minimal designs are subtle, elegant and fade discreetly, which makes them the most office-friendly mehndi style. A small finger or wrist design reads more like jewellery than a full traditional pattern." },
    { question: "How long does minimal mehndi take?", answer: "Most minimal designs take five to fifteen minutes to apply because they cover very little skin. They are ideal when you want a mehndi touch without a long sitting." },
    { question: "Does minimal mehndi last as long as full designs?", answer: "The stain itself develops the same way, but because the lines are fine and the area is small, minimal mehndi can look faded sooner — usually within one to two weeks. Keeping the skin moisturised helps." },
  ],
  "kids-mehndi-design": [
    { question: "Is mehndi safe for children?", answer: "Natural henna is generally safe for children, but always do a small patch test first and never use 'black henna', which can contain PPD and cause serious skin reactions. Avoid henna on babies under six months old." },
    { question: "What mehndi designs do kids like most?", answer: "Children love small, fun motifs — flowers, butterflies, stars, cartoon-style shapes, their initials, and simple finger designs. Bold outlines work better than fine detail because kids rarely sit still for long." },
    { question: "How long should kids keep mehndi paste on?", answer: "Two to four hours is usually enough for children. The stain will be lighter than an overnight application but still clearly visible, and it avoids the discomfort of keeping little hands still for too long." },
    { question: "How can I make mehndi fun for kids?", answer: "Let them choose their own motif, work on one hand at a time, and keep the session short with breaks. Glitter gel over a dried design (cosmetic-grade only) is a popular finishing touch for parties." },
  ],
  "back-hand-mehndi-design": [
    { question: "Why is back hand mehndi so popular?", answer: "The back of the hand is the most visible part in photos and daily life, and it is a smooth, flat canvas that suits both bold Arabic patterns and fine jewellery-style designs." },
    { question: "Does back hand mehndi smudge less than palm mehndi?", answer: "Yes — the back hand touches fewer surfaces while drying, so designs smudge less and are easier to manage if you need to use your phone or do light tasks. The stain is slightly lighter than on palms because the skin is thinner." },
    { question: "What designs suit the back hand best?", answer: "Central mandalas with finger trails, Arabic floral vines, bracelet-and-chain (hathphool style) designs and minimal single-motif layouts all look stunning on the back hand." },
    { question: "How do I make back hand mehndi last longer?", answer: "Avoid exfoliating scrubs on the hands, moisturise daily with natural oil, and wear gloves for washing-up during the first few days while the stain is developing." },
  ],
  "indian-mehndi-design": [
    { question: "What defines Indian mehndi style?", answer: "Indian mehndi is dense and detailed, often covering the hands and forearms completely. Signature motifs include peacocks, paisleys (mango/ambi), brides and grooms figures, lotus flowers and fine jaal work, with fingertips usually filled in." },
    { question: "How long does full Indian bridal mehndi take?", answer: "A complete Indian bridal application for hands and feet commonly takes three to six hours with an experienced artist, because of the density and the number of motifs involved." },
    { question: "Indian vs Arabic mehndi — which should I choose?", answer: "Choose Indian mehndi for a traditional, richly covered look, especially for weddings. Choose Arabic if you prefer bolder, spaced-out florals that are quicker to apply and look more modern." },
    { question: "Which festivals feature Indian mehndi?", answer: "Mehndi is central to Karwa Chauth, Teej, Raksha Bandhan, Diwali and wedding celebrations across India, as well as Eid and engagements in many communities." },
  ],
  "stylish-mehndi-design": [
    { question: "What counts as a stylish or modern mehndi design?", answer: "Stylish mehndi mixes traditional motifs with modern elements — geometric lines, negative space, fusion Arabic-Indian layouts, jewellery-inspired chains and minimal accents. It is designed to match contemporary outfits and photography." },
    { question: "Are stylish mehndi designs good for parties?", answer: "Yes — stylish designs are made for parties, sangeets and receptions. They photograph beautifully, pair well with both eastern and western outfits, and can be kept subtle or bold as you like." },
    { question: "Can stylish mehndi work for brides?", answer: "Definitely. Many modern brides choose fusion designs: traditional density on the palms with stylish negative-space patterns on the back hand and arms, giving the best of both looks." },
    { question: "How do I pick a stylish design for my outfit?", answer: "Match the design's mood to your outfit — geometric patterns with contemporary dresses, florals with lehengas and sarees, and jewellery-style chains when you plan to wear hand jewellery like hathphool." },
  ],
  "front-hand-mehndi-design": [
    { question: "What is front hand (palm side) mehndi?", answer: "Front hand mehndi is applied on the palm side of the hand. Palms stain the darkest of anywhere on the body, so palm designs look rich and deep once developed." },
    { question: "Why do palms stain darker than the back of the hand?", answer: "Palm skin is much thicker and has more layers for the henna dye to bind to, which produces the deepest maroon-brown stain. This is why traditional bridal mehndi always covers the palms fully." },
    { question: "How long does palm mehndi take to fade?", answer: "Palm stains usually stay bold for one to two weeks, then fade gradually with hand washing and natural skin renewal. Frequent sanitiser and soap use speeds up fading." },
    { question: "What designs look best on the palm?", answer: "A central mandala or gol tikki with detailed finger work is the classic palm layout. Full-coverage bridal patterns, couple portraits motifs and checkerboard (jaal) fills also look striking on palms." },
  ],
  "white-mehndi-design": [
    { question: "What is white mehndi made of?", answer: "White mehndi is not henna at all — it is a white body paint, usually gouache or a professional face-and-body paint, applied with a cone or brush in mehndi-style patterns. It sits on top of the skin and does not stain it." },
    { question: "How long does white mehndi last?", answer: "White mehndi lasts for the event — typically a few hours to a day. It can be washed or peeled off afterwards, which makes it perfect for photoshoots, parties and anyone who cannot wear a stain afterwards." },
    { question: "Does white mehndi stain the skin?", answer: "No. Because it contains no henna dye, white mehndi leaves no stain once removed. If you want the look of mehndi with zero commitment, white mehndi is the answer." },
    { question: "When is white mehndi worn?", answer: "White mehndi is popular for modern bridal shoots, engagement parties, beach and destination weddings, and as a striking contrast on deeper skin tones. It also suits themed parties and fashion editorials." },
  ],
  "glitter-mehndi-design": [
    { question: "What is glitter mehndi?", answer: "Glitter mehndi combines regular henna patterns with cosmetic glitter gel, applied over the dried paste design or along its outlines. The henna stains as usual while the glitter adds sparkle for the event." },
    { question: "Is glitter mehndi safe for skin?", answer: "Use only cosmetic-grade glitter products made for skin. Craft glitter has sharp edges and is not safe near skin or eyes. If you have sensitive skin, patch-test the glitter gel first and keep it away from broken skin." },
    { question: "How long does the glitter part last?", answer: "The glitter is temporary — it usually lasts through the event and washes off with water, while the henna stain underneath remains for one to three weeks." },
    { question: "Which occasions suit glitter mehndi?", answer: "Glitter mehndi is a favourite for sangeet nights, mehndi parties, Eid celebrations, birthdays and kids' events — anywhere you want the design to catch the light in photos." },
  ],
  "paisley-mehndi-design": [
    { question: "What is a paisley motif in mehndi?", answer: "The paisley — called ambi or keri in South Asia because it resembles a raw mango — is a teardrop-shaped motif with a curved tip. It is one of the oldest and most symbolic mehndi elements, representing fertility and new beginnings." },
    { question: "How are paisleys used in mehndi designs?", answer: "Paisleys appear as standalone centrepieces, borders, fillers inside larger shapes, and as the base of peacock bodies. Small paisleys make pretty finger designs; large ornate ones anchor palm and back-hand layouts." },
    { question: "Is paisley mehndi easy for beginners?", answer: "Yes — a basic paisley is just a curved teardrop outline. Beginners can start with simple paisley chains along the fingers or wrist before attempting filled, detailed versions." },
    { question: "Which styles use paisley most?", answer: "Paisley is central to Indian and Rajasthani mehndi and appears heavily in bridal designs. It also blends beautifully into Arabic layouts as accent motifs along floral vines." },
  ],
  "heart-mehndi-design": [
    { question: "What do heart mehndi designs symbolise?", answer: "Heart motifs in mehndi symbolise love and romance, which is why they are a favourite for engagements, anniversaries, Valentine's events and bridal mehndi — sometimes hiding the partner's initials inside the heart." },
    { question: "Where do heart designs look best?", answer: "A heart centrepiece looks lovely on the back of the hand or wrist, while small heart trails suit fingers. Brides often place a heart on each palm so the pair forms a complete picture when hands are joined." },
    { question: "Can heart mehndi be combined with other motifs?", answer: "Yes — hearts pair naturally with floral vines, couple initials, rings motifs and peacocks. Keeping one clear heart as the focal point keeps the design romantic rather than busy." },
    { question: "Is heart mehndi suitable for beginners?", answer: "Simple heart outlines with dot and leaf details are very beginner-friendly. Start with one medium heart on the back hand and add small accents around it." },
  ],
  "groom-mehndi-design": [
    { question: "Do grooms wear mehndi?", answer: "Yes — in many South Asian weddings the groom has a small, symbolic mehndi design, often on one hand. It is considered a blessing for prosperity and a fun part of the mehndi ceremony." },
    { question: "What designs do grooms usually choose?", answer: "Grooms typically pick something small and simple: a mandala or gol tikki on the palm, a band on one finger, the bride's initials, or a minimal geometric pattern on the back of the hand." },
    { question: "How long does groom mehndi take to apply?", answer: "Most groom designs take ten to twenty minutes — far quicker than bridal mehndi. The paste still needs a few hours on the skin for a good stain, so it is often applied during the ceremony celebrations." },
    { question: "Can groom and bride designs match?", answer: "Yes, matching or complementary designs are a growing trend — for example, half of a heart or mandala on each partner's hand, or the same motif in a bold version for the groom and a detailed version for the bride." },
  ],
  "karwa-chauth-mehndi-design": [
    { question: "Why is mehndi important on Karwa Chauth?", answer: "Applying mehndi is a cherished Karwa Chauth ritual — it is considered auspicious for married life, and tradition says the darker the stain, the more love and blessings the marriage receives." },
    { question: "When should Karwa Chauth mehndi be applied?", answer: "Apply it one to two days before the fast so the colour peaks on Karwa Chauth day. Many women gather for group mehndi sessions the evening before, during the sargi celebrations." },
    { question: "What designs are traditional for Karwa Chauth?", answer: "Full palm designs with the moon, karwa (pot), chalni (sieve) and couple motifs are classic choices, along with dense Indian patterns and the husband's name hidden in the design." },
    { question: "How can I get a darker stain for Karwa Chauth?", answer: "Leave the paste on as long as possible (overnight if you can), keep hands warm, apply a lemon-sugar sealant, and avoid water for at least twelve hours after removing the paste." },
  ],
  "teej-mehndi-design": [
    { question: "What is Teej mehndi?", answer: "Teej mehndi is applied during the monsoon festival of Teej, when women dress in green, gather on swings (jhula) and celebrate with songs, sweets and henna. Lush, nature-inspired designs match the festival's mood." },
    { question: "Which motifs are popular for Teej?", answer: "Peacocks, swings, raindrops, mango leaves, lotus and lush floral vines are classic Teej motifs, reflecting the monsoon season and greenery of the festival." },
    { question: "How elaborate is Teej mehndi?", answer: "It ranges from simple back-hand patterns for a festive touch to full-hand traditional designs. Because Teej is a joyful group celebration, many women apply mehndi together the day before." },
    { question: "What colours go with Teej mehndi?", answer: "Teej is traditionally celebrated in shades of green, with red and maroon accents. A deep henna stain complements green outfits beautifully, which is why application is timed a day or two ahead." },
  ],
  "palm-mehndi-design": [
    { question: "Why do palm designs stain the darkest?", answer: "Palms have the thickest skin on the hands, so henna dye binds deeply and develops into the richest maroon-brown colour — the hallmark of a good mehndi application." },
    { question: "What is the classic palm mehndi layout?", answer: "The timeless layout is a central motif — a mandala, gol tikki or large flower — surrounded by detailed fillers, with each finger decorated in matching bands and tips." },
    { question: "How do I keep palm mehndi from cracking?", answer: "Once the paste dries, dab on a lemon-sugar sealant to keep it slightly moist and in contact with the skin. Avoid bending the palm sharply while it dries, and scrape the paste off rather than washing it off." },
    { question: "Are palm designs suitable for small occasions?", answer: "Yes — a single palm mandala or a gol tikki with simple finger bands gives the full traditional feel in fifteen to twenty minutes, without a full bridal-style sitting." },
  ],
  "heavy-mehndi-design": [
    { question: "What is heavy mehndi?", answer: "Heavy mehndi means dense, full-coverage designs packed with fine motifs, fillers and shading, usually covering both hands up to the elbows — the classic look for brides who want maximum detail." },
    { question: "How long does heavy mehndi take to apply?", answer: "Heavy bridal-style mehndi commonly takes three to six hours for both hands, depending on coverage and intricacy. Artists often work in sections and take short breaks with the bride." },
    { question: "How long should heavy mehndi stay on?", answer: "For the deepest stain, keep heavy mehndi on for eight to twelve hours or overnight. The density of the paste means it stays moist longer, which helps colour development." },
    { question: "Is heavy mehndi only for brides?", answer: "Bridal wear is its home, but heavy mehndi is also chosen for Karwa Chauth, Eid and grand festive occasions by anyone who loves the rich, traditional look." },
  ],
  "full-hand-mehndi-design": [
    { question: "What does full hand mehndi cover?", answer: "Full hand mehndi covers the entire hand — palm, back, fingers and usually part of the forearm — in one connected design, rather than isolated motifs." },
    { question: "Full hand vs half hand mehndi — what is the difference?", answer: "Full hand designs cover the whole hand and wrist-to-forearm area with dense patterns. Half hand designs cover only part of the hand — often the back or one side — leaving more skin bare for a lighter look." },
    { question: "How long does a full hand design take?", answer: "A detailed full hand design typically takes one to two hours per hand with an experienced artist; highly intricate bridal versions take longer." },
    { question: "Which occasions call for full hand mehndi?", answer: "Weddings first and foremost, followed by engagements, Karwa Chauth, Teej and Eid — any occasion where the hands will be photographed and celebrated up close." },
  ],
  "godh-bharai-mehndi-design": [
    { question: "What is Godh Bharai mehndi?", answer: "Godh Bharai is the traditional baby shower ceremony, and mehndi is applied to the mother-to-be and guests as a blessing for the baby and a celebration of motherhood." },
    { question: "Is mehndi safe during pregnancy?", answer: "Natural henna is widely used in pregnancy celebrations, but always choose 100% natural henna (never black henna with PPD), do a patch test first, and check with your doctor if you have any skin condition or concern." },
    { question: "What motifs suit a baby shower?", answer: "Sweet motifs like tiny footprints, cradles, lotus flowers, peacocks and the baby's expected initial are popular, alongside classic floral patterns for the mother-to-be." },
    { question: "How elaborate should Godh Bharai mehndi be?", answer: "Most mothers-to-be choose comfortable, medium designs on the back of the hands and palms that do not require sitting still for hours; guests often get simple single-motif designs." },
  ],
  "diwali-mehndi-design": [
    { question: "Is mehndi worn for Diwali?", answer: "Yes — many women apply mehndi for Diwali parties and pujas as part of dressing up for the festival of lights, alongside new outfits and jewellery." },
    { question: "What motifs are popular for Diwali mehndi?", answer: "Diya (lamp) motifs, lotus flowers, paisleys and mandalas are favourite Diwali designs, often kept medium-sized so they are ready in time for evening celebrations." },
    { question: "When should Diwali mehndi be applied?", answer: "Apply it one to two days before Diwali so the colour is at its deepest for the main day. If you are short on time, a back-hand or finger design can be done the same morning." },
    { question: "How long do Diwali designs usually take?", answer: "Most Diwali designs are medium coverage and take twenty to forty-five minutes per hand — festive and detailed without a bridal-length sitting." },
  ],
  "wedding-guest-mehndi-design": [
    { question: "What mehndi should a wedding guest wear?", answer: "Guests usually choose medium or simple designs — a back-hand Arabic pattern, a palm mandala, or stylish finger designs — festive enough for the event without matching the bride's full bridal coverage." },
    { question: "How do I avoid outshining the bride?", answer: "Keep your design to one or two hands with moderate coverage, and skip the elbow-length bridal patterns and couple-portrait motifs, which are traditionally reserved for the bride." },
    { question: "When do guests apply mehndi at a wedding?", answer: "Guests typically get their mehndi done at the mehndi ceremony itself, where artists set up for everyone. Arrive early in the event if you want a more detailed design before the queues grow." },
    { question: "What are quick guest designs that still look festive?", answer: "Arabic floral vines on the back hand, bracelet-and-finger chain designs, and a gol tikki palm with decorated fingers all look celebratory and take under twenty minutes." },
  ],
};

export default function CategoryPage({ params }: Props) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  // Quality over quantity: a focused set of genuinely distinct designs per
  // category indexes far better than thousands of near-duplicate pages built
  // from the same handful of stock photos (Google treats those as thin
  // content and refuses to index them). 60 covers all 20 unique titles three
  // times over with varied imagery and unique descriptions.
  const DESIGNS_PER_CATEGORY = 60;
  const designCount = DESIGNS_PER_CATEGORY;
  const catDesigns = generateCategoryDesigns(params.category, designCount);
  const article = getCategoryArticle(params.category);
  // Prefer the in-depth article's FAQs; fall back to the legacy per-category set.
  const faqs = article?.faqs ?? CATEGORY_FAQS[params.category] ?? [];

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={[
        collectionPageSchema({
          name: cat.name,
          description: cat.description,
          url: `/${params.category}`,
          imageUrl: cat.image,
          count: cat.count,
        }),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: `${cat.name} Mehndi Designs`, url: `/${params.category}` },
        ]),
      ]} />

      <div>
        {/* Category Hero */}
        <div className="relative h-52 sm:h-72 overflow-hidden">
          <Image
            src={cat.image}
            alt={`${cat.name} mehndi designs 2026 collection`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-henna-900/85 to-henna-900/40" />

          <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-4 sm:px-8 w-full">
            <div>
              {/* Breadcrumb */}
              <Breadcrumb items={[{ name: `${cat.name} Mehndi`, url: `/${params.category}` }]} />

              {/* H1 — Primary keyword */}
              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-2">
                {cat.name} Mehndi Designs 2026
              </h1>

              {/* Description — secondary keyword */}
              <p className="text-henna-200 text-sm max-w-lg">{cat.description}</p>

              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="text-xs px-3 py-1 rounded-full bg-henna-400/20 text-henna-300 border border-henna-400/30">
                  {cat.count}+ designs
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-henna-400/20 text-henna-300 border border-henna-400/30">
                  Free download
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-henna-400/20 text-henna-300 border border-henna-400/30">
                  Updated 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category description — Topical Authority text */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="bg-henna-100 dark:bg-henna-800 rounded-2xl p-6 border border-henna-200 dark:border-henna-700">
            {/* H2 — Secondary keyword */}
            <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-3">
              About {cat.name} Mehndi Designs
            </h2>
            <p className="text-henna-700 dark:text-henna-300 text-sm leading-relaxed">
              {cat.description}. Browse our collection of {cat.count}+ hand-picked {cat.name.toLowerCase()} mehndi patterns,
              updated regularly with the latest trends. Whether you are looking for simple designs for beginners
              or intricate bridal patterns, MehndiDesignPics has the perfect {cat.name.toLowerCase()} mehndi design for you.
              All designs are free to view and download for personal use.
            </p>

            {/* Keyword-rich tags — Semantic SEO */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                `${cat.name} Mehndi 2026`,
                `${cat.name} Henna Designs`,
                `New ${cat.name} Mehndi`,
                `Simple ${cat.name} Mehndi`,
                `${cat.name} Mehndi for Beginners`,
              ].map((tag) => (
                <span key={tag} className="tag-pill text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* In-depth style guide (2500+ words) — only for pages that have one */}
        {article && <CategoryArticle category={cat} article={article} />}

        {/* Gallery */}
        <MasonryGallery
          designs={catDesigns}
          showFilter={false}
          initialVisible={designCount}
        />

        {/* FAQ Section — targets "People Also Ask" */}
        {faqs.length > 0 && (
          <FAQSection
            faqs={faqs}
            title={`${cat.name} Mehndi FAQ`}
          />
        )}

        {/* Related styles — internal linking */}
        <RelatedCategories currentSlug={params.category} />
      </div>
    </>
  );
}

