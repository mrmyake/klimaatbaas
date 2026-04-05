"use client";

import SubsidieLayout from "@/sites/subsidiebaas/components/SubsidieLayout";
import SchemaMarkup from "@/sites/subsidiebaas/components/SchemaMarkup";
import { FileText } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Warmtepomp gekocht in 2024, geïnstalleerd in 2025 of 2026?",
  datePublished: "2026-01-15",
  dateModified: "2026-04-05",
  author: { "@type": "Organization", name: "Subsidiebaas" },
  publisher: { "@type": "Organization", name: "Klimaatbaas B.V." },
};

export default function OvergangsregelingPage() {
  return (
    <SubsidieLayout breadcrumb="Overgangsregeling 2024" slug="overgangsregeling-2024">
      <SchemaMarkup schema={schema} />
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Overgangsregeling</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-6">
            Warmtepomp gekocht in 2024, geïnstalleerd in 2025 of 2026?
          </h1>
          <p className="text-lg text-[#44474d] mb-12 leading-relaxed">
            Goed nieuws: als u kunt aantonen dat u uw warmtepomp in 2024 heeft gekocht, kunt u het <strong>hogere subsidiebedrag van 2024</strong> claimen — ook als de installatie pas in 2025 of 2026 plaatsvindt.
          </p>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">Wat is het verschil?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-4 font-bold">Component</th>
                    <th className="py-3 pr-4 font-bold">Tarief 2024</th>
                    <th className="py-3 pr-4 font-bold">Tarief 2026</th>
                    <th className="py-3 font-bold">Verschil</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Startbedrag (hybride/all-electric)</td>
                    <td className="py-3 pr-4">€1.250</td>
                    <td className="py-3 pr-4">€1.025</td>
                    <td className="py-3 font-semibold text-[#27AE60]">+€225</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">kW-toeslag (lucht-water)</td>
                    <td className="py-3 pr-4">€225/kW</td>
                    <td className="py-3 pr-4">€225/kW</td>
                    <td className="py-3 text-gray-400">gelijk</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Startbedrag (grond-water)</td>
                    <td className="py-3 pr-4">€2.050</td>
                    <td className="py-3 pr-4">€1.825</td>
                    <td className="py-3 font-semibold text-[#27AE60]">+€225</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">Welke bewijsstukken heeft u nodig?</h2>
            <div className="space-y-4">
              {[
                { doc: "Getekende offerte of opdrachtbevestiging", detail: "Met datum in 2024 en uw handtekening" },
                { doc: "Schriftelijke bevestiging van de installateur", detail: "Bevestiging dat de opdracht in 2024 is verstrekt" },
                { doc: "Aanbetaling of factuur", detail: "Bankafschrift waaruit betaling in 2024 blijkt" },
              ].map((item) => (
                <div key={item.doc} className="flex gap-4 items-start">
                  <FileText className="w-5 h-5 text-[#27AE60] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-bold">{item.doc}</p>
                    <p className="text-sm text-gray-500">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">Hoe werkt de aanvraag?</h2>
            <div className="space-y-4 text-[#44474d] leading-relaxed">
              <p>
                Dien uw subsidieaanvraag in via <strong>Mijn RVO</strong> (DigiD vereist). Upload de standaard documenten (factuur, betaalbewijs, foto) én voeg het bewijs van aankoop in 2024 toe.
              </p>
              <p>
                RVO beoordeelt of de overgangsregeling van toepassing is en past automatisch het hogere tarief toe als uw bewijs akkoord is.
              </p>
            </div>
          </section>

          <div className="p-8 bg-[#f3f4f5] rounded-lg">
            <h2 className="font-heading text-xl font-black tracking-tight mb-4">Meer over ISDE-subsidie</h2>
            <ul className="space-y-2">
              <li><a href="/isde-subsidie-2026" className="text-[#27AE60] underline font-semibold">Compleet overzicht ISDE 2026 →</a></li>
              <li><a href="/subsidie-berekenen" className="text-[#27AE60] underline font-semibold">Bereken uw subsidie →</a></li>
              <li><a href="/subsidie-aanvraag-fouten" className="text-[#27AE60] underline font-semibold">Veelgemaakte fouten →</a></li>
            </ul>
          </div>
        </div>
      </article>
    </SubsidieLayout>
  );
}
