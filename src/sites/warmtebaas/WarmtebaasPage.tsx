"use client";

import Navbar from "@/components/Navbar";
import SubsidieCalculator from "@/components/SubsidieCalculator";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import WerkgebiedKaart from "@/components/WerkgebiedKaart";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import { sites } from "@/lib/sites";
import { utmLink } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import {
  ClipboardCheck,
  Home,
  Sun,
  FileCheck,
  Flame,
  Zap,
  FileText,
  Clock,
  Settings,
  ArrowRight,
} from "lucide-react";

const config = sites.warmtebaas;

const faqItems = [
  {
    vraag: "Hoeveel subsidie krijg ik voor een warmtepomp?",
    antwoord:
      "Afhankelijk van type en vermogen. Hybride: ca. €2.125. All-electric: ca. €3.025. Wij berekenen het exacte bedrag.",
  },
  {
    vraag: "Is mijn woning geschikt voor een warmtepomp?",
    antwoord:
      "De meeste woningen zijn geschikt, mits redelijk geïsoleerd. Wij beoordelen dit gratis bij de woningcheck.",
  },
  {
    vraag: "Hoe lang duurt de installatie van een warmtepomp?",
    antwoord:
      "Gemiddeld 1–2 dagen voor een hybride warmtepomp, 2–3 dagen voor all-electric.",
  },
  {
    vraag: "Moet ik zelf de subsidie aanvragen?",
    antwoord: "Nee, wij doen dat volledig voor u bij RVO.",
  },
  {
    vraag: "Wat kost een warmtepomp?",
    antwoord:
      "Een hybride warmtepomp kost €4.500–€7.500. All-electric: €8.000–€15.000. Na subsidie betaalt u €2.000–€4.000 minder.",
  },
];

const stappenItems = [
  {
    icon: ClipboardCheck,
    title: "Gratis woningcheck",
    description: "Wij beoordelen of uw woning geschikt is voor een warmtepomp",
  },
  {
    icon: Home,
    title: "Advies op maat",
    description: "Huisbezoek met warmteverliesberekening en subsidie-indicatie",
  },
  {
    icon: Sun,
    title: "Installatie",
    description: "Door ons eigen team, meestal binnen 4 weken na akkoord",
  },
  {
    icon: FileCheck,
    title: "Subsidie ingediend",
    description: "Wij regelen de volledige ISDE-aanvraag bij RVO",
  },
];

/* ---------- Section label component ---------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="inline-block h-[2px] w-8 bg-[#C0392B]" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C0392B]">
        {children}
      </span>
    </div>
  );
}

/* ---------- Urgentie Banner ---------- */
function UrgentieBanner() {
  return (
    <div className="bg-[#96281B] text-white text-center py-3 px-6 text-sm font-medium">
      ISDE-budget 2026: €500 miljoen beschikbaar — plan nu uw installatie
    </div>
  );
}

