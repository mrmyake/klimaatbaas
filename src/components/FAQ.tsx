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
}

export default function FAQ({ items, primaryColor }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.vraag,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.antwoord,
      },
    })),
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
          Veelgesteld
        </p>
        <h2 className="font-heading text-4xl font-black tracking-tight mb-12">
          Veelgestelde vragen
        </h2>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-[0_8px_24px_rgba(0,3,10,0.06)]"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span>{item.vraag}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 ml-4 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ color: primaryColor }}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`px-6 text-[#44474d] leading-relaxed transition-all ${
                  openIndex === index
                    ? "pb-6 max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
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
