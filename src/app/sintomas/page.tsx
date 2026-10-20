import type { Metadata } from "next";
import type { Route } from "next";
import { symptoms } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import EntityCard from "@/components/EntityCard";

export const metadata: Metadata = {
  title: "Síntomas",
  alternates: { canonical: "/sintomas" },
};

export default function SymptomsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-6">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
      <header className="mt-4 mb-12 text-center">
        <p className="eyebrow-luxe text-[var(--color-gold)]">Orientación</p>
        <h1 className="mt-2 font-heading text-4xl sm:text-5xl text-[var(--color-ink)]">Síntomas frecuentes</h1>
        <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg text-[var(--color-slate)] leading-relaxed">
          Reconoce los {symptoms.length} síntomas que con más frecuencia llevan a una valoración de Cirugía General y sepas cuándo acudir.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {symptoms.map((symptom, i) => (
          <EntityCard
            key={symptom.id}
            index={i + 1}
            title={symptom.name}
            description={symptom.description}
            href={`/sintomas/${symptom.slug}` as Route}
            image={symptom.image}
            eyebrow="Síntoma"
            delay={(i % 3) * 100}
          />
        ))}
      </div>
    </div>
  );
}