/* ---------- Hero ---------- */
function HeroSection() {
  return (
    <section className="min-h-[700px] flex items-center py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left column */}
        <div className="lg:col-span-7">
          <SectionLabel>Warmtepomp specialist</SectionLabel>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.95] text-[#00030a] mb-6">
            Bespaar tot €4.400 subsidie op uw warmtepomp
          </h1>
          <p className="text-lg text-[#44474d] leading-relaxed mb-10 max-w-xl">
            Gratis adviesgesprek en offerte binnen 48 uur. Wij regelen ook uw
            ISDE-subsidieaanvraag.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                trackEvent("cta_click_hero_primary");
                document
                  .getElementById("formulier")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#96281B] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Gratis woningcheck aanvragen
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href={utmLink(
                "https://subsidiebaas.com",
                "warmtebaas",
                "hero-secondary"
              )}
              onClick={() => trackEvent("cta_click_subsidiebaas")}
              className="inline-flex items-center gap-2 border-2 border-[#C0392B] text-[#C0392B] hover:bg-red-50 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Bereken uw subsidie
            </a>
          </div>
        </div>

        {/* Right column - placeholder */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-square bg-gradient-to-br from-red-100 to-red-300 rounded-lg shadow-[0_0_40px_0_rgba(192,57,43,0.15)]">
            {/* TODO: foto */}
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-[#C0392B]/20 rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-[#C0392B]/20 rounded-full" />
          <div className="absolute top-1/2 -right-12 w-16 h-16 border-2 border-[#C0392B]/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Direct Answer ---------- */
function DirectAnswer() {
  return (
    <section className="py-16 px-6 bg-[#f3f4f5]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#00030a] mb-6">
          Warmtepomp laten plaatsen: wat u moet weten
        </h2>
        <div className="space-y-4 text-lg text-[#44474d] leading-relaxed">
          <p>
            <strong>Wat kost een warmtepomp?</strong> Een hybride warmtepomp
            kost gemiddeld €4.500–€7.500 inclusief installatie. Een all-electric
            warmtepomp kost €8.000–€15.000. Met ISDE-subsidie krijgt u
            €2.000–€4.400 terug.
          </p>
          <p>
            <strong>Hoeveel subsidie krijg ik?</strong> Via de ISDE-regeling
            2026 ontvangt u minimaal €2.125 voor een hybride warmtepomp en tot
            €4.400 voor een all-electric model.{" "}
            <a
              href={utmLink(
                "https://subsidiebaas.com",
                "warmtebaas",
                "direct-answer"
              )}
              onClick={() => trackEvent("cta_click_subsidiebaas")}
              className="underline font-semibold"
              style={{ color: config.colors.primary }}
            >
              Bereken uw exacte subsidie op subsidiebaas.com
            </a>
            .
          </p>
          <p>
            <strong>Hoe lang duurt het?</strong> Vanaf het adviesgesprek tot
            werkende warmtepomp duurt gemiddeld 4–6 weken. De installatie zelf
            is 1–3 dagen.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Expertise Bento Grid ---------- */
function ExpertiseBento() {
  return (
    <section className="py-24 px-6 bg-[#f3f4f5]">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Onze expertise</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#00030a] mb-12">
          Alles voor uw warmtepomp
        </h2>

        <div className="grid md:grid-cols-6 gap-6">
          {/* Hybride Warmtepompen - col-span-3 */}
          <div className="md:col-span-3 bg-[#e1e3e4] rounded-lg p-8">
            <Flame className="w-8 h-8 text-[#C0392B] mb-4" />
            <h3 className="text-xl font-bold text-[#00030a] mb-2">
              Hybride Warmtepompen
            </h3>
            <p className="text-[#44474d] leading-relaxed mb-4">
              Combineer uw CV-ketel met een warmtepomp. Ideaal voor bestaande
              woningen. Bespaar direct op gas en profiteer van ca. €2.125
              subsidie.
            </p>
            <div className="w-full bg-white/60 rounded-full h-1.5">
              <div
                className="bg-[#C0392B] h-1.5 rounded-full"
                style={{ width: "85%" }}
              />
            </div>
            <p className="text-xs text-[#44474d] mt-1">
              85% van onze klanten kiest hybride
            </p>
          </div>

          {/* All-Electric - col-span-3 */}
          <div className="md:col-span-3 bg-[#e1e3e4] rounded-lg p-8">
            <Zap className="w-8 h-8 text-[#C0392B] mb-4" />
            <h3 className="text-xl font-bold text-[#00030a] mb-2">
              All-Electric
            </h3>
            <p className="text-[#44474d] leading-relaxed">
              Volledig van het gas af. Geschikt voor goed geïsoleerde woningen.
              Tot €4.400 ISDE-subsidie en lagere maandlasten op termijn.
            </p>
          </div>

          {/* Subsidie Geregeld - col-span-2 */}
          <div className="md:col-span-2 bg-[#e1e3e4] rounded-lg p-8">
            <FileText className="w-8 h-8 text-[#C0392B] mb-4" />
            <h3 className="text-xl font-bold text-[#00030a] mb-2">
              Subsidie Geregeld
            </h3>
            <p className="text-[#44474d] leading-relaxed text-sm">
              Wij verzorgen uw volledige ISDE-aanvraag bij RVO. Gemiddeld
              €2.500–€4.400 terug.
            </p>
          </div>

          {/* Binnen 4 Weken - col-span-2, primary bg */}
          <div className="md:col-span-2 bg-[#C0392B] text-white rounded-lg p-8">
            <Clock className="w-8 h-8 text-white mb-4" />
            <h3 className="text-xl font-bold mb-2">Binnen 4 Weken</h3>
            <p className="text-white/80 leading-relaxed text-sm">
              Van adviesgesprek tot werkende warmtepomp. Geen maandenlange
              wachttijden.
            </p>
          </div>

          {/* Onderhoud & Service - col-span-2 */}
          <div className="md:col-span-2 bg-[#e1e3e4] rounded-lg p-8">
            <Settings className="w-8 h-8 text-[#C0392B] mb-4" />
            <h3 className="text-xl font-bold text-[#00030a] mb-2">
              Onderhoud & Service
            </h3>
            <p className="text-[#44474d] leading-relaxed text-sm">
              Eén aanspreekpunt voor nazorg, onderhoud en eventuele storingen.
              Altijd bereikbaar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stappen ---------- */
function StappenSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Hoe werkt het?</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#00030a] mb-12">
          In 4 stappen naar uw warmtepomp
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stappenItems.map((stap, i) => {
            const Icon = stap.icon;
            return (
              <div key={stap.title} className="relative">
                <div className="text-6xl font-black text-[#C0392B]/10 mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <Icon className="w-7 h-7 text-[#C0392B] mb-3" />
                <h3 className="text-lg font-bold text-[#00030a] mb-2">
                  {stap.title}
                </h3>
                <p className="text-[#44474d] leading-relaxed">
                  {stap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Prijs Tabel ---------- */
function PrijsTabel() {
  const prijzen = [
    {
      type: "Hybride warmtepomp",
      prijs: "€4.500 – €7.500",
      subsidie: "ca. €2.125",
      netto: "ca. €2.375 – €5.375",
    },
    {
      type: "All-electric warmtepomp",
      prijs: "€8.000 – €15.000",
      subsidie: "ca. €3.025",
      netto: "ca. €4.975 – €11.975",
    },
    {
      type: "Grond-water warmtepomp",
      prijs: "€15.000 – €25.000",
      subsidie: "ca. €5.075",
      netto: "ca. €9.925 – €19.925",
    },
    {
      type: "Warmtepompboiler",
      prijs: "€2.000 – €3.500",
      subsidie: "€675",
      netto: "ca. €1.325 – €2.825",
    },
  ];

  const productSchema = prijzen.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.type,
    description: `${p.type} inclusief installatie door Warmtebaas in Midden-Nederland`,
    brand: { "@type": "Organization", name: "Warmtebaas (Klimaatbaas B.V.)" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: p.prijs.match(/[\d.]+/)?.[0]?.replace(".", "") || "0",
      highPrice: p.prijs.match(/[\d.]+$/)?.[0]?.replace(".", "") || "0",
      offerCount: 1,
    },
  }));

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <SectionLabel>Prijzen</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#00030a] mb-4">
          Wat kost een warmtepomp?
        </h2>
        <p className="text-lg text-[#44474d] leading-relaxed mb-10">
          Inclusief installatie, materiaal en subsidieaanvraag. Prijzen zijn
          indicatief.
        </p>
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-[0_0_40px_0_rgba(192,57,43,0.15)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 pr-4 font-bold text-[#00030a]">
                    Type warmtepomp
                  </th>
                  <th className="py-4 pr-4 font-bold text-[#00030a]">
                    Prijs incl. installatie
                  </th>
                  <th className="py-4 pr-4 font-bold text-[#00030a]">
                    ISDE-subsidie
                  </th>
                  <th className="py-4 font-bold text-[#00030a]">
                    Netto kosten
                  </th>
                </tr>
              </thead>
              <tbody>
                {prijzen.map((p) => (
                  <tr key={p.type} className="border-b border-gray-100">
                    <td className="py-4 pr-4 font-medium text-[#00030a]">
                      {p.type}
                    </td>
                    <td className="py-4 pr-4 text-[#44474d]">{p.prijs}</td>
                    <td
                      className="py-4 pr-4 font-semibold"
                      style={{ color: config.colors.primary }}
                    >
                      {p.subsidie}
                    </td>
                    <td className="py-4 font-semibold text-[#00030a]">
                      {p.netto}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-sm text-[#44474d] mt-6">
          Prijzen zijn inclusief BTW en installatie. Exacte prijs afhankelijk van
          uw situatie.{" "}
          <a
            href={utmLink(
              "https://subsidiebaas.com",
              "warmtebaas",
              "prijstabel-link"
            )}
            onClick={() => trackEvent("cta_click_subsidiebaas")}
            className="underline font-semibold"
            style={{ color: config.colors.primary }}
          >
            Bereken uw subsidie op subsidiebaas.com
          </a>
        </p>
      </div>
    </section>
  );
}

/* ---------- Prijs CTA ---------- */
function PrijsCTA() {
  return (
    <section className="py-16 px-6 bg-[#f3f4f5]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#00030a] mb-4">
          Benieuwd wat een warmtepomp voor uw woning kost?
        </h2>
        <p className="text-lg text-[#44474d] leading-relaxed mb-8">
          Wij maken een berekening op maat, inclusief subsidie-indicatie. Gratis
          en vrijblijvend.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("formulier")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#96281B] text-white font-bold px-8 py-4 rounded-lg text-lg shadow-[0_0_40px_0_rgba(192,57,43,0.15)] hover:shadow-xl transition-all hover:-translate-y-0.5"
        >
          Gratis woningcheck aanvragen
        </button>
      </div>
    </section>
  );
}

/* ---------- Dark CTA Section ---------- */
function DarkCTA() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto bg-[#00030a] text-white rounded-lg p-12 md:p-20 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
          Klaar voor een warmtepomp?
        </h2>
        <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Vraag vandaag nog uw gratis woningcheck aan en ontvang binnen 48 uur
          een advies op maat.
        </p>
        <button
          onClick={() => {
            trackEvent("cta_click_dark_section");
            document
              .getElementById("formulier")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-[#C0392B] hover:bg-[#96281B] text-white px-12 py-5 rounded-lg font-bold text-xl transition-colors"
        >
          Gratis woningcheck aanvragen
        </button>
      </div>
    </section>
  );
}

/* ---------- HowTo Schema ---------- */
function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Warmtepomp laten plaatsen via Warmtebaas",
    description:
      "In 4 stappen van advies tot werkende warmtepomp met subsidie.",
    step: stappenItems.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ---------- Internal Links ---------- */
function InternalLinks() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#00030a] mb-6">
          Meer van Klimaatbaas
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={utmLink(
              "https://aircobaas.com",
              "warmtebaas",
              "meer-van-klimaatbaas"
            )}
            onClick={() => trackEvent("cta_click_aircobaas")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-200 text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
          >
            Airco nodig? → Aircobaas
          </a>
          <a
            href={utmLink(
              "https://subsidiebaas.com",
              "warmtebaas",
              "meer-van-klimaatbaas"
            )}
            onClick={() => trackEvent("cta_click_subsidiebaas")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-green-200 text-green-700 font-semibold hover:bg-green-50 transition-colors"
          >
            Subsidie berekenen → Subsidiebaas
          </a>
          <a
            href={utmLink(
              "https://klimaatbaas.com",
              "warmtebaas",
              "meer-van-klimaatbaas"
            )}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            Over ons → Klimaatbaas
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Main Page ---------- */
export default function WarmtebaasPage() {
  return (
    <>
      <HowToSchema />
      <Navbar siteName="Warmtebaas" primaryColor={config.colors.primary} />
      <HeroSection />
      <UrgentieBanner />
      <DirectAnswer />
      <ExpertiseBento />
      <StappenSection />
      <PrijsTabel />
      <PrijsCTA />
      <SubsidieCalculator
        primaryColor={config.colors.primary}
        variant="compact"
      />
      <DarkCTA />
      <Reviews
        primaryColor={config.colors.primary}
        reviews={[
          {
            naam: "Jan & Marieke",
            plaats: "Amersfoort",
            sterren: 5,
            tekst:
              "Warmtebaas heeft alles geregeld, van advies tot subsidie. Binnen 3 weken een werkende warmtepomp.",
          },
          {
            naam: "Familie De Vries",
            plaats: "Utrecht",
            sterren: 5,
            tekst:
              "Eerlijk advies, nette installatie, en de subsidie stond binnen 6 weken op onze rekening.",
          },
          {
            naam: "Peter",
            plaats: "Hilversum",
            sterren: 5,
            tekst:
              "Eerst twijfelde ik, maar na het adviesgesprek was ik overtuigd. Top service.",
          },
        ]}
      />
      <FAQ primaryColor={config.colors.primary} items={faqItems} />
      <WerkgebiedKaart
        primaryColor={config.colors.primary}
        compact
        siteSlug="warmtebaas"
      />
      <InternalLinks />
      <LeadForm
        site="warmtebaas"
        title="Gratis woningcheck aanvragen"
        primaryColor={config.colors.primary}
        submitLabel="Woningcheck aanvragen"
        subtext="Binnen 48 uur nemen wij contact met u op voor een gratis adviesgesprek."
        fields={[
          { name: "naam", label: "Naam", type: "text", required: true },
          { name: "email", label: "E-mail", type: "email", required: true },
          {
            name: "telefoon",
            label: "Telefoon",
            type: "tel",
            required: true,
          },
          { name: "postcode", label: "Postcode", type: "text" },
          {
            name: "type_woning",
            label: "Type woning",
            type: "select",
            options: [
              { value: "tussenwoning", label: "Tussenwoning" },
              { value: "hoekwoning", label: "Hoekwoning" },
              { value: "2-onder-1-kap", label: "2-onder-1-kap" },
              { value: "vrijstaand", label: "Vrijstaand" },
              { value: "appartement", label: "Appartement" },
            ],
          },
          {
            name: "bouwjaar",
            label: "Bouwjaar",
            type: "select",
            options: [
              { value: "<1975", label: "Voor 1975" },
              { value: "1975-1990", label: "1975–1990" },
              { value: "1990-2005", label: "1990–2005" },
              { value: "2005-2020", label: "2005–2020" },
              { value: ">2020", label: "Na 2020" },
            ],
          },
          {
            name: "huidig_systeem",
            label: "Huidig verwarmingssysteem",
            type: "select",
            options: [
              { value: "cv-ketel", label: "CV-ketel" },
              { value: "stadsverwarming", label: "Stadsverwarming" },
              { value: "warmtepomp", label: "Warmtepomp" },
              { value: "anders", label: "Anders" },
            ],
          },
          {
            name: "isolatie",
            label: "Isolatie",
            type: "select",
            options: [
              { value: "goed", label: "Goed" },
              { value: "redelijk", label: "Redelijk" },
              { value: "matig", label: "Matig" },
              { value: "weet-niet", label: "Weet ik niet" },
            ],
          },
          {
            name: "voorkeur_wp",
            label: "Voorkeur",
            type: "select",
            options: [
              { value: "hybride", label: "Hybride warmtepomp" },
              { value: "all-electric", label: "All-electric warmtepomp" },
              { value: "weet-niet", label: "Weet ik nog niet" },
            ],
          },
          {
            name: "bericht",
            label: "Bericht (optioneel)",
            type: "textarea",
            placeholder: "Heeft u nog vragen of opmerkingen?",
          },
        ]}
      />
      <Footer
        primaryColor={config.colors.primary}
        links={[
          {
            label: "Ook airconditioning nodig? → aircobaas.com",
            href: utmLink(
              "https://aircobaas.com",
              "warmtebaas",
              "footer-link"
            ),
          },
          {
            label: "Subsidie checken? → subsidiebaas.com",
            href: utmLink(
              "https://subsidiebaas.com",
              "warmtebaas",
              "footer-link"
            ),
          },
        ]}
      />
      <StickyCTA
        label="Gratis woningcheck aanvragen"
        primaryColor={config.colors.primary}
      />
      <WhatsAppButton message="Hallo, ik heb een vraag over warmtepompen" />
    </>
  );
}
