import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctor, services, diseases } from "@/data";
import { generateServiceSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import EntityHeroImage from "@/components/EntityHeroImage";
import RevealOnScroll from "@/components/RevealOnScroll";
import GoldDivider from "@/components/GoldDivider";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `/servicios/${service.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function ServicePage(props: PageProps<"/servicios/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedConditions = diseases.filter((d) => service.relatedConditions?.includes(d.id));

  const specs: Array<[string, string]> = [
    ["Tipo", service.type === "ambulatorio" ? "Ambulatorio" : service.type === "hospitalario" ? "Hospitalario" : "Consultorio"],
    ...(service.duration ? ([["Duración", service.duration]] as Array<[string, string]>) : []),
    ...(service.recoveryTime ? ([["Recuperación", service.recoveryTime]] as Array<[string, string]>) : []),
    ["Doloroso", service.isPainful ? "Sí" : "No"],
  ];

  return (
    <>
      <StructuredData data={generateServiceSchemas(service)} />
      <EntityHeroImage src={service.image} alt={service.name} />

      <article className="mx-auto max-w-2xl px-6 pb-20">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }, { label: service.name }]} />

        <header className="mt-4 mb-10">
          <h1 className="font-heading text-4xl text-[var(--color-ink)]">{service.name}</h1>
          <p className="mt-3 text-[var(--color-ink)]/80">{service.description}</p>
          <div className="mt-4">
            <MedicalReviewByline lastReviewed={service.lastReviewed} />
          </div>
        </header>

        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-4">
            {specs.map(([label, value]) => (
              <div key={label} className="bg-white p-4 text-center">
                <p className="eyebrow-luxe text-[var(--color-gold)]">{label}</p>
                <p className="mt-1 text-sm text-[var(--color-ink)]">{value}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <div className="w-10"><GoldDivider /></div>
          <h2 className="mt-3 font-heading text-2xl text-[var(--color-ink)]">En qué consiste</h2>
          <p className="mt-3 text-[var(--color-ink)]/80">{service.longDescription}</p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <div className="w-10"><GoldDivider /></div>
          <h2 className="mt-3 font-heading text-2xl text-[var(--color-ink)]">Beneficios</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-ink)]/80">
            {service.benefits.map((b, i) => (
              <li key={i} className="border-b border-[var(--color-line)] pb-2">{b}</li>
            ))}
          </ul>
        </RevealOnScroll>

        {service.postOpRecommendations.length > 0 && (
          <RevealOnScroll className="mt-10">
            <div className="w-10"><GoldDivider /></div>
            <h2 className="mt-3 font-heading text-2xl text-[var(--color-ink)]">Recomendaciones posteriores</h2>
            <ul className="mt-3 space-y-2 text-[var(--color-ink)]/80">
              {service.postOpRecommendations.map((r, i) => (
                <li key={i} className="border-b border-[var(--color-line)] pb-2">{r}</li>
              ))}
            </ul>
          </RevealOnScroll>
        )}

        {service.faqs && service.faqs.length > 0 && (
          <RevealOnScroll className="mt-10">
            <div className="w-10"><GoldDivider /></div>
            <h2 className="mt-3 font-heading text-2xl text-[var(--color-ink)]">Preguntas frecuentes</h2>
            <div className="mt-4 divide-y divide-[var(--color-line)]">
              {service.faqs.map((faq, i) => (
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
            {doctor.title} {doctor.name} realiza {service.name.toLowerCase()}.
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

      <FloatingButtons context={service.name.toLowerCase()} />
    </>
  );
}
