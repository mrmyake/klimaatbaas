import { MapPin } from "lucide-react";

const plaatsen = [
  "Utrecht",
  "Amersfoort",
  "Hilversum",
  "Nieuwegein",
  "Zeist",
  "Woerden",
  "Soest",
  "Baarn",
  "Bunschoten",
  "De Bilt",
  "Bilthoven",
  "Driebergen",
  "Doorn",
  "Wijk bij Duurstede",
  "IJsselstein",
  "Vianen",
  "Leidsche Rijn",
  "Vleuten",
  "Houten",
  "Bunnik",
  "Breukelen",
  "Maarssen",
  "Loenen",
  "Loosdrecht",
  "Naarden",
  "Bussum",
  "Huizen",
  "Laren",
  "Blaricum",
  "Eemnes",
];

interface WerkgebiedProps {
  primaryColor: string;
  compact?: boolean;
  siteSlug?: string;
}

function toSlug(plaats: string) {
  return plaats
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export default function WerkgebiedKaart({
  primaryColor,
  compact,
  siteSlug,
}: WerkgebiedProps) {
  const shown = compact ? plaatsen.slice(0, 15) : plaatsen;

  const serviceLabels: Record<string, string> = {
    warmtebaas: "warmtepomp",
    aircobaas: "airco",
    klimaatbaas: "klimaatinstallatie",
  };
  const serviceLabel = siteSlug ? serviceLabels[siteSlug] : undefined;

  return (
    <section className="py-24 px-6 bg-[#f3f4f5]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Werkgebied</p>
        <h2 className="font-heading text-4xl font-black tracking-tight mb-4">
          Ons werkgebied
        </h2>
        <p className="text-[#44474d] text-lg mb-10 max-w-2xl mx-auto">
          Wij werken in heel Midden-Nederland. Van Utrecht tot Amersfoort, van
          Hilversum tot Woerden en alles daartussenin.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {shown.map((plaats) => {
            const slug = toSlug(plaats);
            const id = serviceLabel
              ? `${serviceLabel}-${slug}`
              : slug;

            return (
              <a
                key={plaats}
                id={id}
                href={`#${id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-white border border-slate-200 shadow-[0_8px_24px_rgba(0,3,10,0.06)] hover:shadow-lg transition-shadow"
                title={
                  serviceLabel
                    ? `${serviceLabel.charAt(0).toUpperCase() + serviceLabel.slice(1)} in ${plaats}`
                    : `Werkgebied ${plaats}`
                }
              >
                <MapPin
                  className="w-3.5 h-3.5"
                  style={{ color: primaryColor }}
                  aria-hidden="true"
                />
                {plaats}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
