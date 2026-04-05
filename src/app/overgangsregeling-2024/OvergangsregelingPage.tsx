"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VerifiedBy from "@/components/VerifiedBy";
import { sites } from "@/lib/sites";
import { utmLink } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import { FileText, ArrowRight } from "lucide-react";

const config = sites.subsidiebaas;

export default function OvergangsregelingPage() {
  return (
    <>
      <Navbar siteName="Subsidiebaas" primaryColor={config.colors.primary} />

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-green-600 mb-3">Overgangsregeling</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Warmtepomp gekocht in 2024, geïnstalleerd in 2025 of 2026?
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Goed nieuws: als u kunt aantonen dat u uw warmtepomp in 2024 heeft
            gekocht, kunt u het <strong>hogere subsidiebedrag van 2024</strong> claimen
            — ook als de installatie pas in 2025 of 2026 plaatsvindt.
          </p>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Wat is het verschil?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-4 font-heading font-bold">Component</th>
                    <th className="py-3 pr-4 font-heading font-bold">Tarief 2024</th>
                    <th className="py-3 pr-4 font-heading font-bold">Tarief 2026</th>
                    <th className="py-3 font-heading font-bold">Verschil</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Startbedrag (hybride/all-electric)</td>
                    <td className="py-3 pr-4">€1.250</td>
                    <td className="py-3 pr-4">€1.025</td>
                    <td className="py-3 font-semibold text-green-600">+€225</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">kW-toeslag (lucht-water)</td>
                    <td className="py-3 pr-4">€225/kW</td>
                    <td className="py-3 pr-4">€225/kW</td>
                    <td className="py-3 text-gray-400">gelijk</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Startbedrag (grond-water)</td>
                    <td className="py-3 pr-4">€2.050</td>
                    <td className="py-3 pr-4">€1.825</td>
                    <td className="py-3 font-semibold text-green-600">+€225</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Het verschil is €225 hoger startbedrag bij het 2024-tarief.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Welke bewijsstukken heeft u nodig?</h2>
            <div className="space-y-4">
              {[
                { doc: "Getekende offerte of opdrachtbevestiging", detail: "Met datum in 2024 en uw handtekening" },
                { doc: "Schriftelijke bevestiging van de installateur", detail: "Bevestiging dat de opdracht in 2024 is verstrekt" },
                { doc: "Aanbetaling of factuur", detail: "Bankafschrift waaruit betaling in 2024 blijkt" },
              ].map((item) => (
                <div key={item.doc} className="flex gap-4 items-start">
                  <FileText className="w-5 h-5 text-green-500 shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">{item.doc}</p>
                    <p className="text-sm text-gray-500">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Hoe werkt de aanvraag?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dien uw subsidieaanvraag in via <strong>Mijn RVO</strong> (DigiD vereist).
                Upload de standaard documenten (factuur, betaalbewijs, foto) én voeg
                het bewijs van aankoop in 2024 toe.
              </p>
              <p>
                RVO beoordeelt of de overgangsregeling van toepassing is en past
                automatisch het hogere tarief toe als uw bewijs akkoord is.
              </p>
            </div>
          </section>

          <div className="rounded-2xl p-10 text-center text-white" style={{ backgroundColor: config.colors.primary }}>
            <h2 className="font-heading text-2xl font-bold mb-4">
              Hulp nodig bij uw aanvraag?
            </h2>
            <p className="mb-6 opacity-90">
              Warmtebaas kent de overgangsregeling en zorgt dat u het maximale bedrag ontvangt.
            </p>
            <a
              href={utmLink("https://warmtebaas.com", "subsidiebaas", "overgangsregeling-cta")}
              onClick={() => trackEvent("cta_click_warmtebaas")}
              className="inline-flex items-center gap-2 bg-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ color: config.colors.primary }}
            >
              Gratis adviesgesprek aanvragen
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>

      <VerifiedBy />
      <Footer
        primaryColor={config.colors.primary}
        links={[
          { label: "Subsidie berekenen → subsidiebaas.com", href: "https://subsidiebaas.com" },
          { label: "Warmtepomp installatie → warmtebaas.com", href: utmLink("https://warmtebaas.com", "subsidiebaas", "footer-link") },
        ]}
      />
      <WhatsAppButton message="Hallo, ik heb een vraag over subsidie" />
    </>
  );
}
