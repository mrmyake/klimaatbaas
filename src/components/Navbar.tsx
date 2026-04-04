"use client";

import { Phone } from "lucide-react";

interface NavbarProps {
  siteName: string;
  primaryColor: string;
}

export default function Navbar({ siteName, primaryColor }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="font-heading font-bold text-lg" style={{ color: primaryColor }}>
          {siteName}
        </span>
        <a
          href="tel:+31629173468"
          className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
          style={{ color: primaryColor }}
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">+31 6 2917 3468</span>
          <span className="sm:hidden">Bel ons</span>
        </a>
      </div>
    </nav>
  );
}
