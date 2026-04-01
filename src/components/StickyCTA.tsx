"use client";

import { useEffect, useState } from "react";

interface StickyCTAProps {
  label: string;
  primaryColor: string;
}

export default function StickyCTA({ label, primaryColor }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/80 backdrop-blur-md border-t border-gray-200 md:hidden">
      <button
        onClick={() =>
          document
            .getElementById("formulier")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="w-full text-white font-semibold py-3.5 rounded-xl text-base shadow-lg"
        style={{ backgroundColor: primaryColor }}
      >
        {label}
      </button>
    </div>
  );
}
