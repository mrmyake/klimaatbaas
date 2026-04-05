"use client";

import { Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  siteName: string;
  primaryColor: string;
  links?: NavLink[];
}

export default function Navbar({ siteName, primaryColor, links }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-heading font-bold text-lg" style={{ color: primaryColor }}>
            {siteName}
          </span>
          {links && links.length > 0 && (
            <div className="hidden md:flex items-center gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <a
          href="tel:+31629173468"
          className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
          style={{ color: primaryColor }}
          onClick={() => trackEvent("phone_click", { location: "navbar" })}
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">+31 6 2917 3468</span>
          <span className="sm:hidden">Bel ons</span>
        </a>
      </div>
    </nav>
  );
}
