"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, RefreshCw, Download, Heart, Search } from "lucide-react";

// All verified Unsplash mehndi CDN photo IDs
const ALL_PHOTOS = [
  { id: "1674884060571-96a46a9a7a72", tags: ["bridal", "full hand", "heavy", "wedding", "dulhan"] },
  { id: "1568566240146-a5e26db3b29b", tags: ["arabic", "half hand", "floral", "simple", "front"] },
  { id: "1566664254600-3412f985e947", tags: ["pakistani", "black", "dark", "traditional", "heavy"] },
  { id: "1571150612716-ff39d1e9ef58", tags: ["floral", "arm", "eid", "festive", "colorful"] },
  { id: "1565368114375-ba1a4db7099f", tags: ["finger", "minimal", "black", "simple", "dotwork"] },
  { id: "1777749752246-f7e4f5151217",    tags: ["minimal", "simple", "light", "clean", "everyday"] },
  { id: "1676134138844-9a52b5210cf9", tags: ["bridal", "bride", "full", "indian", "wedding"] },
  { id: "1676134014048-bcc764ea015d", tags: ["bridal", "back hand", "woman", "henna", "wedding"] },
  { id: "1525135927526-a01d9e5e9484",    tags: ["indian", "bangles", "wedding", "traditional", "full"] },
  { id: "1656702678285-59bde376828f", tags: ["intricate", "detailed", "back hand", "arabic", "heavy"] },
  { id: "1757331446901-8f935a107bc9", tags: ["hands", "both hands", "detailed", "floral", "arabic"] },
  { id: "1623217509141-6f735087b50c", tags: ["decorated", "traditional", "indian", "wedding", "henna"] },
  { id: "1562508548-69377b81ab9e",    tags: ["black", "close-up", "finger", "detailed", "dark"] },
  { id: "1774019410720-3409a533d30b", tags: ["wedding", "nepali", "romantic", "ceremony", "bridal"] },
  { id: "1764640848891-9b23d3632ccf", tags: ["floral", "intricate", "arabic", "arm", "detailed"] },
  { id: "1770346279037-89853a3e8c60", tags: ["indian", "wedding", "mehendi", "ritual", "bride"] },
  { id: "1599671229994-bc8fd4df731c", tags: ["white", "floral", "minimal", "moroccan", "clean"] },
  { id: "1716672042560-c59ebb0805e6", tags: ["close-up", "henna", "hands", "fresh", "arabic"] },
  { id: "1755234993813-054bc8c8a698", tags: ["flower", "front hand", "minimal", "fresh", "arabic"] },
  { id: "1493728484672-f0bef543e2a1", tags: ["groom", "indian", "wedding", "traditional", "male"] },
  { id: "1771992230867-6478af331c26", tags: ["bridal", "indian", "yellow saree", "wedding", "bangles"] },
  { id: "1759720888181-7b56230250d0", tags: ["bridal", "mehndi", "traditional", "indian", "heavy"] },
  { id: "1525135927526-a01d9e5e9484", tags: ["simple", "minimal", "clean", "henna", "everyday"] },
  { id: "1702062779141-d5b4655197c7", tags: ["pakistani", "lahore", "close-up", "application", "fresh"] },
  { id: "1708803962954-1893114321f0", tags: ["elegant", "simple", "arabic", "woman", "hand"] },
  { id: "1566139673479-682aa413f947", tags: ["left hand", "simple", "minimal", "clean", "basic"] },
  { id: "1563962751094-31bb84e91a4c", tags: ["black", "close-up", "finger", "dark", "bold"] },
  { id: "1563962750292-d3401f66d46b", tags: ["simple", "hand", "eid", "easy", "beginner"] },
  { id: "1777749752246-f7e4f5151217", tags: ["feet", "ankle", "henna", "red thread", "indian"] },
  { id: "1760163287823-8786a65fd269", tags: ["feet", "anklet", "elegant", "henna", "bridal"] },
  { id: "1763012422430-dec55624bc28", tags: ["feet", "sandals", "anklets", "ornate", "wedding"] },
  { id: "1505932794465-147d1f1b2c97", tags: ["multiple hands", "group", "together", "eid", "festive"] },
  { id: "1722172312997-068983715fd1", tags: ["modern", "stylish", "trendy", "fresh", "art"] },
];

