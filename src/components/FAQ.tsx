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

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
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
              >
                <span>{item.vraag}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 ml-4 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ color: primaryColor }}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {item.antwoord}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
