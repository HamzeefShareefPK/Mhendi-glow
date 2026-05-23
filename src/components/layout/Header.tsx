"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Search, Sun, Moon, Menu, X, Sparkles, ChevronDown, Instagram } from "lucide-react";
import { categories } from "@/data";

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
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (catRef.current && !catRef.current.contains(e.target as Node)) setCatOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const goSearch = () => {
    if (query.trim()) window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-md shadow-henna-900/5"
            : "bg-henna-50/98 dark:bg-henna-950/98 border-b border-henna-200/50 dark:border-henna-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[90px] sm:h-[110px] md:h-[120px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center group shrink-0" onClick={() => setMenuOpen(false)}>
              <Image
                src="/images/logo.svg"
                alt="MehndiDesignPics — Art of Henna & Beauty"
                width={520}
                height={110}
                className="h-[76px] sm:h-[96px] md:h-[110px] w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
                priority
                unoptimized
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">

              {/* Categories Dropdown */}
              <div className="relative" ref={catRef}>
                <button
                  onClick={() => setCatOpen(!catOpen)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    catOpen
                      ? "bg-henna-100 dark:bg-henna-800/80 text-henna-700 dark:text-henna-200"
                      : "text-henna-700 dark:text-henna-300 hover:bg-henna-100/80 dark:hover:bg-henna-800/60 hover:text-henna-600"
                  }`}
                  aria-expanded={catOpen}
                  aria-haspopup="true"
                >
                  Categories
                  <ChevronDown size={13} className={`transition-transform duration-200 opacity-60 ${catOpen ? "rotate-180" : ""}`} />
                </button>

                {catOpen && (
                  <div className="absolute top-full left-0 mt-2.5 w-[280px] bg-white dark:bg-henna-900 rounded-2xl shadow-xl shadow-henna-900/12 dark:shadow-black/40 border border-henna-100 dark:border-henna-800 p-2 animate-slide-down overflow-hidden">
                    <div className="grid grid-cols-2 gap-0.5">
                      {categories.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/${c.slug}`}
                          onClick={() => setCatOpen(false)}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-henna-700 dark:text-henna-300 hover:bg-henna-50 dark:hover:bg-henna-800 hover:text-henna-600 dark:hover:text-henna-200 transition-colors font-medium"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-1 pt-1.5 border-t border-henna-100 dark:border-henna-800/60">
                      <Link
                        href="/categories"
                        onClick={() => setCatOpen(false)}
                        className="flex items-center justify-center gap-1 text-xs text-henna-400 hover:text-henna-500 font-semibold py-1.5 transition-colors"
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
                  className="px-4 py-2 rounded-full text-sm font-medium text-henna-700 dark:text-henna-300 hover:bg-henna-100/80 dark:hover:bg-henna-800/60 hover:text-henna-600 transition-all duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-1">

              {/* AI Generator pill */}
              <Link
                href="/ai-generator"
                className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-px"
                style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)", color: "#FDF8F2" }}
              >
                <Sparkles size={12} />
                AI Generator
              </Link>

              {/* Search toggle */}
              {searchOpen ? (
                <div className="flex items-center gap-2 animate-scale-in">
                  <div className="relative">
                    <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-henna-400 pointer-events-none" />
                    <input
                      ref={searchRef}
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search designs…"
                      className="w-44 sm:w-56 text-sm pl-9 pr-4 py-2.5 rounded-full border-1.5 border-henna-200 dark:border-henna-700 bg-white dark:bg-henna-900 text-henna-800 dark:text-henna-100 outline-none focus:border-henna-400 focus:ring-2 focus:ring-henna-400/15 transition-all"
                      onKeyDown={(e) => { if (e.key === "Enter") goSearch(); if (e.key === "Escape") setSearchOpen(false); }}
                    />
                  </div>
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="p-2 rounded-full text-henna-500 hover:bg-henna-100 dark:hover:bg-henna-800 transition-colors"
                    aria-label="Close search"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2.5 rounded-full text-henna-600 dark:text-henna-400 hover:bg-henna-100 dark:hover:bg-henna-800 hover:text-henna-500 transition-all duration-200"
                  aria-label="Open search"
                >
                  <Search size={16} />
                </button>
              )}

              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2.5 rounded-full text-henna-600 dark:text-henna-400 hover:bg-henna-100 dark:hover:bg-henna-800 hover:text-henna-500 transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              )}

              {/* Social links — desktop */}
              <div className="hidden lg:flex items-center gap-0.5 ml-1 pl-2.5 border-l border-henna-200/70 dark:border-henna-700/70">
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="p-2 rounded-full text-henna-500 dark:text-henna-400 hover:text-henna-600 hover:bg-henna-100 dark:hover:bg-henna-800 transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-full text-henna-500 dark:text-henna-400 hover:text-henna-600 hover:bg-henna-100 dark:hover:bg-henna-800 transition-all"
                >
                  <Instagram size={14} />
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2.5 rounded-full text-henna-700 dark:text-henna-300 hover:bg-henna-100 dark:hover:bg-henna-800 transition-all ml-0.5"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-henna-950/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] max-w-[88vw] bg-white dark:bg-henna-950 shadow-2xl md:hidden transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-[88px] border-b border-henna-100 dark:border-henna-800/80">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="MehndiDesignPics — Art of Henna & Beauty"
              width={420}
              height={90}
              className="h-[70px] w-auto object-contain"
              unoptimized
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full text-henna-500 hover:bg-henna-100 dark:hover:bg-henna-800 transition-colors"
            aria-label="Close menu"
          >
            <X size={17} />
          </button>
        </div>

        {/* Drawer body */}
        <div className="overflow-y-auto h-[calc(100%-64px)] px-4 py-5 space-y-1">

          {/* AI Generator CTA */}
          <Link
            href="/ai-generator"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5 w-full px-4 py-3.5 rounded-2xl text-sm font-bold mb-4 transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)", color: "#FDF8F2" }}
          >
            <Sparkles size={15} />
            AI Mehndi Generator
            <span className="ml-auto text-[10px] bg-white/20 px-2 py-0.5 rounded-full">New</span>
          </Link>

          {[
            { href: "/blog",    label: "Blog" },
            { href: "/about",   label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-henna-700 dark:text-henna-300 hover:bg-henna-50 dark:hover:bg-henna-800/60 transition-colors">
              {l.label}
            </Link>
          ))}

          {/* Categories */}
          <div className="pt-3">
            <p className="text-[10px] font-bold text-henna-400/80 dark:text-henna-500 uppercase tracking-[0.12em] px-4 mb-2">
              Design Categories
            </p>
            <div className="grid grid-cols-2 gap-1">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 text-sm text-henna-700 dark:text-henna-300 hover:bg-henna-50 dark:hover:bg-henna-800/60 rounded-xl transition-colors font-medium"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="pt-4 pb-2">
            <div className="flex items-center gap-2.5 px-2">
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-henna-200 dark:border-henna-700/60 text-henna-500 text-xs font-semibold hover:border-henna-400 hover:text-henna-500 hover:bg-henna-50 dark:hover:bg-henna-800/40 transition-all">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                Pinterest
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-henna-200 dark:border-henna-700/60 text-henna-500 text-xs font-semibold hover:border-henna-400 hover:text-henna-500 hover:bg-henna-50 dark:hover:bg-henna-800/40 transition-all">
                <Instagram size={12} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
