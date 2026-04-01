"use client";

import { useState } from "react";
import {
  berekenISDE2026,
  type WarmtepompType,
  type EnergieLabel,
  type SubsidieResultaat,
} from "@/lib/subsidie-calculator";
import { Flame, Zap, Globe, Droplets, AlertTriangle, ArrowRight } from "lucide-react";

const typeOpties = [
  {
    value: "lucht-water-hybride" as WarmtepompType,
    label: "Hybride warmtepomp",
    sub: "Combinatie met uw cv-ketel",
    icon: Flame,
  },
  {
    value: "lucht-water-all-electric" as WarmtepompType,
    label: "Volledig elektrisch",
    sub: "Zonder cv-ketel, 100% elektrisch",
    icon: Zap,
  },
  {
    value: "grond-water" as WarmtepompType,
    label: "Grond-water warmtepomp",
    sub: "Warmte uit de bodem",
    icon: Globe,
  },
  {
    value: "warmtepompboiler" as WarmtepompType,
    label: "Warmtepompboiler",
    sub: "Alleen warm tapwater",
    icon: Droplets,
  },
];

const vermogenOpties = [
  { kw: 4, label: "4 kW", sub: "Appartement / kleine tussenwoning" },
  { kw: 6, label: "6 kW", sub: "Tussenwoning / hoekwoning" },
  { kw: 8, label: "8 kW", sub: "Ruime woning / 2-onder-1-kap" },
  { kw: 10, label: "10 kW", sub: "Grote woning / vrijstaand" },
  { kw: 12, label: "12 kW", sub: "Grote vrijstaande woning" },
  { kw: 14, label: "14+ kW", sub: "Zeer grote woning" },
];

interface SubsidieCalculatorProps {
  primaryColor: string;
  variant?: "full" | "compact";
}

