import type { CategoryArticle } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// Long-form style guide: Jewellery (hathphool / haath phool) mehndi.
//
// IMPORTANT: every `html` string here is AUTHOR-CONTROLLED STATIC CONTENT. It is
// rendered with dangerouslySetInnerHTML on the category page. Never interpolate
// user input or runtime values into these strings.
// ─────────────────────────────────────────────────────────────────────────────

export const article: CategoryArticle = {
  slug: "jewellery-mehndi-design",
  intro:
    `<p class="lead">Jewellery mehndi is the one style where I have to think like a goldsmith before I think like a henna artist. The whole idea is illusion: you draw rings, chains, bracelets and a hathphool so convincingly that someone has to lean in to be sure the bride is not actually wearing kundan. It is henna pretending to be ornament, and when it is done with a real jeweller's eye for symmetry and weight, it is one of the most quietly spectacular things you can put on a hand.</p>
    <p>I have spent more hours than I can count drawing fake polki on real fingers, and the brides who ask for it are almost always after the same thing — the glitter of a full jewellery set without the literal weight of metal, or a layer of pattern that frames their actual ornaments instead of clashing with them. This guide is everything I have learned doing it: where the haath phool tradition comes from, how the pieces of a drawn jewellery set fit together, how to apply and choose it, how to pull a stain deep enough to read like gold, where it sits best, and the mistakes that turn convincing jewellery into a muddle of lines.</p>`,
  sections: [
    {
      id: "what-defines-jewellery-mehndi",
      heading: "What Jewellery Mehndi Is — and the Hathphool Behind It",
      motif: "mandala",
      html:
        `<p>Jewellery mehndi is exactly what the name promises: henna drawn to imitate worn ornaments. Instead of free-flowing paisleys and florals roaming wherever the artist fancies, the design maps itself onto the body the way real jewellery would — a ring on the finger, a band at the base of the fingers, a chain across the back of the hand, a cuff at the wrist. The defining motif, and the one that gives the whole style its name in South Asia, is the <strong>hathphool</strong> — literally "hand flower," the haath phool hand harness that links rings on the fingers to a centrepiece on the back of the hand and on to a bracelet at the wrist.</p>
        <p>That harness is the soul of the style. A traditional metal hathphool is a single ornament that bridges the knuckles, the back of the hand and the wrist in one continuous, glittering piece — and drawing it in henna means honouring that same architecture. This is why I describe jewellery mehndi as henna with a layout rather than henna with a vibe. Every line is doing a structural job: this chain connects the ring to the centrepiece, that band anchors the bracelet, those dots are the prongs holding an imaginary stone.</p>
        <p>The roots run deep. The hand harness travelled with Persian and Mughal courts into the subcontinent, where Rajput and Mughal noblewomen wore elaborate haath phool of gold strung with uncut diamonds. The kundan, jadau and polki techniques those jewellers perfected — setting unfaceted stones in pure gold foil — are the exact textures a jewellery-mehndi artist learns to fake: the bumpy, organic outline of polki, the lacy gold frame of jadau, the smooth domes of kundan. So when a bride asks for a "kundan-style" or "polki-style" hand, she is asking me to translate four centuries of goldsmithing into a cone of henna paste.</p>
        <p>It sits quite distinctly apart from other styles. Where <a href="/finger-mehndi-design">finger mehndi design</a> simply decorates the fingers and Arabic work flows in trailing vines, jewellery mehndi is governed by the logic of ornaments — bilateral symmetry, anchored end-points, deliberate negative space standing in for bare skin between pieces. It is closer in spirit to drawing a necklace than to drawing a flower.</p>`,
    },
    {
      id: "anatomy-of-the-design",
      heading: "The Anatomy of a Drawn Jewellery Set",
      motif: "border",
      html:
        `<p>Once you stop seeing a jewellery hand as one design and start seeing it as a set of separate pieces that happen to share a hand, the whole thing becomes far easier to build and far more convincing to look at. Here is how I break a full hathphool layout into its component ornaments.</p>
        <h3>The finger rings</h3>
        <p>I almost always start here, because the rings set the scale for everything else. A drawn ring is a band around the finger — a single fine line, a row of dots, a tiny lattice — often carrying a small "stone" on top rendered as a filled teardrop or a dotted dome. The trick is restraint: real rings are small, so the henna versions must stay small too. A ring that swells halfway up the finger stops reading as jewellery and starts reading as a generic finger pattern. The ring-finger piece usually gets the boldest stone, exactly as it would on a real hand.</p>
        <h3>The connecting chains</h3>
        <p>Chains are what separate a true jewellery hand from a hand that merely has rings and a bracelet. From each ring, a delicate chain — a line of evenly spaced dots, a fine zigzag, or a row of tiny loops — runs down toward the centrepiece. The discipline here is evenness. A real chain has identical links; the moment your dots drift in size or spacing, the illusion of metal collapses. I steady my hand and breathe slowly through every chain run.</p>
        <h3>The hathphool centrepiece</h3>
        <p>This is the showpiece, sitting on the back of the hand where the harness fans out. It is usually a mandala, a layered floral medallion, or a jali-framed motif — symmetrical, weighty, and clearly the focal jewel of the set. Every chain feeds into it; the wrist piece hangs from it. Think of it as the pendant of the whole hand harness, and give it the detail a pendant deserves.</p>
        <h3>The wrist cuff or bracelet</h3>
        <p>At the wrist sits the bracelet — a band that wraps the joint like a cuff. It can be a clean ornamental border, a strand of pearls drawn as a row of open circles, or a wide bangle-stack effect of several stacked bands. This piece grounds the design and gives the eye somewhere to rest. For more on building this element alone, the dedicated <a href="/wrist-mehndi-design">wrist mehndi design</a> approach pairs beautifully with a jewellery hand.</p>
        <h3>The texture vocabulary</h3>
        <p>What makes drawn jewellery read as gold rather than as flat pattern is texture, and jewellery mehndi has its own small lexicon of it:</p>
        <ul>
          <li><strong>Stone fills</strong> — solid teardrops, ovals and domes that read as set gems, often ringed with dots to suggest the prongs.</li>
          <li><strong>Pearl strings</strong> — rows of open circles or graduated dots, the single most recognisable "jewellery" signal in henna.</li>
          <li><strong>Jali and lattice</strong> — fine net-fill standing in for the pierced goldwork of jadau pieces.</li>
          <li><strong>Meenakari reverse-fill</strong> — filling the background and leaving the motif blank, mimicking enamel-and-gold contrast.</li>
          <li><strong>Negative space</strong> — the bare skin between pieces, which is not empty but is reading as "no metal here," exactly as it would on a real hand.</li>
        </ul>
        <p>Get these five textures under control and you can fake almost any ornament a bride brings you a photo of.</p>`,
    },
    {
      id: "how-to-apply-and-choose",
      heading: "How to Apply It — and How to Choose Your Layout",
      motif: "vine",
      html:
        `<p>Applying a jewellery hand is a planning exercise as much as a drawing one. Unlike a flowing Arabic trail where you can improvise, here you are committing to a layout before the first line, because a chain drawn to the wrong point cannot be undone.</p>
        <h3>Plan the skeleton first</h3>
        <p>Before I touch a cone to skin, I decide three things: which fingers carry rings, where the centrepiece sits, and how wide the wrist cuff runs. I often lightly map the anchor points — the ring positions and the centre of the medallion — with the faintest dots, then build outward. This is the single habit that separates a convincing set from a tangle. The whole hand is a system; sketch the system before you decorate it.</p>
        <h3>Work from the anchors outward</h3>
        <p>I draw the rings first, then the centrepiece, then run the connecting chains between them, and finish with the wrist cuff. Doing the fixed points before the connectors means every chain has a known start and end, so spacing stays honest. Filling and texture come last, once the structure is locked.</p>
        <h3>Match your real ornaments</h3>
        <p>The smartest jewellery mehndi is designed around the jewellery you will actually wear. If your real hathphool or bridal rings are going on, draw the henna to extend and echo them, not to fight them. I have brides bring their jewellery to the session so I can place the drawn chains where the metal will not sit, letting the two layers read as one rich set. This pairing-with-real-ornaments thinking is what elevates the style from costume to couture.</p>
        <h3>Choosing your layout</h3>
        <p>For a full statement hand, go for the complete harness — rings, chains, centrepiece and cuff. For something subtler, a "statement single" hathphool uses one ring, one chain and one medallion, leaving most of the hand bare. Working women and minimal brides often want only the wrist cuff and a couple of ringed fingers — quiet, office-appropriate, and modern. Decide your coverage honestly before you book your time, because a full set and a single piece are very different sittings.</p>
        <h3>A note on time</h3>
        <p>Be realistic about the clock. A single drawn ring takes a couple of minutes; a clean wrist cuff with a ring or two runs fifteen to twenty-five minutes; a full hathphool with chains, a detailed centrepiece and a stacked cuff is a forty-five to ninety-minute hand, and a bridal-grade jewellery set with dense kundan texturing can stretch well past that. Symmetry across two hands roughly doubles everything, so plan accordingly.</p>`,
    },
    {
      id: "getting-a-deep-stain",
      heading: "Pulling a Stain Deep Enough to Read Like Gold",
      motif: "paisley",
      html:
        `<p>Jewellery mehndi lives or dies on contrast. The whole illusion depends on the lines reading as solid metal against clear skin, and a pale, washed-out stain turns convincing gold into vague brown scribble. So colour is not a nice-to-have here; it is the difference between "is that real?" and "oh, it is just henna."</p>
        <p>The good news is the chemistry is the same as any henna — it is the molecule lawsone binding to the keratin in your skin, oxidising from orange to deep brown-maroon over forty-eight to seventy-two hours. The work is in giving it every advantage. Start with fresh, well-sifted paste from good powder, mixed with a mildly acidic liquid and rested until dye release — when the surface of the paste turns visibly darker, the dye is ready to grab.</p>
        <p>Then respect the contact time. This is doubly important for jewellery work, because thin chain-lines and fine ring bands have less paste sitting on them than a big solid motif, so they dry and flake off faster — and the bits that flake early stain weakest. Keep the paste on as long as you can, ideally several hours or overnight, and the moment it has set, seal it. I dab a lemon-and-sugar mix gently over the design with a cotton ball so the paste stays tacky and in contact rather than crumbling off the fine lines, and a little warmth from clove steam helps the colour deepen.</p>
        <p>Aftercare decides the final depth. Keep water off the design for the first twelve to twenty-four hours — no hand-washing marathons, no dishes — because that early water contact is what robs jewellery mehndi of its crucial contrast. Once the paste is off, oil the design rather than soaking it, and let it oxidise undisturbed. For my full method, including troubleshooting why fine lines come out paler than solid fills, see the dedicated guide on <a href="/blog/how-to-make-mehndi-darker">how to make mehndi darker</a>.</p>
        <blockquote><p>The honest reason most jewellery mehndi looks fake is not the drawing — it is a weak stain that never delivered the gold-against-skin contrast the whole illusion depends on. Win the colour and you are halfway to convincing.</p></blockquote>`,
    },
    {
      id: "placements-and-occasions",
      heading: "Best Placements and Occasions",
      motif: "lotus",
      html:
        `<p>Because jewellery mehndi mimics worn ornaments, it lands best exactly where real jewellery sits — and that gives you a clear map of where to put it and when.</p>
        <h3>The back of the hand</h3>
        <p>This is the home of the hathphool, and the placement most people picture. The back of the hand is flat, visible, and the natural canvas for a hand harness — rings at the fingers, a centrepiece over the bones of the hand, a cuff at the wrist. Jewellery mehndi on the back hand photographs superbly because that is the surface a camera sees when a hand is held up or rested on a lap.</p>
        <h3>The wrist and forearm</h3>
        <p>A drawn bangle stack or a single ornamental cuff at the wrist is gorgeous on its own and stacks beautifully with real bangles. Extend the cuff up the forearm and you get a layered "kada and bracelet" effect that suits brides who want richness without covering the whole hand.</p>
        <h3>The fingers</h3>
        <p>Ring-and-chain finger work is the most office-friendly slice of this style — a couple of delicate drawn rings with fine chains reads as elegant rather than elaborate, and washes nobody's hands of professionalism. It is also a lovely entry point for anyone nervous about a full hand.</p>
        <h3>The feet</h3>
        <p>The jewellery logic translates straight to feet: a drawn toe-ring (bichiya) linked by chains to an anklet-style band across the top of the foot is a foot hathphool in everything but name. Bridal feet love this — it echoes the real payal and bichiya a bride wears and ties the whole look together.</p>
        <h3>Occasions</h3>
        <p>Weddings are the natural home — this is bridal-leaning work by temperament. A full jewellery set is stunning for the Barat or the reception, where it stands in for or amplifies real ornaments. For an <a href="/engagement-mehndi-design">engagement mehndi design</a>, a single statement hathphool framing the ring finger is hard to beat. Festive occasions like Eid, Karva Chauth and Diwali suit a lighter ring-and-cuff version, and minimal working brides can carry a discreet wrist cuff into the office without a second glance.</p>`,
    },
    {
      id: "beginner-tips",
      heading: "Beginner Tips for Drawing Jewellery Mehndi",
      motif: "floral",
      html:
        `<p>Jewellery mehndi looks intimidating, but it is built from very simple shapes — dots, lines, small domes — arranged with discipline. That makes it surprisingly beginner-friendly, provided you respect the structure. Here is how I coach someone drawing their first hathphool.</p>
        <ol>
          <li><strong>Master the dot before anything else.</strong> Pearl strings and chains are just rows of consistent dots, and consistent dots are the single most valuable skill in this style. Practise rows of identical dots on paper until they are even in size and spacing — that one drill will carry most of your jewellery work.</li>
          <li><strong>Map the anchors lightly first.</strong> Before committing, place faint dots where each ring and the centrepiece will sit. Drawing to known points keeps everything symmetrical and stops chains from wandering.</li>
          <li><strong>Build the skeleton, then decorate.</strong> Rings, then centrepiece, then chains, then cuff, then texture. Always structure before fill — a beginner who fills before building ends up with a crowded hand and crooked chains.</li>
          <li><strong>Keep ornaments small and the spaces clean.</strong> Real jewellery is delicate and surrounded by bare skin. Resist the urge to fill the gaps; the negative space is what makes it read as separate pieces rather than one blob.</li>
          <li><strong>Steady your line work.</strong> Rest your wrist, pull chains in one smooth motion, and breathe out as you draw. Wobbly chains are the clearest giveaway of a nervous beginner.</li>
          <li><strong>Use a reference.</strong> Keep a photo of a real hathphool or kundan ring beside you and copy its structure. You are translating an existing object, so having the object in front of you is fair game and hugely helpful.</li>
        </ol>
        <p>Start with a single ring linked by one chain to a small wrist cuff. Nail that simple harness and you have understood the entire grammar of the style; everything more elaborate is just the same logic repeated.</p>`,
    },
    {
      id: "common-mistakes",
      heading: "Common Mistakes to Avoid",
      motif: "border",
      html:
        `<p>Most jewellery-mehndi disappointments come down to a handful of repeat offenders. I have made every one of these myself, so here is what to watch for.</p>
        <h3>Inconsistent chains and dots</h3>
        <p>The fastest way to break the metal illusion is uneven links. A chain whose dots vary in size or drift in spacing immediately reads as henna, not jewellery. Slow down on the chains; they matter more than the centrepiece.</p>
        <h3>Oversized ornaments</h3>
        <p>Drawing rings and bracelets too large is the most common beginner error. Real jewellery is small and precise. Bloated rings and a centrepiece that swallows the whole hand stop reading as ornaments and start reading as generic pattern.</p>
        <h3>Forgetting symmetry</h3>
        <p>Jewellery is balanced by nature, and a lopsided hathphool — centrepiece off-centre, one side heavier than the other — looks wrong even to people who cannot say why. Map your anchors, mirror your two hands, and check balance before you fill.</p>
        <h3>Killing the negative space</h3>
        <p>Beginners panic at bare skin and fill it, which is fatal here. The gaps between pieces are doing essential work — they are the "no metal" that makes the metal read. Leave them alone.</p>
        <h3>Skipping the structure</h3>
        <p>Improvising a jewellery hand the way you would an Arabic trail leads to chains that connect nothing and a layout that does not hang together. This is the one style where you genuinely must plan before you draw.</p>
        <h3>Letting fine lines under-stain</h3>
        <p>Thin chains and ring bands flake and dry faster than solid motifs, so they often come out paler — exactly where you needed crisp contrast. Seal early, keep the paste on, and protect those fine lines, or the whole jewellery effect goes faint.</p>`,
    },
    {
      id: "trends-2026",
      heading: "Jewellery Mehndi Trends for 2026",
      motif: "mandala",
      html:
        `<p>Jewellery mehndi is having a genuine moment, and the 2026 direction is all about realism, personalisation and a lighter touch. Here is where the style is heading this year.</p>
        <h3>Neo-heritage hathphool</h3>
        <p>The standout trend is what I call neo-heritage — drawn hathphool that lean hard into the kundan, jadau and polki textures of antique court jewellery, but with cleaner modern spacing. It is the old Mughal-Rajput vocabulary, photographed for an Instagram age: rich, recognisable goldwork with breathing room around it.</p>
        <h3>The statement single</h3>
        <p>Against the maximalism of full bridal hands, 2026 loves the statement single — one bold hathphool on an otherwise bare hand. One ring, one beautifully detailed chain, one medallion, and a great deal of clean skin. It is modern, photographs cleanly, and suits brides who want impact without density.</p>
        <h3>Crystal and Swarovski integration</h3>
        <p>Real sparkle is being layered onto drawn jewellery — tiny crystals or Swarovski accents set into the henna "stones" so the fake gems catch actual light. Done sparingly, on the centrepiece and the ring stones, it pushes the illusion from convincing to startling.</p>
        <h3>Personalised pieces</h3>
        <p>In step with the wider 2026 personalisation wave, brides are asking for initials hidden in the centrepiece, a wedding date worked into the wrist cuff, or a couple's monogram disguised as a jewellery motif. It keeps the heritage look but makes the set unmistakably theirs.</p>
        <h3>Office-appropriate minimal sets</h3>
        <p>Finally, the minimal jewellery hand is winning over working women — a single drawn ring with a fine chain to a slim wrist cuff, the whole thing reading as tasteful, permanent-looking jewellery rather than festival henna. It is the most quietly versatile version of the style, and I expect it to keep growing. For brides building toward the full wedding look, this jewellery vocabulary layers beautifully under heavier <a href="/bridal-mehndi-design">bridal mehndi design</a> coverage.</p>`,
    },
  ],
  faqs: [
    {
      question: "What is hathphool mehndi design?",
      answer:
        "Hathphool means 'hand flower' and refers to a traditional hand harness — a single ornament that links rings on the fingers to a centrepiece on the back of the hand and on to a bracelet at the wrist. Hathphool mehndi recreates that whole harness in henna, drawing the rings, connecting chains, central medallion and wrist cuff as one continuous jewellery set instead of metal.",
    },
    {
      question: "How is jewellery mehndi different from regular mehndi?",
      answer:
        "Regular mehndi flows in free motifs like paisleys, florals and vines that roam wherever the artist likes. Jewellery mehndi is governed by the logic of real ornaments — it maps rings, chains, a centrepiece and a cuff onto the hand exactly where you would wear jewellery, using bilateral symmetry, anchored end-points and deliberate negative space. It is closer to drawing a necklace than to drawing a flower.",
    },
    {
      question: "Can I wear jewellery mehndi with real ornaments?",
      answer:
        "Absolutely, and the best results come from designing it that way. Bring your real rings or hathphool to the session so the artist can place the drawn chains where the metal will not sit, letting both layers read as one rich set. Drawn henna can extend and echo your actual jewellery rather than competing with it, which is what makes the style feel like couture rather than costume.",
    },
    {
      question: "Is jewellery mehndi good for beginners?",
      answer:
        "Yes, more than it looks. It is built from very simple shapes — dots, lines and small domes — so the difficulty is in discipline, not artistry. Master consistent dots for chains and pearl strings, map your anchor points before drawing, and build the skeleton before you fill. Start with a single ring linked by one chain to a small wrist cuff, and you will have learned the entire grammar of the style.",
    },
    {
      question: "How long does a jewellery mehndi hand take to apply?",
      answer:
        "It depends entirely on coverage. A single drawn ring takes a couple of minutes; a clean wrist cuff with a ring or two runs about fifteen to twenty-five minutes; a full hathphool with chains, a detailed centrepiece and a stacked cuff is a forty-five to ninety-minute hand. A bridal-grade jewellery set with dense kundan texturing can take longer, and matching both hands roughly doubles the time.",
    },
    {
      question: "Why do the fine chain lines look paler than the rest of my design?",
      answer:
        "Thin chain lines and fine ring bands carry far less paste than big solid motifs, so they dry and flake off faster — and paste that leaves early stains weakest. The fix is to seal the design with lemon-and-sugar as soon as it sets so the fine lines stay in contact, keep the paste on as long as possible, and protect those delicate areas from knocking off, so the gold-against-skin contrast the whole illusion needs survives.",
    },
  ],
  contextualLinks: [
    { label: "Wrist & bracelet mehndi designs", href: "/wrist-mehndi-design" },
    { label: "Engagement mehndi ideas", href: "/engagement-mehndi-design" },
    { label: "Finger mehndi designs", href: "/finger-mehndi-design" },
    { label: "Bridal mehndi inspiration", href: "/bridal-mehndi-design" },
  ],
};
