"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import USPs from "@/components/USPs";
import Stappen from "@/components/Stappen";
import SubsidieCalculator from "@/components/SubsidieCalculator";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import WerkgebiedKaart from "@/components/WerkgebiedKaart";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import { sites } from "@/lib/sites";
import {
  ShieldCheck,
  Wrench,
  HeadphonesIcon,
  ClipboardCheck,
  Home,
  Sun,
  FileCheck,
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

function UrgentieBanner() {
  return (
    <div className="bg-[#96281B] text-white text-center py-3 px-6 text-sm font-medium">
      📋 ISDE-budget 2026: €500 miljoen beschikbaar — plan nu uw installatie
    </div>
  );
}

function DirectAnswer() {
  return (
    <section className="direct-answer py-16 px-6 bg-red-50/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl font-bold mb-6">
          Warmtepomp laten plaatsen: wat u moet weten
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong>Wat kost een warmtepomp?</strong> Een hybride warmtepomp kost
            gemiddeld €4.500–€7.500 inclusief installatie. Een all-electric
            warmtepomp kost €8.000–€15.000. Met ISDE-subsidie krijgt u €2.000–€4.400
            terug.
          </p>
          <p>
            <strong>Hoeveel subsidie krijg ik?</strong> Via de ISDE-regeling 2026
            ontvangt u minimaal €2.125 voor een hybride warmtepomp en tot €4.400 voor
            een all-electric model.{" "}
            <a href="https://subsidiebaas.com" className="underline font-semibold" style={{ color: config.colors.primary }}>
              Bereken uw exacte subsidie op subsidiebaas.com
            </a>.
          </p>
          <p>
            <strong>Hoe lang duurt het?</strong> Vanaf het adviesgesprek tot werkende
            warmtepomp duurt gemiddeld 4–6 weken. De installatie zelf is 1–3 dagen.
          </p>
        </div>
      </div>
    </section>
  );
}

function PrijsTabel() {
  const prijzen = [
    { type: "Hybride warmtepomp", prijs: "€4.500 – €7.500", subsidie: "ca. €2.125", netto: "ca. €2.375 – €5.375" },
    { type: "All-electric warmtepomp", prijs: "€8.000 – €15.000", subsidie: "ca. €3.025", netto: "ca. €4.975 – €11.975" },
    { type: "Grond-water warmtepomp", prijs: "€15.000 – €25.000", subsidie: "ca. €5.075", netto: "ca. €9.925 – €19.925" },
    { type: "Warmtepompboiler", prijs: "€2.000 – €3.500", subsidie: "€675", netto: "ca. €1.325 – €2.825" },
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
        <h2 className="font-heading text-3xl font-bold text-center mb-4">
          Wat kost een warmtepomp?
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Inclusief installatie, materiaal en subsidieaanvraag. Prijzen zijn indicatief.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 font-heading font-bold">Type warmtepomp</th>
                <th className="py-3 pr-4 font-heading font-bold">Prijs incl. installatie</th>
                <th className="py-3 pr-4 font-heading font-bold">ISDE-subsidie</th>
                <th className="py-3 font-heading font-bold">Netto kosten</th>
              </tr>
            </thead>
            <tbody>
              {prijzen.map((p) => (
                <tr key={p.type} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium">{p.type}</td>
                  <td className="py-3 pr-4">{p.prijs}</td>
                  <td className="py-3 pr-4 font-semibold" style={{ color: config.colors.primary }}>{p.subsidie}</td>
                  <td className="py-3 font-semibold">{p.netto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Prijzen zijn inclusief BTW en installatie. Exacte prijs afhankelijk van uw situatie.{" "}
          <a href="https://subsidiebaas.com" className="underline" style={{ color: config.colors.primary }}>
            Bereken uw subsidie op subsidiebaas.com →
          </a>
        </p>
      </div>
    </section>
  );
}

function PrijsCTA() {
  return (
    <section className="py-16 px-6 bg-red-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
          Benieuwd wat een warmtepomp voor uw woning kost?
        </h2>
        <p className="text-gray-600 mb-8">
          Wij maken een berekening op maat, inclusief subsidie-indicatie. Gratis en vrijblijvend.
        </p>
        <button
          onClick={() =>
            document.getElementById("formulier")?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          style={{ backgroundColor: config.colors.primary }}
        >
          Gratis woningcheck aanvragen
        </button>
      </div>
    </section>
  );
}

function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Warmtepomp laten plaatsen via Warmtebaas",
    description: "In 4 stappen van advies tot werkende warmtepomp met subsidie.",
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

function InternalLinks() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl font-bold mb-4">Meer van Klimaatbaas</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://aircobaas.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-blue-200 text-blue-700 font-semibold hover:bg-blue-50 transition-colors">
            Airco nodig? → Aircobaas
          </a>
          <a href="https://subsidiebaas.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-green-200 text-green-700 font-semibold hover:bg-green-50 transition-colors">
            Subsidie berekenen → Subsidiebaas
          </a>
          <a href="https://klimaatbaas.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
            Over ons → Klimaatbaas
          </a>
        </div>
      </div>
    </section>
  );
}

export default function WarmtebaasPage() {
  return (
    <>
      <HowToSchema />
      <Navbar siteName="Warmtebaas" primaryColor={config.colors.primary} />
      <Hero
        kop="Bespaar tot €4.400 subsidie op uw warmtepomp"
        subkop="Gratis adviesgesprek en offerte binnen 48 uur. Wij regelen ook uw ISDE-subsidieaanvraag."
        cta="Gratis woningcheck aanvragen"
        bgClass="bg-gradient-to-b from-red-50 to-red-100/50"
        primaryColor={config.colors.primary}
      />
      <UrgentieBanner />
      <DirectAnswer />
      <USPs
        primaryColor={config.colors.primary}
        bgIconColor="#FEE2E2"
        items={[
          { icon: ShieldCheck, title: "Subsidie geregeld", description: "Wij verzorgen uw volledige ISDE-aanvraag. Gemiddeld €2.500–€4.400 terug." },
          { icon: Wrench, title: "Vakkundig geïnstalleerd", description: "Gecertificeerde monteurs met F-gassen A1/A2. Oplevering inclusief inregeling." },
          { icon: HeadphonesIcon, title: "Eén aanspreekpunt", description: "Van adviesgesprek tot nazorg. Geen doorverwijzingen, geen wachttijden." },
        ]}
      />
      <Stappen title="Hoe werkt het?" primaryColor={config.colors.primary} stappen={stappenItems} />
      <PrijsTabel />
      <PrijsCTA />
      <SubsidieCalculator primaryColor={config.colors.primary} variant="compact" />
      <Reviews
        primaryColor={config.colors.primary}
        reviews={[
          { naam: "Jan & Marieke", plaats: "Amersfoort", sterren: 5, tekst: "Warmtebaas heeft alles geregeld, van advies tot subsidie. Binnen 3 weken een werkende warmtepomp." },
          { naam: "Familie De Vries", plaats: "Utrecht", sterren: 5, tekst: "Eerlijk advies, nette installatie, en de subsidie stond binnen 6 weken op onze rekening." },
          { naam: "Peter", plaats: "Hilversum", sterren: 5, tekst: "Eerst twijfelde ik, maar na het adviesgesprek was ik overtuigd. Top service." },
        ]}
      />
      <FAQ primaryColor={config.colors.primary} items={faqItems} />
      <WerkgebiedKaart primaryColor={config.colors.primary} compact siteSlug="warmtebaas" />
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
          { name: "telefoon", label: "Telefoon", type: "tel", required: true },
          { name: "postcode", label: "Postcode", type: "text" },
          { name: "type_woning", label: "Type woning", type: "select", options: [{ value: "tussenwoning", label: "Tussenwoning" }, { value: "hoekwoning", label: "Hoekwoning" }, { value: "2-onder-1-kap", label: "2-onder-1-kap" }, { value: "vrijstaand", label: "Vrijstaand" }, { value: "appartement", label: "Appartement" }] },
          { name: "bouwjaar", label: "Bouwjaar", type: "select", options: [{ value: "<1975", label: "Vóór 1975" }, { value: "1975-1990", label: "1975–1990" }, { value: "1990-2005", label: "1990–2005" }, { value: "2005-2020", label: "2005–2020" }, { value: ">2020", label: "Na 2020" }] },
          { name: "huidig_systeem", label: "Huidig verwarmingssysteem", type: "select", options: [{ value: "cv-ketel", label: "CV-ketel" }, { value: "stadsverwarming", label: "Stadsverwarming" }, { value: "warmtepomp", label: "Warmtepomp" }, { value: "anders", label: "Anders" }] },
          { name: "isolatie", label: "Isolatie", type: "select", options: [{ value: "goed", label: "Goed" }, { value: "redelijk", label: "Redelijk" }, { value: "matig", label: "Matig" }, { value: "weet-niet", label: "Weet ik niet" }] },
          { name: "voorkeur_wp", label: "Voorkeur", type: "select", options: [{ value: "hybride", label: "Hybride warmtepomp" }, { value: "all-electric", label: "All-electric warmtepomp" }, { value: "weet-niet", label: "Weet ik nog niet" }] },
          { name: "bericht", label: "Bericht (optioneel)", type: "textarea", placeholder: "Heeft u nog vragen of opmerkingen?" },
        ]}
      />
      <Footer primaryColor={config.colors.primary} links={[{ label: "Ook airconditioning nodig? → aircobaas.com", href: "https://aircobaas.com" }, { label: "Subsidie checken? → subsidiebaas.com", href: "https://subsidiebaas.com" }]} />
      <StickyCTA label="Gratis woningcheck aanvragen" primaryColor={config.colors.primary} />
      <WhatsAppButton message="Hallo, ik heb een vraag over warmtepompen" />
    </>
  );
}
