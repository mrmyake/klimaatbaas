"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  vraag: string;
  antwoord: string;
}

interface FAQProps {
  items: FAQItem[];
  primaryColor: string;
  isDark?: boolean;
}

export default function FAQ({ items, primaryColor, isDark = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.vraag,
      acceptedAnswer: { "@type": "Answer", text: item.antwoord },
    })),
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? "text-white/40" : "text-gray-500"}`}>
          Veelgesteld
        </p>
        <h2 className={`font-heading text-4xl font-black tracking-tight mb-12 ${isDark ? "text-white" : ""}`}>
          Veelgestelde vragen
        </h2>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border border-slate-200 shadow-[0_8px_24px_rgba(0,3,10,0.06)]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-6 text-left font-bold transition-colors ${
                  isDark ? "text-white hover:bg-white/5" : "hover:bg-slate-50"
                }`}
                aria-expanded={openIndex === index}
              >
                <span>{item.vraag}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 ml-4 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  style={{ color: primaryColor }}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`px-6 leading-relaxed transition-all ${
                  isDark ? "text-white/60" : "text-[#44474d]"
                } ${openIndex === index ? "pb-6 max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                {item.antwoord}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
