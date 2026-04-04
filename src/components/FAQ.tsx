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
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Veelgestelde vragen
        </h2>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-white/50 transition-colors"
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
              {/* Always render answer in DOM for crawlers, visually toggle */}
              <div
                className={`px-5 text-gray-600 leading-relaxed transition-all ${
                  openIndex === index
                    ? "pb-5 max-h-96 opacity-100"
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
