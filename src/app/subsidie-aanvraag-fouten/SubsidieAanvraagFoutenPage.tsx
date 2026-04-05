"use client";

import SubsidieLayout from "@/sites/subsidiebaas/components/SubsidieLayout";
import SchemaMarkup from "@/sites/subsidiebaas/components/SchemaMarkup";
import { AlertTriangle } from "lucide-react";

const fouten = [
  {
    titel: "1. Meldcode niet op de factuur",
    uitleg: "De meldcode moet exact overeenkomen met de geplaatste warmtepomp. Vraag uw installateur dit expliciet te vermelden op factuur én offerte.",
    tip: "Controleer vóór betaling of de meldcode op de factuur staat.",
  },
  {
    titel: "2. Zelf geïnstalleerd in plaats van door een bedrijf",
    uitleg: "De ISDE vereist installatie door een bouwinstallatiebedrijf. Zelf installeren betekent automatisch afwijzing, ongeacht uw ervaring.",
    tip: "Laat de installatie altijd uitvoeren door een gecertificeerd bedrijf.",
  },
  {
    titel: "3. Te laat aangevraagd",
    uitleg: "U moet de subsidie aanvragen binnen 24 maanden na de installatiedatum. Eén dag te laat = geen subsidie.",
    tip: "Vraag de subsidie direct na installatie aan, of laat uw installateur dit regelen.",
  },
  {
    titel: "4. Warmtepomp niet op de meldcodelijst",
    uitleg: "Niet elk model staat op de lijst. Controleer dit vóór aankoop op rvo.nl. Staat uw model er niet op, dan kunt u alsnog aanvragen met technische documentatie, maar afwijzing is mogelijk.",
    tip: "Check vóór aankoop op mijn.rvo.nl of het model op de lijst staat.",
  },
  {
    titel: "5. Nieuwbouwwoning",
    uitleg: "De ISDE geldt alleen voor bestaande bouw. De omgevingsvergunning moet zijn aangevraagd vóór 1 juli 2018.",
    tip: "Check de bouwvergunningsdatum van uw woning bij uw gemeente.",
  },
  {
    titel: "6. Betaalbewijs ontbreekt of staat op andere naam",
    uitleg: "Factuur én betaalbewijs moeten op naam staan van de woningeigenaar die de subsidie aanvraagt. Een betaling vanaf een andere rekening kan problemen geven.",
    tip: "Betaal altijd vanaf uw eigen bankrekening en bewaar het afschrift.",
  },
  {
    titel: "7. Split warmtepomp met te hoog GWP of te laag vulgewicht",
    uitleg: "Vanaf 2026 komen split lucht-water warmtepompen met een vulgewicht onder 3 kg en een GWP van 750 of hoger niet meer in aanmerking. Dit is een Europese eis.",
    tip: "Vraag uw installateur naar het koudemiddel en de GWP-waarde. Kies voor R32 of R290.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "7 fouten waardoor uw ISDE-subsidieaanvraag wordt afgewezen",
    datePublished: "2026-01-15",
    dateModified: "2026-04-05",
    author: { "@type": "Organization", name: "Subsidiebaas" },
    publisher: { "@type": "Organization", name: "Klimaatbaas B.V." },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fouten.map((f) => ({
      "@type": "Question",
      name: f.titel.replace(/^\d+\.\s*/, ""),
      acceptedAnswer: { "@type": "Answer", text: `${f.uitleg} Tip: ${f.tip}` },
    })),
  },
];

export default function SubsidieAanvraagFoutenPage() {
  return (
    <SubsidieLayout breadcrumb="Veelgemaakte Fouten" slug="subsidie-aanvraag-fouten">
      <SchemaMarkup schema={schemas} />
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">ISDE-subsidie 2026</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-6">
            7 fouten waardoor uw ISDE-subsidieaanvraag wordt afgewezen
          </h1>
          <p className="text-lg text-[#44474d] mb-12 leading-relaxed">
            Elk jaar worden duizenden subsidieaanvragen vertraagd of afgewezen door vermijdbare fouten. Hieronder de zeven meest voorkomende — en hoe u ze voorkomt.
          </p>

          <div className="space-y-10">
            {fouten.map((fout) => (
              <section key={fout.titel}>
                <h2 className="font-heading text-xl font-black tracking-tight mb-3 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-1" aria-hidden="true" />
                  {fout.titel}
                </h2>
                <p className="text-[#44474d] leading-relaxed mb-3">{fout.uitleg}</p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    <strong>Zo voorkomt u dit:</strong> {fout.tip}
                  </p>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 p-8 bg-[#f3f4f5] rounded-lg">
            <h2 className="font-heading text-xl font-black tracking-tight mb-4">Meer over ISDE-subsidie</h2>
            <ul className="space-y-2">
              <li><a href="/isde-subsidie-2026" className="text-[#27AE60] underline font-semibold">Compleet overzicht ISDE 2026 →</a></li>
              <li><a href="/subsidie-berekenen" className="text-[#27AE60] underline font-semibold">Bereken uw subsidie →</a></li>
              <li><a href="/veelgestelde-vragen" className="text-[#27AE60] underline font-semibold">Veelgestelde vragen →</a></li>
            </ul>
          </div>
        </div>
      </article>
    </SubsidieLayout>
  );
}
