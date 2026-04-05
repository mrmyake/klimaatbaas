"use client";

import SubsidieLayout from "@/sites/subsidiebaas/components/SubsidieLayout";
import SchemaMarkup from "@/sites/subsidiebaas/components/SchemaMarkup";
import { sites } from "@/lib/sites";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const config = sites.subsidiebaas;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ISDE Subsidie 2026: Bedragen, Voorwaarden & Aanvragen",
  description:
    "Alles over de ISDE-subsidie in 2026. Bedragen per warmtepomp, voorwaarden, stappenplan aanvragen en wijzigingen t.o.v. 2025.",
  author: { "@type": "Organization", name: "Subsidiebaas" },
  publisher: {
    "@type": "Organization",
    name: "Subsidiebaas",
    url: "https://subsidiebaas.com",
  },
  datePublished: "2026-01-15",
  dateModified: "2026-04-04",
  mainEntityOfPage: "https://subsidiebaas.com/isde-subsidie-2026",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "ISDE-subsidie aanvragen in 2026",
  description:
    "Stappenplan om de ISDE-subsidie aan te vragen voor warmtepompen, isolatie of ventilatie.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Check de meldcodelijst",
      text: "Controleer of uw warmtepomp of maatregel op de RVO meldcodelijst staat.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Laat installeren",
      text: "Laat de warmtepomp of maatregel installeren door een erkend bouwinstallatiebedrijf.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Bewaar documenten",
      text: "Bewaar factuur, betaalbewijs en installatiebevestiging op naam van de woningeigenaar.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Vraag aan via Mijn RVO",
      text: "Log in op Mijn RVO met DigiD en dien uw ISDE-subsidieaanvraag in.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Ontvang uitbetaling",
      text: "Na goedkeuring ontvangt u de subsidie binnen 8 tot 13 weken op uw rekening.",
    },
  ],
};

const warmtepompData = [
  { type: "Hybride", vermogen: "4 kW", label: "A+++", bedrag: "€2.125" },
  { type: "Hybride", vermogen: "6 kW", label: "A+++", bedrag: "€2.575" },
  { type: "All-electric", vermogen: "8 kW", label: "A+++", bedrag: "€3.025" },
  { type: "All-electric", vermogen: "10 kW", label: "A+++", bedrag: "€3.475" },
  { type: "Grond-water", vermogen: "6 kW", label: "A+++", bedrag: "€3.975" },
  { type: "Warmtepompboiler", vermogen: "—", label: "—", bedrag: "~€675" },
];

const voorwaarden = [
  "Bestaande woning (bouwvergunning verleend vóór 1 juli 2018)",
  "Installatie door een erkend bouwinstallatiebedrijf",
  "Warmtepomp staat op de RVO meldcodelijst",
  "Aanvraag binnen 24 maanden na installatie",
  "Factuur en betaalbewijs op naam van de woningeigenaar",
  "U bent woningeigenaar en bewoont de woning zelf",
];

const stappen = [
  {
    titel: "Check de meldcodelijst",
    tekst:
      "Controleer of uw warmtepomp, isolatiemateriaal of ventilatiesysteem op de RVO meldcodelijst staat. Geen meldcode = geen subsidie.",
  },
  {
    titel: "Laat installeren door een erkend bedrijf",
    tekst:
      "Laat de maatregel uitvoeren door een professioneel bouwinstallatiebedrijf. Doe-het-zelf installatie komt niet in aanmerking.",
  },
  {
    titel: "Bewaar alle documenten",
    tekst:
      "Bewaar de factuur, het betaalbewijs en de installatiebevestiging. Alle documenten moeten op naam van de woningeigenaar staan.",
  },
  {
    titel: "Vraag aan via Mijn RVO met DigiD",
    tekst:
      "Log in op mijn.rvo.nl met uw DigiD. Vul het aanvraagformulier in en upload de gevraagde documenten.",
  },
  {
    titel: "Uitbetaling binnen 8-13 weken",
    tekst:
      "Na goedkeuring wordt de subsidie binnen 8 tot 13 weken op uw rekening gestort.",
  },
];

