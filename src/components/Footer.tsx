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
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-heading text-white font-bold text-lg mb-4">
          Klimaatbaas B.V.
        </p>
        <p className="mb-6">Midden-Nederland</p>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
              style={{ ["--hover-color" as string]: primaryColor }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          Onderdeel van Klimaatbaas B.V.
        </p>
      </div>
    </footer>
  );
}
