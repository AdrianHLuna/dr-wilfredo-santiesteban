import type { Metadata } from "next";
import type { Route } from "next";
import { diseases } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import EntityCard from "@/components/EntityCard";

export const metadata: Metadata = {
  title: "Enfermedades",
  alternates: { canonical: "/enfermedades" },
};

export default function DiseasesIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-6">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
      <header className="mt-4 mb-10 text-center">
        <p className="eyebrow-luxe text-[var(--color-gold)]">Catálogo clínico</p>
        <h1 className="mt-2 font-heading text-4xl text-[var(--color-ink)]">Enfermedades que atiende</h1>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--color-slate)]">
          Guía clínica de las {diseases.length} afecciones que el Dr. Wilfredo Santiesteban atiende con mayor frecuencia en su práctica de Cirugía General.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {diseases.map((disease, i) => (
          <EntityCard
            key={disease.id}
            index={i + 1}
            title={disease.name}
            description={disease.description}
            href={`/enfermedades/${disease.slug}` as Route}
            image={disease.image}
            eyebrow="Enfermedad"
            delay={(i % 3) * 100}
          />
        ))}
      </div>
    </div>
  );
}
