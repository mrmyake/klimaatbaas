"use client";

import Hero from "@/components/Hero";
import USPs from "@/components/USPs";
import Reviews from "@/components/Reviews";
import WerkgebiedKaart from "@/components/WerkgebiedKaart";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import { sites } from "@/lib/sites";
import {
  ShieldCheck,
  MapPin,
  FileCheck,
  Settings,
  Flame,
  Snowflake,
  ArrowRight,
} from "lucide-react";

const config = sites.klimaatbaas;

function WieZijnWij() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold mb-6">
          Wie zijn wij
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Klimaatbaas B.V. is een installatiebedrijf in Midden-Nederland,
          gespecialiseerd in warmtepompen en airconditioning. Wij werken met twee
          specialistenteams: Warmtebaas voor warmtepompen en Aircobaas voor
          airconditioning. Eén bedrijf, twee specialismen, volledige ontzorging.
        </p>
      </div>
    </section>
  );
}

function Specialismen() {
  return (
    <section className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Onze specialismen
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 border-t-4 border-red-500">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-5">
              <Flame className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">
              Warmtebaas
            </h3>
            <p className="text-gray-600 mb-6">
              Hybride en all-electric warmtepompen. Inclusief
              subsidie-ontzorging.
            </p>
            <a
              href="https://warmtebaas.com"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
            >
              Naar warmtebaas.com
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="glass rounded-2xl p-8 border-t-4 border-blue-500">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
              <Snowflake className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">
              Aircobaas
            </h3>
            <p className="text-gray-600 mb-6">
              Split en multi-split airconditioning. Koelen én verwarmen.
            </p>
            <a
              href="https://aircobaas.com"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              Naar aircobaas.com
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function KlimaatbaasPage() {
  return (
    <>
      <Hero
        kop="Verwarmt. Koelt. Ontzorgd."
        subkop="Klimaatbaas is uw totaalpartner voor warmtepompen en airconditioning in Midden-Nederland."
        cta={[
          {
            label: "Warmtepomp →",
            href: "warmtebaas.com",
            color: "#C0392B",
          },
          {
            label: "Airconditioning →",
            href: "aircobaas.com",
            color: "#2980B9",
          },
        ]}
        bgClass="bg-gradient-to-b from-slate-50 to-blue-50"
        primaryColor={config.colors.primary}
      />

      <WieZijnWij />
      <Specialismen />

      <USPs
        primaryColor={config.colors.primary}
        bgIconColor="#EBF5FB"
        items={[
          {
            icon: ShieldCheck,
            title: "Gecertificeerd",
            description:
              "F-gassen A1/A2, BRL100, Vakmanschap Warmtepompen",
          },
          {
            icon: MapPin,
            title: "Regionaal",
            description:
              "Korte lijnen, snel ter plaatse, we kennen de buurt",
          },
          {
            icon: FileCheck,
            title: "Subsidie geregeld",
            description:
              "Volledige ISDE-aanvraag, u hoeft niets te doen",
          },
          {
            icon: Settings,
            title: "Onderhoud & service",
            description:
              "Servicecontracten, storingsdienst, jaarlijkse check",
          },
        ]}
      />

      <WerkgebiedKaart primaryColor={config.colors.primary} />

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
            naam: "Sophie",
            plaats: "Bunnik",
            sterren: 5,
            tekst: "Binnen een week geplaatst. Heerlijk koel huis, ook fijn als verwarming in het najaar.",
          },
          {
            naam: "Familie De Vries",
            plaats: "Utrecht",
            sterren: 5,
            tekst: "Eerlijk advies, nette installatie, en de subsidie stond binnen 6 weken op onze rekening.",
          },
        ]}
      />

      <LeadForm
        site="klimaatbaas"
        title="Neem contact op"
        primaryColor={config.colors.primary}
        submitLabel="Verstuur bericht"
        subtext="Of bel ons direct."
        fields={[
          { name: "naam", label: "Naam", type: "text", required: true },
          { name: "email", label: "E-mail", type: "email", required: true },
          { name: "telefoon", label: "Telefoon", type: "tel", required: true },
          {
            name: "bericht",
            label: "Bericht",
            type: "textarea",
            placeholder: "Waar kunnen wij u mee helpen?",
          },
        ]}
      />

      <Footer
        primaryColor={config.colors.primary}
        links={[
          { label: "warmtebaas.com", href: "https://warmtebaas.com" },
          { label: "aircobaas.com", href: "https://aircobaas.com" },
          { label: "subsidiebaas.com", href: "https://subsidiebaas.com" },
        ]}
      />
    </>
  );
}
