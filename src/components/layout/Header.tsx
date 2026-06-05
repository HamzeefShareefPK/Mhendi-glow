"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Search, Sun, Moon, Menu, X, Sparkles, ChevronDown, Instagram } from "lucide-react";
import { categories } from "@/data";

/* ── Mega-menu groups (like a grouped categories mega-menu) ── */
const CATEGORY_GROUPS: { title: string; slugs: string[] }[] = [
  {
    title: "Bridal & Wedding",
    slugs: [
      "bridal-mehndi-design", "dulhan-mehndi-design", "engagement-mehndi-design",
      "jewellery-mehndi-design", "rajasthani-mehndi-design", "indian-mehndi-design",
      "pakistani-mehndi-design",
    ],
  },
  {
    title: "By Style",
    slugs: [
      "arabic-mehndi-design", "floral-mehndi-design", "peacock-mehndi-design",
      "mandala-mehndi-design", "jaal-mehndi-design", "gol-tikki-mehndi-design",
      "circle-mehndi-design", "moroccan-mehndi-design", "shaded-mehndi-design",
      "khafif-mehndi-design", "minimal-mehndi-design", "stylish-mehndi-design",
      "mehndi-tattoo-design",
    ],
  },
  {
    title: "By Placement",
    slugs: [
      "front-hand-mehndi-design", "back-hand-mehndi-design", "half-hand-mehndi-design",
      "finger-mehndi-design", "wrist-mehndi-design", "feet-mehndi-design",
    ],
  },
  {
    title: "Occasion & Easy",
    slugs: ["eid-mehndi-design", "kids-mehndi-design", "easy-mehndi-design"],
  },
];

const CAT_BY_SLUG = Object.fromEntries(categories.map((c) => [c.slug, c]));

