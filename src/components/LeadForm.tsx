"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import type { SiteKey } from "@/lib/sites";

interface FieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
}

interface LeadFormProps {
  site: SiteKey;
  title: string;
  fields: FieldConfig[];
  submitLabel: string;
  subtext: string;
  primaryColor: string;
}

export default function LeadForm({
  site,
  title,
  fields,
  submitLabel,
  subtext,
  primaryColor,
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const schemaShape: Record<string, z.ZodTypeAny> = {};
  for (const field of fields) {
    if (field.required) {
      if (field.name === "email") {
        schemaShape[field.name] = z.string().email("Voer een geldig e-mailadres in");
      } else if (field.name === "telefoon") {
        schemaShape[field.name] = z.string().min(10, "Voer een geldig telefoonnummer in");
      } else {
        schemaShape[field.name] = z.string().min(2, `${field.label} is verplicht`);
      }
    } else {
      schemaShape[field.name] = z.string().optional();
    }
  }
  const schema = z.object(schemaShape);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Record<string, unknown>) => {
    setStatus("loading");

    const params = new URLSearchParams(window.location.search);
    const body = {
      ...data,
      site,
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="formulier" className="py-20 px-6">
        <div className="max-w-xl mx-auto glass rounded-2xl p-10 text-center">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h3 className="font-heading text-2xl font-bold mb-2">Bedankt!</h3>
          <p className="text-gray-600">
            Wij nemen binnen 48 uur contact met u op.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="formulier" className="py-20 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-8">
          {title}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="glass rounded-2xl p-8 space-y-5"
        >
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium mb-1.5">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {field.type === "select" ? (
                <select
                  {...register(field.name)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-shadow"
                  style={{
                    ["--tw-ring-color" as string]: primaryColor,
                  }}
                >
                  <option value="">Maak een keuze</option>
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  {...register(field.name)}
                  rows={3}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-shadow resize-none"
                  style={{
                    ["--tw-ring-color" as string]: primaryColor,
                  }}
                />
              ) : (
                <input
                  type={field.type}
                  {...register(field.name)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-shadow"
                  style={{
                    ["--tw-ring-color" as string]: primaryColor,
                  }}
                />
              )}
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name]?.message as string}
                </p>
              )}
            </div>
          ))}

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span className="text-sm">
                Er ging iets mis. Probeer het opnieuw of bel ons direct.
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            style={{ backgroundColor: primaryColor }}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Verzenden...
              </>
            ) : (
              submitLabel
            )}
          </button>

          <p className="text-center text-sm text-gray-500 mt-3">{subtext}</p>
        </form>
      </div>
    </section>
  );
}
