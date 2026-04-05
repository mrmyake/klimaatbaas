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
  accentColor?: string;
  isDark?: boolean;
  borderColor?: string;
  links?: NavLink[];
}

export default function Navbar({
  siteName,
  primaryColor,
  accentColor,
  isDark = false,
  borderColor,
  links,
}: NavbarProps) {
  // Split siteName: everything before "baas" is prefix
  const baasIndex = siteName.toLowerCase().indexOf("baas");
  const prefix = baasIndex > 0 ? siteName.slice(0, baasIndex).toUpperCase() : siteName.toUpperCase();
  const suffix = baasIndex > 0 ? "BAAS" : "";
  const logoAccent = accentColor || primaryColor;
  const logoBase = isDark ? "#ffffff" : "#1a1a1a";

  return (
    <nav
      className={`sticky top-0 z-40 backdrop-blur-xl ${
        isDark
          ? "bg-[#00030a]/90 border-b border-white/10"
          : "bg-white/90"
      }`}
      style={borderColor && !isDark ? { borderBottom: `3px solid ${borderColor}` } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-black tracking-[-0.02em]">
            <span style={{ color: logoAccent }}>{prefix}</span>
            <span style={{ color: logoBase }}>{suffix}</span>
          </a>
          {links && links.length > 0 && (
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isDark
                      ? "text-white/60 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <a
          href="tel:+31629173468"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:scale-95"
          style={{
            backgroundColor: accentColor || primaryColor,
            color: isDark || accentColor === "#00daf3" ? "#00030a" : "#ffffff",
          }}
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