const PROMPTS = [
  "Heavy bridal full hand mehndi",
  "Simple Arabic floral mehndi",
  "Pakistani traditional mehndi",
  "Minimal finger mehndi for office",
  "Eid special back hand mehndi",
  "Indian wedding bridal mehndi",
  "Feet and ankle mehndi design",
  "Modern stylish mehndi",
  "Kids easy mehndi design",
  "Dark black mehndi close-up",
];

function scorePhoto(photoTags: string[], query: string): number {
  const q = query.toLowerCase();
  const words = q.split(/\s+/).filter(Boolean);
  let score = 0;
  for (const word of words) {
    for (const tag of photoTags) {
      if (tag.includes(word) || word.includes(tag)) score += 2;
      else if (tag.charAt(0) === word.charAt(0)) score += 0.5;
    }
  }
  return score;
}

function generateDesigns(query: string, count = 12) {
  if (!query.trim()) {
    return ALL_PHOTOS.slice(0, count).map((p, i) => ({
      photoId: p.id,
      title: `Mehndi Design ${i + 1}`,
    }));
  }

  const scored = ALL_PHOTOS.map((p) => ({
    ...p,
    score: scorePhoto(p.tags, query) + Math.random() * 0.3,
  })).sort((a, b) => b.score - a.score);

  const results: { photoId: string; title: string }[] = [];
  for (let i = 0; i < count; i++) {
    const p = scored[i % scored.length];
    const variant = Math.floor(i / scored.length);
    results.push({
      photoId: p.id,
      title: variant === 0
        ? query.replace(/\b\w/g, (c) => c.toUpperCase())
        : `${query.replace(/\b\w/g, (c) => c.toUpperCase())} ${variant + 1}`,
    });
  }
  return results;
}

