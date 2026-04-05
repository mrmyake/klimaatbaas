"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface FAQItem {
  vraag: string;
  antwoord: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  primaryColor: string;
}

export default function FAQAccordion({ items, primaryColor }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      trackEvent("faq_open", {
        question: items[index].vraag,
        source_page: window.location.pathname,
      });
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-slate-200 shadow-[0_8px_24px_rgba(0,3,10,0.06)] overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-slate-50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span>{item.vraag}</span>
            <ChevronDown
              className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              style={{ color: primaryColor }}
              aria-hidden="true"
            />
          </button>
          <div
            className={`px-6 text-[#44474d] leading-relaxed transition-all duration-200 ${
              openIndex === index
                ? "pb-6 max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {item.antwoord}
          </div>
        </div>
      ))}
    </div>
  );
}
