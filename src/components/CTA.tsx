"use client";

interface CTAProps {
  text: string;
  buttonLabel: string;
  primaryColor: string;
}

export default function CTA({ text, buttonLabel, primaryColor }: CTAProps) {
  const scrollToForm = () => {
    document.getElementById("formulier")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 px-6">
      <div
        className="max-w-4xl mx-auto rounded-2xl p-10 text-center text-white"
        style={{ backgroundColor: primaryColor }}
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6">
          {text}
        </h2>
        <button
          onClick={scrollToForm}
          className="bg-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          style={{ color: primaryColor }}
        >
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}
