"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-5 sm:right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center text-white shadow-xl shadow-henna-700/30 hover:shadow-2xl hover:shadow-henna-600/35 hover:-translate-y-1 transition-all duration-200 animate-scale-in"
      style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)" }}
      aria-label="Back to top"
    >
      <ArrowUp size={16} strokeWidth={2.5} />
    </button>
  );
}
