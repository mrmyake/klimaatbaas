"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VerifiedBy from "@/components/VerifiedBy";
import { sites } from "@/lib/sites";
import { utmLink } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight, ChevronRight } from "lucide-react";

const config = sites.subsidiebaas;

interface SubsidieLayoutProps {
  children: React.ReactNode;
  breadcrumb: string;
  slug: string;
}

export default function SubsidieLayout({ children, breadcrumb, slug }: SubsidieLayoutProps) {
  return (
    <>
      <Navbar
        siteName="Subsidiebaas"
        primaryColor={config.colors.primary}
        links={[
          { label: "Subsidie Berekenen", href: "/subsidie-berekenen" },
          { label: "ISDE 2026", href: "/isde-subsidie-2026" },
          { label: "Ventilatie", href: "/ventilatiesubsidie-2026" },
          { label: "FAQ", href: "/veelgestelde-vragen" },
          { label: "Fouten", href: "/subsidie-aanvraag-fouten" },
        ]}
      />

      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm text-gray-500">
          <li>
            <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" aria-hidden="true" /></li>
          <li className="font-medium text-gray-900">{breadcrumb}</li>
        </ol>
      </nav>

      {/* Organization schema on all subsidiebaas pages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Subsidiebaas",
            url: "https://subsidiebaas.com",
            description: "Onafhankelijke informatie over ISDE-subsidies voor warmtepompen, isolatie en ventilatie in Nederland.",
            parentOrganization: { "@type": "Organization", name: "Klimaatbaas B.V." },
          }),
        }}
      />

      {children}

      {/* Bottom CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#00030a] rounded-lg p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10 text-[200px] text-white leading-none select-none" aria-hidden="true">€</div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
              Warmtebaas regelt uw subsidie gratis
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Van adviesgesprek tot installatie tot subsidieaanvraag. Wij ontzorgen u volledig.
            </p>
            <a
              href={utmLink("https://warmtebaas.com", "subsidiebaas", slug)}
              onClick={() => trackEvent("cta_click", { destination: "warmtebaas", source_page: window.location.pathname, cta_location: "bottom-cta" })}
              className="inline-flex items-center gap-2 bg-white text-[#00030a] px-10 py-4 rounded-lg font-bold text-lg hover:scale-95 transition-transform"
            >
              Gratis woningcheck aanvragen
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <VerifiedBy />
      <Footer
        primaryColor={config.colors.primary}
        links={[
          { label: "Subsidie berekenen", href: "/subsidie-berekenen" },
          { label: "ISDE 2026 overzicht", href: "/isde-subsidie-2026" },
          { label: "Warmtepomp installatie → warmtebaas.com", href: utmLink("https://warmtebaas.com", "subsidiebaas", "footer-link") },
          { label: "Airco → aircobaas.com", href: utmLink("https://aircobaas.com", "subsidiebaas", "footer-link") },
        ]}
      />
      <WhatsAppButton message="Hallo, ik heb een vraag over subsidie" />
    </>
  );
}
