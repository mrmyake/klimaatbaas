interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  links: FooterLink[];
  primaryColor: string;
  accentColor?: string;
  isDark?: boolean;
}

export default function Footer({ links, primaryColor, accentColor, isDark = false }: FooterProps) {
  const logoAccent = accentColor || primaryColor;
  const logoBase = isDark ? "#ffffff" : "#1a1a1a";

  return (
    <footer className={`py-12 px-6 ${isDark ? "bg-[#00030a] border-t border-white/10" : "bg-slate-50 border-t border-slate-200"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-black tracking-[-0.02em]">
              <span style={{ color: logoAccent }}>KLIMAAT</span>
              <span style={{ color: logoBase }}>BAAS</span>
              <span className={`text-sm font-normal ml-2 ${isDark ? "text-white/40" : "text-gray-400"}`}>B.V.</span>
            </p>
            <p className={`text-sm mt-1 ${isDark ? "text-white/40" : "text-gray-500"}`}>Midden-Nederland</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors ${isDark ? "text-white/40 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className={`text-xs ${isDark ? "text-white/30" : "text-gray-400"}`}>
            © {new Date().getFullYear()} Klimaatbaas B.V.
          </p>
        </div>
      </div>
    </footer>
  );
}
