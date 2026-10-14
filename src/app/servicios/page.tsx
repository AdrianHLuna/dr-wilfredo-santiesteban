import type { Metadata } from "next";
import type { Route } from "next";
import { services } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import EntityCard from "@/components/EntityCard";

export const metadata: Metadata = {
  title: "Servicios",
  alternates: { canonical: "/servicios" },
};

export default function ServicesIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-6">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
      <header className="mt-4 mb-10 text-center">
        <p className="eyebrow-luxe text-[var(--color-gold)]">Procedimientos</p>
        <h1 className="mt-2 font-heading text-4xl text-[var(--color-ink)]">Servicios y procedimientos</h1>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--color-slate)]">
          Los {services.length} procedimientos de Cirugía General que el Dr. Wilfredo Santiesteban realiza con mayor frecuencia.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <EntityCard
            key={service.id}
            index={i + 1}
            title={service.name}
            description={service.description}
            href={`/servicios/${service.slug}` as Route}
            image={service.image}
            eyebrow={service.type === "ambulatorio" ? "Ambulatorio" : "Hospitalario"}
            delay={(i % 3) * 100}
          />
        ))}
      </div>
    </div>
  );
}
