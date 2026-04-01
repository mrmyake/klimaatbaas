"use client";

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

export default function WarmtebaasPage() {
  return (
    <>
      <Hero
        kop="Bespaar tot €4.400 subsidie op uw warmtepomp"
        subkop="Gratis adviesgesprek en offerte binnen 48 uur. Wij regelen ook uw ISDE-subsidieaanvraag."
        cta="Gratis woningcheck aanvragen"
        bgClass="bg-gradient-to-b from-red-50 to-red-100/50"
        primaryColor={config.colors.primary}
      />

      <USPs
        primaryColor={config.colors.primary}
        bgIconColor="#FEE2E2"
        items={[
          {
            icon: ShieldCheck,
            title: "Subsidie geregeld",
            description:
              "Wij verzorgen uw volledige ISDE-aanvraag. Gemiddeld €2.500–€4.400 terug.",
          },
          {
            icon: Wrench,
            title: "Vakkundig geïnstalleerd",
            description:
              "Gecertificeerde monteurs met F-gassen A1/A2. Oplevering inclusief inregeling.",
          },
          {
            icon: HeadphonesIcon,
            title: "Eén aanspreekpunt",
            description:
              "Van adviesgesprek tot nazorg. Geen doorverwijzingen, geen wachttijden.",
          },
        ]}
      />

      <Stappen
        title="Hoe werkt het?"
        primaryColor={config.colors.primary}
        stappen={[
          {
            icon: ClipboardCheck,
            title: "Gratis woningcheck",
            description: "Wij beoordelen of uw woning geschikt is",
          },
          {
            icon: Home,
            title: "Advies op maat",
            description: "Huisbezoek met warmtescan en subsidie-indicatie",
          },
          {
            icon: Sun,
            title: "Installatie",
            description:
              "Door ons eigen team, meestal binnen 4 weken",
          },
          {
            icon: FileCheck,
            title: "Subsidie ingediend",
            description:
              "Wij regelen de volledige ISDE-aanvraag bij RVO",
          },
        ]}
      />

      <SubsidieCalculator
        primaryColor={config.colors.primary}
        variant="compact"
      />

      <Reviews
        primaryColor={config.colors.primary}
        reviews={[
          {
            naam: "Jan & Marieke",
            plaats: "Amersfoort",
            sterren: 5,
            tekst: "Warmtebaas heeft alles geregeld, van advies tot subsidie. Binnen 3 weken een werkende warmtepomp.",
          },
          {
            naam: "Familie De Vries",
            plaats: "Utrecht",
            sterren: 5,
            tekst: "Eerlijk advies, nette installatie, en de subsidie stond binnen 6 weken op onze rekening.",
          },
          {
            naam: "Peter",
            plaats: "Hilversum",
            sterren: 5,
            tekst: "Eerst twijfelde ik, maar na het adviesgesprek was ik overtuigd. Top service.",
          },
        ]}
      />

      <FAQ
        primaryColor={config.colors.primary}
        items={[
          {
            vraag: "Hoeveel subsidie krijg ik?",
            antwoord:
              "Afhankelijk van type en vermogen. Hybride: ca. €2.125. All-electric: ca. €3.025. Wij berekenen het exacte bedrag.",
          },
          {
            vraag: "Is mijn woning geschikt?",
            antwoord:
              "De meeste woningen zijn geschikt, mits redelijk geïsoleerd. Wij beoordelen dit gratis bij de woningcheck.",
          },
          {
            vraag: "Hoe lang duurt de installatie?",
            antwoord:
              "Gemiddeld 1–2 dagen voor een hybride WP, 2–3 dagen voor all-electric.",
          },
          {
            vraag: "Moet ik zelf de subsidie aanvragen?",
            antwoord:
              "Nee, wij doen dat volledig voor u bij RVO.",
          },
          {
            vraag: "Wat kost een warmtepomp?",
            antwoord:
              "Een hybride warmtepomp kost €4.500–€7.500. All-electric: €8.000–€15.000. Na subsidie betaalt u €2.000–€4.000 minder.",
          },
        ]}
      />

      <WerkgebiedKaart primaryColor={config.colors.primary} compact />

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
              { value: "<1975", label: "Vóór 1975" },
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
            href: "https://aircobaas.com",
          },
          {
            label: "Subsidie checken? → subsidiebaas.com",
            href: "https://subsidiebaas.com",
          },
        ]}
      />

      <StickyCTA
        label="Gratis woningcheck aanvragen"
        primaryColor={config.colors.primary}
      />
    </>
  );
}
