import { z } from "zod";

const baseSchema = z.object({
  naam: z.string().min(2, "Naam moet minimaal 2 tekens bevatten"),
  email: z.string().email("Voer een geldig e-mailadres in"),
  telefoon: z.string().min(10, "Voer een geldig telefoonnummer in"),
  postcode: z.string().optional(),
  bericht: z.string().optional(),
  site: z.string(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

export const warmtebaasSchema = baseSchema.extend({
  type_woning: z.string().optional(),
  bouwjaar: z.string().optional(),
  huidig_systeem: z.string().optional(),
  isolatie: z.string().optional(),
  voorkeur_wp: z.string().optional(),
});

export const aircobaasSchema = baseSchema.extend({
  aantal_ruimtes: z.string().optional(),
  type_airco: z.string().optional(),
  gewenste_timing: z.string().optional(),
});

export const klimaatbaasSchema = baseSchema;

export const subsidiebaasSchema = baseSchema.extend({
  subsidie_interesse: z.string().optional(),
});

export const leadSchema = z.union([
  warmtebaasSchema,
  aircobaasSchema,
  klimaatbaasSchema,
  subsidiebaasSchema,
]);

export type LeadFormData = z.infer<typeof leadSchema>;
