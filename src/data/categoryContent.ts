import type { CategoryArticle } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// Long-form style guides for the in-depth mehndi style pages.
//
// IMPORTANT: every `html` string here is AUTHOR-CONTROLLED STATIC CONTENT. It is
// rendered with dangerouslySetInnerHTML in CategoryArticle.tsx. Never interpolate
// user input or runtime values into these strings.
//
// Each article is written with a DISTINCT angle and vocabulary so the pages read
// as unique editorial content (not templated), which is what Google rewards.
// ─────────────────────────────────────────────────────────────────────────────

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

export const categoryArticles: Record<string, CategoryArticle> = {
  // ───────────────────────────── ENGAGEMENT ─────────────────────────────
  "engagement-mehndi-design": {
    slug: "engagement-mehndi-design",
    intro:
      `<p class="lead">Your engagement is the first time the world sees your hands as a bride-to-be — and engagement mehndi is designed to celebrate exactly that moment. Unlike the heavy, hours-long bridal application that comes later, engagement or <em>sagai</em> mehndi is lighter, faster and far more focused: it draws the eye to the ring finger, frames the hand elegantly, and photographs beautifully when your partner slides the ring on.</p>
      <p>This guide walks you through everything that makes engagement mehndi its own art form — where to place it, how to keep it ring-ready, which motifs suit a ceremony rather than a full wedding, and how to make the colour come out rich and deep in time for the big reveal.</p>`,
    sections: [
      {
        id: "what-defines-engagement-mehndi",
        heading: "What Makes Engagement Mehndi Different",
        motif: "vine",
        html:
          `<p>Engagement mehndi sits deliberately between everyday henna and full bridal work. The brief is simple: look polished, keep the ring finger clear and clean, and don't take six hours to apply on a day that is already packed with rituals and photographs.</p>
          <p>Because of that, engagement designs favour <strong>negative space</strong> over dense coverage. A typical engagement hand might carry a delicate motif on the back of the hand, a thin band around the wrist, and detailing that runs down two or three fingers — leaving the ring finger either bare or marked with a single fine accent so the ring itself stays the hero.</p>
          <p>The other defining trait is symmetry between meaning and minimalism. Couples increasingly ask for hidden initials, a wedding date, or two intertwined motifs that represent the pair. The design says something personal without shouting it, which is exactly the tone an engagement calls for.</p>`,
      },
      {
        id: "best-placement-and-motifs",
        heading: "Best Placements and Motifs for the Ring Ceremony",
        motif: "floral",
        html:
          `<p>For a ring ceremony, placement matters more than complexity. These are the layouts that consistently work:</p>
          <ul>
            <li><strong>Back-of-hand focal motif:</strong> a single mandala, rose or paisley centred on the back of the dominant hand, with light trails toward the fingers.</li>
            <li><strong>Ring-finger frame:</strong> a thin vine or dotted band just below the knuckle so the ring sits on clean skin while still feeling "dressed".</li>
            <li><strong>Wrist bracelet:</strong> a slim cuff-style band that reads like jewellery and ties the whole hand together.</li>
            <li><strong>Fingertip dips:</strong> filled or half-filled fingertips for a modern, editorial finish that looks striking in close-up ring shots.</li>
          </ul>
          <p>Motif-wise, keep it romantic but restrained: roses and lotus buds for softness, fine paisleys for tradition, and small geometric repeats for a contemporary couple. If you want something with story, ask your artist to weave your and your partner's first initials into the back-hand motif — it disappears into the pattern until you point it out.</p>`,
      },
      {
        id: "how-to-apply",
        heading: "How to Apply Engagement Mehndi at Home",
        motif: "border",
        html:
          `<p>Engagement designs are achievable at home precisely because they're light. Here is a reliable sequence:</p>
          <ol>
            <li><strong>Plan the ring finger first.</strong> Decide before you start whether it stays bare or gets a single accent. Mistakes here are the ones that show in photos.</li>
            <li><strong>Wash and dry the hands</strong>, then wipe with a little eucalyptus oil so the henna grips and darkens.</li>
            <li><strong>Anchor the focal motif</strong> on the back of the hand using a fine-tip cone held at 45 degrees, working outward so your hand never drags over wet paste.</li>
            <li><strong>Add the connectors</strong> — the wrist band and finger trails — last, checking symmetry against the other hand.</li>
            <li><strong>Let it sit 4–6 hours.</strong> Engagement designs need less time than bridal, but the colour still deepens the longer you wait.</li>
          </ol>
          <p>If you're nervous, practise the back-hand motif twice on paper. Because the design is sparse, every line is visible — clean execution matters more than ambition.</p>`,
      },
      {
        id: "color-darkening",
        heading: "Getting a Deep Colour Before the Big Reveal",
        html:
          `<p>The single biggest engagement-day worry is colour: a pale stain ruins the close-up of the ring. The good news is that engagement mehndi, being thinner, releases dye predictably if you treat it right.</p>
          <p>Use only <strong>natural henna</strong> — never "black henna", which can contain PPD and cause burns. Apply at least the night before so the stain has 24–48 hours to oxidise to its darkest tone, which is when ring-ceremony photos usually happen. Once the paste dries, dab a <strong>lemon-and-sugar seal</strong> over it to keep it tacky and in contact with the skin. After scraping (don't wash) the dried paste off, rub in a little mustard or coconut oil and keep the hands away from water for a few hours.</p>
          <p>For more colour science, see our deep-dive on <a href="/blog/how-to-make-mehndi-darker">how to make mehndi darker</a>.</p>`,
      },
      {
        id: "occasions-and-pairing",
        heading: "Matching Engagement Mehndi to Your Outfit and Jewellery",
        motif: "paisley",
        html:
          `<p>Engagement mehndi works best when it's treated as part of your styling, not separate from it. If you're wearing a heavily embellished outfit, keep the henna light so the two don't fight; if your outfit is minimal, you can afford a denser back-hand motif as a statement.</p>
          <p>Think about your jewellery too. A statement cocktail ring pairs well with bare fingers and a busy back of hand. A delicate solitaire looks gorgeous framed by a fine ring-finger band. If you're wearing a <em>hathphool</em> or bracelet, consider <a href="/jewellery-mehndi-design">jewellery-style mehndi</a> that echoes those forms so the whole look feels intentional.</p>
          <p>Couples doing matching ceremonies sometimes give the groom a small motif too — a single initial or a fine band — which photographs beautifully in the ring-exchange shot.</p>`,
      },
      {
        id: "common-mistakes",
        heading: "Common Engagement Mehndi Mistakes to Avoid",
        html:
          `<p>Because engagement mehndi is so visible in close-up, small errors carry weight. Avoid these:</p>
          <ul>
            <li><strong>Covering the ring finger fully</strong> and then realising the ring won't sit on clean skin for photos.</li>
            <li><strong>Applying too late</strong> — same-day application gives an orange, underdeveloped stain on camera.</li>
            <li><strong>Overloading the design</strong> so it looks like unfinished bridal work rather than deliberate engagement styling.</li>
            <li><strong>Ignoring the second hand</strong> — even if one hand is the focus, asymmetry reads as a mistake in wide shots.</li>
            <li><strong>Using chemical cones</strong> for "instant black" colour, which is both unsafe and unnatural-looking.</li>
          </ul>
          <p>When in doubt, do less, but do it cleanly. A simple, crisp engagement design always outperforms a rushed complicated one.</p>`,
      },
      {
        id: "trends-2026",
        heading: "Engagement Mehndi Trends for 2026",
        motif: "lotus",
        html:
          `<p>The current direction in engagement mehndi is "quiet luxury": fewer elements, more precision. Single oversized back-hand motifs with lots of breathing room are replacing busy all-over patterns. Fine-line work — almost like jewellery etched onto skin — is everywhere, as are minimal fingertip accents that read beautifully on a phone screen.</p>
          <p>Personalisation is the other big story: initials, dates and tiny couple motifs hidden inside florals. We're also seeing a revival of the <a href="/mandala-mehndi-design">mandala</a> as a single centred engagement statement, and crossover with <a href="/minimal-mehndi-design">minimal mehndi</a> for brides who want something they can comfortably wear to work the next day.</p>
          <p>Browse the gallery below for ready-to-screenshot engagement designs, then save your favourites to show your artist.</p>`,
      },
    ],
    faqs: [
      { question: "How long before the engagement should I apply mehndi?", answer: "Apply engagement mehndi the night before, ideally 18–24 hours ahead. Natural henna darkens to its richest tone 24–48 hours after application, which lines up perfectly with most ring ceremonies and gives you a deep colour for close-up photos." },
      { question: "Should the ring finger be left bare for engagement mehndi?", answer: "Most brides keep the ring finger either bare or marked with a single fine accent below the knuckle, so the ring sits on clean skin and stays the focal point in photos. Decide this before you start applying — it's the hardest thing to fix afterwards." },
      { question: "Is engagement mehndi lighter than bridal mehndi?", answer: "Yes. Engagement (sagai) mehndi is deliberately lighter and faster than bridal mehndi. It uses more negative space, focuses on the back of the hand and a wrist band, and typically takes 30–60 minutes per hand instead of several hours." },
      { question: "Can I add my partner's initials to engagement mehndi?", answer: "Absolutely — hidden initials and a small couple motif woven into the back-hand design are one of the most popular engagement trends. A skilled artist tucks them into a floral or paisley so they're only visible when you point them out." },
      { question: "What mehndi suits a minimal engagement look?", answer: "For a minimal engagement, choose a single back-hand motif (a small mandala or rose), a thin ring-finger band, and a slim wrist bracelet. This reads as styled and intentional without looking like unfinished bridal mehndi." },
    ],
    contextualLinks: [
      { label: "Dulhan Mehndi", href: "/dulhan-mehndi-design" },
      { label: "Jewellery Mehndi", href: "/jewellery-mehndi-design" },
      { label: "Minimal Mehndi", href: "/minimal-mehndi-design" },
      { label: "How to make mehndi darker", href: "/blog/how-to-make-mehndi-darker" },
    ],
  },

  // ───────────────────────────── PEACOCK ─────────────────────────────
  "peacock-mehndi-design": {
    slug: "peacock-mehndi-design",
    intro:
      `<p class="lead">Few motifs carry as much grace as the peacock. In mehndi, the <em>mor</em> is more than decoration — it is a symbol of beauty, love and the monsoon's promise of renewal, which is why it has anchored South Asian bridal henna for generations. A well-drawn peacock turns an ordinary hand into a centrepiece, its sweeping tail giving the artist a natural way to fill space with movement.</p>
      <p>This guide breaks down how peacock mehndi is built, where to place the bird for maximum impact, how beginners can approach such an ambitious motif, and how to keep the fine feather work crisp and dark.</p>`,
    sections: [
      {
        id: "symbolism-and-appeal",
        heading: "The Symbolism Behind the Peacock Motif",
        motif: "floral",
        html:
          `<p>The peacock is woven deep into South Asian art and mythology. It is associated with grace, romance and good fortune, and its appearance in bridal mehndi is a quiet wish for a beautiful, prosperous married life. That meaning is part of why brides keep choosing it over more abstract patterns — a peacock <em>says</em> something.</p>
          <p>Visually, the motif is a gift to henna artists. The body gives a strong focal point, the curved neck creates elegant lines, and the tail can be stretched, fanned or trailed across the hand to fill almost any amount of space. A single peacock can be a delicate accent on a wrist, or it can dominate an entire back of hand with a tail that flows to the elbow.</p>
          <p>Because it scales so well, peacock mehndi appears across every style — from light <a href="/khafif-mehndi-design">khafif</a> versions to dense bridal compositions.</p>`,
      },
      {
        id: "anatomy-of-the-design",
        heading: "How a Peacock Mehndi Design Is Built",
        motif: "vine",
        html:
          `<p>Understanding the anatomy makes the motif far less intimidating. A peacock design is assembled from a handful of repeatable parts:</p>
          <ul>
            <li><strong>The body and neck:</strong> a teardrop or paisley shape with a graceful S-curve neck. This is the anchor everything else grows from.</li>
            <li><strong>The crown:</strong> three small dotted lines above the head — tiny, but the detail that makes it read as a peacock and not a bird.</li>
            <li><strong>The eye and beak:</strong> a single dot and a short triangle. Keep them small.</li>
            <li><strong>The tail feathers:</strong> the showpiece. Long curved lines ending in the classic "eye" ovals, filled with concentric shading and dots.</li>
            <li><strong>Fillers:</strong> vines, leaves and dots that connect the peacock to the rest of the hand.</li>
          </ul>
          <p>Master the body and one feather, and you can build an entire composition by repeating the feather and varying its length.</p>`,
      },
      {
        id: "placement-ideas",
        heading: "Best Placements for Peacock Mehndi",
        motif: "paisley",
        html:
          `<p>Placement decides whether your peacock looks balanced or crowded:</p>
          <ul>
            <li><strong>Back of hand, single peacock:</strong> body near the wrist, tail fanning toward the fingers — the most popular and most flattering layout.</li>
            <li><strong>Twin facing peacocks:</strong> two birds meeting at the centre, ideal for bridal palms and symmetrical compositions.</li>
            <li><strong>Finger peacock:</strong> a slim vertical peacock running up a single finger for a modern, minimal statement.</li>
            <li><strong>Feet and ankle:</strong> a peacock curving along the top of the foot, tail trailing toward the toes, pairs beautifully with <a href="/feet-mehndi-design">feet mehndi</a>.</li>
          </ul>
          <p>For bridal work, let one large peacock carry the design and keep surrounding fillers subtle so the bird doesn't get lost.</p>`,
      },
      {
        id: "beginner-approach",
        heading: "Peacock Mehndi for Beginners",
        motif: "border",
        html:
          `<p>A full peacock looks advanced, but you can build up to it. Start with a <strong>single small peacock</strong> on the back of the hand: draw the body, add the crown and eye, then attach just three or four tail feathers. That alone is a complete, attractive design.</p>
          <p>Practise the feather "eye" until it's consistent — it's the element that repeats most, so consistency is what makes the tail look professional. Use a fine-nozzle cone for the feather lines and a slightly thicker flow for the body outline to create natural contrast. Keep a reference image beside you and copy the proportions; freehand symmetry comes with practice, not on day one.</p>
          <p>If you want an even gentler entry point, our <a href="/easy-mehndi-design">easy mehndi designs</a> include simplified single-feather motifs that teach the same shapes.</p>`,
      },
      {
        id: "color-and-finishing",
        heading: "Keeping Fine Feather Work Dark and Crisp",
        html:
          `<p>Peacock designs live or die by their detail, so colour and crispness matter even more than usual. Fine feather lines can blur if the paste is too runny — make sure your henna is a smooth, toothpaste-like consistency before you start.</p>
          <p>Once applied, treat it like any quality henna: leave it on for 6–8 hours, seal it with lemon-sugar once dry to lock the dye in, scrape (never wash) the paste off, and oil the skin afterward. Because the feather "eyes" hold a lot of paste, give them extra drying time so they don't smudge when you remove the rest.</p>
          <p>Avoid chemical "instant" cones — beyond the safety risk, they bleed and ruin the fine lines that make a peacock special. Patience with natural henna gives you both the deep colour and the crisp edges this motif needs.</p>`,
      },
      {
        id: "occasions",
        heading: "When to Wear Peacock Mehndi",
        motif: "lotus",
        html:
          `<p>The peacock is versatile enough for almost any celebration. It's a bridal staple for the main hands, but a single peacock also suits engagements, Karwa Chauth, Teej and festival wear. Because the motif reads as "special", it's less common for casual everyday henna — though a slim finger peacock can absolutely work as an everyday statement.</p>
          <p>For weddings, brides often pair a large peacock on one hand with a complementary <a href="/mandala-mehndi-design">mandala</a> or <a href="/jaal-mehndi-design">jaal</a> on the other, balancing a figurative motif with a geometric one. For festivals, a quick single peacock with a short tail gives maximum impact for minimal time.</p>`,
      },
      {
        id: "trends-2026",
        heading: "Peacock Mehndi Trends for 2026",
        motif: "mandala",
        html:
          `<p>Modern peacock mehndi is getting bolder and cleaner at the same time. The trend is toward <strong>oversized single peacocks</strong> with dramatic, sparse tails — lots of negative space between feathers rather than dense filler. Shaded feather "eyes", borrowed from <a href="/shaded-mehndi-design">shaded mehndi</a>, are increasingly popular for adding depth and a near-3D effect.</p>
          <p>On the traditional side, <a href="/rajasthani-mehndi-design">Rajasthani</a>-style peacocks with intricate fine-line bodies remain a bridal favourite. Fusion designs — a peacock body with a geometric Moroccan tail, for instance — are showing up among younger brides who want something recognisably theirs.</p>
          <p>Scroll down to browse peacock designs across all of these styles and save the ones that fit your occasion.</p>`,
      },
    ],
    faqs: [
      { question: "What does a peacock symbolise in mehndi?", answer: "In mehndi the peacock (mor) symbolises grace, beauty, love and good fortune. It's a traditional bridal motif representing a wish for a beautiful, prosperous married life, which is why it has remained popular in South Asian henna for generations." },
      { question: "Is peacock mehndi good for beginners?", answer: "A simplified peacock is beginner-friendly. Start with a single small body, crown and three or four tail feathers on the back of the hand. The key skill is drawing a consistent feather 'eye', since that shape repeats — practise it on paper first." },
      { question: "Where should a peacock be placed on the hand?", answer: "The most flattering layout places the peacock's body near the wrist with the tail fanning toward the fingers on the back of the hand. Twin facing peacocks suit bridal palms, while a slim vertical peacock works well running up a single finger." },
      { question: "How do I keep peacock feather lines from smudging?", answer: "Use a fine-nozzle cone and a smooth, toothpaste-thick paste so lines stay crisp. The feather 'eyes' hold extra paste, so give them more drying time before removing the rest, and seal with lemon-sugar once dry to lock in colour without smudging." },
      { question: "Is peacock mehndi only for weddings?", answer: "No. While it's a bridal favourite, peacock mehndi also suits engagements, Karwa Chauth, Teej and festivals. A small single peacock with a short tail even works as an everyday statement design when you want something quick but eye-catching." },
    ],
    contextualLinks: [
      { label: "Bridal Mehndi", href: "/bridal-mehndi-design" },
      { label: "Rajasthani Mehndi", href: "/rajasthani-mehndi-design" },
      { label: "Mandala Mehndi", href: "/mandala-mehndi-design" },
      { label: "Shaded Mehndi", href: "/shaded-mehndi-design" },
    ],
  },

  // ───────────────────────────── MANDALA ─────────────────────────────
  "mandala-mehndi-design": {
    slug: "mandala-mehndi-design",
    intro:
      `<p class="lead">A mandala is a meditation in a circle. In mehndi, it gives you one of the most satisfying designs to wear and to draw: a central point that blooms outward in perfectly balanced rings of petals, dots and lines. Mandala mehndi suits almost everyone because it can be a tiny palm accent or a sweeping back-of-hand statement, and its symmetry makes even a simple version look deliberate and refined.</p>
      <p>This guide explains how a mandala is constructed ring by ring, how to keep it symmetrical, where it looks best, and how beginners can use it as the fastest route to professional-looking henna.</p>`,
    sections: [
      {
        id: "what-is-a-mandala",
        heading: "What a Mandala Means and Why It Works",
        motif: "mandala",
        html:
          `<p>The word <em>mandala</em> means "circle" in Sanskrit, and the form carries centuries of meaning as a symbol of wholeness, balance and the universe radiating from a single centre. You don't need to engage with the philosophy to enjoy it, but that sense of order is exactly why mandala mehndi feels so calming to look at.</p>
          <p>Practically, the circular structure is forgiving. Because everything repeats around a centre, you're really drawing one small unit and copying it around the ring. Get the spacing even and the design looks expert, even if each individual element is simple. That combination — high visual impact, low individual difficulty — is why mandalas have become the go-to for both beginners and busy artists.</p>
          <p>It also overlaps naturally with <a href="/circle-mehndi-design">circle</a> and <a href="/gol-tikki-mehndi-design">gol tikki</a> styles, which share the round, centred logic.</p>`,
      },
      {
        id: "build-ring-by-ring",
        heading: "Building a Mandala Ring by Ring",
        motif: "vine",
        html:
          `<p>The trick to a clean mandala is to think in concentric layers and build outward, never inward:</p>
          <ol>
            <li><strong>Centre dot:</strong> place a single dot exactly where you want the heart of the design.</li>
            <li><strong>First ring:</strong> a small circle of dots or tiny petals around the centre. Keep them evenly spaced — this ring sets the rhythm for everything after.</li>
            <li><strong>Petal ring:</strong> larger teardrop petals, one between or around each element of the first ring.</li>
            <li><strong>Detail ring:</strong> add dots, fine lines or shading inside the petals for depth.</li>
            <li><strong>Outer ring:</strong> a band of repeated motifs or a scalloped border to finish the edge cleanly.</li>
          </ol>
          <p>Add as many rings as the space allows. Stop when the design feels full but still has a little breathing room at the outer edge.</p>`,
      },
      {
        id: "symmetry-secrets",
        heading: "The Secret to Perfect Symmetry",
        motif: "border",
        html:
          `<p>Symmetry is what separates a beautiful mandala from a lopsided one, and it comes down to spacing rather than artistic talent. A few reliable tricks:</p>
          <ul>
            <li><strong>Work in halves, then quarters.</strong> Mark four "anchor" points (top, bottom, left, right) before filling in between them, so the ring stays balanced.</li>
            <li><strong>Count your elements.</strong> Decide on a number — say eight petals — and stick to it for every ring so they align.</li>
            <li><strong>Rotate the hand, not the cone.</strong> Turn your wrist so you're always drawing each petal from the same comfortable angle.</li>
            <li><strong>Build outward.</strong> Each ring uses the one beneath it as a guide, so errors don't compound.</li>
          </ul>
          <p>Practise the centre and first two rings repeatedly — once those are even, the rest of the mandala almost draws itself.</p>`,
      },
      {
        id: "placement",
        heading: "Where Mandala Mehndi Looks Best",
        motif: "floral",
        html:
          `<p>The mandala's flexibility is its superpower. Popular placements include:</p>
          <ul>
            <li><strong>Centre of the palm:</strong> the classic spot, where the mandala opens like a flower when you cup your hand.</li>
            <li><strong>Back of the hand:</strong> a large mandala with vine extensions reaching toward the fingers — a stunning bridal-adjacent statement.</li>
            <li><strong>Wrist:</strong> a half-mandala rising from a <a href="/wrist-mehndi-design">wrist band</a> for an elegant, contained look.</li>
            <li><strong>Feet:</strong> a centred mandala on the top of the foot, mirrored on both sides.</li>
          </ul>
          <p>Half-mandalas — where the circle is cut and anchored to a straight edge like the wrist or finger base — are especially popular because they feel modern and take less time.</p>`,
      },
      {
        id: "beginner-fast-track",
        heading: "Mandala Mehndi: The Beginner's Fast Track",
        html:
          `<p>If you're new to henna and want to look skilled quickly, the mandala is your best friend. Its repetition means you only have to learn a handful of small elements — dots, petals, lines — and then copy them in a circle. There's no complex figurative drawing as there is with a <a href="/peacock-mehndi-design">peacock</a>, and no sprawling layout to plan as with full bridal work.</p>
          <p>Start small with a three-ring mandala the size of a coin. Once your spacing is even at that size, scale up. Within a few attempts most beginners can produce a mandala that genuinely looks professional, which makes it a huge confidence booster and the perfect gateway into more ambitious styles.</p>`,
      },
      {
        id: "color-tips",
        heading: "Keeping Dense Mandala Work Dark",
        motif: "paisley",
        html:
          `<p>Mandalas can pack a lot of paste into a small area, so colour development is usually excellent — the dye has plenty of contact with the skin. To make the most of it, apply on clean, oil-prepped skin and resist the urge to wash the design; let the paste dry fully (the dense rings may need a little longer than open designs), then scrape it off.</p>
          <p>Seal with a lemon-sugar dab once dry, and oil the hands after removal. Because the rings sit close together, a deep, even stain makes the symmetry pop dramatically the next day. If your centre comes out paler than the edges, it's usually because the cupped palm trapped less air — nothing to worry about, it evens out as it oxidises.</p>`,
      },
      {
        id: "trends-2026",
        heading: "Mandala Mehndi Trends for 2026",
        motif: "lotus",
        html:
          `<p>Mandala mehndi is trending toward bold minimalism. Single large mandalas with generous negative space around them are replacing busy all-over patterns — one strong circle says more than a crowded hand. <a href="/shaded-mehndi-design">Shaded</a> mandalas, where petals fade from dark to light, are a major 2026 look that adds dimension without extra elements.</p>
          <p>Lotus-centred mandalas remain a serene favourite, and "half-mandala" layouts anchored to the wrist or finger base are everywhere for their modern, intentional feel. Fusion mandalas that blend geometric <a href="/moroccan-mehndi-design">Moroccan</a> lines into the rings are popular with brides wanting something distinctive.</p>
          <p>Explore the gallery below for mandala designs from delicate palm accents to full bridal statements.</p>`,
      },
    ],
    faqs: [
      { question: "How do you keep a mehndi mandala symmetrical?", answer: "Work in halves then quarters: mark four anchor points (top, bottom, left, right) before filling between them, decide on a fixed number of petals per ring, and rotate your hand rather than your cone so every petal is drawn from the same angle. Build outward so errors don't compound." },
      { question: "Is mandala mehndi easy for beginners?", answer: "Mandala mehndi is one of the easiest styles to look skilled at quickly because it relies on repeating a few simple elements around a centre. Start with a coin-sized three-ring mandala, get the spacing even, then scale up — most beginners produce a professional-looking result within a few tries." },
      { question: "What is the difference between a mandala and a gol tikki?", answer: "A gol tikki is typically a bold, solid round medallion, while a mandala is an elaborate circular pattern built from many concentric rings of petals, dots and lines. Mandalas are more intricate and symmetrical; tikkis are simpler and heavier." },
      { question: "Where does a mandala look best on the hand?", answer: "The centre of the palm is the classic placement, where the mandala opens like a flower. A large mandala on the back of the hand with vine extensions toward the fingers makes a striking statement, and half-mandalas anchored to the wrist are a popular modern option." },
      { question: "How many rings should a mandala have?", answer: "Add as many rings as the space allows, stopping when the design feels full but still has a little breathing room at the outer edge. A small palm accent might have three rings; a back-of-hand statement can have six or more." },
    ],
    contextualLinks: [
      { label: "Circle Mehndi", href: "/circle-mehndi-design" },
      { label: "Gol Tikki Mehndi", href: "/gol-tikki-mehndi-design" },
      { label: "Shaded Mehndi", href: "/shaded-mehndi-design" },
      { label: "Back Hand Mehndi", href: "/back-hand-mehndi-design" },
    ],
  },

  // ───────────────────────────── DULHAN ─────────────────────────────
  "dulhan-mehndi-design": {
    slug: "dulhan-mehndi-design",
    intro:
      `<p class="lead">Dulhan mehndi is the grandest expression of henna there is — the full, dense, hours-long artwork that covers a bride's hands and feet from fingertips to forearms. The word <em>dulhan</em> simply means "bride", and this style exists to mark the most important day of her life with a design she will remember every time she sees her wedding photographs. It is heavy, intricate, deeply traditional, and unapologetically maximal.</p>
      <p>This guide covers what defines true dulhan mehndi, the elements that fill those large canvases, the realistic timeline and stamina it requires, and how to protect a colour that has to look perfect across days of celebration.</p>`,
    sections: [
      {
        id: "what-defines-dulhan",
        heading: "What Defines Dulhan (Bridal) Mehndi",
        motif: "vine",
        html:
          `<p>Dulhan mehndi is defined by <strong>density and storytelling</strong>. Where everyday henna leaves skin open, bridal mehndi fills it: intricate jaal nets, rows of motifs, fine shading and figurative scenes can cover the entire hand, often climbing past the wrist toward the elbow and mirroring on the feet.</p>
          <p>It's also the most personal style. Traditional dulhan hands frequently hide the groom's name or initials within the pattern — a playful first-night ritual where he must find it. Many designs depict the <em>dulha-dulhan</em> (bride and groom), a doli, a baraat procession or wedding instruments, turning the hands into a narrative of the wedding itself.</p>
          <p>It overlaps heavily with <a href="/pakistani-mehndi-design">Pakistani</a>, <a href="/rajasthani-mehndi-design">Rajasthani</a> and <a href="/bridal-mehndi-design">bridal</a> traditions, each contributing its own motifs to the dulhan vocabulary.</p>`,
      },
      {
        id: "key-elements",
        heading: "The Building Blocks of a Dulhan Design",
        motif: "paisley",
        html:
          `<p>A full bridal hand is assembled from recurring elements that artists combine and scale:</p>
          <ul>
            <li><strong>Jaal (net):</strong> mesh patterns that fill large areas with rhythm — see <a href="/jaal-mehndi-design">jaal mehndi</a>.</li>
            <li><strong>Tikki / mandala centres:</strong> bold round focal points on the palm or back of hand.</li>
            <li><strong>Bel (vines):</strong> trailing floral vines that run up fingers and connect zones.</li>
            <li><strong>Figures:</strong> bride-and-groom portraits, dolis, peacocks and processions.</li>
            <li><strong>Fingertip work:</strong> filled or shaded tips that frame the whole composition.</li>
            <li><strong>Borders:</strong> defined edges at the wrist that separate the dense work from bare skin.</li>
          </ul>
          <p>The art of dulhan mehndi is balance: combining these so the hand reads as rich but not chaotic, with the eye guided from a strong centre outward.</p>`,
      },
      {
        id: "timeline-and-stamina",
        heading: "The Realistic Timeline: Time, Stamina and Planning",
        motif: "border",
        html:
          `<p>Brides routinely underestimate what full dulhan mehndi demands. A complete set of hands (front and back) plus feet can take <strong>4 to 8 hours</strong> of continuous application, sometimes split across two artists. Plan for it:</p>
          <ul>
            <li><strong>Book the slot a day before the wedding</strong> so the colour peaks for the main events and you have drying time.</li>
            <li><strong>Eat and use the bathroom first</strong> — you'll be immobile for hours with wet paste.</li>
            <li><strong>Arrange entertainment and a straw for drinks.</strong> Comfort matters across a long sitting.</li>
            <li><strong>Wear sleeveless or loose clothing</strong> you can remove without smudging.</li>
            <li><strong>Keep the room warm.</strong> Warmth helps the dye release and deepens the final colour.</li>
          </ul>
          <p>This is not a DIY style for most brides — its scale and the importance of the day usually justify a professional artist.</p>`,
      },
      {
        id: "color-protection",
        heading: "Protecting a Bridal Colour That Has to Last",
        html:
          `<p>For a bride, colour is everything — and dulhan mehndi has to look deep across the mehndi night, the wedding and often a reception too. The fundamentals are the same as any henna but the stakes are higher.</p>
          <p>Use only <strong>natural henna</strong>, never PPD "black henna", which is dangerous on skin that's covered for hours. Leave the paste on as long as you can bear — ideally overnight, which is why pre-wedding application is standard. Seal the dried design with lemon-sugar, scrape (don't wash) it off, and warm the hands over clove smoke or a heater to intensify the stain. Afterward, oil the hands and avoid water and soap for as long as possible. Our full <a href="/blog/how-to-make-mehndi-darker">darkening guide</a> goes deeper into the chemistry.</p>`,
      },
      {
        id: "regional-styles",
        heading: "Regional Flavours of Dulhan Mehndi",
        motif: "floral",
        html:
          `<p>"Dulhan" isn't a single look — it carries regional accents:</p>
          <ul>
            <li><strong>Pakistani dulhan:</strong> heavy, symmetrical, with fine detailing and prominent jaal and tikki work.</li>
            <li><strong>Rajasthani / Marwari:</strong> intensely figurative, packed with fine-line scenes, processions and faces.</li>
            <li><strong>Indian classic:</strong> a blend of paisleys, peacocks, mandalas and vines with balanced density.</li>
            <li><strong>Modern fusion:</strong> deliberate negative space, shaded motifs and minimal fingertip work for brides who want lighter coverage with bridal impact.</li>
          </ul>
          <p>Many brides now mix these — a Rajasthani-style story on one hand, a cleaner mandala-led composition on the other — to get both tradition and contemporary balance.</p>`,
      },
      {
        id: "choosing-your-design",
        heading: "How to Choose Your Dulhan Design",
        motif: "lotus",
        html:
          `<p>Choosing bridal mehndi is a styling decision as much as an artistic one. Start by deciding how far up the arm you want coverage — wrist, mid-forearm or elbow — because that sets the scale of everything else. Match the density to your outfit: a heavily worked lehenga pairs beautifully with elaborate hands, while a lighter outfit can be balanced by slightly more open mehndi.</p>
          <p>Decide early whether you want hidden names or figures, since those need to be planned into the layout from the start. And give your artist clear reference images — save designs you love from the gallery below and discuss them in a trial if possible. The more aligned you and your artist are before the day, the more relaxed the long sitting will be.</p>`,
      },
      {
        id: "trends-2026",
        heading: "Dulhan Mehndi Trends for 2026",
        motif: "mandala",
        html:
          `<p>The 2026 dulhan bride is leaning two ways at once. On one side, ultra-detailed <a href="/rajasthani-mehndi-design">Rajasthani</a> storytelling hands are back in a big way, with fine-line portraits and full wedding scenes. On the other, "modern bridal" is rising fast: deliberate negative space, <a href="/shaded-mehndi-design">shaded</a> motifs for depth, and clean borders that let the skin breathe between dense zones.</p>
          <p>Personalisation continues to dominate — hidden initials, wedding dates and couple motifs are near-universal. And many brides are extending the design with delicate forearm "sleeves" rather than stopping at the wrist. Browse the gallery for the full range, from classic heavy hands to contemporary statement pieces.</p>`,
      },
    ],
    faqs: [
      { question: "How long does dulhan (bridal) mehndi take to apply?", answer: "A full set of dulhan mehndi — front and back of both hands plus feet — typically takes 4 to 8 hours of continuous application, sometimes split between two artists. Book it the day before the wedding so the colour peaks for the main events and you have time to let it set." },
      { question: "Can I apply dulhan mehndi myself at home?", answer: "Because of its scale, density and the importance of the day, dulhan mehndi is usually best left to a professional artist. The hours-long application and intricate figurative work are difficult to do on your own dominant hand. DIY is realistic only for lighter, modern bridal styles." },
      { question: "Where is the groom's name hidden in dulhan mehndi?", answer: "The groom's name or initials is traditionally woven into the dense pattern of the bride's palm or back of hand, disguised within florals or jaal so it's hard to spot. Finding it is a playful first-night ritual for the couple." },
      { question: "How do I make my bridal mehndi colour as dark as possible?", answer: "Use only natural henna, leave the paste on overnight, seal it with lemon-sugar, scrape rather than wash it off, and warm your hands with clove smoke afterward. Oil the hands and avoid water and soap for several hours. Pre-wedding application gives the dye 24–48 hours to reach its darkest tone." },
      { question: "What is the difference between bridal and dulhan mehndi?", answer: "The terms overlap — dulhan simply means bride. In practice 'dulhan mehndi' emphasises the heaviest, most traditional and most figurative full-coverage bridal designs, often including hidden names and wedding scenes, while 'bridal mehndi' is used more broadly for any wedding henna." },
    ],
    contextualLinks: [
      { label: "Bridal Mehndi", href: "/bridal-mehndi-design" },
      { label: "Pakistani Mehndi", href: "/pakistani-mehndi-design" },
      { label: "Jaal Mehndi", href: "/jaal-mehndi-design" },
      { label: "Rajasthani Mehndi", href: "/rajasthani-mehndi-design" },
    ],
  },

  // ───────────────────────────── JEWELLERY ─────────────────────────────
  "jewellery-mehndi-design": {
    slug: "jewellery-mehndi-design",
    intro:
      `<p class="lead">Jewellery mehndi is henna pretending to be ornaments — and doing it beautifully. Instead of traditional motifs, the design mimics rings, bracelets, chains, <em>hathphool</em> and cuffs drawn directly onto the skin, so the hand looks adorned even when it's bare. It's one of the most photogenic and modern mehndi styles, perfect for brides who love the look of layered jewellery and want their henna to read as elegant accessorising rather than dense pattern.</p>
      <p>This guide explains the vocabulary of jewellery mehndi, how to lay it out so it sits like real ornaments, how to pair it with actual jewellery, and how to keep its fine chains crisp.</p>`,
    sections: [
      {
        id: "what-is-jewellery-mehndi",
        heading: "What Jewellery Mehndi Is",
        motif: "vine",
        html:
          `<p>Jewellery mehndi — sometimes called <em>hathphool</em> or "ornamental" mehndi — replaces conventional florals and paisleys with the shapes of actual jewellery. A typical hand might feature a ring drawn on each finger, fine chains linking those rings to a central back-of-hand piece, and a bracelet or cuff at the wrist, exactly mirroring how a real hathphool sits.</p>
          <p>The effect is delicate, structured and contemporary. Because it follows the logic of jewellery rather than free pattern, it feels intentional and "designed", which is why it has exploded among modern brides and engagement parties. It naturally overlaps with <a href="/wrist-mehndi-design">wrist</a> and <a href="/finger-mehndi-design">finger</a> mehndi, borrowing their band and ring vocabulary.</p>
          <p>It can be as light as a single ring-and-chain or as elaborate as a full layered set covering the whole hand.</p>`,
      },
      {
        id: "elements",
        heading: "The Elements That Make Up Jewellery Mehndi",
        motif: "paisley",
        html:
          `<p>Think like a jeweller. The recurring components are:</p>
          <ul>
            <li><strong>Rings:</strong> drawn at the base of fingers, often with a small "gem" motif.</li>
            <li><strong>Chains:</strong> fine dotted or looped lines linking rings to the central piece.</li>
            <li><strong>Centrepiece:</strong> a maharani-style ornament on the back of the hand, the anchor of the whole look.</li>
            <li><strong>Bracelet / cuff:</strong> a defined band at the wrist, often layered for a stacked-bangle effect.</li>
            <li><strong>Pendants and droplets:</strong> small hanging motifs that add the sense of dangling jewellery.</li>
          </ul>
          <p>The "gems" are usually suggested with simple shaded ovals or dot clusters. Keep them consistent in size so the piece reads as a matching set rather than mismatched ornaments.</p>`,
      },
      {
        id: "layout",
        heading: "Laying It Out So It Sits Like Real Jewellery",
        motif: "border",
        html:
          `<p>The realism of jewellery mehndi depends entirely on placement. A few rules keep it convincing:</p>
          <ol>
            <li><strong>Start with the centrepiece</strong> on the back of the hand — everything else hangs off it.</li>
            <li><strong>Place the finger rings next</strong>, keeping them at the same height across all fingers for a tidy line.</li>
            <li><strong>Run the chains last</strong>, connecting rings to the centrepiece with gentle, even curves — real chains drape, so avoid straight rigid lines.</li>
            <li><strong>Anchor with the wrist cuff</strong>, leaving a clean gap between it and the centrepiece so the hand doesn't look overcrowded.</li>
          </ol>
          <p>Negative space is essential here. Jewellery sits <em>on</em> skin; if you fill every gap, it stops looking like ornaments and becomes ordinary dense mehndi.</p>`,
      },
      {
        id: "pairing-with-jewellery",
        heading: "Pairing Jewellery Mehndi With Real Ornaments",
        html:
          `<p>The clever part of jewellery mehndi is deciding how it interacts with the jewellery you'll actually wear. Two approaches work:</p>
          <p><strong>Replace:</strong> wear minimal real jewellery and let the henna do the adorning. This is popular for engagements and mehndi nights where a bride wants a lighter, distinctive look. <strong>Echo:</strong> match the henna to the real hathphool or bracelet you'll wear, so drawn and real ornaments blend into one continuous adorned hand — striking in close-up photos.</p>
          <p>Either way, coordinate metals and motifs: a kundan-style outfit pairs with rounded "gem" clusters, while a contemporary look suits cleaner geometric rings. For the engagement specifically, see our dedicated <a href="/engagement-mehndi-design">engagement mehndi guide</a>.</p>`,
      },
      {
        id: "keeping-chains-crisp",
        heading: "Keeping Fine Chains Dark and Crisp",
        motif: "floral",
        html:
          `<p>Jewellery mehndi is mostly thin lines, which means consistency of flow is everything. Use a fine-nozzle cone and a smooth, slightly stiff paste so the chains don't bleed into blobs. Draw chains in one confident motion where possible — hesitant, stop-start lines look broken, like a tangled chain.</p>
          <p>For colour, the usual rules apply but matter more because there's so little paste per line: prep with oil, leave the design on 6–8 hours, seal with lemon-sugar, and scrape rather than wash. Thin lines can stain lighter than dense areas, so give them the full development time. If the "gems" are shaded, apply slightly more paste there so they read as a richer focal accent against the fine chains.</p>`,
      },
      {
        id: "occasions",
        heading: "When to Wear Jewellery Mehndi",
        motif: "lotus",
        html:
          `<p>Jewellery mehndi shines at engagements, mehndi nights, receptions and modern weddings where the bride wants an adorned-but-airy look. It's also a favourite for sisters of the bride and wedding guests who want something special yet lighter than full bridal work.</p>
          <p>Because it photographs so cleanly, it's the style of choice for editorial and social-media-led celebrations. For everyday or office wear, a single ring-and-chain on one finger is a subtle, elegant way to wear the trend. Pair a fuller jewellery hand with <a href="/wrist-mehndi-design">wrist</a> detailing to complete the "fully accessorised" effect.</p>`,
      },
      {
        id: "trends-2026",
        heading: "Jewellery Mehndi Trends for 2026",
        motif: "mandala",
        html:
          `<p>Jewellery mehndi is one of the fastest-growing styles, and 2026 pushes it further toward realism. Layered "stacked" looks — multiple bracelets and rings drawn as a coordinated set — are dominant, as are <a href="/shaded-mehndi-design">shaded</a> gems that look almost three-dimensional. Minimalist single-chain hands remain hugely popular with modern brides.</p>
          <p>We're also seeing crossover with <a href="/mandala-mehndi-design">mandala</a> centrepieces used as the "pendant" of the design, and pearl-and-droplet motifs borrowed from contemporary fine jewellery. Scroll down to browse jewellery mehndi from delicate single rings to full layered sets.</p>`,
      },
    ],
    faqs: [
      { question: "What is jewellery mehndi?", answer: "Jewellery mehndi (also called hathphool or ornamental mehndi) draws the shapes of real jewellery — rings, chains, bracelets and cuffs — directly onto the skin, so the hand looks adorned even when bare. It's a modern, photogenic style that reads as elegant accessorising rather than dense pattern." },
      { question: "How do I make jewellery mehndi look realistic?", answer: "Start with the back-of-hand centrepiece, place finger rings at the same height across all fingers, then drape connecting chains in gentle curves rather than rigid straight lines. Leave plenty of negative space — jewellery sits on skin, so filling every gap makes it look like ordinary dense mehndi instead of ornaments." },
      { question: "Should I wear real jewellery with jewellery mehndi?", answer: "Both approaches work. You can let the henna replace most real jewellery for a lighter distinctive look, or echo your actual hathphool and bracelet with the design so drawn and real ornaments blend into one adorned hand. Coordinate metals and motif style with your outfit either way." },
      { question: "How do I keep the fine chains in jewellery mehndi from smudging?", answer: "Use a fine-nozzle cone with a smooth, slightly stiff paste and draw each chain in one confident motion so lines don't bleed or look broken. Give the thin lines the full 6–8 hours to develop, since they can stain lighter than dense areas." },
      { question: "Is jewellery mehndi suitable for everyday wear?", answer: "A full jewellery set suits engagements, mehndi nights and modern weddings, but a single ring-and-chain on one finger is a subtle, elegant way to wear the style every day or to the office. Scale the amount of 'jewellery' to the occasion." },
    ],
    contextualLinks: [
      { label: "Wrist Mehndi", href: "/wrist-mehndi-design" },
      { label: "Engagement Mehndi", href: "/engagement-mehndi-design" },
      { label: "Finger Mehndi", href: "/finger-mehndi-design" },
      { label: "Bridal Mehndi", href: "/bridal-mehndi-design" },
    ],
  },

  // ───────────────────────────── HALF HAND ─────────────────────────────
  "half-hand-mehndi-design": {
    slug: "half-hand-mehndi-design",
    intro:
      `<p class="lead">Half hand mehndi is the sweet spot between a bare hand and full coverage — detailing that runs from the fingertips down to roughly the middle of the palm or back of hand, then stops with a clean edge. It gives you the elegance and impact of a worked hand without the time, cost or commitment of full bridal mehndi, which is exactly why it's the most-requested everyday-celebration style.</p>
      <p>This guide explains how half hand designs are structured, how to finish that all-important edge, which motifs suit the format, and how to wear it for everything from Eid to a wedding guest appearance.</p>`,
    sections: [
      {
        id: "what-is-half-hand",
        heading: "What Half Hand Mehndi Is",
        motif: "vine",
        html:
          `<p>Half hand mehndi covers, as the name says, roughly half the hand — typically the fingers and the upper portion of the palm or back, fading or stopping cleanly before the wrist. It's the format most people picture when they think "nice mehndi for an occasion": more than a casual finger design, less than a bride's full canvas.</p>
          <p>The style is prized for its <strong>versatility and speed</strong>. It takes a fraction of the time of full coverage, suits every skill level, and works on both the palm and back of the hand. It's also the natural home of <a href="/arabic-mehndi-design">Arabic</a> mehndi, whose bold, flowing, negative-space designs were practically made for the half-hand format.</p>`,
      },
      {
        id: "structure",
        heading: "How a Half Hand Design Is Structured",
        motif: "paisley",
        html:
          `<p>A strong half hand design has a clear flow from fingers to the stopping edge:</p>
          <ul>
            <li><strong>Finger work:</strong> each finger carries detailing — full, half or just tips — setting the tone for the whole design.</li>
            <li><strong>Connecting flow:</strong> a diagonal or curved line of motifs leads from the fingers down across the hand.</li>
            <li><strong>Focal motif:</strong> a flower, paisley or small mandala sits at the centre of the worked area.</li>
            <li><strong>The edge:</strong> where the design ends — the single most important design decision in half hand mehndi.</li>
          </ul>
          <p>The most flattering half hand designs run on a <strong>diagonal</strong>, heavier on one side and tapering to the other, which feels dynamic and modern compared to a flat horizontal cut-off.</p>`,
      },
      {
        id: "finishing-the-edge",
        heading: "The Secret Is in the Edge",
        motif: "border",
        html:
          `<p>What separates a polished half hand design from one that looks unfinished is how it ends. A hard, straight line across the hand looks like the artist simply stopped. Instead, use one of these:</p>
          <ol>
            <li><strong>Diagonal fade:</strong> let the design taper across the hand so it ends naturally on one side.</li>
            <li><strong>Scalloped border:</strong> finish with a decorative wavy or dotted edge that frames the work.</li>
            <li><strong>Trailing motifs:</strong> let a few small leaves or dots scatter beyond the main edge so it dissolves rather than stops.</li>
            <li><strong>Vine boundary:</strong> run a thin curved vine as the deliberate "end line" of the design.</li>
          </ol>
          <p>Plan the edge before you start, because it defines the shape of the whole piece. A confident, decorative ending makes even a simple half hand design look intentional and complete.</p>`,
      },
      {
        id: "motifs",
        heading: "Best Motifs for Half Hand Mehndi",
        html:
          `<p>The half-hand format suits motifs that flow rather than fill. Bold Arabic florals are the classic choice — a single large flower at the centre with leaves and a trailing vine reads beautifully in this space. <a href="/floral-mehndi-design">Floral</a> roses and lotus motifs work for a romantic look, while fine <a href="/jaal-mehndi-design">jaal</a> can fill the back of the hand for a richer half-hand statement.</p>
          <p>For a modern feel, try a half <a href="/mandala-mehndi-design">mandala</a> anchored at the centre of the palm with the rest of the hand kept light. Whatever you choose, let the fingers and the focal motif share a consistent style so the design feels unified rather than like two separate ideas stuck together.</p>`,
      },
      {
        id: "application-tips",
        heading: "Applying Half Hand Mehndi at Home",
        motif: "floral",
        html:
          `<p>Half hand designs are very achievable at home, which is part of their appeal. Work from the fingertips downward so your hand never drags across wet paste. Decide your edge first, sketch the rough flow in your mind, then anchor the focal motif before filling around it.</p>
          <p>Because Arabic-style half hand work uses contrast between thick outlines and fine detail, vary your cone pressure deliberately — bold for the main flower, light for the trailing vines. Keep the design on for 6–8 hours, seal with lemon-sugar, and scrape rather than wash for the deepest colour. Since the design is open, it dries faster than dense work, so you won't be immobilised for long.</p>`,
      },
      {
        id: "occasions",
        heading: "When to Wear Half Hand Mehndi",
        motif: "lotus",
        html:
          `<p>Half hand mehndi is the all-rounder of henna. It's the go-to for <a href="/eid-mehndi-design">Eid</a>, parties, family functions and as a wedding guest, where you want to look festive without committing to full bridal coverage. It's also popular for the bride's mehndi night warm-up and for sisters and friends in the wedding party.</p>
          <p>Because it's quick and adaptable, it suits last-minute plans — a confident artist can complete an elegant half hand in 20–30 minutes. For a coordinated look, pair it with light <a href="/wrist-mehndi-design">wrist</a> detailing or matching <a href="/feet-mehndi-design">feet</a> mehndi.</p>`,
      },
      {
        id: "trends-2026",
        heading: "Half Hand Mehndi Trends for 2026",
        motif: "mandala",
        html:
          `<p>The 2026 half hand look is all about <strong>flow and negative space</strong>. Diagonal, asymmetric designs that sweep across the hand are replacing symmetrical fills, and bold single-flower Arabic motifs with lots of bare skin around them are everywhere. <a href="/shaded-mehndi-design">Shaded</a> florals add depth to the focal motif without extra clutter.</p>
          <p>Decorative edges — scalloped, trailing or vine-bounded — are getting more attention as the detail that "finishes" the look. And crossover with <a href="/khafif-mehndi-design">khafif</a> styling gives a lighter, airier half hand for those who want elegance with minimal coverage. Browse the gallery for half hand designs across all of these directions.</p>`,
      },
    ],
    faqs: [
      { question: "What is half hand mehndi?", answer: "Half hand mehndi covers roughly half the hand — the fingers and the upper portion of the palm or back — then stops with a clean decorative edge before the wrist. It offers the elegance of a worked hand without the time and commitment of full bridal coverage, making it the most popular everyday-celebration style." },
      { question: "How should half hand mehndi end so it doesn't look unfinished?", answer: "Avoid a hard straight cut-off. Instead end with a diagonal fade, a scalloped or dotted border, trailing leaves and dots that dissolve the edge, or a thin curved vine as a deliberate boundary. Plan the edge before you start — it defines the shape of the whole design." },
      { question: "Is half hand mehndi good for Eid and parties?", answer: "Yes, half hand mehndi is the go-to for Eid, parties, family functions and wedding-guest looks. It's festive without being as heavy as bridal mehndi, suits all skill levels, and a confident artist can complete an elegant half hand in just 20–30 minutes." },
      { question: "Which motifs work best for half hand mehndi?", answer: "Bold Arabic florals are the classic choice — a large central flower with leaves and a trailing vine. Floral roses and lotus motifs suit a romantic look, fine jaal fills the back of the hand richly, and a half mandala anchored on the palm gives a modern feel." },
      { question: "Can I do half hand mehndi myself at home?", answer: "Half hand mehndi is very achievable at home. Work from the fingertips downward so you don't smudge wet paste, decide your edge first, anchor the focal motif, then fill around it. Vary cone pressure — bold outlines, fine detail — for that signature Arabic contrast." },
    ],
    contextualLinks: [
      { label: "Arabic Mehndi", href: "/arabic-mehndi-design" },
      { label: "Khafif Mehndi", href: "/khafif-mehndi-design" },
      { label: "Floral Mehndi", href: "/floral-mehndi-design" },
      { label: "Eid Mehndi", href: "/eid-mehndi-design" },
    ],
  },

  // ───────────────────────────── WRIST ─────────────────────────────
  "wrist-mehndi-design": {
    slug: "wrist-mehndi-design",
    intro:
      `<p class="lead">Wrist mehndi proves that you don't need a whole hand to make a statement. A band of henna around the wrist works like a permanent bracelet — delicate, flattering and surprisingly versatile. It's perfect for minimalists, for the office, as a finishing touch to a larger design, or as a standalone look that pairs effortlessly with watches and bangles.</p>
      <p>This guide covers the main wrist mehndi formats, how to get the band to sit evenly around a curved surface, the motifs that suit this narrow canvas, and how to wear wrist henna on its own or as part of a bigger design.</p>`,
    sections: [
      {
        id: "why-wrist-mehndi",
        heading: "Why Wrist Mehndi Works So Well",
        motif: "vine",
        html:
          `<p>The wrist is one of the most flattering places to wear henna. It frames the hand, draws attention to slim wrists, and — because it mimics a bracelet — feels naturally ornamental. Wrist mehndi is also wonderfully <strong>low-commitment</strong>: it's quick to apply, easy to hide under a sleeve if needed, and subtle enough for everyday and professional settings.</p>
          <p>It doubles as a building block for bigger designs. Almost every <a href="/bridal-mehndi-design">bridal</a> and <a href="/half-hand-mehndi-design">half hand</a> composition uses a wrist band as its boundary or anchor, so mastering wrist mehndi improves your larger work too. It overlaps closely with <a href="/jewellery-mehndi-design">jewellery</a> and <a href="/minimal-mehndi-design">minimal</a> styles.</p>`,
      },
      {
        id: "formats",
        heading: "The Main Wrist Mehndi Formats",
        motif: "paisley",
        html:
          `<p>Wrist designs fall into a few reliable formats you can mix and match:</p>
          <ul>
            <li><strong>Single band:</strong> one clean strip of pattern around the wrist — the simplest and most elegant.</li>
            <li><strong>Double or triple band:</strong> stacked bands for a layered-bangle effect.</li>
            <li><strong>Bracelet with drop:</strong> a band with a small pendant motif hanging toward the back of the hand.</li>
            <li><strong>Cuff:</strong> a wider, denser band that covers more of the lower forearm for a bolder look.</li>
            <li><strong>Half-mandala rise:</strong> a band that blossoms into a half-mandala on the back of the hand.</li>
          </ul>
          <p>For everyday wear, a single fine band is unbeatable; for occasions, layer bands or add a drop to create more presence.</p>`,
      },
      {
        id: "even-band",
        heading: "Getting the Band Even Around a Curve",
        motif: "border",
        html:
          `<p>The challenge with wrist mehndi is that the wrist is round, so a band that looks even on top can go crooked underneath. Keep it clean with these steps:</p>
          <ol>
            <li><strong>Mark guide points.</strong> Place a light dot on top, bottom and both sides of the wrist before you start, so the band stays level all the way around.</li>
            <li><strong>Draw the two boundary lines first</strong> — the top and bottom edges of the band — then fill the pattern between them.</li>
            <li><strong>Rotate your arm, not your cone</strong>, so each section is drawn from the same comfortable angle.</li>
            <li><strong>Keep the repeat consistent.</strong> Choose one motif and repeat it evenly; uneven spacing is far more visible on a band than in an open design.</li>
          </ol>
          <p>Drawing the boundaries first is the single biggest trick — it turns a freehand band into a tidy, contained strip.</p>`,
      },
      {
        id: "motifs",
        heading: "Best Motifs for the Wrist",
        html:
          `<p>Because the wrist is narrow, motifs that repeat in a line work best: small flowers, leaves, dots, chevrons, paisleys and fine net patterns all tile beautifully into a band. Geometric repeats give a modern bracelet feel, while floral and vine repeats feel softer and more traditional.</p>
          <p>For a jewellery-inspired look, draw a chain or pearl-string band — see our <a href="/jewellery-mehndi-design">jewellery mehndi guide</a> for that approach. For something contemporary, a <a href="/moroccan-mehndi-design">Moroccan</a>-style geometric band in bold lines makes a striking cuff. Keep the motif scale small; oversized elements crowd the narrow space.</p>`,
      },
      {
        id: "application",
        heading: "Applying Wrist Mehndi at Home",
        motif: "floral",
        html:
          `<p>Wrist mehndi is one of the easiest designs to do yourself — even on your dominant hand, since the area is small and the motion is simple. Prep the skin with a little oil, mark your guide points, draw the boundary lines, and fill with a repeating motif. The whole thing takes only a few minutes.</p>
          <p>Let it dry for at least a few hours for good colour, seal with lemon-sugar, and scrape rather than wash. Because the band sits where sleeves and watch straps rub, give it a little extra protection — avoid tight cuffs over fresh henna and keep it dry for a few hours after removal so the stain can mature. A wrist band is also a great low-stakes place to practise new repeating motifs before using them in larger designs.</p>`,
      },
      {
        id: "wearing",
        heading: "Wearing Wrist Mehndi On Its Own or With Bangles",
        motif: "lotus",
        html:
          `<p>Wrist mehndi looks intentional both alone and layered with real accessories. Worn on its own, a fine band is office-appropriate and minimalist — a quiet way to enjoy henna day to day. Stacked with bangles or a watch, it blends drawn and real ornaments into one adorned wrist, which looks especially good in photos.</p>
          <p>For occasions, coordinate the henna band with your bangles' style — delicate band with thin bangles, bold cuff with statement kadas. As a finishing touch to a <a href="/half-hand-mehndi-design">half hand</a> or full design, the wrist band acts as the frame that makes everything above it look complete.</p>`,
      },
      {
        id: "trends-2026",
        heading: "Wrist Mehndi Trends for 2026",
        motif: "mandala",
        html:
          `<p>Wrist mehndi is riding the minimalism wave. Single ultra-fine bands and delicate bracelet-with-drop designs are the defining 2026 look, favoured by those who want henna that suits everyday life. Layered "stacked band" wrists that mimic a stack of bangles are popular for occasions.</p>
          <p>Geometric and <a href="/moroccan-mehndi-design">Moroccan</a> cuff bands are trending for a modern edge, while <a href="/jewellery-mehndi-design">jewellery</a>-style chain wrists continue to grow. Crossover with <a href="/minimal-mehndi-design">minimal mehndi</a> means more negative space and finer lines overall. Browse the gallery below for wrist designs from barely-there bands to bold cuffs.</p>`,
      },
    ],
    faqs: [
      { question: "How do I keep a wrist mehndi band even all the way around?", answer: "Mark light guide dots on the top, bottom and both sides of the wrist first, then draw the two boundary lines (top and bottom edges of the band) before filling the pattern between them. Rotate your arm rather than your cone and keep the repeating motif evenly spaced — uneven spacing shows much more on a band than in an open design." },
      { question: "Is wrist mehndi suitable for the office?", answer: "Yes — a single fine wrist band is one of the most office-appropriate mehndi styles. It's subtle, easy to hide under a sleeve if needed, and reads as a delicate permanent bracelet rather than elaborate henna, making it ideal for everyday and professional settings." },
      { question: "What motifs work best for wrist mehndi?", answer: "Motifs that repeat in a line work best on the narrow wrist: small flowers, leaves, dots, chevrons, paisleys and fine net patterns. Geometric repeats give a modern bracelet feel; floral and vine repeats feel softer and more traditional. Keep the motif scale small so it doesn't crowd the band." },
      { question: "Can I apply wrist mehndi on my own dominant hand?", answer: "Wrist mehndi is one of the easiest designs to do on yourself, even on your dominant hand, because the area is small and the motion is simple and repetitive. Mark guide points, draw the boundary lines, and fill with a repeating motif — it only takes a few minutes." },
      { question: "Can wrist mehndi be worn with bangles?", answer: "Absolutely. Worn alone, a fine band is minimalist and office-friendly; stacked with bangles or a watch, it blends drawn and real ornaments into one adorned wrist that looks great in photos. Coordinate the band's weight with your bangles — delicate band with thin bangles, bold cuff with statement kadas." },
    ],
    contextualLinks: [
      { label: "Minimal Mehndi", href: "/minimal-mehndi-design" },
      { label: "Jewellery Mehndi", href: "/jewellery-mehndi-design" },
      { label: "Finger Mehndi", href: "/finger-mehndi-design" },
      { label: "Half Hand Mehndi", href: "/half-hand-mehndi-design" },
    ],
  },

  // ───────────────────────────── RAJASTHANI ─────────────────────────────
  "rajasthani-mehndi-design": {
    slug: "rajasthani-mehndi-design",
    intro:
      `<p class="lead">Rajasthani mehndi is storytelling in henna. Born in the royal courts and desert villages of Rajasthan, this style fills the hand with extraordinarily fine detail — wedding processions, bride-and-groom figures, palaces, peacocks and dancing women — rendered in lines so thin they look almost printed. Where other styles decorate, Rajasthani mehndi narrates, turning each hand into a miniature painting of the celebration itself.</p>
      <p>This guide explores what makes Rajasthani mehndi unique, the figurative motifs that define it, the fine-line technique it demands, and why it remains the most prestigious bridal style in North India.</p>`,
    sections: [
      {
        id: "heritage",
        heading: "The Heritage of Rajasthani Mehndi",
        motif: "vine",
        html:
          `<p>Rajasthan's mehndi tradition is centuries old, tied to the desert state's love of intricate craft — the same sensibility that produced its miniature paintings, mirror-work and block prints. Mehndi here was never just adornment; it was a record of the wedding, applied densely and read like a story.</p>
          <p>That heritage shows in the defining trait of the style: <strong>extreme fineness and figuration</strong>. Rajasthani artists work in lines far thinner than typical henna, packing scenes and symbols into spaces other styles would leave open. The result is dense, busy and deeply meaningful — every figure represents an aspect of married life, prosperity or the celebration.</p>
          <p>It's closely related to <a href="/indian-mehndi-design">Indian</a> and <a href="/dulhan-mehndi-design">dulhan</a> styles, but pushes detail and narrative further than either.</p>`,
      },
      {
        id: "signature-motifs",
        heading: "Signature Rajasthani Motifs",
        motif: "paisley",
        html:
          `<p>The Rajasthani vocabulary is unusually rich and figurative:</p>
          <ul>
            <li><strong>Dulha-dulhan:</strong> bride and groom figures, often the centrepiece of the palm.</li>
            <li><strong>Doli and baraat:</strong> the bridal palanquin and wedding procession.</li>
            <li><strong>Mor (peacock):</strong> rendered in fine detail — see <a href="/peacock-mehndi-design">peacock mehndi</a>.</li>
            <li><strong>Dancing figures and musicians:</strong> capturing the festivity.</li>
            <li><strong>Bel and chej:</strong> fine trailing vines and dense fill patterns that connect the scenes.</li>
            <li><strong>Jharokhas and domes:</strong> architectural motifs echoing Rajasthani palaces.</li>
          </ul>
          <p>These figures are arranged into a packed, balanced composition where the eye travels from scene to scene — much like reading a painted scroll.</p>`,
      },
      {
        id: "fine-line-technique",
        heading: "Mastering the Fine-Line Technique",
        motif: "border",
        html:
          `<p>Rajasthani mehndi is the most technically demanding style, and it comes down to line control. To work this fine:</p>
          <ol>
            <li><strong>Use an extra-fine cone tip.</strong> Snip the smallest possible opening so the paste flows in a hair-thin line.</li>
            <li><strong>Keep the paste smooth and lump-free.</strong> Strain it if needed — a single lump ruins a fine line.</li>
            <li><strong>Work slowly and rest your hand.</strong> Fine figuration is about steadiness, not speed.</li>
            <li><strong>Build scenes from simple shapes.</strong> A figure is just circles, lines and dots combined — break it down.</li>
            <li><strong>Plan the layout first.</strong> Because it's so dense, decide where each scene sits before applying.</li>
          </ol>
          <p>This is a style to grow into. Beginners should master basic figures and fine vines before attempting a full narrative hand.</p>`,
      },
      {
        id: "occasions",
        heading: "When Rajasthani Mehndi Is Worn",
        html:
          `<p>Rajasthani mehndi is, above all, a <strong>bridal</strong> style. Its density, fine detail and figurative storytelling make it the prestige choice for North Indian and Marwari weddings, where the bride's hands become a centrepiece of the celebration. It's typically applied the day before the wedding and extends well up the forearms.</p>
          <p>Beyond weddings, simplified Rajasthani motifs appear at Teej, Gangaur (a quintessentially Rajasthani festival) and other major occasions. It's rarely an everyday style simply because of the time it takes — a full Rajasthani bridal hand can take many hours. For lighter occasions, a single Rajasthani-style peacock or figure can be worn as an accent within a simpler design.</p>`,
      },
      {
        id: "color",
        heading: "Getting Deep Colour on Dense Fine Work",
        motif: "floral",
        html:
          `<p>Dense fine-line work actually develops colour beautifully, because so much of the skin is in contact with paste. The challenge is keeping those thin lines from blurring as they dry. Use a stiff, smooth paste and let the design dry slowly and completely — Rajasthani hands need patience precisely because there's so much detail to set.</p>
          <p>Apply the night before, seal with lemon-sugar once dry, warm the hands with clove smoke, and scrape rather than wash. Because the lines are so fine, avoid any rubbing during removal — flake the paste off gently. Oil afterward and keep the hands dry. Done right, the fine lines oxidise to a deep maroon that makes the intricate scenes leap off the skin. Our <a href="/blog/how-to-make-mehndi-darker">darkening guide</a> has the full method.</p>`,
      },
      {
        id: "modern-rajasthani",
        heading: "Modern Takes on Rajasthani Mehndi",
        motif: "lotus",
        html:
          `<p>Contemporary brides are adapting Rajasthani mehndi rather than abandoning it. A popular modern approach keeps the signature fine-line figures and scenes but introduces deliberate negative space, so the hand still tells a story without being completely filled. Others combine a Rajasthani-style narrative on one hand with a cleaner <a href="/mandala-mehndi-design">mandala</a>-led composition on the other.</p>
          <p>Shaded detailing, borrowed from <a href="/shaded-mehndi-design">shaded mehndi</a>, is increasingly used to add depth to figures and architectural motifs. The fine-line tradition itself is having a revival as brides seek out the craftsmanship and meaning that mass-market designs lack.</p>`,
      },
      {
        id: "trends-2026",
        heading: "Rajasthani Mehndi Trends for 2026",
        motif: "mandala",
        html:
          `<p>Rajasthani mehndi is firmly back in fashion for 2026, driven by a wider return to craftsmanship and storytelling. Full figurative bridal hands — complete with dulha-dulhan, doli and baraat — are in high demand. At the same time, "modern Rajasthani" with breathing space between scenes appeals to brides who want the tradition in a lighter form.</p>
          <p>Architectural motifs (jharokhas, domes) and shaded figures are particular highlights this year. Crossover with <a href="/dulhan-mehndi-design">dulhan</a> and <a href="/peacock-mehndi-design">peacock</a> styles keeps the vocabulary fresh. Browse the gallery below for Rajasthani designs from full narrative hands to single signature motifs.</p>`,
      },
    ],
    faqs: [
      { question: "What makes Rajasthani mehndi different from other styles?", answer: "Rajasthani mehndi is defined by extremely fine lines and figurative storytelling. Instead of just decorative patterns, it depicts wedding scenes — bride-and-groom figures, dolis, processions, peacocks and palace motifs — packed densely into the hand like a miniature painting. It's the most detailed and narrative of all mehndi styles." },
      { question: "Is Rajasthani mehndi suitable for beginners?", answer: "Rajasthani mehndi is the most technically demanding style and not ideal for complete beginners. It requires excellent fine-line control with an extra-fine cone tip. Beginners should first master basic figures and fine vines before attempting a full narrative hand — it's a style to grow into." },
      { question: "How long does Rajasthani bridal mehndi take?", answer: "A full Rajasthani bridal hand is very time-intensive due to its dense fine detail, often taking several hours per hand and typically extending up the forearms. It's usually applied the day before the wedding by a professional artist, which is why it's reserved for major occasions rather than everyday wear." },
      { question: "How do I keep fine Rajasthani lines from blurring?", answer: "Use a stiff, smooth, strained paste with an extra-fine cone tip, and let the design dry slowly and completely before removal. Don't rub when removing — flake the paste off gently. Apply the night before, seal with lemon-sugar, and warm the hands with clove smoke for a deep maroon stain that makes the fine scenes stand out." },
      { question: "What motifs are typical in Rajasthani mehndi?", answer: "Typical Rajasthani motifs include dulha-dulhan (bride and groom) figures, the doli (palanquin) and baraat (procession), peacocks, dancing figures and musicians, fine bel (vines), and architectural elements like jharokhas and palace domes, all arranged into a dense balanced composition." },
    ],
    contextualLinks: [
      { label: "Indian Mehndi", href: "/indian-mehndi-design" },
      { label: "Dulhan Mehndi", href: "/dulhan-mehndi-design" },
      { label: "Peacock Mehndi", href: "/peacock-mehndi-design" },
      { label: "Bridal Mehndi", href: "/bridal-mehndi-design" },
    ],
  },

  // ───────────────────────────── MOROCCAN ─────────────────────────────
  "moroccan-mehndi-design": {
    slug: "moroccan-mehndi-design",
    intro:
      `<p class="lead">Moroccan mehndi trades curves for geometry. Rooted in North African and Berber tradition, this style is built from bold lines, diamonds, triangles, chevrons and grids — a striking, architectural look that feels worlds apart from the flowing florals of South Asian henna. It's clean, modern and graphic, which has made it a favourite for those who want something contemporary, minimal yet undeniably eye-catching.</p>
      <p>This guide explains the geometric language of Moroccan mehndi, where it sits best on the body, how to apply crisp straight lines, and why it has become such a strong modern and bridal fusion choice.</p>`,
    sections: [
      {
        id: "geometric-roots",
        heading: "The Geometric Roots of Moroccan Mehndi",
        motif: "vine",
        html:
          `<p>Moroccan and Berber henna grew from a culture rich in geometric art — the same visual language you see in Moroccan tilework, textiles and architecture. Traditional Berber motifs often carried protective or symbolic meaning, and the style has always favoured <strong>angular, abstract forms over figurative or floral ones</strong>.</p>
          <p>That gives Moroccan mehndi its distinctive character: diamonds, zigzags, grids, dots and solid triangles arranged into bold, balanced patterns. There's a satisfying clarity to it — designs read as strong graphic shapes rather than delicate detail, and they hold up beautifully even from a distance.</p>
          <p>This geometric sensibility overlaps with <a href="/mehndi-tattoo-design">tattoo-style</a> and <a href="/minimal-mehndi-design">minimal</a> mehndi, both of which borrow its clean lines.</p>`,
      },
      {
        id: "vocabulary",
        heading: "The Visual Vocabulary",
        motif: "border",
        html:
          `<p>Moroccan mehndi is assembled from a tight set of geometric building blocks:</p>
          <ul>
            <li><strong>Diamonds and lozenges:</strong> the signature shape, used singly or tiled into grids.</li>
            <li><strong>Triangles:</strong> often solid-filled for bold contrast.</li>
            <li><strong>Chevrons and zigzags:</strong> running along fingers and bands.</li>
            <li><strong>Cross-hatch and grids:</strong> filling larger areas with rhythm.</li>
            <li><strong>Dot clusters:</strong> softening and accenting the hard lines.</li>
            <li><strong>Solid fills:</strong> bold blocks of henna that create strong positive/negative contrast.</li>
          </ul>
          <p>The key aesthetic is the interplay of <strong>solid and open</strong> — heavy filled shapes set against bare skin and fine lines, which is what gives Moroccan designs their graphic punch.</p>`,
      },
      {
        id: "placement",
        heading: "Where Moroccan Mehndi Looks Best",
        motif: "paisley",
        html:
          `<p>Geometric designs suit surfaces where their structure can be appreciated:</p>
          <ul>
            <li><strong>Feet and ankles:</strong> Moroccan henna is traditionally and stunningly worn on the feet — see <a href="/feet-mehndi-design">feet mehndi</a> — where diamond grids climb from the toes.</li>
            <li><strong>Back of hand:</strong> a bold central diamond or grid makes a clean modern statement.</li>
            <li><strong>Fingers:</strong> chevron and band patterns run beautifully along the fingers.</li>
            <li><strong>Wrist and forearm:</strong> geometric cuffs and bands suit the <a href="/wrist-mehndi-design">wrist</a> format perfectly.</li>
          </ul>
          <p>Because the style relies on clean structure, it looks best where you can keep the lines straight and the spacing regular — flatter surfaces flatter Moroccan designs.</p>`,
      },
      {
        id: "crisp-lines",
        heading: "How to Apply Crisp Geometric Lines",
        html:
          `<p>Moroccan mehndi is unforgiving of wobble — straight lines have nowhere to hide — so technique is everything. Use a medium-fine cone with steady, even pressure, and pull lines in confident single strokes rather than building them up hesitantly. For long straight lines, move your whole arm, not just your fingers, to keep them true.</p>
          <p>Solid fills should be applied evenly and slightly thicker so they stain dark and uniform; patchy fills are the most common Moroccan mistake. Plan your grid spacing before you start — geometry only looks good when the repeats are regular. If you struggle with freehand straightness, lightly map key points with a skin-safe marker first. The payoff is a design with bold, architectural clarity that few other styles can match.</p>`,
      },
      {
        id: "color",
        heading: "Colour and Contrast in Moroccan Mehndi",
        motif: "floral",
        html:
          `<p>Because Moroccan designs use solid fills, they tend to develop rich, even colour — there's plenty of paste contact with the skin. The goal is uniform darkness, so the bold shapes read as crisp blocks rather than mottled patches.</p>
          <p>Apply on oil-prepped skin, let the thick solid areas dry fully (they hold more paste, so give them extra time), seal with lemon-sugar, and scrape rather than wash. The strong positive/negative contrast of the style is most dramatic when the henna stains deep and even, so follow the usual darkening steps carefully. Moroccan designs photograph exceptionally well precisely because of this bold, high-contrast finish.</p>`,
      },
      {
        id: "modern-fusion",
        heading: "Moroccan Mehndi as a Modern Fusion",
        motif: "lotus",
        html:
          `<p>Moroccan geometry has become a favourite ingredient in fusion mehndi. Brides and artists blend its clean diamonds and grids with South Asian florals to create designs that feel both fresh and rooted — a geometric Moroccan border around a floral centre, for instance, or a <a href="/mandala-mehndi-design">mandala</a> built from Moroccan triangles.</p>
          <p>Its minimalism also makes it a natural partner to <a href="/minimal-mehndi-design">minimal</a> and <a href="/stylish-mehndi-design">stylish</a> styles for those who want modern, graphic henna. For a bold, edgy look, Moroccan patterns work brilliantly as <a href="/mehndi-tattoo-design">tattoo-style</a> body art too.</p>`,
      },
      {
        id: "trends-2026",
        heading: "Moroccan Mehndi Trends for 2026",
        motif: "mandala",
        html:
          `<p>Moroccan mehndi is surging as part of the broader move toward clean, graphic design. Bold single-diamond statements with lots of negative space define the 2026 minimalist look, while geometric foot designs remain a classic. Fusion patterns — Moroccan structure with floral or mandala centres — are especially popular with brides wanting something distinctive.</p>
          <p>High-contrast solid-and-fine designs photograph perfectly for social media, fuelling the trend further. Crossover with <a href="/wrist-mehndi-design">wrist</a> cuffs and <a href="/feet-mehndi-design">feet</a> mehndi keeps it versatile. Browse the gallery below for Moroccan designs from minimal accents to bold statement pieces.</p>`,
      },
    ],
    faqs: [
      { question: "What is Moroccan mehndi?", answer: "Moroccan mehndi is a geometric henna style rooted in North African and Berber tradition. Instead of flowing florals, it uses bold diamonds, triangles, chevrons, grids and solid fills to create a clean, architectural, graphic look. It's favoured by those who want contemporary, minimal yet eye-catching designs." },
      { question: "How do I get straight crisp lines in Moroccan mehndi?", answer: "Use a medium-fine cone with steady even pressure and pull lines in confident single strokes, moving your whole arm rather than just your fingers for long lines. Apply solid fills slightly thicker and evenly so they stain dark and uniform, and plan grid spacing before you start so the repeats stay regular." },
      { question: "Where does Moroccan mehndi look best?", answer: "Moroccan mehndi traditionally looks stunning on the feet and ankles with diamond grids climbing from the toes. It also suits a bold central diamond on the back of the hand, chevron bands along the fingers, and geometric cuffs on the wrist. Flatter surfaces show off its clean structure best." },
      { question: "Can Moroccan mehndi be used for weddings?", answer: "Yes, increasingly so as a fusion style. Brides blend Moroccan geometry — diamonds, grids and borders — with South Asian florals or mandalas for a fresh, distinctive bridal look. On its own it suits modern, minimalist brides, and it works beautifully on the feet for traditional Moroccan-style bridal henna." },
      { question: "Why does my Moroccan mehndi look patchy?", answer: "Patchy solid fills are the most common Moroccan mistake. Because the style relies on bold even blocks, apply the fill areas slightly thicker and uniformly, and give them extra drying time since they hold more paste. Following the standard darkening steps ensures the solid shapes stain deep and crisp." },
    ],
    contextualLinks: [
      { label: "Minimal Mehndi", href: "/minimal-mehndi-design" },
      { label: "Feet Mehndi", href: "/feet-mehndi-design" },
      { label: "Mehndi Tattoo", href: "/mehndi-tattoo-design" },
      { label: "Mandala Mehndi", href: "/mandala-mehndi-design" },
    ],
  },

  // ───────────────────────────── JAAL ─────────────────────────────
  "jaal-mehndi-design": {
    slug: "jaal-mehndi-design",
    intro:
      `<p class="lead">Jaal means "net" — and jaal mehndi is exactly that: an interconnected mesh of motifs that flows across the hand in a continuous, lattice-like pattern. It's the technique that lets artists cover large areas with rhythm and richness without the design ever feeling random. From light, airy nets to dense bridal lattices, jaal is the backbone of full-coverage mehndi and one of the most satisfying patterns to wear.</p>
      <p>This guide breaks down how a jaal is constructed, the difference between light and heavy nets, where it works best, and how to keep an even, flowing mesh from turning into a tangle.</p>`,
    sections: [
      {
        id: "what-is-jaal",
        heading: "What Jaal (Net) Mehndi Is",
        motif: "vine",
        html:
          `<p>A jaal is a repeating, interconnected pattern — think of a net or lattice laid over the skin, with motifs sitting at the intersections and lines linking them. Rather than isolated elements, everything in a jaal connects, creating a continuous flow that can stretch across an entire hand or forearm.</p>
          <p>This connectivity is what makes jaal so powerful for <strong>full coverage</strong>. It fills space with order and movement, giving dense designs their richness while keeping the eye travelling smoothly across the pattern. It's a cornerstone of <a href="/pakistani-mehndi-design">Pakistani</a> and <a href="/dulhan-mehndi-design">dulhan</a> mehndi, where large areas need to be filled beautifully.</p>
          <p>A jaal can be diamond-based, floral, criss-cross or curved — the structure stays "net-like" while the motifs vary.</p>`,
      },
      {
        id: "anatomy",
        heading: "The Anatomy of a Jaal",
        motif: "border",
        html:
          `<p>Every jaal is built on an underlying grid, even when it looks freeform:</p>
          <ul>
            <li><strong>The grid:</strong> an invisible framework of diagonal, square or curved lines that sets the structure.</li>
            <li><strong>Intersection motifs:</strong> small flowers, dots or diamonds placed where the grid lines cross.</li>
            <li><strong>Cell fillers:</strong> fine detail (dots, leaves, hatching) inside each "cell" of the net.</li>
            <li><strong>Connectors:</strong> the lines that link motifs and keep the pattern continuous.</li>
          </ul>
          <p>The visual richness of a jaal comes from layering: a simple grid, then motifs at the crossings, then progressively finer fillers. The more layers you add, the heavier and more bridal the jaal becomes; fewer layers keep it light and modern.</p>`,
      },
      {
        id: "light-vs-heavy",
        heading: "Light Jaal vs Heavy Jaal",
        motif: "paisley",
        html:
          `<p>Jaal spans a huge range, and choosing the weight is the key decision:</p>
          <p><strong>Light jaal</strong> uses a wider grid with more space between motifs and minimal cell filling. It reads as elegant and airy, suits modern brides and works well for <a href="/half-hand-mehndi-design">half hand</a> designs and everyday occasions. <strong>Heavy jaal</strong> tightens the grid and packs each cell with detail, creating the dense, luxurious coverage seen in <a href="/dulhan-mehndi-design">dulhan</a> and <a href="/pakistani-mehndi-design">Pakistani</a> bridal work.</p>
          <p>You can also vary the weight <em>within</em> one design — a dense jaal on the back of the hand fading to a light net toward the wrist — which creates a beautiful gradient of coverage and is a hallmark of skilled work.</p>`,
      },
      {
        id: "keeping-it-even",
        heading: "Keeping the Net Even and Flowing",
        html:
          `<p>The biggest risk with jaal is that an uneven grid turns the elegant net into a tangle. Keep it clean by laying the structure first:</p>
          <ol>
            <li><strong>Draw the grid lightly first.</strong> Establish your diagonal or curved framework before adding any motifs, so spacing stays regular.</li>
            <li><strong>Keep the cells consistent in size.</strong> Irregular cells are the most visible jaal mistake.</li>
            <li><strong>Place intersection motifs uniformly</strong> — same motif, same size, at every crossing.</li>
            <li><strong>Fill cells last,</strong> and keep the level of detail consistent across the design.</li>
          </ol>
          <p>Think structure-then-decoration. A jaal that starts from a deliberate grid will always flow better than one improvised motif by motif.</p>`,
      },
      {
        id: "color",
        heading: "Colour on Dense Jaal Work",
        motif: "floral",
        html:
          `<p>Heavy jaal puts a lot of paste on the skin, which generally means excellent colour development. The main thing is to let it dry thoroughly — dense nets hold moisture and need more drying time than open designs before removal.</p>
          <p>Apply on oil-prepped skin, leave the paste on as long as possible (overnight for bridal jaal), seal with lemon-sugar, and scrape rather than wash. Because the lines sit close together, a deep even stain makes the net structure pop dramatically. If the design is a graded jaal (heavy to light), the lighter areas will naturally stain a touch softer — that gradient is part of the intended effect, not a flaw.</p>`,
      },
      {
        id: "occasions",
        heading: "When to Wear Jaal Mehndi",
        motif: "lotus",
        html:
          `<p>Heavy jaal is fundamentally a bridal and festive style — its full coverage suits weddings, where it forms the body of dulhan and Pakistani bridal hands. Light jaal, by contrast, is far more versatile: it's a lovely choice for Eid, parties and wedding guests who want richness without full bridal density.</p>
          <p>Because jaal is a <em>technique</em> as much as a style, it appears inside many other designs — as the fill behind a <a href="/peacock-mehndi-design">peacock</a>, as the body of a <a href="/back-hand-mehndi-design">back hand</a> composition, or framed by a <a href="/wrist-mehndi-design">wrist</a> band. Learning jaal instantly upgrades your ability to fill any large design beautifully.</p>`,
      },
      {
        id: "trends-2026",
        heading: "Jaal Mehndi Trends for 2026",
        motif: "mandala",
        html:
          `<p>Jaal is evolving toward lighter, more graphic nets. Open, wide-grid jaal with generous spacing is the defining modern look, favoured by brides who want coverage without heaviness. Graded jaal — dense fading to light — is hugely popular for the sophisticated gradient it creates.</p>
          <p>On the traditional side, intricate Pakistani heavy jaal remains a bridal staple. Floral-cell jaals and crossover with <a href="/shaded-mehndi-design">shaded</a> detailing add depth and softness to the structure. Browse the gallery below for jaal designs from airy modern nets to full bridal lattices.</p>`,
      },
    ],
    faqs: [
      { question: "What is jaal mehndi?", answer: "Jaal means 'net'. Jaal mehndi is an interconnected, lattice-like pattern where motifs sit at the intersections of an underlying grid and lines link everything into a continuous flowing mesh. It's the technique used to fill large areas richly and is the backbone of full-coverage Pakistani and bridal mehndi." },
      { question: "How do I keep a jaal pattern even?", answer: "Lay the structure first: lightly draw the diagonal or curved grid before adding any motifs, keep the cells consistent in size, place the same intersection motif uniformly at every crossing, and fill the cells last with a consistent level of detail. Irregular cells are the most visible jaal mistake, so structure-then-decoration is key." },
      { question: "What is the difference between light and heavy jaal?", answer: "Light jaal uses a wider grid with more space and minimal cell filling for an airy, modern look suited to everyday occasions and half-hand designs. Heavy jaal tightens the grid and packs each cell with detail for the dense, luxurious coverage seen in dulhan and Pakistani bridal mehndi." },
      { question: "Is jaal mehndi only for brides?", answer: "Heavy jaal is mainly a bridal and festive style, but light jaal is very versatile and great for Eid, parties and wedding guests who want richness without full density. Jaal is also a technique used inside many designs — as fill behind a peacock or as the body of a back-hand composition." },
      { question: "How do I get good colour on dense jaal work?", answer: "Heavy jaal develops colour well because so much paste contacts the skin. Let it dry thoroughly — dense nets need more drying time than open designs — then leave the paste on as long as possible, seal with lemon-sugar, and scrape rather than wash. A deep even stain makes the net structure pop." },
    ],
    contextualLinks: [
      { label: "Pakistani Mehndi", href: "/pakistani-mehndi-design" },
      { label: "Dulhan Mehndi", href: "/dulhan-mehndi-design" },
      { label: "Back Hand Mehndi", href: "/back-hand-mehndi-design" },
      { label: "Bridal Mehndi", href: "/bridal-mehndi-design" },
    ],
  },

  // ───────────────────────────── KHAFIF ─────────────────────────────
  "khafif-mehndi-design": {
    slug: "khafif-mehndi-design",
    intro:
      `<p class="lead">Khafif mehndi is the art of doing more with less. The word <em>khafif</em> means "light" or "sheer", and that's exactly the effect: delicate, spaced-out detailing that leaves plenty of skin showing, creating an elegant, breezy look rather than dense coverage. It's the perfect antidote to heavy bridal work — quick to apply, effortlessly stylish, and ideal for Eid, everyday wear and anyone who finds full mehndi too much.</p>
      <p>This guide explains the khafif aesthetic of negative space, the light motifs that define it, how to apply it for maximum elegance, and why "less is more" has become one of the strongest directions in modern henna.</p>`,
    sections: [
      {
        id: "what-is-khafif",
        heading: "What Khafif (Light) Mehndi Is",
        motif: "vine",
        html:
          `<p>Khafif mehndi is defined by <strong>lightness and negative space</strong>. Where heavy styles fill the hand, khafif scatters delicate motifs across it — a flower here, a trailing vine there, a few fingertip accents — and deliberately leaves the skin between them bare. The result is sheer, airy and modern, like jewellery rather than a full canvas.</p>
          <p>It's the opposite philosophy to <a href="/jaal-mehndi-design">jaal</a> or <a href="/dulhan-mehndi-design">dulhan</a> mehndi, and it has surged in popularity as tastes shift toward minimalism. Khafif is closely related to <a href="/arabic-mehndi-design">Arabic</a> and <a href="/minimal-mehndi-design">minimal</a> styles, sharing their love of open space and flowing single motifs.</p>
          <p>Crucially, khafif isn't "unfinished" — its sparseness is deliberate and carefully balanced.</p>`,
      },
      {
        id: "the-art-of-space",
        heading: "The Art of Negative Space",
        motif: "border",
        html:
          `<p>Khafif's whole effect rests on how you use empty skin, which makes placement more important than quantity. The principles:</p>
          <ul>
            <li><strong>Balance, don't fill.</strong> Distribute a few motifs so the hand feels considered, not bare on one side and busy on the other.</li>
            <li><strong>Let motifs breathe.</strong> Generous space around each element is what makes khafif look elegant rather than sparse.</li>
            <li><strong>Use flow lines.</strong> A single trailing vine connecting two or three motifs guides the eye and ties the design together.</li>
            <li><strong>Anchor with one focal point.</strong> Even a light design benefits from one slightly larger motif as its centre.</li>
          </ul>
          <p>Because there's so little to hide behind, every line in khafif must be clean — which is why crisp execution matters more here than in dense styles.</p>`,
      },
      {
        id: "motifs",
        heading: "Light Motifs That Define Khafif",
        motif: "floral",
        html:
          `<p>Khafif favours single, graceful motifs rather than complex compositions:</p>
          <ul>
            <li><strong>Single flowers</strong> with a few petals and light shading.</li>
            <li><strong>Trailing vines</strong> running along a finger or across the back of the hand.</li>
            <li><strong>Fingertip accents</strong> — half-dipped tips or small motifs at the nails.</li>
            <li><strong>Delicate dots and tiny leaves</strong> scattered for rhythm.</li>
            <li><strong>Fine bands</strong> at the wrist or finger base.</li>
          </ul>
          <p>The hallmark khafif hand might be a single flower on the back of the hand, a vine trailing to one finger, and a couple of fingertip accents — complete, elegant, and finished in minutes.</p>`,
      },
      {
        id: "application",
        heading: "Applying Khafif Mehndi for Maximum Elegance",
        html:
          `<p>Khafif is one of the fastest and most beginner-friendly styles to apply — but its simplicity demands precision. Because each element stands alone on bare skin, there's nowhere to hide a shaky line, so steady, confident strokes are essential.</p>
          <p>Plan the placement before you begin: decide where your two or three motifs sit and how a vine connects them, so the negative space looks intentional. Use a fine cone, vary pressure for light shading, and resist the urge to add "just one more" motif — overfilling instantly kills the khafif effect. Keep it on for a few hours for colour, seal with lemon-sugar, and scrape rather than wash. Since coverage is light, it dries fast and you're mobile again quickly.</p>`,
      },
      {
        id: "occasions",
        heading: "When Khafif Mehndi Shines",
        motif: "paisley",
        html:
          `<p>Khafif is the everyday and quick-occasion champion. It's the ideal choice for <a href="/eid-mehndi-design">Eid</a> mornings when time is short, for office and casual wear where heavy henna would be too much, and for anyone who simply prefers a subtle look. It's also popular for wedding guests and for brides who want light henna for pre-wedding events.</p>
          <p>Because it's sheer, it suits modern outfits and reads beautifully in everyday photos. Pair it with a fine <a href="/wrist-mehndi-design">wrist</a> band or light <a href="/finger-mehndi-design">finger</a> detailing to complete an elegant, minimal look. It's the perfect entry point for anyone intimidated by elaborate mehndi.</p>`,
      },
      {
        id: "khafif-vs-heavy",
        heading: "Khafif vs Heavy Mehndi: Choosing Your Style",
        motif: "lotus",
        html:
          `<p>Deciding between khafif and heavier styles comes down to occasion and personality. Choose khafif when you want speed, subtlety and everyday elegance, or when your outfit is already statement enough. Choose heavier <a href="/jaal-mehndi-design">jaal</a> or <a href="/dulhan-mehndi-design">dulhan</a> work for weddings and major occasions where dense coverage is the tradition.</p>
          <p>Many people wear both at different times — khafif for the festival morning, heavier work for the wedding itself. You can even blend them: a khafif approach on the palms with slightly richer detailing on the back of the hand gives a balanced, contemporary result. There's no wrong answer, only the right style for the moment.</p>`,
      },
      {
        id: "trends-2026",
        heading: "Khafif Mehndi Trends for 2026",
        motif: "mandala",
        html:
          `<p>Khafif is perfectly aligned with 2026's minimalist mood, and it's having a major moment. Ultra-light single-flower hands, fingertip-only designs, and delicate vine trails are everywhere. The "negative space" aesthetic — once niche — is now mainstream, with even brides choosing khafif-inspired light coverage for pre-wedding events.</p>
          <p>Crossover with <a href="/arabic-mehndi-design">Arabic</a> florals and <a href="/minimal-mehndi-design">minimal</a> styling keeps the look fresh, and subtle <a href="/shaded-mehndi-design">shaded</a> single flowers add gentle depth without weight. Browse the gallery below for khafif designs that prove elegant henna doesn't have to be heavy.</p>`,
      },
    ],
    faqs: [
      { question: "What is khafif mehndi?", answer: "Khafif means 'light' or 'sheer'. Khafif mehndi uses delicate, spaced-out motifs that leave plenty of bare skin showing, creating an elegant, airy look rather than dense coverage. Its sparseness is deliberate and carefully balanced — it's modern, quick to apply and ideal for Eid, everyday wear and minimalists." },
      { question: "Why does negative space matter in khafif mehndi?", answer: "Khafif's entire effect rests on how empty skin is used. Generous space around each motif is what makes it look elegant rather than bare. Balance a few motifs across the hand, connect them with a flow line, and anchor with one focal point so the negative space looks intentional and considered." },
      { question: "Is khafif mehndi good for beginners?", answer: "Yes — khafif is one of the fastest and most beginner-friendly styles because it uses simple single motifs rather than complex compositions. But its simplicity demands clean lines, since each element stands alone on bare skin with nowhere to hide a shaky stroke. Plan placement first and apply confidently." },
      { question: "When should I choose khafif over heavy mehndi?", answer: "Choose khafif when you want speed, subtlety and everyday elegance, for Eid mornings, office wear, or when your outfit is already a statement. Choose heavier jaal or dulhan work for weddings and major occasions where dense coverage is traditional. Many people wear both at different times." },
      { question: "Can khafif mehndi be worn at weddings?", answer: "Khafif suits pre-wedding events, wedding guests and brides who prefer light henna, and khafif-inspired light coverage is increasingly chosen even by brides for mehndi-night and engagement looks. For the main wedding, most brides still opt for heavier styles, but a balanced khafif-plus-detail approach is a popular modern compromise." },
    ],
    contextualLinks: [
      { label: "Arabic Mehndi", href: "/arabic-mehndi-design" },
      { label: "Easy Mehndi", href: "/easy-mehndi-design" },
      { label: "Minimal Mehndi", href: "/minimal-mehndi-design" },
      { label: "Half Hand Mehndi", href: "/half-hand-mehndi-design" },
    ],
  },

  // ───────────────────────────── SHADED ─────────────────────────────
  "shaded-mehndi-design": {
    slug: "shaded-mehndi-design",
    intro:
      `<p class="lead">Shaded mehndi adds something most henna lacks: depth. By varying the density of paste and combining bold and light tones, shaded designs create gradients, dimension and an almost three-dimensional effect that makes flowers bloom and motifs lift off the skin. It's a more advanced, painterly approach to henna — and the secret behind those striking designs where a single rose looks sculpted rather than drawn.</p>
      <p>This guide explains how shading works in mehndi, the double-tone and gradient techniques behind it, where it has the most impact, and how to control colour so the dimension reads clearly.</p>`,
    sections: [
      {
        id: "what-is-shading",
        heading: "What Shaded Mehndi Is",
        motif: "vine",
        html:
          `<p>Most mehndi is "flat" — every line stains roughly the same tone. Shaded mehndi breaks that by deliberately creating <strong>variation in tone and density</strong>, so parts of a motif are dark and bold while others are light and sheer. That contrast tricks the eye into reading depth, giving petals roundness and motifs a lifted, dimensional quality.</p>
          <p>It's a more painterly, advanced technique, often associated with modern <a href="/arabic-mehndi-design">Arabic</a> and contemporary bridal work. Shading is what makes a single large flower look gorgeous on its own — it's a favourite for the bold, minimal, statement-flower designs trending today, and it elevates <a href="/floral-mehndi-design">floral</a> and <a href="/dulhan-mehndi-design">bridal</a> styles alike.</p>`,
      },
      {
        id: "techniques",
        heading: "The Core Shading Techniques",
        motif: "border",
        html:
          `<p>Shading in henna is achieved through a few distinct techniques, often combined:</p>
          <ul>
            <li><strong>Outline-and-fill contrast:</strong> a bold outline with a lighter, thinner fill inside, creating instant depth.</li>
            <li><strong>Double tone (do-rang):</strong> applying paste at different thicknesses so areas oxidise to different tones.</li>
            <li><strong>Gradient shading:</strong> gradually thinning the paste from one edge of a motif to the other for a fade effect.</li>
            <li><strong>Open-and-solid:</strong> contrasting solid-filled areas against fine-line or empty areas.</li>
            <li><strong>Layered density:</strong> building some areas with more paste so they stain darker than their surroundings.</li>
          </ul>
          <p>The art is in <em>where</em> you place the dark and light — typically dark at the base or one side of a petal, fading to light at the tip, mimicking how light falls on a real flower.</p>`,
      },
      {
        id: "how-to-shade",
        heading: "How to Create Shading at Home",
        motif: "floral",
        html:
          `<p>Shading takes practice, but the basic method is approachable:</p>
          <ol>
            <li><strong>Draw a bold outline</strong> of your motif — say, a rose — with confident, darker lines.</li>
            <li><strong>Fill selectively.</strong> Apply more paste toward the base/centre and less toward the edges to create a natural gradient.</li>
            <li><strong>Use cone pressure to control tone:</strong> press harder for dark areas, ease off for light, sheer areas.</li>
            <li><strong>Leave thin gaps</strong> within fills to suggest highlights and separation between petals.</li>
            <li><strong>Let it develop fully</strong> — shading only reveals itself as the different densities oxidise to different tones.</li>
          </ol>
          <p>Start with a single shaded flower before attempting a full shaded hand. Once you can make one petal look three-dimensional, you can repeat the effect anywhere.</p>`,
      },
      {
        id: "where-it-shines",
        heading: "Where Shaded Mehndi Has the Most Impact",
        html:
          `<p>Shading rewards large, simple motifs that give the gradient room to show. A single oversized rose or lotus on the back of the hand is the ultimate shaded statement — the dimension makes it look almost painted. It's also stunning on <a href="/peacock-mehndi-design">peacock</a> feathers, where shaded "eyes" gain remarkable depth, and on <a href="/mandala-mehndi-design">mandala</a> petals that fade from dark centre to light edge.</p>
          <p>Shading is less suited to very fine, busy designs, where there isn't enough space for the tonal variation to read. The rule of thumb: the bolder and simpler the motif, the more dramatic the shading. That's why shaded mehndi pairs so naturally with the modern bold-and-minimal aesthetic.</p>`,
      },
      {
        id: "color-control",
        heading: "Controlling Colour So Dimension Reads",
        motif: "paisley",
        html:
          `<p>Shaded mehndi depends entirely on getting <em>different</em> tones from one application, so colour control is the whole game. The key is that thicker, denser paste and longer contact produce darker stains, while thin, sheer paste stains lighter — so your tonal plan and your paste management must align.</p>
          <p>Use good natural henna for predictable oxidation, apply on oil-prepped skin, and crucially let the design develop fully (24–48 hours) before judging it — shading is subtle when fresh and deepens into clear contrast as it matures. Seal and remove as usual, but be patient: the dimensional effect that makes shaded mehndi special only fully appears once the different densities have oxidised. Our <a href="/blog/how-to-make-mehndi-darker">colour guide</a> explains the underlying chemistry.</p>`,
      },
      {
        id: "occasions",
        heading: "When to Wear Shaded Mehndi",
        motif: "lotus",
        html:
          `<p>Shaded mehndi suits anyone wanting a modern, artistic, statement look. It's especially popular for <a href="/eid-mehndi-design">Eid</a>, parties and contemporary bridal events, where a single shaded flower delivers maximum impact for minimal coverage. Brides increasingly use shaded motifs within larger designs to add depth and a couture feel.</p>
          <p>Because the effect is bold and photogenic, it's a favourite for social-media-led celebrations. It pairs beautifully with <a href="/floral-mehndi-design">floral</a>, <a href="/arabic-mehndi-design">Arabic</a> and <a href="/stylish-mehndi-design">stylish</a> styles. For everyday wear, a small shaded flower on the back of the hand is an elegant, modern statement.</p>`,
      },
      {
        id: "trends-2026",
        heading: "Shaded Mehndi Trends for 2026",
        motif: "mandala",
        html:
          `<p>Shaded mehndi is one of the defining techniques of contemporary henna, and 2026 leans into it hard. The signature look is the <strong>single oversized shaded flower</strong> — a rose or lotus with dramatic dark-to-light gradients — worn with lots of negative space. Shaded peacock feathers and mandala petals are everywhere for their near-3D depth.</p>
          <p>Double-tone Arabic designs continue to dominate modern bridal and party mehndi, and artists are combining shading with <a href="/floral-mehndi-design">floral</a> and <a href="/mandala-mehndi-design">mandala</a> work for couture-level results. Browse the gallery below for shaded designs that show just how much dimension henna can achieve.</p>`,
      },
    ],
    faqs: [
      { question: "What is shaded mehndi?", answer: "Shaded mehndi deliberately varies tone and paste density so parts of a motif are dark and bold while others are light and sheer. That contrast creates depth and an almost three-dimensional effect, making flowers and motifs look sculpted rather than flat. It's a more advanced, painterly approach popular in modern Arabic and bridal designs." },
      { question: "How do I create shading in mehndi?", answer: "Draw a bold outline, then fill selectively — more paste toward the base or centre, less toward the edges — to create a gradient. Control tone with cone pressure (harder for dark, lighter for sheer areas), leave thin gaps for highlights, and let the design develop fully so the different densities oxidise to different tones. Start with a single shaded flower." },
      { question: "Where does shaded mehndi look best?", answer: "Shading rewards large, simple motifs with room to show the gradient — a single oversized rose or lotus on the back of the hand is the ultimate shaded statement. It's also stunning on peacock feathers and mandala petals. It's less suited to very fine, busy designs where there isn't space for tonal variation to read." },
      { question: "Why does my shaded mehndi look flat?", answer: "Shading is subtle when fresh and only reveals clear contrast as it oxidises over 24–48 hours, so judge it after it matures, not immediately. Make sure you genuinely varied paste density — thicker paste and longer contact stain darker, thinner paste stains lighter — since the dimensional effect depends entirely on getting different tones from one application." },
      { question: "Is shaded mehndi suitable for beginners?", answer: "Shaded mehndi is a more advanced technique, but beginners can start with a single shaded flower using the outline-and-fill method: a bold outline with a lighter gradient fill inside. Once you can make one petal look three-dimensional, you can repeat the effect. Master it on one motif before attempting a full shaded hand." },
    ],
    contextualLinks: [
      { label: "Arabic Mehndi", href: "/arabic-mehndi-design" },
      { label: "Floral Mehndi", href: "/floral-mehndi-design" },
      { label: "Dulhan Mehndi", href: "/dulhan-mehndi-design" },
      { label: "Stylish Mehndi", href: "/stylish-mehndi-design" },
    ],
  },
};

// Lookup helper used by the category page.
export function getCategoryArticle(slug: string): CategoryArticle | undefined {
  return categoryArticles[slug];
}

