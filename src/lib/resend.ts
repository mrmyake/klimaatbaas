import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadNotification(data: Record<string, string>) {
  const to = process.env.NOTIFICATION_EMAIL || "info@klimaatbaas.com";
  const site = data.site || "onbekend";
  const naam = data.naam || "Onbekend";
  const postcode = data.postcode || "-";

  const body = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  await resend.emails.send({
    from: "Klimaatbaas <noreply@klimaatbaas.com>",
    to,
    subject: `Nieuwe lead via ${site}: ${naam} (${postcode})`,
    text: `Nieuwe lead ontvangen:\n\n${body}`,
  });
}
