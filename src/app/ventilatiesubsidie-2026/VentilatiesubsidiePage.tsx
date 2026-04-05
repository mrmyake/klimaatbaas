"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VerifiedBy from "@/components/VerifiedBy";
import { sites } from "@/lib/sites";
import { utmLink } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import { Wind, CheckCircle } from "lucide-react";

const config = sites.subsidiebaas;

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Ventilatiesubsidie aanvragen via ISDE 2026",
  description: "Stappen om €400 ventilatiesubsidie aan te vragen via de ISDE-regeling.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Isolatiemaatregel uitvoeren", text: "Laat minimaal één erkende isolatiemaatregel uitvoeren (dak, gevel, vloer, of glas)." },
    { "@type": "HowToStep", position: 2, name: "Ventilatiesysteem installeren", text: "Laat een energiezuinig ventilatiesysteem plaatsen: afzuigventilator met CO2-sensoren of WTW-unit." },
    { "@type": "HowToStep", position: 3, name: "Aanvraag indienen bij RVO", text: "Dien uw aanvraag in via Mijn RVO met DigiD. Upload factuur en betaalbewijs." },
    { "@type": "HowToStep", position: 4, name: "Subsidie ontvangen", text: "Na goedkeuring ontvangt u €400 op uw rekening. Doorlooptijd: 8–13 weken." },
  ],
};

const voorwaarden = [
  "Alleen in combinatie met minimaal één isolatiemaatregel (dak-, gevel-, vloerisolatie of HR++ glas)",
  "Afzuigventilator moet minimaal 2 CO2-sensoren hebben",
  "Of: warmteterugwinunit (WTW) met balansventilatie",
  "Installatie door een professioneel bedrijf",
  "Bestaande woning (bouwvergunning vóór 1 juli 2018)",
  "Aanvraag binnen 24 maanden na installatie isolatiemaatregel",
];

export default function VentilatiesubsidiePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Navbar siteName="Subsidiebaas" primaryColor={config.colors.primary} />

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-green-600 mb-3">Nieuw in 2026</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Ventilatiesubsidie 2026: €400 subsidie voor energiezuinige ventilatie
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Vanaf 2026 vergoedt de ISDE-regeling ook energiezuinige ventilatiesystemen.
            Een vast bedrag van <strong>€400</strong> — mits gecombineerd met isolatie.
          </p>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Wat houdt het in?</h2>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Wind className="w-10 h-10 text-green-500" aria-hidden="true" />
                <div>
                  <p className="font-heading font-bold text-2xl">€400</p>
                  <p className="text-sm text-gray-500">eenmalige ISDE-subsidie voor ventilatie</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                De overheid stimuleert niet alleen isolatie en warmtepompen, maar nu ook
                energiezuinige ventilatie. Goede ventilatie is essentieel in goed geïsoleerde
                woningen om vocht- en CO2-problemen te voorkomen.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Welke systemen komen in aanmerking?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Optie 1: Afzuigventilator met CO2-sensoren</strong> — Een
                mechanisch afzuigsysteem met minimaal 2 CO2-sensoren die de ventilatie
                automatisch regelen op basis van luchtkwaliteit.
              </p>
              <p>
                <strong>Optie 2: Warmteterugwinunit (WTW)</strong> — Een
                balansventilatie-systeem dat warmte uit afgezogen lucht terugwint en
                teruggeeft aan verse lucht. Energiebesparing: tot 95%.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Voorwaarden</h2>
            <div className="space-y-3">
              {voorwaarden.map((v) => (
                <div key={v} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700">{v}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Hoe vraagt u aan?</h2>
            <div className="space-y-4">
              {["Voer minimaal één isolatiemaatregel uit", "Laat het ventilatiesysteem installeren", "Dien uw aanvraag in via Mijn RVO (DigiD)", "Ontvang €400 binnen 8–13 weken"].map((stap, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">{stap}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-2xl p-10 text-center text-white" style={{ backgroundColor: config.colors.primary }}>
            <h2 className="font-heading text-2xl font-bold mb-4">
              Warmtepomp + isolatie + ventilatie?
            </h2>
            <p className="mb-6 opacity-90">
              Combineer uw warmtepomp met isolatie en ventilatie voor maximale subsidie.
              Warmtebaas regelt het complete pakket.
            </p>
            <a
              href={utmLink("https://warmtebaas.com", "subsidiebaas", "ventilatie-cta")}
              onClick={() => trackEvent("cta_click_warmtebaas")}
              className="inline-flex items-center gap-2 bg-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ color: config.colors.primary }}
            >
              Gratis adviesgesprek aanvragen →
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
