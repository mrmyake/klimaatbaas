"use client";

import SubsidieLayout from "@/sites/subsidiebaas/components/SubsidieLayout";
import FAQAccordion from "@/sites/subsidiebaas/components/FAQAccordion";
import SchemaMarkup from "@/sites/subsidiebaas/components/SchemaMarkup";

const faqItems = [
  {
    vraag: "Hoeveel subsidie krijg ik voor een warmtepomp in 2026?",
    antwoord:
      "Hangt af van type en vermogen. Een hybride warmtepomp van 4 kW met A+++ label levert \u20AC2.125 op. Een all-electric van 8 kW: \u20AC3.025. Gebruik onze calculator voor een exacte berekening.",
  },
  {
    vraag: "Mag ik mijn warmtepomp zelf installeren voor subsidie?",
    antwoord:
      "Nee. De installatie moet worden uitgevoerd door een bouwinstallatiebedrijf.",
  },
  {
    vraag: "Hoe lang duurt het voordat ik mijn subsidie ontvang?",
    antwoord:
      "RVO streeft naar 8 tot 13 weken na een complete aanvraag.",
  },
  {
    vraag: "Kan ik subsidie krijgen voor een airco?",
    antwoord:
      "Nee, airco\u2019s vallen niet onder de ISDE. Een warmtepomp die ook koelt komt w\u00E9l in aanmerking.",
  },
  {
    vraag: "Wat als mijn warmtepomp niet op de meldcodelijst staat?",
    antwoord:
      "U kunt alsnog aanvragen met technische documentatie erbij, maar afwijzing is mogelijk.",
  },
  {
    vraag: "Krijg ik meer subsidie als ik ook isoleer?",
    antwoord:
      "Ja. De isolatiemaatregel krijgt dan het hogere subsidiebedrag.",
  },
  {
    vraag: "Wat is de overgangsregeling voor warmtepompen gekocht in 2024?",
    antwoord:
      "Met bewijs van aankoop in 2024 kunt u het hogere subsidiebedrag van 2024 ontvangen.",
  },
  {
    vraag: "Kan ik als huurder subsidie aanvragen?",
    antwoord:
      "Nee. Alleen woningeigenaren die zelf in de woning wonen of gaan wonen.",
  },
  {
    vraag: "Hoeveel budget is er nog over in 2026?",
    antwoord:
      "Het totale ISDE-budget voor 2026 is circa \u20AC511 miljoen. De actuele stand staat op rijksoverheid.nl.",
  },
  {
    vraag: "Wat is het verschil tussen een hybride en all-electric warmtepomp?",
    antwoord:
      "Hybride werkt samen met uw cv-ketel op gas. All-electric vervangt de ketel volledig.",
  },
  {
    vraag: "Krijg ik subsidie voor een 2e warmtepomp?",
    antwoord:
      "Ja, maar alleen \u20AC225 per kW. Geen startbedrag en geen energielabelbonus meer.",
  },
  {
    vraag: "Wat zijn de GWP-eisen voor koudemiddel in 2026?",
    antwoord:
      "Split lucht-water warmtepompen met vulgewicht onder 3 kg en GWP van 750 of hoger komen niet meer in aanmerking.",
  },
  {
    vraag: "Kan ik gemeentelijke subsidie combineren met ISDE?",
    antwoord:
      "Ja. Check de Energiesubsidiewijzer op milieucentraal.nl voor regelingen in uw gemeente.",
  },
  {
    vraag: "Moet ik de subsidie aanvragen v\u00F3\u00F3r of na installatie?",
    antwoord:
      "Particulieren: na installatie. Zakelijke aanvragers: v\u00F3\u00F3r aankoop.",
  },
  {
    vraag: "Wat als mijn aanvraag wordt afgewezen?",
    antwoord:
      "U kunt bezwaar maken bij RVO. Controleer of meldcode, factuur en betaalbewijs compleet en correct zijn.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Veelgestelde vragen over ISDE-subsidie 2026",
  datePublished: "2026-01-15",
  dateModified: "2026-04-04",
  author: {
    "@type": "Organization",
    name: "Subsidiebaas",
  },
  publisher: {
    "@type": "Organization",
    name: "Klimaatbaas B.V.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.vraag,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.antwoord,
    },
  })),
};

export default function VeelgesteldeVragenPage() {
  return (
    <SubsidieLayout breadcrumb="Veelgestelde Vragen" slug="veelgestelde-vragen">
      <SchemaMarkup schema={[articleSchema, faqSchema]} />

      <article className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="font-heading text-2xl font-black tracking-tight mb-6">
          Veelgestelde vragen over ISDE-subsidie 2026
        </h1>

        <p className="text-[#44474d] leading-relaxed mb-10">
          Hieronder vindt u antwoorden op de meest gestelde vragen over
          ISDE-subsidie voor warmtepompen, isolatie en ventilatie in 2026. Staat
          uw vraag er niet bij? Neem dan gerust contact met ons op.
        </p>

        <FAQAccordion items={faqItems} primaryColor="#27AE60" />

        <h2 className="font-heading text-2xl font-black tracking-tight mt-16 mb-4">
          Meer weten?
        </h2>

        <div className="flex flex-col gap-3">
          <a
            href="/subsidie-berekenen"
            className="text-[#27AE60] underline font-semibold"
          >
            Bereken uw subsidie met onze gratis calculator
          </a>
          <a
            href="/isde-subsidie-2026"
            className="text-[#27AE60] underline font-semibold"
          >
            Alles over ISDE-subsidie in 2026
          </a>
          <a
            href="/subsidie-aanvraag-fouten"
            className="text-[#27AE60] underline font-semibold"
          >
            Veelgemaakte fouten bij de subsidieaanvraag
          </a>
        </div>
      </article>
    </SubsidieLayout>
  );
}
