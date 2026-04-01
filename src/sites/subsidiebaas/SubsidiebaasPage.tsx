"use client";

import Hero from "@/components/Hero";
import SubsidieCalculator from "@/components/SubsidieCalculator";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { sites } from "@/lib/sites";
import {
  FileText,
  Building2,
  UserCheck,
  Clock,
  CheckSquare,
} from "lucide-react";

const config = sites.subsidiebaas;

function ISDeUitleg() {
  const items = [
    {
      icon: FileText,
      title: "Wat is ISDE?",
      text: "De Investeringssubsidie Duurzame Energie en Energiebesparing vergoedt een deel van uw investering in een warmtepomp.",
    },
    {
      icon: Building2,
      title: "Budget 2026",
      text: "€500 miljoen beschikbaar. De regeling loopt door tot en met 2031.",
    },
    {
      icon: UserCheck,
      title: "Wie komt in aanmerking?",
      text: "Woningeigenaren die een warmtepomp laten installeren door een gecertificeerd bedrijf.",
    },
    {
      icon: Clock,
      title: "Hoe werkt het?",
      text: "Na installatie dient u (of uw installateur) een aanvraag in bij RVO. Uitbetaling binnen 8–13 weken.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Wat is ISDE-subsidie?
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.title} className="glass rounded-2xl p-8">
              <item.icon className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stappenplan() {
  const stappen = [
    "Check de meldcodelijst op RVO.nl — alleen warmtepompen met een geldige meldcode komen in aanmerking.",
    "Laat installeren door een erkend bedrijf — de meldcode moet op de offerte én factuur staan.",
    "Bewaar uw documenten: factuur, betaalbewijs, installatiedatum en foto van de installatie.",
    "Vraag subsidie aan via Mijn RVO — log in met DigiD en upload uw documenten.",
    "Wacht op beoordeling — gemiddelde doorlooptijd: 8–13 weken.",
    "Ontvang uw subsidie — het bedrag wordt op uw rekening gestort.",
  ];

  return (
    <section className="py-20 px-6 bg-green-50/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Stappenplan ISDE-aanvraag
        </h2>
        <div className="space-y-4">
          {stappen.map((stap, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                {i + 1}
              </div>
              <p className="text-gray-700 leading-relaxed pt-1">{stap}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Checklist() {
  const items = [
    "Warmtepomp staat op de RVO meldcodelijst",
    "Meldcode staat op de offerte",
    "Meldcode staat op de factuur",
    "Factuur bevat: merk, type, vermogen, meldcode",
    "Factuur staat op naam van de woningeigenaar",
    "Betaalbewijs bewaard (bankafschrift of iDEAL-bevestiging)",
    "Installatiedatum genoteerd",
    "Foto van de geplaatste warmtepomp gemaakt",
    "Woning is bestaande bouw (vergunning vóór 1 juli 2018)",
    "Installatie uitgevoerd door een bedrijf (niet zelf)",
    "Aanvraag ingediend binnen 24 maanden na installatie",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-4">
          ISDE Subsidie Checklist 2026
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Zorg dat u alles op orde heeft voor uw aanvraag.
        </p>
        <div className="glass rounded-2xl p-8 space-y-3">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
          <div className="border-t pt-4 mt-4 text-sm text-gray-500">
            <p>Aanvragen via: mijn.rvo.nl (DigiD vereist)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SubsidiebaasPage() {
  return (
    <>
      <Hero
        kop="Hoeveel subsidie krijgt u voor een warmtepomp?"
        subkop="Check het direct. Gratis, vrijblijvend, in 2 minuten."
        cta="Start subsidiecheck"
        bgClass="bg-gradient-to-b from-green-50 to-emerald-50"
        primaryColor={config.colors.primary}
        onCtaClick={() =>
          document
            .getElementById("calculator")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <SubsidieCalculator primaryColor={config.colors.primary} variant="full" />

      <ISDeUitleg />
      <Stappenplan />
      <Checklist />

      <FAQ
        primaryColor={config.colors.primary}
        items={[
          {
            vraag: "Moet ik de subsidie zelf aanvragen?",
            antwoord:
              "Dat kan, maar wij doen het ook voor u. Wij zijn bekend met de procedure en voorkomen fouten.",
          },
          {
            vraag: "Kan ik subsidie combineren met een lening?",
            antwoord:
              "Ja, u kunt ISDE combineren met het Nationaal Warmtefonds (lage rente) of een hypotheekverhoging.",
          },
          {
            vraag: "Wat is een meldcode?",
            antwoord:
              "Een unieke code die uw installateur na de installatie registreert bij RVO. Zonder meldcode geen subsidie.",
          },
          {
            vraag: "Hoe lang duurt de uitbetaling?",
            antwoord:
              "Gemiddeld 8–13 weken na complete aanvraag.",
          },
          {
            vraag: "Is er subsidie voor airconditioning?",
            antwoord:
              "Niet via ISDE. Airco's met verwarmingsfunctie kunnen soms via andere gemeentelijke regelingen in aanmerking komen.",
          },
        ]}
      />

      <LeadForm
        site="subsidiebaas"
        title="Vrijblijvend adviesgesprek aanvragen"
        primaryColor={config.colors.primary}
        submitLabel="Gratis advies aanvragen"
        subtext="Subsidiebaas is een initiatief van Klimaatbaas B.V. — uw installatiepartner in Midden-Nederland."
        fields={[
          { name: "naam", label: "Naam", type: "text", required: true },
          { name: "email", label: "E-mail", type: "email", required: true },
          { name: "telefoon", label: "Telefoon", type: "tel", required: true },
          {
            name: "subsidie_interesse",
            label: "Interesse",
            type: "select",
            options: [
              { value: "warmtepomp", label: "Warmtepomp" },
              { value: "isolatie", label: "Isolatie" },
              { value: "beide", label: "Beide" },
              { value: "weet-niet", label: "Weet ik niet" },
            ],
          },
          {
            name: "bericht",
            label: "Bericht (optioneel)",
            type: "textarea",
            placeholder: "Heeft u nog vragen?",
          },
        ]}
      />

      <Footer
        primaryColor={config.colors.primary}
        links={[
          {
            label: "Klaar voor installatie? → warmtebaas.com",
            href: "https://warmtebaas.com",
          },
          {
            label: "Airco nodig? → aircobaas.com",
            href: "https://aircobaas.com",
          },
        ]}
      />

      <StickyCTA
        label="Start subsidiecheck"
        primaryColor={config.colors.primary}
      />
    </>
  );
}