export default function SubsidieCalculator({
  primaryColor,
  variant = "full",
}: SubsidieCalculatorProps) {
  const [type, setType] = useState<WarmtepompType | null>(null);
  const [vermogen, setVermogen] = useState<number>(6);
  const [label, setLabel] = useState<EnergieLabel>("A+++");
  const [isEerste, setIsEerste] = useState(true);
  const [metIsolatie, setMetIsolatie] = useState(false);
  const [resultaat, setResultaat] = useState<SubsidieResultaat | null>(null);

  const berekenSubsidie = () => {
    if (!type) return;
    const res = berekenISDE2026({
      type,
      vermogenKw: type === "warmtepompboiler" ? 0 : vermogen,
      energieLabel: label,
      isEersteWP: isEerste,
      combineertMetIsolatie: metIsolatie,
    });
    setResultaat(res);
  };

  const isCompact = variant === "compact";

  return (
    <section
      id="calculator"
      className={`py-20 px-6 ${isCompact ? "" : "bg-gray-50/50"}`}
    >
      <div className="max-w-3xl mx-auto">
        {!isCompact && (
          <h2 className="font-heading text-3xl font-bold text-center mb-4">
            Hoeveel ISDE-subsidie krijgt u?
          </h2>
        )}
        {!isCompact && (
          <p className="text-gray-600 text-center mb-10">
            Bereken uw indicatie in 2 minuten. Gratis en vrijblijvend.
          </p>
        )}

        <div className="glass rounded-2xl p-8 space-y-8">
          {/* Stap 1: Type */}
          <div>
            <h3 className="font-semibold mb-4">
              Stap 1: Welk type warmtepomp?
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {typeOpties.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setType(opt.value);
                    setResultaat(null);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                    type === opt.value
                      ? "border-current shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  style={
                    type === opt.value ? { borderColor: primaryColor } : {}
                  }
                >
                  <opt.icon
                    className="w-6 h-6 shrink-0"
                    style={{
                      color:
                        type === opt.value ? primaryColor : "#9ca3af",
                    }}
                  />
                  <div>
                    <div className="font-medium text-sm">{opt.label}</div>
                    <div className="text-xs text-gray-500">{opt.sub}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Stap 2: Vermogen */}
          {type && type !== "warmtepompboiler" && (
            <div>
              <h3 className="font-semibold mb-4">Stap 2: Vermogen</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {vermogenOpties.map((opt) => (
                  <button
                    key={opt.kw}
                    onClick={() => {
                      setVermogen(opt.kw);
                      setResultaat(null);
                    }}
                    className={`p-3 rounded-xl border-2 text-center transition-all ${
                      vermogen === opt.kw
                        ? "border-current shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    style={
                      vermogen === opt.kw
                        ? { borderColor: primaryColor }
                        : {}
                    }
                  >
                    <div className="font-bold text-sm">{opt.label}</div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {vermogenOpties.find((o) => o.kw === vermogen)?.sub}
              </p>
            </div>
          )}

          {/* Stap 3: Energielabel */}
          {type && type !== "warmtepompboiler" && (
            <div>
              <h3 className="font-semibold mb-4">Stap 3: Energielabel</h3>
              <div className="flex gap-3">
                {(
                  [
                    { v: "A+++" as EnergieLabel, l: "A+++", s: "+€200 bonus" },
                    { v: "A++" as EnergieLabel, l: "A++", s: "Geen bonus" },
                    {
                      v: "onbekend" as EnergieLabel,
                      l: "Weet ik niet",
                      s: "Wij checken dit",
                    },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.v}
                    onClick={() => {
                      setLabel(opt.v);
                      setResultaat(null);
                    }}
                    className={`flex-1 p-3 rounded-xl border-2 text-center transition-all ${
                      label === opt.v
                        ? "border-current shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    style={
                      label === opt.v ? { borderColor: primaryColor } : {}
                    }
                  >
                    <div className="font-bold text-sm">{opt.l}</div>
                    <div className="text-xs text-gray-500">{opt.s}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stap 4: Eerste WP? */}
          {type && type !== "warmtepompboiler" && (
            <div>
              <h3 className="font-semibold mb-4">
                Stap 4: Eerste warmtepomp?
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setIsEerste(true);
                    setResultaat(null);
                  }}
                  className={`flex-1 p-3 rounded-xl border-2 text-center transition-all ${
                    isEerste
                      ? "border-current shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  style={isEerste ? { borderColor: primaryColor } : {}}
                >
                  <div className="font-medium text-sm">
                    Ja, mijn eerste
                  </div>
                </button>
                <button
                  onClick={() => {
                    setIsEerste(false);
                    setResultaat(null);
                  }}
                  className={`flex-1 p-3 rounded-xl border-2 text-center transition-all ${
                    !isEerste
                      ? "border-current shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  style={!isEerste ? { borderColor: primaryColor } : {}}
                >
                  <div className="font-medium text-sm">
                    Nee, ik heb er al een
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Stap 5: Isolatie */}
          {type && type !== "warmtepompboiler" && (
            <div>
              <h3 className="font-semibold mb-4">
                Stap 5: Combineert u met isolatie?
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setMetIsolatie(true);
                    setResultaat(null);
                  }}
                  className={`flex-1 p-3 rounded-xl border-2 text-center transition-all ${
                    metIsolatie
                      ? "border-current shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  style={metIsolatie ? { borderColor: primaryColor } : {}}
                >
                  <div className="font-medium text-sm">Ja</div>
                  <div className="text-xs text-gray-500">
                    Extra isolatiesubsidie mogelijk
                  </div>
                </button>
                <button
                  onClick={() => {
                    setMetIsolatie(false);
                    setResultaat(null);
                  }}
                  className={`flex-1 p-3 rounded-xl border-2 text-center transition-all ${
                    !metIsolatie
                      ? "border-current shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  style={!metIsolatie ? { borderColor: primaryColor } : {}}
                >
                  <div className="font-medium text-sm">Nee</div>
                </button>
              </div>
            </div>
          )}

          {/* Bereken knop */}
          {type && (
            <button
              onClick={berekenSubsidie}
              className="w-full text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
              style={{ backgroundColor: primaryColor }}
            >
              Bereken mijn subsidie
            </button>
          )}

          {/* Resultaat */}
          {resultaat && (
            <div
              className="rounded-2xl p-8 text-white"
              style={{ backgroundColor: primaryColor }}
            >
              <h3 className="text-lg font-semibold mb-2 opacity-90">
                Uw indicatie ISDE-subsidie 2026
              </h3>
              <p className="text-4xl font-bold mb-6">
                €{resultaat.totaal.toLocaleString("nl-NL")}
              </p>

              <div className="space-y-2 text-sm opacity-90 mb-6">
                {resultaat.startbedrag > 0 && (
                  <div className="flex justify-between">
                    <span>Startbedrag</span>
                    <span>€{resultaat.startbedrag.toLocaleString("nl-NL")}</span>
                  </div>
                )}
                {resultaat.kwToeslag > 0 && (
                  <div className="flex justify-between">
                    <span>
                      {vermogen} kW × €
                      {type === "grond-water"
                        ? "325"
                        : type === "water-water"
                        ? "150"
                        : "225"}
                      /kW
                    </span>
                    <span>€{resultaat.kwToeslag.toLocaleString("nl-NL")}</span>
                  </div>
                )}
                {resultaat.labelBonus > 0 && (
                  <div className="flex justify-between">
                    <span>Energielabelbonus</span>
                    <span>€{resultaat.labelBonus.toLocaleString("nl-NL")}</span>
                  </div>
                )}
                <div className="border-t border-white/30 pt-2 flex justify-between font-bold">
                  <span>Totaal</span>
                  <span>€{resultaat.totaal.toLocaleString("nl-NL")}</span>
                </div>
              </div>

              {resultaat.waarschuwingen.length > 0 && (
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  {resultaat.waarschuwingen.map((w, i) => (
                    <div key={i} className="flex gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <p className="mb-4 text-sm">
                  Wilt u weten wat een warmtepomp u netto kost na subsidie?
                </p>
                <a
                  href="#formulier"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("formulier")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 bg-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  style={{ color: primaryColor }}
                >
                  Gratis adviesgesprek aanvragen
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>

        {!isCompact && (
          <p className="text-xs text-gray-500 text-center mt-4">
            Exacte bedrag afhankelijk van vermogen, type en energielabel. Wij
            berekenen het precieze bedrag bij het adviesgesprek.
          </p>
        )}
      </div>
    </section>
  );
}