/* ── Navbar heights (keep in sync with drawer header) ── */
const H_MOBILE  = 64;   // px
const H_TABLET  = 80;   // px
const H_DESKTOP = 96;   // px

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted]       = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [catOpen, setCatOpen]       = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery]           = useState("");
  const [scrolled, setScrolled]     = useState(false);
  const catRef    = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close category dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (catRef.current && !catRef.current.contains(e.target as Node)) setCatOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* auto-focus search input */
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const goSearch = () => {
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* ════════════════════════════════════
          MAIN HEADER
      ════════════════════════════════════ */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-md shadow-henna-900/8"
            : "bg-white/98 dark:bg-henna-950/98 border-b border-henna-200/50 dark:border-henna-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          <div
            className="relative flex items-center justify-between"
            style={{ height: `${H_MOBILE}px` }}
          >
            {/* ── Logo ── */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center shrink-0 group"
            >
              <Image
                src="/images/logo.svg"
                alt="MehndiDesignPics — Art of Henna & Beauty"
                width={480}
                height={100}
                className="
                  h-[46px]
                  xs:h-[52px]
                  sm:h-[58px]
                  md:h-[68px]
                  lg:h-[76px]
                  w-auto object-contain
                  transition-opacity duration-300
                  group-hover:opacity-80
                "
                priority
                unoptimized
              />
            </Link>

            {/* ── Desktop Nav (md+) ── */}
            <nav
              className="hidden md:flex items-center gap-0.5 lg:gap-1"
              aria-label="Main navigation"
            >
              {/* Categories dropdown */}
              <div className="relative" ref={catRef}>
                <button
                  onClick={() => setCatOpen(!catOpen)}
                  className={`flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    catOpen
                      ? "bg-henna-100 dark:bg-henna-800/80 text-henna-700 dark:text-henna-200"
                      : "text-henna-700 dark:text-henna-300 hover:bg-henna-100/80 dark:hover:bg-henna-800/60"
                  }`}
                  aria-expanded={catOpen}
                  aria-haspopup="true"
                >
                  Categories
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 opacity-60 ${catOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {catOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[680px] lg:w-[760px] max-w-[92vw] bg-white dark:bg-henna-900 rounded-2xl shadow-xl shadow-henna-900/12 dark:shadow-black/40 border border-henna-100 dark:border-henna-800 p-5 animate-slide-down z-50">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
                      {CATEGORY_GROUPS.map((group) => (
                        <div key={group.title}>
                          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-henna-400 mb-2 px-2">
                            {group.title}
                          </p>
                          <ul className="space-y-0.5">
                            {group.slugs.map((slug) => {
                              const c = CAT_BY_SLUG[slug];
                              if (!c) return null;
                              return (
                                <li key={slug}>
                                  <Link
                                    href={`/${slug}`}
                                    onClick={() => setCatOpen(false)}
                                    className="block px-2 py-1.5 rounded-lg hover:bg-henna-50 dark:hover:bg-henna-800 transition-colors group/item"
                                  >
                                    <span className="block text-sm font-medium text-henna-800 dark:text-henna-200 group-hover/item:text-henna-600 leading-tight">
                                      {c.name} Mehndi
                                    </span>
                                    <span className="block text-[11px] text-henna-400 dark:text-henna-500 leading-tight">
                                      {c.count}+ designs
                                    </span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-henna-100 dark:border-henna-800/60 flex items-center justify-between px-2">
                      <span className="text-[11px] text-henna-400">{categories.length} mehndi categories</span>
                      <Link
                        href="/categories"
                        onClick={() => setCatOpen(false)}
                        className="inline-flex items-center gap-1 text-xs text-henna-500 hover:text-henna-600 font-semibold transition-colors"
                      >
                        View all categories →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {[
                { href: "/blog",  label: "Blog"  },
                { href: "/about", label: "About" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium text-henna-700 dark:text-henna-300 hover:bg-henna-100/80 dark:hover:bg-henna-800/60 transition-all duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* ── Right actions ── */}
            <div className="flex items-center gap-0.5 sm:gap-1">

              {/* AI Generator — hidden on mobile */}
              <Link
                href="/ai-generator"
                className="hidden md:flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-px whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)", color: "#FDF8F2" }}
              >
                <Sparkles size={11} />
                AI Generator
              </Link>

              {/* Search */}
              {searchOpen ? (
                <>
                  {/* Mobile: full-width overlay over the entire navbar row */}
                  <div className="md:hidden absolute inset-0 z-20 flex items-center gap-2 px-3 bg-white dark:bg-henna-950 border-b border-henna-200/60 dark:border-henna-800/60">
                    <Search size={15} className="text-henna-400 shrink-0" />
                    <input
                      ref={searchRef}
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search mehndi designs…"
                      className="flex-1 min-w-0 text-sm bg-transparent text-henna-800 dark:text-henna-100 outline-none placeholder:text-henna-400 dark:placeholder:text-henna-600"
                      onKeyDown={(e) => {
                        if (e.key === "Enter")  goSearch();
                        if (e.key === "Escape") setSearchOpen(false);
                      }}
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="p-2 rounded-full text-henna-500 hover:bg-henna-100 dark:hover:bg-henna-800 transition-colors shrink-0"
                      aria-label="Close search"
                    >
                      <X size={17} />
                    </button>
                  </div>

                  {/* Desktop: inline search bar */}
                  <div className="hidden md:flex items-center gap-2">
                    <div className="relative">
                      <Search
                        size={13}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-henna-400 pointer-events-none"
                      />
                      <input
                        ref={searchRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search designs…"
                        className="w-44 lg:w-56 text-sm pl-8 pr-3 py-2 rounded-full border border-henna-200 dark:border-henna-700 bg-white dark:bg-henna-900 text-henna-800 dark:text-henna-100 outline-none focus:border-henna-400 focus:ring-2 focus:ring-henna-400/15 transition-all"
                        onKeyDown={(e) => {
                          if (e.key === "Enter")  goSearch();
                          if (e.key === "Escape") setSearchOpen(false);
                        }}
                      />
                    </div>
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="p-2 rounded-full text-henna-500 hover:bg-henna-100 dark:hover:bg-henna-800 transition-colors"
                      aria-label="Close search"
                    >
                      <X size={15} />
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 sm:p-2.5 rounded-full text-henna-600 dark:text-henna-400 hover:bg-henna-100 dark:hover:bg-henna-800 transition-all duration-200"
                  aria-label="Search"
                >
                  <Search size={17} />
                </button>
              )}

              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 sm:p-2.5 rounded-full text-henna-600 dark:text-henna-400 hover:bg-henna-100 dark:hover:bg-henna-800 transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              )}

              {/* Social links — large desktop only */}
              <div className="hidden lg:flex items-center gap-0.5 ml-1 pl-2.5 border-l border-henna-200/70 dark:border-henna-700/70">
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"
                  className="p-2 rounded-full text-henna-500 dark:text-henna-400 hover:text-henna-600 hover:bg-henna-100 dark:hover:bg-henna-800 transition-all">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="p-2 rounded-full text-henna-500 dark:text-henna-400 hover:text-henna-600 hover:bg-henna-100 dark:hover:bg-henna-800 transition-all">
                  <Instagram size={13} />
                </a>
              </div>

              {/* Hamburger — mobile & tablet */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 sm:p-2.5 rounded-full text-henna-700 dark:text-henna-300 hover:bg-henna-100 dark:hover:bg-henna-800 transition-all ml-0.5"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════
          MOBILE OVERLAY
      ════════════════════════════════════ */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════ */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`
          fixed top-0 right-0 z-50 h-full
          w-[280px] max-w-[85vw]
          bg-white dark:bg-henna-950
          shadow-2xl md:hidden
          transition-transform duration-300 ease-out
          flex flex-col
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer header — same height as navbar */}
        <div
          className="flex items-center justify-between px-4 shrink-0 border-b border-henna-100 dark:border-henna-800/80"
          style={{ height: `${H_MOBILE}px` }}
        >
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="MehndiDesignPics"
              width={220}
              height={50}
              className="h-[44px] w-auto object-contain"
              unoptimized
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full text-henna-500 hover:bg-henna-100 dark:hover:bg-henna-800 transition-colors shrink-0"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer body — scrollable */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">

          {/* AI Generator CTA */}
          <Link
            href="/ai-generator"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5 w-full px-4 py-3 rounded-2xl text-sm font-bold mb-3 transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)", color: "#FDF8F2" }}
          >
            <Sparkles size={14} />
            AI Mehndi Generator
            <span className="ml-auto text-[10px] bg-white/20 px-2 py-0.5 rounded-full">New</span>
          </Link>

          {/* Main links */}
          {[
            { href: "/blog",    label: "Blog"    },
            { href: "/about",   label: "About"   },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-henna-700 dark:text-henna-300 hover:bg-henna-50 dark:hover:bg-henna-800/60 transition-colors"
            >
              {l.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="pt-2 pb-1">
            <p className="text-[10px] font-bold text-henna-400/70 dark:text-henna-600 uppercase tracking-[0.14em] px-4 mb-2">
              Design Categories
            </p>
            <div className="grid grid-cols-2 gap-1">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 text-xs font-medium text-henna-700 dark:text-henna-300 hover:bg-henna-50 dark:hover:bg-henna-800/60 rounded-xl transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="pt-3 pb-4">
            <div className="flex items-center gap-2 px-1">
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-henna-200 dark:border-henna-700/60 text-henna-500 text-xs font-semibold hover:bg-henna-50 dark:hover:bg-henna-800/40 transition-all"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
                Pinterest
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-henna-200 dark:border-henna-700/60 text-henna-500 text-xs font-semibold hover:bg-henna-50 dark:hover:bg-henna-800/40 transition-all"
              >
                <Instagram size={11} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
