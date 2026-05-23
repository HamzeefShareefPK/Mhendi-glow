"use client";

import { useState } from "react";
import { Mail, CheckCircle, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail]         = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 text-center"
          style={{ background: "linear-gradient(135deg, #3D1F0A 0%, #5C2E10 50%, #3D1F0A 100%)" }}
        >
          {/* Decorative circles — responsive */}
          <div className="absolute -top-10 -right-10 sm:-top-16 sm:-right-16 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-henna-400/10" />
          <div className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-henna-300/8" />

          <div className="relative z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-henna-400/20 border border-henna-400/30 flex items-center justify-center mx-auto mb-4 sm:mb-5 backdrop-blur-sm">
              <Mail size={22} className="text-henna-300 sm:hidden" />
              <Mail size={24} className="text-henna-300 hidden sm:block" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-henna-400/15 border border-henna-400/20 text-henna-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
              <Sparkles size={10} /> Free Weekly Newsletter
            </div>

            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-2 sm:mb-3 leading-tight">
              Weekly Mehndi Inspiration
            </h2>
            <p className="text-henna-200/70 text-xs sm:text-sm lg:text-base mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
              Get the best mehndi designs, seasonal trends, and expert tips delivered to your inbox every week — completely free.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-2.5 py-3">
                <div className="w-8 h-8 rounded-full bg-henna-400/20 flex items-center justify-center shrink-0">
                  <CheckCircle size={18} className="text-henna-400" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">You&apos;re subscribed!</p>
                  <p className="text-henna-300/70 text-xs">Check your inbox for a welcome email 🌸</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 sm:px-5 py-3 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder:text-henna-300/50 outline-none focus:border-henna-400/60 focus:bg-white/15 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-henna-400/30"
                  style={{ background: "linear-gradient(135deg, #C8946A, #9A6838)", color: "#FDF8F2" }}
                >
                  Subscribe Free
                </button>
              </form>
            )}

            <p className="text-[10px] sm:text-xs text-henna-400/50 mt-4 sm:mt-5">
              No spam. Unsubscribe anytime. 100% free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
