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
}

export default function Reviews({ reviews, primaryColor }: ReviewsProps) {
  return (
    <section className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Wat onze klanten zeggen
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.naam}
              className="glass rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.sterren }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: primaryColor }}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                &ldquo;{review.tekst}&rdquo;
              </p>
              <p className="font-semibold text-sm">
                {review.naam},{" "}
                <span className="text-gray-500 font-normal">
                  {review.plaats}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
