"use client";

import Hero from "@/components/Hero";
import USPs from "@/components/USPs";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { sites } from "@/lib/sites";
import { Clock, Thermometer, Paintbrush, Euro } from "lucide-react";

const config = sites.aircobaas;

function PrijsIndicatie() {
  const prijzen = [
    {
      type: "Single split",
      ruimtes: "1 ruimte",
      prijs: "vanaf €1.800",
    },
    {
      type: "Multi-split",
      ruimtes: "2-3 ruimtes",
      prijs: "vanaf €3.500",
    },
    {
      type: "Multi-split",
      ruimtes: "4+ ruimtes",
      prijs: "vanaf €5.500",
    },
  ];

  return (
    <section className="py-20 px-6 bg-blue-50/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-4">
          Wat kost een airco?
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Inclusief installatie, materiaal en 2 jaar garantie.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {prijzen.map((p) => (
            <div
              key={p.ruimtes}
              className="glass rounded-2xl p-8 text-center"
            >
              <Euro className="w-8 h-8 mx-auto mb-4 text-blue-500" />
              <h3 className="font-heading font-bold text-lg mb-1">
                {p.type}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{p.ruimtes}</p>
              <p className="text-2xl font-bold text-blue-600">{p.prijs}</p>
              <p className="text-xs text-gray-500 mt-1">geïnstalleerd</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AircobaasPage() {
  return (
    <>
      <Hero
        kop="Airco geplaatst binnen 2 weken"
        subkop="Koelen én verwarmen. Vakkundige installatie door gecertificeerde monteurs."
        cta="Gratis offerte aanvragen"
        bgClass="bg-gradient-to-b from-blue-50 to-blue-100/50"
        primaryColor={config.colors.primary}
      />

      <USPs
        primaryColor={config.colors.primary}
        bgIconColor="#DBEAFE"
        items={[
          {
            icon: Clock,
            title: "Binnen 2 weken geplaatst",
            description:
              "Geen maandenlange wachtlijsten. Wij plannen snel.",
          },
          {
            icon: Thermometer,
            title: "Koelen én verwarmen",
            description:
              "Moderne airco's verwarmen ook. Ideaal voor tussenseizoen.",
          },
          {
            icon: Paintbrush,
            title: "Nette afwerking",
            description:
              "Kabelgoten op kleur, buitenunit netjes weggewerkt, alles opgeruimd.",
          },
        ]}
      />

      <PrijsIndicatie />

      <Reviews
        primaryColor={config.colors.primary}
        reviews={[
          {
            naam: "Sophie",
            plaats: "Bunnik",
            sterren: 5,
            tekst: "Binnen een week geplaatst. Heerlijk koel huis, ook fijn als verwarming in het najaar.",
          },
          {
            naam: "Mark & Lisa",
            plaats: "Nieuwegein",
            sterren: 5,
            tekst: "Nette jongens, alles keurig afgewerkt. Zelfs de buitenunit zie je bijna niet.",
          },
          {
            naam: "Dennis",
            plaats: "Utrecht",
            sterren: 5,
            tekst: "Snelle offerte, snelle plaatsing, prima prijs. Aanrader.",
          },
        ]}
      />

      <FAQ
        primaryColor={config.colors.primary}
        items={[
          {
            vraag: "Hoe snel kan mijn airco geplaatst worden?",
            antwoord:
              "Meestal binnen 2 weken na akkoord.",
          },
          {
            vraag: "Kan een airco ook verwarmen?",
            antwoord:
              "Ja, moderne split-systemen verwarmen tot -15°C buitentemperatuur. Ideaal voor voor- en naseizoen.",
          },
          {
            vraag: "Hoeveel geluid maakt een airco?",
            antwoord:
              "Moderne binnenunits: 19-25 dB (stiller dan een fluistering). Buitenunits: 45-50 dB.",
          },
          {
            vraag: "Heb ik een vergunning nodig?",
            antwoord:
              "Meestal niet. Alleen bij monumenten of VvE's kan toestemming nodig zijn.",
          },
        ]}
      />

      <LeadForm
        site="aircobaas"
        title="Gratis offerte aanvragen"
        primaryColor={config.colors.primary}
        submitLabel="Offerte aanvragen"
        subtext="Binnen 24 uur reactie. Vrijblijvend."
        fields={[
          { name: "naam", label: "Naam", type: "text", required: true },
          { name: "email", label: "E-mail", type: "email", required: true },
          { name: "telefoon", label: "Telefoon", type: "tel", required: true },
          { name: "postcode", label: "Postcode", type: "text" },
          {
            name: "aantal_ruimtes",
            label: "Aantal ruimtes",
            type: "select",
            options: [
              { value: "1", label: "1 ruimte" },
              { value: "2-3", label: "2-3 ruimtes" },
              { value: "4+", label: "4+ ruimtes" },
            ],
          },
          {
            name: "type_airco",
            label: "Gewenst",
            type: "select",
            options: [
              { value: "koelen", label: "Alleen koelen" },
              { value: "koelen-en-verwarmen", label: "Koelen én verwarmen" },
              { value: "weet-niet", label: "Weet ik nog niet" },
            ],
          },
          {
            name: "gewenste_timing",
            label: "Wanneer",
            type: "select",
            options: [
              { value: "zo-snel-mogelijk", label: "Zo snel mogelijk" },
              { value: "binnen-3-maanden", label: "Binnen 3 maanden" },
              { value: "orienterend", label: "Ik oriënteer me" },
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
            label: "Ook van het gas af? → warmtebaas.com",
            href: "https://warmtebaas.com",
          },
          {
            label: "Subsidie checken? → subsidiebaas.com",
            href: "https://subsidiebaas.com",
          },
        ]}
      />

      <StickyCTA
        label="Gratis offerte aanvragen"
        primaryColor={config.colors.primary}
      />
    </>
  );
}
