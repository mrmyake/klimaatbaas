import { ShieldCheck } from "lucide-react";
import { utmLink } from "@/lib/utm";

export default function VerifiedBy() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-3xl mx-auto bg-green-50 rounded-xl p-6 flex items-start gap-4">
        <ShieldCheck className="w-8 h-8 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-sm text-gray-700 leading-relaxed">
          <p>
            <strong>Gecontroleerd door Klimaatbaas B.V.</strong> — F-gassen
            gecertificeerd installateur in Midden-Nederland. Laatste update:
            april 2026.
          </p>
          <a
            href={utmLink("https://klimaatbaas.com", "subsidiebaas", "verified-by")}
            className="inline-block mt-2 text-green-700 font-semibold hover:underline"
          >
            Over Klimaatbaas →
          </a>
        </div>
      </div>
    </section>
  );
}
