import { LucideIcon } from "lucide-react";

interface Stap {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StappenProps {
  title: string;
  stappen: Stap[];
  primaryColor: string;
}

export default function Stappen({ title, stappen, primaryColor }: StappenProps) {
  return (
    <section className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          {title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stappen.map((stap, i) => (
            <div key={i} className="relative text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold"
                style={{ backgroundColor: primaryColor }}
              >
                {i + 1}
              </div>
              <h3 className="font-heading font-bold mb-2">{stap.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
