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
}

export default function WerkgebiedKaart({
  primaryColor,
  compact,
}: WerkgebiedProps) {
  const shown = compact ? plaatsen.slice(0, 15) : plaatsen;

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
          {shown.map((plaats) => (
            <span
              key={plaats}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-white shadow-sm border border-gray-100"
            >
              <MapPin className="w-3.5 h-3.5" style={{ color: primaryColor }} />
              {plaats}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
