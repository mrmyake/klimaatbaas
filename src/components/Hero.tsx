"use client";

import { ArrowDown } from "lucide-react";

interface HeroProps {
  kop: string;
  subkop: string;
  cta: string | { label: string; href: string; color: string }[];
  bgClass: string;
  primaryColor: string;
  onCtaClick?: () => void;
}

export default function Hero({
  kop,
  subkop,
  cta,
  bgClass,
  primaryColor,
  onCtaClick,
}: HeroProps) {
  const scrollToForm = () => {
    document.getElementById("formulier")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`relative min-h-[85vh] flex items-center ${bgClass}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: primaryColor }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: primaryColor }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance leading-tight mb-6">
          {kop}
        </h1>
        <p className="hero-subkop text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 text-balance">
          {subkop}
        </p>

        {typeof cta === "string" ? (
          <button
            onClick={onCtaClick || scrollToForm}
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundColor: primaryColor }}
          >
            {cta}
            <ArrowDown className="w-5 h-5" aria-hidden="true" />
          </button>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta.map((item) => (
              <a
                key={item.label}
                href={`https://${item.href}`}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: item.color }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
