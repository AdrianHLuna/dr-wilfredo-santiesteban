import Link from "next/link";
import type { Route } from "next";
import { Banknote, Landmark, Smartphone, ShieldCheck } from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import { generateHomeSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import DoctorPortrait from "@/components/DoctorPortrait";
import EntityCard from "@/components/EntityCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import GoldDivider from "@/components/GoldDivider";

const PREVIEW_COUNT = 6;

const paymentIcons: Record<string, typeof Banknote> = {
  Efectivo: Banknote,
  Transferencia: Landmark,
  "Pagos móviles NFC (Apple Pay o Google Pay)": Smartphone,
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* Hero centrado y simétrico — a propósito NO es split/asimétrico como
          los otros 4 sitios del registro (bento, split, diagonal, editorial
          a dos columnas). Logo+nombre al centro, foto enmarcada debajo. */}
      <section className="flex min-h-screen flex-col items-center justify-center gap-10 border-b border-[var(--color-line)] px-6 py-20 text-center">
        <RevealOnScroll>
          <p className="eyebrow-luxe text-[var(--color-gold)]">{doctor.specialty} · {doctor.city}, {doctor.state}</p>
          <h1 className="mt-4 font-heading text-5xl leading-[1.05] text-[var(--color-ink)] md:text-6xl">
            {doctor.title} {doctor.name}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[var(--color-slate)] md:text-lg">
            {doctor.specialistTitle} en {doctor.city}, {doctor.state}. Cirugía de vesícula biliar, hernias, piel y
            tejidos blandos, región anorrectal y pie diabético.
          </p>
          <div className="mx-auto mt-4 w-24">
            <GoldDivider />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="border border-[var(--color-ink)] bg-[var(--color-ink)] px-7 py-3 text-xs uppercase tracking-widest text-[var(--color-cream)] shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
            >
              Agendar cita
            </a>
            <a
              href={`tel:${doctor.emergencyPhone ?? doctor.phone}`}
              className="border border-red-700 px-7 py-3 text-xs uppercase tracking-widest text-red-700 transition-colors hover:bg-red-700 hover:text-white"
            >
              Urgencias · {doctor.emergencyPhone ?? doctor.phone}
            </a>
          </div>
          <p className="mt-6 text-xs tracking-wide text-[var(--color-slate)]">{formatCredentials(doctor)}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="relative mx-auto h-72 w-56 md:h-80 md:w-64">
            <DoctorPortrait src={doctor.photo} alt={`${doctor.title} ${doctor.name}`} priority frame />
          </div>
        </RevealOnScroll>
      </section>

      {/* Barra de estadísticas */}
      <section className="border-b border-[var(--color-line)] bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-[var(--color-line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {doctor.stats?.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 100}>
              <div className="px-6 py-10 text-center">
                <p className="font-heading text-4xl text-[var(--color-gold)]">{stat.value}</p>
                <p className="eyebrow-luxe mt-2 text-[var(--color-ink)]/70">{stat.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Sobre el especialista */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <RevealOnScroll>
          <div className="text-center">
            <p className="eyebrow-luxe text-[var(--color-gold)]">Sobre el especialista</p>
            <h2 className="mt-2 font-heading text-3xl text-[var(--color-ink)]">
              {doctor.title} {doctor.name}
            </h2>
            <div className="mx-auto mt-3 w-16">
              <GoldDivider />
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
          <RevealOnScroll delay={100} className="md:col-span-5">
            <p className="text-[var(--color-ink)]/85">{doctor.bio}</p>
            <p className="mt-4 italic text-[var(--color-slate)]">&ldquo;{doctor.philosophy}&rdquo;</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="border border-[var(--color-gold)] px-4 py-2 text-xs text-[var(--color-ink)]">
                Céd Prof: {doctor.cedula} ({doctor.cedulaInstitucion})
              </span>
              {doctor.cedulaEspecialidad && (
                <span className="border border-[var(--color-gold)] px-4 py-2 text-xs text-[var(--color-ink)]">
                  Céd Esp: {doctor.cedulaEspecialidad} ({doctor.cedulaEspecialidadInstitucion})
                </span>
              )}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="md:col-span-7">
            <p className="eyebrow-luxe text-[var(--color-gold)]">Formación y certificaciones</p>
            <ul className="mt-3 divide-y divide-[var(--color-line)]">
              {[
                ...doctor.education,
                ...doctor.certifications.map((c) => ({ degree: c.name, institution: c.institution, year: undefined })),
              ].map((item) => (
                <li key={item.degree} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="text-[var(--color-ink)]">{item.degree}</span>
                  <span className="text-sm text-[var(--color-slate)]">{item.institution}{item.year ? ` · ${item.year}` : ""}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* Enfermedades — grid de tarjetas, no lista-índice (eso es Gustavo). */}
      <section id="enfermedades" className="border-t border-[var(--color-line)] bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="flex items-end justify-between">
              <div>
                <p className="eyebrow-luxe text-[var(--color-gold)]">Catálogo clínico</p>
                <h2 className="mt-1 font-heading text-3xl text-[var(--color-ink)]">Enfermedades que atiende</h2>
              </div>
              <Link href="/enfermedades" className="text-sm text-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors">
                Ver todas ({diseases.length}) →
              </Link>
            </div>
          </RevealOnScroll>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diseases.slice(0, PREVIEW_COUNT).map((disease, i) => (
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
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-t border-[var(--color-line)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="flex items-end justify-between">
              <div>
                <p className="eyebrow-luxe text-[var(--color-gold)]">Procedimientos</p>
                <h2 className="mt-1 font-heading text-3xl text-[var(--color-ink)]">Servicios y procedimientos</h2>
              </div>
              <Link href="/servicios" className="text-sm text-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors">
                Ver todos ({services.length}) →
              </Link>
            </div>
          </RevealOnScroll>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, PREVIEW_COUNT).map((service, i) => (
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
      </section>

      {/* Síntomas */}
      <section id="sintomas" className="border-t border-[var(--color-line)] bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="flex items-end justify-between">
              <div>
                <p className="eyebrow-luxe text-[var(--color-gold)]">Orientación</p>
                <h2 className="mt-1 font-heading text-3xl text-[var(--color-ink)]">Síntomas frecuentes</h2>
              </div>
              <Link href="/sintomas" className="text-sm text-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors">
                Ver todos ({symptoms.length}) →
              </Link>
            </div>
          </RevealOnScroll>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.slice(0, PREVIEW_COUNT).map((symptom, i) => (
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
      </section>

      {/* Precio y formas de pago */}
      <section className="border-t border-[var(--color-line)] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <RevealOnScroll>
            <div className="grid grid-cols-1 gap-10 border border-[var(--color-gold)] bg-white p-8 sm:p-12 md:grid-cols-2">
              <div>
                <p className="eyebrow-luxe text-[var(--color-gold)]">Consulta</p>
                <h2 className="mt-2 font-heading text-3xl text-[var(--color-ink)]">
                  ${doctor.consultationPrice.toLocaleString("es-MX")} <span className="text-xl text-[var(--color-slate)]">MXN</span>
                </h2>
                <p className="mt-1 text-sm text-[var(--color-slate)]">Primera vez. Consulta subsecuente: $800 MXN.</p>
                <p className="mt-4 text-sm text-[var(--color-ink)]/80">No se aceptan seguros de gastos médicos mayores.</p>
              </div>
              <div>
                <p className="eyebrow-luxe text-[var(--color-gold)]">Formas de pago</p>
                <ul className="mt-4 space-y-3">
                  {doctor.paymentMethods.map((method) => {
                    const Icon = paymentIcons[method] ?? ShieldCheck;
                    return (
                      <li key={method} className="flex items-center gap-3 text-sm text-[var(--color-ink)]">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--color-gold)] text-[var(--color-gold)]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        {method}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-20 text-center">
        <RevealOnScroll>
          <p className="eyebrow-luxe text-[var(--color-gold)]">Atención quirúrgica integral</p>
          <h2 className="mx-auto mt-2 max-w-2xl font-heading text-3xl text-[var(--color-ink)] md:text-4xl">
            Agenda tu valoración con {doctor.title} {doctor.name}
          </h2>
          <div className="mx-auto mt-4 w-16">
            <GoldDivider />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="border border-[var(--color-ink)] bg-[var(--color-ink)] px-8 py-3 text-xs uppercase tracking-widest text-[var(--color-cream)] shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
            >
              Escribir por WhatsApp
            </a>
            <a
              href={`tel:${doctor.phone}`}
              className="border border-[var(--color-ink)] px-8 py-3 text-xs uppercase tracking-widest text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)]"
            >
              Llamar al consultorio
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
