"use client";

import Link from "next/link";
import { Instagram, Mail, Heart, ArrowRight } from "lucide-react";
import { categories } from "@/data";

const QUICK_LINKS = [
  { href: "/blog",           label: "Blog" },
  { href: "/ai-generator",   label: "AI Generator" },
  { href: "/about",          label: "About Us" },
  { href: "/contact",        label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms",          label: "Terms & Conditions" },
  { href: "/disclaimer",     label: "Disclaimer" },
  { href: "/dmca",           label: "DMCA" },
];

export default function Footer() {
  return (
    <footer className="bg-henna-950 dark:bg-[#0E0704] text-henna-300 mt-16 sm:mt-24 border-t border-henna-900/60">

      {/* Top accent line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #C8946A40, #C8946A60, #C8946A40, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main grid */}
        <div className="pt-14 pb-10 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-base shadow-lg shadow-henna-400/20 transition-transform duration-300 group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #C8946A, #7A4020)" }}>
                🌸
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold text-white group-hover:text-henna-400 transition-colors tracking-tight">
                  MehndiGlow
                </span>
                <span className="text-[9px] font-semibold tracking-[0.12em] uppercase text-henna-600 mt-0.5">
                  Design Gallery
                </span>
              </div>
            </Link>

            <p className="text-sm text-henna-500 mb-6 leading-relaxed max-w-[220px]">
              Your daily dose of mehndi inspiration. 1000+ beautiful designs for every occasion — completely free.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {[
                {
                  href: "https://pinterest.com",
                  label: "Pinterest",
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                    </svg>
                  ),
                },
                { href: "https://instagram.com",           label: "Instagram", icon: <Instagram size={13} /> },
                { href: "mailto:hello@mehndidesignpics.com",     label: "Email",     icon: <Mail size={13} /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-henna-800 flex items-center justify-center text-henna-500 hover:text-white hover:border-henna-600 hover:bg-henna-800/80 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-henna-600 mb-5">
              Design Categories
            </h3>
            <ul className="space-y-2.5">
              {categories.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}`}
                    className="text-sm text-henna-500 hover:text-henna-300 transition-colors leading-none flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{c.name} Mehndi</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-henna-600 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-henna-500 hover:text-henna-300 transition-colors flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-henna-600 mb-5">
              Stay Inspired
            </h3>
            <p className="text-sm text-henna-500/80 mb-4 leading-relaxed">
              Weekly mehndi inspiration — free in your inbox.
            </p>
            <form className="space-y-2.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-henna-900 border border-henna-800/80 text-henna-200 placeholder:text-henna-700 focus:outline-none focus:border-henna-600/80 focus:bg-henna-900/80 transition-all"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
                style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)", color: "#FDF8F2" }}
              >
                Subscribe Free
                <ArrowRight size={13} />
              </button>
            </form>
            <p className="text-[10px] text-henna-700 mt-2.5">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-henna-900/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-henna-700">
            © {new Date().getFullYear()} MehndiGlow. All Rights Reserved.
          </p>
          <p className="text-xs text-henna-800 flex items-center gap-1.5">
            Made with <Heart size={9} className="text-henna-700 fill-henna-700" /> for mehndi lovers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
