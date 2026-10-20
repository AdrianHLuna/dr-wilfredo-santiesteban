import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateDiseaseSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import EntityHeroImage from "@/components/EntityHeroImage";
import RevealOnScroll from "@/components/RevealOnScroll";
import GoldDivider from "@/components/GoldDivider";

export const dynamicParams = false;

export function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(props: PageProps<"/enfermedades/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};

  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
    alternates: { canonical: `/enfermedades/${disease.slug}` },
    openGraph: {
      title: disease.seo.title,
      description: disease.seo.description,
      url: `/enfermedades/${disease.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

// Artículo de una sola columna centrada — sin folios numerados (esa es la
// firma de dr-gustavo-alvarez) y sin dashboard de 12 columnas con aside
// sticky (esa es la de dr-aram-alarcon); aquí cada H2 lleva una línea
// dorada corta encima, firma propia de "Minimalista de Lujo".
export default async function DiseasePage(props: PageProps<"/enfermedades/[slug]">) {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const relatedServices = services.filter((s) => disease.relatedServices?.includes(s.id));
  const relatedSymptoms = symptoms.filter((s) => disease.relatedSymptoms?.includes(s.id));

  const sections: { title: string; items?: string[]; text?: string }[] = [
    { title: `¿Qué es ${disease.name.toLowerCase()}?`, text: disease.description },
    { title: "Síntomas", items: disease.symptoms },
    { title: "Causas", items: disease.causes },
    { title: "Factores de riesgo", items: disease.riskFactors },
    { title: "Complicaciones", items: disease.complications },
    { title: "Tratamientos", items: disease.treatments },
  ];

  return (
    <>
      <StructuredData data={generateDiseaseSchemas(disease)} />
      <EntityHeroImage src={disease.image} alt={disease.name} />

      <article className="mx-auto max-w-2xl px-6 pb-20">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades", href: "/enfermedades" }, { label: disease.name }]} />

        <header className="mt-4 mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl text-[var(--color-ink)]">{disease.name}</h1>
          {disease.colloquialNames && disease.colloquialNames.length > 0 && (
            <p className="mt-2 text-base text-[var(--color-slate)]">También conocida como: {disease.colloquialNames.join(", ")}</p>
          )}
          <div className="mt-4">
            <MedicalReviewByline lastReviewed={disease.lastReviewed} />
          </div>
        </header>

        {sections.map((s) => (
          <RevealOnScroll key={s.title} className="mt-10">
            <div className="w-10">
              <GoldDivider />
            </div>
            <h2 className="mt-3 font-heading text-2xl sm:text-3xl text-[var(--color-ink)]">{s.title}</h2>
            {s.text && <p className="mt-3 text-base sm:text-lg text-[var(--color-ink)]/85 leading-relaxed">{s.text}</p>}
            {s.items && (
              <ul className="mt-3 space-y-2.5 text-base sm:text-lg text-[var(--color-ink)]/85 leading-relaxed">
                {s.items.map((item, i) => (
                  <li key={i} className="border-b border-[var(--color-line)] pb-2">{item}</li>
                ))}
              </ul>
            )}
          </RevealOnScroll>
        ))}

        <RevealOnScroll className="mt-10">
          <div className="w-10">
            <GoldDivider />
          </div>
          <h2 className="mt-3 font-heading text-2xl sm:text-3xl text-[var(--color-ink)]">Preguntas frecuentes</h2>
          <div className="mt-4 divide-y divide-[var(--color-line)]">
            {disease.faqs.map((faq, i) => (
              <div key={i} className="py-4">
                <h3 className="font-heading text-xl text-[var(--color-ink)]">{faq.question}</h3>
                <p className="mt-1.5 text-base sm:text-lg text-[var(--color-ink)]/85 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {(relatedServices.length > 0 || relatedSymptoms.length > 0) && (
          <RevealOnScroll className="mt-10 border border-[var(--color-gold)] bg-white p-6">
            <p className="eyebrow-luxe text-[var(--color-gold)]">Relacionados</p>
            <ul className="mt-3 space-y-2.5 text-base">
              {relatedServices.map((s) => (
                <li key={s.id}>
                  <Link href={`/servicios/${s.slug}` as Route} className="text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              {relatedSymptoms.map((s) => (
                <li key={s.id}>
                  <Link href={`/sintomas/${s.slug}` as Route} className="text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        )}

        <RevealOnScroll className="mt-10 border-t-2 border-[var(--color-ink)] pt-6 text-center">
          <p className="font-heading text-2xl text-[var(--color-ink)]">
            {doctor.title} {doctor.name} atiende {disease.name.toLowerCase()}.
          </p>
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block bg-[var(--color-ink)] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[var(--color-cream)] shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
          >
            Agendar valoración
          </a>
        </RevealOnScroll>
      </article>

      <FloatingButtons context={disease.name.toLowerCase()} />
    </>
  );
}
