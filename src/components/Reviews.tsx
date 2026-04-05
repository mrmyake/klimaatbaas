import { Star } from "lucide-react";

interface Review {
  naam: string;
  plaats: string;
  tekst: string;
  sterren: number;
}

interface ReviewsProps {
  reviews: Review[];
  primaryColor: string;
  isDark?: boolean;
}

export default function Reviews({ reviews, primaryColor, isDark = false }: ReviewsProps) {
  return (
    <section className={`py-24 px-6 ${isDark ? "" : "bg-[#f3f4f5]"}`}>
      <div className="max-w-7xl mx-auto">
        <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? "text-white/40" : "text-gray-500"}`}>
          Ervaringen
        </p>
        <h2 className={`font-heading text-4xl font-black tracking-tight mb-12 ${isDark ? "text-white" : ""}`}>
          Wat onze klanten zeggen
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.naam}
              className={`rounded-lg p-8 ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white shadow-[0_8px_24px_rgba(0,3,10,0.06)]"
              }`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.sterren }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: primaryColor }} />
                ))}
              </div>
              <p className={`mb-6 leading-relaxed ${isDark ? "text-white/70" : "text-[#44474d]"}`}>
                &ldquo;{review.tekst}&rdquo;
              </p>
              <div>
                <p className={`font-bold text-sm ${isDark ? "text-white" : ""}`}>{review.naam}</p>
                <p className={`text-xs ${isDark ? "text-white/40" : "text-gray-500"}`}>{review.plaats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
