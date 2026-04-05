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
    <nav className="sticky top-0 z-40 bg-slate-50/80 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="font-heading text-xl font-black uppercase tracking-tighter" style={{ color: primaryColor }}>
            {siteName}
          </a>
          {links && links.length > 0 && (
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <a
          href="tel:+31629173468"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:scale-95"
          style={{ backgroundColor: primaryColor }}
          onClick={() => trackEvent("phone_click", { source_page: window.location.pathname })}
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">+31 6 2917 3468</span>
          <span className="sm:hidden">Bel ons</span>
        </a>
      </div>
    </nav>
  );
}
