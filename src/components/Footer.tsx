interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  links: FooterLink[];
  primaryColor: string;
}

export default function Footer({ links, primaryColor }: FooterProps) {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-xl font-black uppercase tracking-tighter" style={{ color: primaryColor }}>
              Klimaatbaas B.V.
            </p>
            <p className="text-sm text-gray-500 mt-1">Midden-Nederland</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Klimaatbaas B.V.
          </p>
        </div>
      </div>
    </footer>
  );
}
