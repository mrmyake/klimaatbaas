export type WarmtepompType =
  | "lucht-water-hybride"
  | "lucht-water-all-electric"
  | "grond-water"
  | "water-water"
  | "warmtepompboiler";

export type EnergieLabel = "A+++" | "A++" | "onbekend";

export interface SubsidieInput {
  type: WarmtepompType;
  vermogenKw: number;
  energieLabel: EnergieLabel;
  isEersteWP: boolean;
  combineertMetIsolatie: boolean;
}

export interface SubsidieResultaat {
  startbedrag: number;
  kwToeslag: number;
  labelBonus: number;
  totaal: number;
  toelichting: string[];
  waarschuwingen: string[];
}

export function berekenISDE2026(input: SubsidieInput): SubsidieResultaat {
  const { type, vermogenKw, energieLabel, isEersteWP } = input;

  let startbedrag = 0;
  let perKw = 0;
  let labelBonus = 0;
  const toelichting: string[] = [];
  const waarschuwingen: string[] = [];

  switch (type) {
    case "lucht-water-hybride":
    case "lucht-water-all-electric":
      if (isEersteWP) {
        startbedrag = 1025;
        perKw = 225;
        toelichting.push(`Startbedrag eerste lucht-water WP: €${startbedrag}`);
        toelichting.push(
          `${vermogenKw} kW × €${perKw}/kW = €${vermogenKw * perKw}`
        );

        if (energieLabel === "A+++") {
          labelBonus = 200;
          toelichting.push(`Energielabelbonus A+++: €${labelBonus}`);
        } else if (energieLabel === "A++") {
          toelichting.push("Energielabel A++: geen bonus (alleen bij A+++)");
        } else {
          toelichting.push("Energielabel onbekend: geen bonus meegerekend");
          waarschuwingen.push(
            "Controleer het energielabel. Bij A+++ ontvangt u €200 extra."
          );
        }
      } else {
        perKw = 225;
        toelichting.push(
          "2e of volgende lucht-water WP: geen startbedrag, geen labelbonus"
        );
        toelichting.push(
          `${vermogenKw} kW × €${perKw}/kW = €${vermogenKw * perKw}`
        );
      }

      waarschuwingen.push(
        "Let op: vanaf 2026 geen subsidie meer voor split WP's met <3 kg koudemiddel en GWP >750. R290 (propaan) en monoblock systemen zijn wel subsidiabel."
      );
      break;

    case "grond-water":
      startbedrag = 1825;
      perKw = 325;
      toelichting.push(`Startbedrag grond-water WP: €${startbedrag}`);
      toelichting.push(
        `${vermogenKw} kW × €${perKw}/kW = €${vermogenKw * perKw}`
      );

      if (energieLabel === "A+++") {
        labelBonus = 225;
        toelichting.push(`Energielabelbonus A+++: €${labelBonus}`);
      } else if (energieLabel === "A++") {
        toelichting.push("Energielabel A++: geen bonus");
      }
      break;

    case "water-water":
      startbedrag = 1825;
      perKw = 150;
      toelichting.push(`Startbedrag water-water WP: €${startbedrag}`);
      toelichting.push(
        `${vermogenKw} kW × €${perKw}/kW = €${vermogenKw * perKw}`
      );

      if (energieLabel === "A+++") {
        labelBonus = 225;
        toelichting.push(`Energielabelbonus A+++: €${labelBonus}`);
      }

      const berekend = startbedrag + vermogenKw * perKw + labelBonus;
      if (berekend > 12975) {
        waarschuwingen.push("Maximum subsidie water-water WP: €12.975");
      }
      break;

    case "warmtepompboiler":
      startbedrag = 675;
      toelichting.push(`Vast subsidiebedrag warmtepompboiler: €${startbedrag}`);
      toelichting.push("Geen kW-toeslag voor warmtepompboilers");
      break;
  }

  let totaal = startbedrag + vermogenKw * perKw + labelBonus;

  if (totaal > 0 && totaal < 500 && type !== "warmtepompboiler") {
    totaal = 500;
    toelichting.push("Minimumsubsidie toegepast: €500");
  }

  if (type === "water-water" && totaal > 12975) {
    totaal = 12975;
  }

  if (input.combineertMetIsolatie) {
    toelichting.push(
      "U combineert met isolatie: u komt mogelijk in aanmerking voor het hogere isolatiesubsidietarief."
    );
  }

  toelichting.push(
    "Dit is een indicatie. Het exacte bedrag hangt af van de meldcode van uw warmtepomp op de RVO meldcodelijst."
  );

  return {
    startbedrag,
    kwToeslag: vermogenKw * perKw,
    labelBonus,
    totaal,
    toelichting,
    waarschuwingen,
  };
}