export default function AiGeneratorClient() {
  const [prompt, setPrompt]         = useState("");
  const [results, setResults]       = useState<{ photoId: string; title: string }[]>([]);
  const [loading, setLoading]       = useState(false);
  const [generated, setGenerated]   = useState(false);
  const [liked, setLiked]           = useState<Set<string>>(new Set());

  function handleGenerate(q = prompt) {
    if (!q.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setResults(generateDesigns(q, 12));
      setGenerated(true);
      setLoading(false);
    }, 1200);
  }

  function handleRefresh() {
    setLoading(true);
    setTimeout(() => {
      setResults(generateDesigns(prompt, 12));
      setLoading(false);
    }, 600);
  }

  function toggleLike(id: string) {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-henna-50 to-white dark:from-henna-950 dark:to-henna-900">

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-8 sm:pb-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-henna-400/10 border border-henna-400/30 text-henna-500 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <Sparkles size={13} />
          AI Powered
        </div>
        <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-semibold text-henna-900 dark:text-henna-100 mb-3 sm:mb-4 leading-tight">
          AI Mehndi Design<br />Generator
        </h1>
        <p className="text-henna-600 dark:text-henna-300 text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-10 leading-relaxed">
          Apni pasand describe karo — bridal, Arabic, Pakistani, minimal — aur instant mehndi design inspiration pao.
        </p>

        {/* Input box */}
        <div className="relative bg-white dark:bg-henna-900 rounded-2xl border-2 border-henna-200 dark:border-henna-700 shadow-lg focus-within:border-henna-400 transition-colors">
          {/* Top row: icon + input */}
          <div className="flex items-center gap-2 px-3 sm:px-4 pt-3 sm:pt-4 pb-2 sm:pb-3">
            <Search size={16} className="text-henna-400 shrink-0" />
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
              placeholder="e.g. heavy bridal full hand mehndi with flowers..."
              className="flex-1 min-w-0 bg-transparent text-henna-800 dark:text-henna-100 placeholder:text-henna-400 text-sm sm:text-base outline-none"
            />
          </div>
          {/* Bottom row: Generate button — full width on mobile */}
          <div className="px-3 sm:px-4 pb-3 sm:pb-4">
            <button
              onClick={() => handleGenerate()}
              disabled={!prompt.trim() || loading}
              className="w-full sm:w-auto sm:float-right flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-henna-400 hover:bg-henna-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all"
            >
              {loading ? (
                <RefreshCw size={14} className="animate-spin" />
              ) : (
                <Sparkles size={14} />
              )}
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>

        {/* Quick prompts */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-4">
          {PROMPTS.map((p) => (
            <button
              key={p}
              onClick={() => { setPrompt(p); handleGenerate(p); }}
              className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-full border border-henna-300 dark:border-henna-700 text-henna-600 dark:text-henna-300 hover:bg-henna-100 dark:hover:bg-henna-800 hover:border-henna-400 transition-all"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {generated && (
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100">
                Generated Designs
              </h2>
              <p className="text-sm text-henna-500 mt-0.5">
                &ldquo;{prompt}&rdquo; ke liye {results.length} designs
              </p>
            </div>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-xl border border-henna-300 dark:border-henna-700 text-henna-600 dark:text-henna-300 hover:bg-henna-100 dark:hover:bg-henna-800 transition-all"
            >
              <RefreshCw size={14} />
              Regenerate
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map((r, i) => (
              <div key={`${r.photoId}-${i}`} className="group relative rounded-2xl overflow-hidden bg-henna-100 dark:bg-henna-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={`https://images.unsplash.com/photo-${r.photoId}?w=400&q=80&fit=crop&crop=entropy`}
                    alt={r.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Overlay actions */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-medium leading-tight drop-shadow">
                      {r.title}
                    </p>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => toggleLike(`${r.photoId}-${i}`)}
                        className={`p-1.5 rounded-full backdrop-blur-sm transition-colors ${
                          liked.has(`${r.photoId}-${i}`)
                            ? "bg-red-500 text-white"
                            : "bg-white/20 text-white hover:bg-white/30"
                        }`}
                      >
                        <Heart size={12} fill={liked.has(`${r.photoId}-${i}`) ? "currentColor" : "none"} />
                      </button>
                      <a
                        href={`https://images.unsplash.com/photo-${r.photoId}?w=1200&q=90`}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-colors"
                      >
                        <Download size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Browse more */}
          <div className="text-center mt-10">
            <p className="text-henna-500 text-sm mb-4">Aur zyada designs ke liye categories browse karo</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["bridal-mehndi","arabic-mehndi","pakistani-mehndi","eid-mehndi","minimal-mehndi"].map((slug) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="px-4 py-2 rounded-xl border border-henna-300 dark:border-henna-700 text-henna-600 dark:text-henna-300 text-sm hover:bg-henna-100 dark:hover:bg-henna-800 transition-all capitalize"
                >
                  {slug.replace(/-mehndi/, "").replace(/-/g, " ")} Mehndi
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!generated && (
        <div className="max-w-2xl mx-auto px-4 pb-20 text-center">
          <div className="grid grid-cols-3 gap-3 mb-6 opacity-40">
            {[
              "1674884060571-96a46a9a7a72",
              "1568566240146-a5e26db3b29b",
              "1571150612716-ff39d1e9ef58",
              "1525135927526-a01d9e5e9484",
              "1716672042560-c59ebb0805e6",
              "1755234993813-054bc8c8a698",
            ].map((id) => (
              <div key={id} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${id}?w=300&q=70&fit=crop`}
                  alt="mehndi preview"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            ))}
          </div>
          <p className="text-henna-400 text-sm">Upar apni pasand likho aur Generate dabao ✨</p>
        </div>
      )}
    </div>
  );
}
