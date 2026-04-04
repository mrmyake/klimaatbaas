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
    <section className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold mb-4">
          Ons werkgebied
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
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
