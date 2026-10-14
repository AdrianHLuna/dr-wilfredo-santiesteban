import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctor, symptoms, diseases } from "@/data";
import { generateSymptomSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import AlarmSignsSection from "@/components/AlarmSignsSection";
import FloatingButtons from "@/components/FloatingButtons";
import EntityHeroImage from "@/components/EntityHeroImage";
import RevealOnScroll from "@/components/RevealOnScroll";
import GoldDivider from "@/components/GoldDivider";

export const dynamicParams = false;

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/sintomas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return {};

  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
    alternates: { canonical: `/sintomas/${symptom.slug}` },
    openGraph: {
      title: symptom.seo.title,
      description: symptom.seo.description,
      url: `/sintomas/${symptom.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function SymptomPage(props: PageProps<"/sintomas/[slug]">) {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const relatedConditions = diseases.filter((d) => symptom.relatedConditions.includes(d.id));

  return (
    <>
      <StructuredData data={generateSymptomSchemas(symptom)} />
      <EntityHeroImage src={symptom.image} alt={symptom.name} />

      <article className="mx-auto max-w-2xl px-6 pb-20">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas", href: "/sintomas" }, { label: symptom.name }]} />

        <header className="mt-4 mb-10">
          <h1 className="font-heading text-4xl text-[var(--color-ink)]">{symptom.name}</h1>
          {symptom.colloquialNames && symptom.colloquialNames.length > 0 && (
            <p className="mt-2 text-sm text-[var(--color-slate)]">También conocido como: {symptom.colloquialNames.join(", ")}</p>
          )}
          <p className="mt-3 text-[var(--color-ink)]/80">{symptom.description}</p>
          <div className="mt-4">
            <MedicalReviewByline lastReviewed={symptom.lastReviewed} />
          </div>
        </header>

        <AlarmSignsSection signs={symptom.alarmSigns} />

        <RevealOnScroll className="mt-10">
          <div className="w-10"><GoldDivider /></div>
          <h2 className="mt-3 font-heading text-2xl text-[var(--color-ink)]">Causas posibles</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-ink)]/80">
            {symptom.causes.map((c, i) => (
              <li key={i} className="border-b border-[var(--color-line)] pb-2">{c}</li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <div className="w-10"><GoldDivider /></div>
          <h2 className="mt-3 font-heading text-2xl text-[var(--color-ink)]">¿Por qué consultar a un cirujano general?</h2>
          <p className="mt-3 text-[var(--color-ink)]/80">{symptom.whyConsult}</p>
        </RevealOnScroll>

        {symptom.faqs && symptom.faqs.length > 0 && (
          <RevealOnScroll className="mt-10">
            <div className="w-10"><GoldDivider /></div>
            <h2 className="mt-3 font-heading text-2xl text-[var(--color-ink)]">Preguntas frecuentes</h2>
            <div className="mt-4 divide-y divide-[var(--color-line)]">
              {symptom.faqs.map((faq, i) => (
                <div key={i} className="py-4">
                  <h3 className="font-heading text-lg text-[var(--color-ink)]">{faq.question}</h3>
                  <p className="mt-1 text-[var(--color-ink)]/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        )}

        {relatedConditions.length > 0 && (
          <RevealOnScroll className="mt-10 border border-[var(--color-gold)] bg-white p-6">
            <p className="eyebrow-luxe text-[var(--color-gold)]">Relacionados</p>
            <ul className="mt-3 space-y-2">
              {relatedConditions.map((d) => (
                <li key={d.id}>
                  <Link href={`/enfermedades/${d.slug}` as Route} className="text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors">
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        )}

        <RevealOnScroll className="mt-10 border-t-2 border-[var(--color-ink)] pt-6 text-center">
          <p className="font-heading text-xl text-[var(--color-ink)]">
            {doctor.title} {doctor.name} puede ayudarte con {symptom.name.toLowerCase()}.
          </p>
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block bg-[var(--color-ink)] px-8 py-3 text-xs uppercase tracking-widest text-[var(--color-cream)] shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
          >
            Agendar valoración
          </a>
        </RevealOnScroll>
      </article>

      <FloatingButtons context={symptom.name.toLowerCase()} />
    </>
  );
}
