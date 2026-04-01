import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  naam: z.string().min(2),
  email: z.string().email(),
  telefoon: z.string().min(10),
  postcode: z.string().optional().default(""),
  bericht: z.string().optional().default(""),
  site: z.string(),
  type_woning: z.string().optional().default(""),
  bouwjaar: z.string().optional().default(""),
  huidig_systeem: z.string().optional().default(""),
  isolatie: z.string().optional().default(""),
  voorkeur_wp: z.string().optional().default(""),
  aantal_ruimtes: z.string().optional().default(""),
  type_airco: z.string().optional().default(""),
  gewenste_timing: z.string().optional().default(""),
  subsidie_interesse: z.string().optional().default(""),
  utm_source: z.string().optional().default(""),
  utm_medium: z.string().optional().default(""),
  utm_campaign: z.string().optional().default(""),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = leadSchema.parse(body);

    // Insert into Supabase if configured — this is the critical path
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
    ) {
      const { supabase } = await import("@/lib/supabase");
      const { error } = await supabase.from("leads").insert(data);
      if (error) {
        console.error("Supabase error:", error);
        return NextResponse.json(
          { success: false, error: "Database error" },
          { status: 500 }
        );
      }
    }

    // Send notifications (non-blocking): ntfy push + Resend email
    const notifications: Promise<unknown>[] = [];

    // ntfy push notification
    if (process.env.NTFY_TOPIC) {
      notifications.push(
        fetch(`https://ntfy.sh/${process.env.NTFY_TOPIC}`, {
          method: "POST",
          headers: {
            Title: `Nieuwe lead via ${data.site}`,
          },
          body: `${data.naam} - ${data.telefoon} - ${data.postcode || "-"}`,
        })
      );
    }

    // Resend email notification
    if (process.env.RESEND_API_KEY) {
      const { sendLeadNotification } = await import("@/lib/resend");
      notifications.push(
        sendLeadNotification(data as unknown as Record<string, string>)
      );
    }

    if (notifications.length > 0) {
      const results = await Promise.allSettled(notifications);
      for (const result of results) {
        if (result.status === "rejected") {
          console.error("Notification failed:", result.reason);
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    console.error("Lead API error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
