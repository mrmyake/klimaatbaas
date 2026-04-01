import { LucideIcon } from "lucide-react";

interface USP {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface USPsProps {
  items: USP[];
  primaryColor: string;
  bgIconColor: string;
}

export default function USPs({ items, primaryColor, bgIconColor }: USPsProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {items.map((usp) => (
          <div
            key={usp.title}
            className="glass rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ backgroundColor: bgIconColor }}
            >
              <usp.icon className="w-8 h-8" style={{ color: primaryColor }} />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">
              {usp.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{usp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
