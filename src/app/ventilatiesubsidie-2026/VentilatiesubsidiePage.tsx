"use client";

import SubsidieLayout from "@/sites/subsidiebaas/components/SubsidieLayout";
import SchemaMarkup from "@/sites/subsidiebaas/components/SchemaMarkup";
import { Wind, CheckCircle } from "lucide-react";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ventilatiesubsidie 2026: €400 subsidie voor energiezuinige ventilatie",
    datePublished: "2026-01-15",
    dateModified: "2026-04-05",
    author: { "@type": "Organization", name: "Subsidiebaas" },
    publisher: { "@type": "Organization", name: "Klimaatbaas B.V." },
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Ventilatiesubsidie aanvragen via ISDE 2026",
    description: "Stappen om €400 ventilatiesubsidie aan te vragen via de ISDE-regeling.",
    step: [
      { "@type": "HowToStep", position: 1, name: "Isolatiemaatregel uitvoeren", text: "Laat minimaal één erkende isolatiemaatregel uitvoeren." },
      { "@type": "HowToStep", position: 2, name: "Ventilatiesysteem installeren", text: "Laat een energiezuinig ventilatiesysteem plaatsen." },
      { "@type": "HowToStep", position: 3, name: "Aanvraag indienen bij RVO", text: "Dien uw aanvraag in via Mijn RVO met DigiD." },
      { "@type": "HowToStep", position: 4, name: "Subsidie ontvangen", text: "Na goedkeuring ontvangt u €400. Doorlooptijd: 8–13 weken." },
    ],
  },
];

const voorwaarden = [
  "Alleen voor woningeigenaren (bestaande bouw)",
  "Moet gecombineerd worden met minimaal één isolatiemaatregel",
  "Aanvraag binnen 24 maanden na installatie van de isolatiemaatregel",
  "Kan tegelijk met de isolatie-subsidieaanvraag worden ingediend",
  "Eenmalig: u krijgt maximaal één keer €400",
];

export default function VentilatiesubsidiePage() {
  return (
    <SubsidieLayout breadcrumb="Ventilatiesubsidie 2026" slug="ventilatiesubsidie-2026">
      <SchemaMarkup schema={schemas} />
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Nieuw in 2026</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-6">
            Ventilatiesubsidie 2026: €400 subsidie voor energiezuinige ventilatie
          </h1>

          {/* Featured snippet */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
            <p className="text-[#44474d] leading-relaxed">
              Vanaf 2026 kunt u <strong>€400 ISDE-subsidie</strong> ontvangen voor een energiezuinig ventilatiesysteem. Voorwaarde: u combineert de ventilatie met minimaal één isolatiemaatregel.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">Wat is de ventilatiesubsidie?</h2>
            <p className="text-[#44474d] leading-relaxed">
              Nieuwe ISDE-maatregel per 1 januari 2026. Vaste bijdrage van €400, eenmalig, alleen in combinatie met isolatie. Goede ventilatie is essentieel in goed geïsoleerde woningen om vocht- en CO2-problemen te voorkomen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">Welke systemen komen in aanmerking?</h2>
            <div className="space-y-4 text-[#44474d] leading-relaxed">
              <div className="flex gap-4 items-start">
                <Wind className="w-6 h-6 text-[#27AE60] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-bold">Afzuigventilator met CO2-sensoren</p>
                  <p>Mechanisch afzuigsysteem met minimaal 2 CO2-sensoren die de ventilatie automatisch regelen op basis van luchtkwaliteit.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Wind className="w-6 h-6 text-[#27AE60] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-bold">Warmteterugwinunit (WTW)</p>
                  <p>Balansventilatie-systeem dat warmte uit afgezogen lucht terugwint. Energiebesparing: tot 95%.</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">Systemen in de categorieën C4C, D en E komen in aanmerking.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">Voorwaarden</h2>
            <div className="space-y-3">
              {voorwaarden.map((v) => (
                <div key={v} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27AE60] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[#44474d]">{v}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">Combineren met warmtepomp en isolatie</h2>
            <p className="text-[#44474d] leading-relaxed">
              Warmtepomp + isolatie + ventilatie is een sterke combinatie. De isolatiemaatregel krijgt het hogere subsidiebedrag wanneer u deze combineert met een warmtepomp. De €400 ventilatiesubsidie komt daar bovenop. <a href="/subsidie-berekenen" className="text-[#27AE60] underline font-semibold">Bereken uw totale subsidie →</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">Hoe vraagt u aan?</h2>
            <div className="space-y-4">
              {["Voer minimaal één isolatiemaatregel uit", "Laat het ventilatiesysteem installeren", "Dien uw aanvraag in via Mijn RVO (DigiD)", "Ontvang €400 binnen 8–13 weken"].map((stap, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#27AE60] text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                  <p className="text-[#44474d] leading-relaxed pt-1">{stap}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="p-8 bg-[#f3f4f5] rounded-lg">
            <h2 className="font-heading text-xl font-black tracking-tight mb-4">Meer over ISDE-subsidie</h2>
            <ul className="space-y-2">
              <li><a href="/isde-subsidie-2026" className="text-[#27AE60] underline font-semibold">Compleet overzicht ISDE 2026 →</a></li>
              <li><a href="/veelgestelde-vragen" className="text-[#27AE60] underline font-semibold">Veelgestelde vragen →</a></li>
            </ul>
          </div>
        </div>
      </article>
    </SubsidieLayout>
  );
}
