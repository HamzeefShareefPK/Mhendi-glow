import type { SVGProps } from "react";
import type { MotifName } from "@/types";

// Hand-drawn-style mehndi line-art motifs.
// All use stroke="currentColor" + fill="none" so they inherit text color and
// adapt to dark mode. They are decorative (aria-hidden) and inlined into the
// server-rendered HTML — zero extra network requests, no layout shift.

const base = (props: SVGProps<SVGSVGElement>) => ({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  role: "presentation",
  focusable: false,
  ...props,
});

export function PaisleyMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...base(props)}>
      <path d="M40 8c12 6 16 22 8 34-7 11-22 14-30 6-6-6-5-15 2-18 6-3 13 1 12 8-1 4-5 6-8 4" />
      <path d="M37 20c4 3 5 9 2 14-2 4-7 6-11 4" />
      <circle cx="34" cy="28" r="2.2" />
      <path d="M44 14c2 1 3 3 3 5M48 20c2 1 3 3 3 5M50 28c2 1 3 3 3 5" />
    </svg>
  );
}

export function FloralMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...base(props)}>
      <circle cx="32" cy="32" r="4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <path
          key={a}
          d="M32 28c5-7 12-7 12 0 0 5-7 8-12 4"
          transform={`rotate(${a} 32 32)`}
        />
      ))}
    </svg>
  );
}

export function MandalaMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...base(props)}>
      <circle cx="32" cy="32" r="6" />
      <circle cx="32" cy="32" r="14" />
      <circle cx="32" cy="32" r="24" />
      {Array.from({ length: 12 }).map((_, i) => (
        <path
          key={i}
          d="M32 8v6M32 50v6"
          transform={`rotate(${i * 30} 32 32)`}
        />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <circle key={`d${i}`} cx="32" cy="14" r="1.4" transform={`rotate(${i * 30} 32 32)`} />
      ))}
    </svg>
  );
}

export function VineMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 32" {...base(props)}>
      <path d="M4 16c30-18 50 18 80 0s50-18 80 0 50 18 72 0" />
      {[40, 120, 200].map((x) => (
        <g key={x}>
          <path d={`M${x} 16c-6-6-6-12 0-14 6 2 6 8 0 14`} />
          <path d={`M${x} 16c6 6 6 12 0 14-6-2-6-8 0-14`} />
        </g>
      ))}
    </svg>
  );
}

export function LotusMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...base(props)}>
      <path d="M32 52c-14 0-24-8-24-8s4-14 24-14 24 14 24 14-10 8-24 8z" />
      <path d="M32 30c-6-8-6-18 0-24 6 6 6 16 0 24z" />
      <path d="M32 32c-10-4-16-12-16-20 8 2 14 8 16 16" />
      <path d="M32 32c10-4 16-12 16-20-8 2-14 8-16 16" />
    </svg>
  );
}

export function BorderMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 16" {...base(props)}>
      <path d="M0 8h240" strokeWidth={0.8} />
      {Array.from({ length: 13 }).map((_, i) => (
        <g key={i} transform={`translate(${i * 20 + 4} 0)`}>
          <path d="M0 8c3-5 9-5 12 0-3 5-9 5-12 0z" />
          <circle cx="6" cy="8" r="0.9" />
        </g>
      ))}
    </svg>
  );
}

const MOTIFS: Record<MotifName, (p: SVGProps<SVGSVGElement>) => JSX.Element> = {
  paisley: PaisleyMotif,
  floral: FloralMotif,
  mandala: MandalaMotif,
  vine: VineMotif,
  lotus: LotusMotif,
  border: BorderMotif,
};

export function MehndiMotif({
  name,
  className = "text-henna-300/60 dark:text-henna-700",
}: {
  name: MotifName;
  className?: string;
}) {
  const Comp = MOTIFS[name] ?? VineMotif;
  // Wide motifs render as full-width dividers; round motifs as centered accents.
  const isWide = name === "vine" || name === "border";
  return (
    <div className={`flex justify-center my-8 ${className}`} aria-hidden="true">
      <Comp className={isWide ? "w-full max-w-md h-auto" : "w-12 h-12"} />
    </div>
  );
}
