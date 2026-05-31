import Link from "next/link";

// High-intent "popular searches" that each link to the BEST matching page
// (a real category, not /search), spreading internal link equity to key pages.
const POPULAR: { label: string; href: string }[] = [
  { label: "Bridal Mehndi Designs", href: "/bridal-mehndi-design" },
  { label: "Arabic Mehndi Designs", href: "/arabic-mehndi-design" },
  { label: "Dulhan Mehndi", href: "/dulhan-mehndi-design" },
  { label: "Simple Mehndi Designs", href: "/easy-mehndi-design" },
  { label: "Engagement Mehndi", href: "/engagement-mehndi-design" },
  { label: "Peacock Mehndi", href: "/peacock-mehndi-design" },
  { label: "Mandala Mehndi", href: "/mandala-mehndi-design" },
  { label: "Finger Mehndi", href: "/finger-mehndi-design" },
  { label: "Front Hand Mehndi", href: "/front-hand-mehndi-design" },
  { label: "Back Hand Mehndi", href: "/back-hand-mehndi-design" },
  { label: "Feet Mehndi", href: "/feet-mehndi-design" },
  { label: "Eid Mehndi Designs", href: "/eid-mehndi-design" },
  { label: "Pakistani Mehndi", href: "/pakistani-mehndi-design" },
  { label: "Jewellery Mehndi", href: "/jewellery-mehndi-design" },
  { label: "Shaded Mehndi", href: "/shaded-mehndi-design" },
  { label: "Khafif Mehndi", href: "/khafif-mehndi-design" },
];

export default function PopularSearches({
  heading = "Popular Mehndi Searches",
  className = "",
}: {
  heading?: string;
  className?: string;
}) {
  return (
    <section className={className} aria-label={heading}>
      {heading && (
        <h2 className="text-sm font-semibold uppercase tracking-wide text-henna-600 dark:text-henna-300 mb-3">
          {heading}
        </h2>
      )}
      <div className="flex flex-wrap gap-2">
        {POPULAR.map((p) => (
          <Link key={p.href} href={p.href} className="tag-pill text-xs">
            {p.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