export default function ISDESubsidiePage() {
  const green = config.colors.primary;

  return (
    <SubsidieLayout breadcrumb="ISDE Subsidie 2026" slug="isde-subsidie-2026">
      <SchemaMarkup schema={[articleSchema, howToSchema]} />

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* H1 */}
          <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-tight mb-6 leading-tight">
            ISDE Subsidie 2026: Bedragen, Voorwaarden &amp; Aanvragen
          </h1>
          <p className="text-lg text-[#44474d] mb-16 leading-relaxed">
            De complete gids over de ISDE-subsidie in 2026. Wat u kunt krijgen,
            wat de voorwaarden zijn en hoe u de subsidie stap voor stap
            aanvraagt.
          </p>

          {/* Wat is de ISDE-subsidie? */}
          <section className="mb-14">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">
              Wat is de ISDE-subsidie?
            </h2>
            <div className="text-[#44474d] leading-relaxed space-y-4">
              <p>
                De ISDE (Investeringssubsidie Duurzame Energie en
                Energiebesparing) is een subsidie van de Rijksoverheid voor
                woningeigenaren die investeren in duurzame verwarming, isolatie
                of ventilatie. Het doel is om de energietransitie in bestaande
                woningen te versnellen.
              </p>
              <p>
                In 2026 is het totale ISDE-budget circa{" "}
                <strong>€511 miljoen</strong>. De subsidie dekt gemiddeld
                ongeveer <strong>30% van de investering</strong>, afhankelijk
                van de maatregel en het type installatie.
              </p>
            </div>
          </section>

          {/* Welke maatregelen */}
          <section className="mb-14">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">
              Welke maatregelen vallen onder de ISDE?
            </h2>
            <div className="text-[#44474d] leading-relaxed space-y-4">
              <p>De ISDE-subsidie is beschikbaar voor de volgende maatregelen:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Warmtepompen</strong> — hybride en all-electric
                  (lucht-water, grond-water)
                </li>
                <li>
                  <strong>Isolatie</strong> — dak, gevel, vloer en HR++ glas
                </li>
                <li>
                  <strong>Zonneboilers</strong> — voor warm tapwater
                </li>
                <li>
                  <strong>Warmtenet-aansluitingen</strong> — aansluiting op een
                  warmtenetwerk
                </li>
                <li>
                  <strong>Nieuw in 2026: energiezuinige ventilatie</strong> — in
                  combinatie met isolatie (
                  <Link
                    href="/ventilatiesubsidie-2026"
                    className="text-[#27AE60] underline font-semibold"
                  >
                    lees meer over de ventilatiesubsidie
                  </Link>
                  )
                </li>
              </ul>
            </div>
          </section>

          {/* Subsidiebedragen warmtepompen */}
          <section className="mb-14">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">
              Subsidiebedragen warmtepompen 2026
            </h2>
            <p className="text-[#44474d] leading-relaxed mb-6">
              De hoogte van de ISDE-subsidie hangt af van het type warmtepomp,
              het vermogen en het energielabel. Hieronder de indicatieve
              bedragen voor 2026:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left text-[#44474d]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-4 font-bold">Type</th>
                    <th className="py-3 pr-4 font-bold">Vermogen</th>
                    <th className="py-3 pr-4 font-bold">Energielabel</th>
                    <th className="py-3 font-bold">Subsidiebedrag</th>
                  </tr>
                </thead>
                <tbody>
                  {warmtepompData.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 pr-4">{row.type}</td>
                      <td className="py-3 pr-4">{row.vermogen}</td>
                      <td className="py-3 pr-4">{row.label}</td>
                      <td className="py-3 font-semibold">{row.bedrag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#44474d] leading-relaxed">
              Wilt u weten hoeveel subsidie u precies kunt krijgen?{" "}
              <Link
                href="/subsidie-berekenen"
                className="text-[#27AE60] underline font-semibold"
              >
                Bereken uw subsidie
              </Link>
              .
            </p>
          </section>

          {/* Voorwaarden */}
          <section className="mb-14">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">
              Voorwaarden
            </h2>
            <p className="text-[#44474d] leading-relaxed mb-6">
              Om in aanmerking te komen voor de ISDE-subsidie moet u aan de
              volgende voorwaarden voldoen:
            </p>
            <div className="space-y-3">
              {voorwaarden.map((v) => (
                <div key={v} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: green }}
                    aria-hidden="true"
                  />
                  <span className="text-[#44474d]">{v}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Stappenplan */}
          <section className="mb-14">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">
              Stappenplan ISDE aanvragen
            </h2>
            <p className="text-[#44474d] leading-relaxed mb-6">
              De ISDE-subsidie vraagt u aan <em>na</em> de installatie. Volg
              deze vijf stappen:
            </p>
            <div className="space-y-6">
              {stappen.map((stap, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ backgroundColor: green }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      {stap.titel}
                    </p>
                    <p className="text-[#44474d] leading-relaxed">
                      {stap.tekst}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Wijzigingen 2026 */}
          <section className="mb-14">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">
              Wijzigingen in 2026 ten opzichte van 2025
            </h2>
            <p className="text-[#44474d] leading-relaxed mb-6">
              De ISDE-regeling is in 2026 op een aantal punten gewijzigd:
            </p>
            <ul className="space-y-3 text-[#44474d] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
                <span>
                  Startbedrag lucht-water warmtepomp verlaagd van €1.250 naar
                  €1.025
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
                <span>
                  €225 per kW geldt nu al vanaf de 1e kW (was vanaf de 2e kW)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
                <span>
                  2e lucht-water warmtepomp: geen startbedrag en geen
                  labelbonus meer
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
                <span>
                  Nieuw: €400 ventilatiesubsidie in combinatie met isolatie (
                  <Link
                    href="/ventilatiesubsidie-2026"
                    className="text-[#27AE60] underline font-semibold"
                  >
                    lees meer
                  </Link>
                  )
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
                <span>
                  GWP-eis: split warmtepompen met vulgewicht &lt;3 kg en GWP
                  &ge;750 zijn uitgesloten
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
                <span>
                  Biobased isolatie: MKI-grens aangescherpt naar 1,90
                </span>
              </li>
            </ul>
          </section>

          {/* Overgangsregeling */}
          <section className="mb-14">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">
              Overgangsregeling 2024-aankopen
            </h2>
            <div className="text-[#44474d] leading-relaxed space-y-4">
              <p>
                Heeft u in 2024 een warmtepomp gekocht maar pas in 2025 of 2026
                laten installeren? Dan kunt u mogelijk aanspraak maken op het
                hogere subsidietarief van 2024. U moet dan wel kunnen aantonen
                dat de aankoop in 2024 is gedaan (koopovereenkomst, factuur
                en/of betaalbewijs).
              </p>
              <p>
                <Link
                  href="/overgangsregeling-2024"
                  className="text-[#27AE60] underline font-semibold"
                >
                  Lees alles over de overgangsregeling 2024
                </Link>
              </p>
            </div>
          </section>

          {/* Zakelijk vs. particulier */}
          <section className="mb-14">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">
              Zakelijk vs. particulier
            </h2>
            <div className="text-[#44474d] leading-relaxed space-y-4">
              <p>
                <strong>Particulieren</strong> vragen de ISDE-subsidie aan{" "}
                <em>na</em> de installatie. U kunt tot 24 maanden na
                ingebruikname uw aanvraag indienen.
              </p>
              <p>
                <strong>Zakelijke aanvragers</strong> moeten de subsidie{" "}
                <em>v&oacute;&oacute;r</em> de aankoop aanvragen. Dit is een
                belangrijk verschil: bestelt u als bedrijf eerst en vraagt u
                daarna aan, dan komt u niet meer in aanmerking.
              </p>
              <p>
                Meer informatie vindt u op{" "}
                <a
                  href="https://www.rvo.nl/subsidies-financiering/isde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#27AE60] underline font-semibold"
                >
                  rvo.nl
                </a>
                .
              </p>
            </div>
          </section>

          {/* Veelgemaakte fouten */}
          <section className="mb-14">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">
              Veelgemaakte fouten
            </h2>
            <div className="text-[#44474d] leading-relaxed space-y-4">
              <p>
                Elk jaar worden duizenden ISDE-aanvragen afgewezen door
                vermijdbare fouten: een verkeerde meldcode, ontbrekende
                documenten of een te late aanvraag.
              </p>
              <p>
                <Link
                  href="/subsidie-aanvraag-fouten"
                  className="text-[#27AE60] underline font-semibold"
                >
                  Bekijk de veelgemaakte fouten bij subsidieaanvragen
                </Link>{" "}
                en voorkom dat uw aanvraag wordt afgewezen.
              </p>
            </div>
          </section>

          {/* Pillar page internal links */}
          <section className="mb-14 rounded-2xl bg-gray-50 p-8">
            <h2 className="font-heading text-2xl font-black tracking-tight mb-4">
              Meer over subsidies
            </h2>
            <p className="text-[#44474d] leading-relaxed mb-6">
              Bekijk onze andere pagina&apos;s voor specifieke informatie:
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/subsidie-berekenen"
                  className="text-[#27AE60] underline font-semibold"
                >
                  Subsidie berekenen
                </Link>{" "}
                <span className="text-[#44474d]">
                  — bereken direct hoeveel ISDE-subsidie u kunt ontvangen
                </span>
              </li>
              <li>
                <Link
                  href="/ventilatiesubsidie-2026"
                  className="text-[#27AE60] underline font-semibold"
                >
                  Ventilatiesubsidie 2026
                </Link>{" "}
                <span className="text-[#44474d]">
                  — €400 subsidie voor energiezuinige ventilatie
                </span>
              </li>
              <li>
                <Link
                  href="/veelgestelde-vragen"
                  className="text-[#27AE60] underline font-semibold"
                >
                  Veelgestelde vragen
                </Link>{" "}
                <span className="text-[#44474d]">
                  — antwoorden op de meest gestelde vragen over ISDE
                </span>
              </li>
              <li>
                <Link
                  href="/subsidie-aanvraag-fouten"
                  className="text-[#27AE60] underline font-semibold"
                >
                  Veelgemaakte fouten
                </Link>{" "}
                <span className="text-[#44474d]">
                  — voorkom afwijzing van uw subsidieaanvraag
                </span>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </SubsidieLayout>
  );
}
