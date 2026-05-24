"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="py-10 max-w-3xl mx-auto px-4 sm:px-6"
      aria-labelledby="faq-heading"
    >
      {/* JSON-LD only — no microdata to avoid duplicate FAQPage schema */}
      <JsonLd data={faqSchema(faqs)} />

      <h2
        id="faq-heading"
        className="font-serif text-2xl font-semibold text-henna-900 dark:text-henna-100 mb-6"
      >
        {title}
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={faq.question}
            className="border border-henna-200 dark:border-henna-800 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white dark:bg-henna-900 hover:bg-henna-50 dark:hover:bg-henna-800 transition-colors"
              aria-expanded={open === i}
            >
              <span className="font-medium text-sm text-henna-900 dark:text-henna-100">
                {faq.question}
              </span>
              <ChevronDown
                size={16}
                className={`text-henna-400 flex-shrink-0 transition-transform duration-200 ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === i && (
              <div className="px-5 py-4 bg-henna-50 dark:bg-henna-800 border-t border-henna-200 dark:border-henna-700">
                <p className="text-sm text-henna-700 dark:text-henna-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
