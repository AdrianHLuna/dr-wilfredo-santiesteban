import Link from "next/link";
import type { Route } from "next";
import {
  Banknote,
  Landmark,
  Smartphone,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  Award,
  AlertCircle,
} from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";
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
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=Hola%20Dr.%20Wilfredo%20Santiesteban,%20quisiera%20agendar%20una%20consulta%20de%20valoraci%C3%B3n.`;

  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* ─── 1. HERO REFINADO: COMPOSICIÓN EDITORIAL Y FOTO EXPANSIVA (100vh) ─── */}
      <section className="relative flex min-h-screen items-center justify-center border-b border-[var(--color-line)] bg-gradient-to-b from-[#FAF8F5] via-[#F6F1EA] to-[#FAF8F5] px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            
            {/* COLUMNA 1: INFORMACIÓN CLÍNICA & ACREDITACIONES (7 cols en LG) */}
            <div className="text-left lg:col-span-7">
              <RevealOnScroll>
                {/* Eyebrow de Lujo */}
                <div className="inline-flex items-center gap-2 border border-[var(--color-gold)] bg-white/80 px-3.5 py-1.5 shadow-2xs backdrop-blur-xs">
                  <Award className="h-3.5 w-3.5 text-[var(--color-gold)]" />
                  <span className="eyebrow-luxe text-[var(--color-ink)]">
                    Cirujano General Certificado · CMCG Folio C24000624
                  </span>
                </div>

                <h1 className="mt-4 font-heading text-4xl leading-[1.08] text-[var(--color-ink)] sm:text-5xl lg:text-6xl tracking-tight">
                  {doctor.title} {doctor.name}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-slate)] sm:text-lg">
                  Especialista en cirugía laparoscópica de vesícula biliar, reparación anatómica de hernias de pared abdominal con malla, resolución de afecciones anorrectales, piel, tejidos blandos y manejo integral de pie diabético en {doctor.city}, {doctor.state}.
                </p>

                <div className="mt-5 w-28">
                  <GoldDivider />
                </div>

                {/* Cédulas y Acreditaciones Oficiales — formato exacto "Céd
                    Prof: NNNNNNNN (SIGLAS)" (AGENTS.md §3), siempre tomado
                    de doctor.ts, nunca texto fijo */}
                <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs text-[var(--color-ink)]">
                  <span className="border border-[var(--color-line)] bg-white px-3 py-1.5 font-mono shadow-2xs">
                    Céd Prof: {doctor.cedula} ({doctor.cedulaInstitucion})
                  </span>
                  <span className="border border-[var(--color-line)] bg-white px-3 py-1.5 font-mono shadow-2xs">
                    Céd Esp: {doctor.cedulaEspecialidad} ({doctor.cedulaEspecialidadInstitucion})
                  </span>
                  <span className="border border-[var(--color-gold)]/60 bg-[var(--color-gold-pale)] px-3 py-1.5 font-medium text-[var(--color-ink)]">
                    Miembro AMCG
                  </span>
                </div>

                {/* Botones de Acción */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-[var(--color-ink)] bg-[var(--color-ink)] px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-cream)] shadow-[var(--shadow-soft)] transition-all hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-[var(--color-ink)]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Agendar Consulta ($900 MXN)</span>
                  </a>

                  <a
                    href={`tel:${doctor.emergencyPhone ?? doctor.phone}`}
                    className="inline-flex items-center justify-center gap-2 border border-red-700 bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-red-700 transition-colors hover:bg-red-700 hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Urgencias · {doctor.emergencyPhone ?? doctor.phone}</span>
                  </a>
                </div>

                {/* Micro-resumen de sede y horario */}
                <div className="mt-8 border-t border-[var(--color-line)] pt-4 text-xs text-[var(--color-slate)] space-y-1.5">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[var(--color-gold)] shrink-0" />
                    <span>Calle 16 Poniente Sur #428, Col. Xamaipak, Tuxtla Gutiérrez, Chiapas.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-[var(--color-gold)] shrink-0" />
                    <span>Lun a Vie 10:00 - 13:00 · Sáb 11:00 - 17:00 (Previa Cita)</span>
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* COLUMNA 2: FOTOGRAFÍA MONUMENTAL DEL HERO (5 cols en LG - CUBRE MÁS ESPACIO) */}
            <div className="flex justify-center lg:col-span-5">
              <RevealOnScroll delay={150} className="w-full max-w-lg">
                <div className="relative mx-auto h-[480px] w-full sm:h-[560px] lg:h-[620px]">
                  <DoctorPortrait
                    src={doctor.photo}
                    alt={`${doctor.title} ${doctor.name}`}
                    priority
                    frame
                    subtitle="Cirujano General Certificado"
                    className="h-full w-full"
                  />
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. BARRA DE MÉTRICAS & TRAYECTORIA CUANTIFICABLE ─── */}
      <section className="border-b border-[var(--color-line)] bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-y divide-[var(--color-line)] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          <RevealOnScroll delay={0}>
            <div className="px-6 py-10 text-center">
              <p className="font-heading text-4xl text-[var(--color-gold)]">+3,500</p>
              <p className="eyebrow-luxe mt-2 text-[var(--color-ink)]/75">Pacientes Atendidos</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="px-6 py-10 text-center">
              <p className="font-heading text-4xl text-[var(--color-gold)]">+400</p>
              <p className="eyebrow-luxe mt-2 text-[var(--color-ink)]/75">Cirugías Realizadas</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="px-6 py-10 text-center">
              <p className="font-heading text-4xl text-[var(--color-gold)]">+4 Años</p>
              <p className="eyebrow-luxe mt-2 text-[var(--color-ink)]/75">Práctica Quirúrgica</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="px-6 py-10 text-center">
              <p className="font-heading text-4xl text-[var(--color-gold)]">CMCG</p>
              <p className="eyebrow-luxe mt-2 text-[var(--color-ink)]/75">Certificación Vigente</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── 3. SECCIÓN SOBRE EL ESPECIALISTA & FOTOGRAFÍA DEDICADA DE ABOUT ME ─── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <RevealOnScroll>
          <div className="text-center">
            <p className="eyebrow-luxe text-[var(--color-gold)]">Semblanza Médica</p>
            <h2 className="mt-2 font-heading text-3xl text-[var(--color-ink)] sm:text-4xl">
              Sobre el {doctor.title} {doctor.name}
            </h2>
            <div className="mx-auto mt-3 w-16">
              <GoldDivider />
            </div>
          </div>
        </RevealOnScroll>

        {/* Split de Dossier Institucional (Marco Fotográfico aspect-[3/4] + Biografía) */}
        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* MARCO DEDICADO PARA FOTOGRAFÍA OFICIAL DE ABOUT ME (aspect-[3/4]) */}
          <div className="flex justify-center lg:col-span-5">
            <RevealOnScroll delay={100} className="w-full max-w-md">
              <div className="relative aspect-[3/4] w-full">
                <DoctorPortrait
                  src={doctor.photo}
                  alt={`${doctor.title} ${doctor.name}`}
                  frame
                  subtitle="Especialidad en Cirugía General"
                  className="h-full w-full"
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* BIO, FILOSOFÍA Y FORMACIÓN */}
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll delay={150}>
              <p className="text-base leading-relaxed text-[var(--color-ink)]/90">
                {doctor.bio}
              </p>

              {/* Callout de Filosofía Médica */}
              <div className="mt-5 border-l-2 border-[var(--color-gold)] bg-white p-5 shadow-2xs">
                <span className="eyebrow-luxe text-[var(--color-gold)] block mb-1">
                  Filosofía Quirúrgica
                </span>
                <p className="italic text-sm text-[var(--color-slate)] leading-relaxed">
                  &ldquo;{doctor.philosophy}&rdquo;
                </p>
              </div>

              {/* Cédulas Profesionales */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-[var(--color-line)] bg-white p-4">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-slate)] block">
                    Cédula de Especialidad
                  </span>
                  <span className="font-mono text-base font-bold text-[var(--color-ink)] block mt-0.5">
                    {doctor.cedulaEspecialidad}
                  </span>
                  <span className="text-xs text-[var(--color-slate)] mt-0.5 block">
                    {doctor.cedulaEspecialidadInstitucion}
                  </span>
                </div>

                <div className="border border-[var(--color-line)] bg-white p-4">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-slate)] block">
                    Cédula Profesional Médico Cirujano
                  </span>
                  <span className="font-mono text-base font-bold text-[var(--color-ink)] block mt-0.5">
                    {doctor.cedula}
                  </span>
                  <span className="text-xs text-[var(--color-slate)] mt-0.5 block">
                    {doctor.cedulaInstitucion}
                  </span>
                </div>
              </div>

              {/* Formación Universitaria */}
              <div className="mt-6 border-t border-[var(--color-line)] pt-5">
                <p className="eyebrow-luxe text-[var(--color-gold)] mb-3">
                  Acreditaciones Médicas
                </p>
                <ul className="divide-y divide-[var(--color-line)] text-sm">
                  {[
                    ...doctor.education,
                    ...doctor.certifications.map((c) => ({ degree: c.name, institution: c.institution, year: undefined })),
                  ].map((item) => (
                    <li key={item.degree} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="font-medium text-[var(--color-ink)]">{item.degree}</span>
                      <span className="text-xs text-[var(--color-slate)] sm:text-right">{item.institution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* ─── 4. PROTOCOLO DE URGENCIA Y DOLOR ABDOMINAL AGUDO ─── */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-ink)] text-[var(--color-cream)] px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Protocolo de Dolor Abdominal Agudo</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl text-white">
                ¿Presentas dolor súbito de vesícula, apéndice o hernia complicada?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-2xl">
                Atención quirúrgica urgente disponible mediante enlace telefónico previo para coordinar valoración y quirófano en Tuxtla Gutiérrez.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${doctor.emergencyPhone ?? doctor.phone}`}
                className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar Urgencias</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. CATÁLOGO DE ENFERMEDADES ─── */}
      <section id="enfermedades" className="border-t border-[var(--color-line)] bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <p className="eyebrow-luxe text-[var(--color-gold)]">Catálogo Clínico</p>
                <h2 className="mt-1 font-heading text-3xl text-[var(--color-ink)] sm:text-4xl">
                  Enfermedades que Atiende
                </h2>
              </div>
              <Link
                href="/enfermedades"
                className="text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors inline-flex items-center gap-1"
              >
                <span>Ver todas las patologías ({diseases.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
                actionText="Ver Guía Médica"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. SERVICIOS Y PROCEDIMIENTOS QUIRÚRGICOS ─── */}
      <section id="servicios" className="border-t border-[var(--color-line)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <p className="eyebrow-luxe text-[var(--color-gold)]">Técnicas Quirúrgicas</p>
                <h2 className="mt-1 font-heading text-3xl text-[var(--color-ink)] sm:text-4xl">
                  Servicios y Procedimientos
                </h2>
              </div>
              <Link
                href="/servicios"
                className="text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors inline-flex items-center gap-1"
              >
                <span>Ver todos los procedimientos ({services.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
                actionText="Ver Ficha del Procedimiento"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. SÍNTOMAS FRECUENTES ─── */}
      <section id="sintomas" className="border-t border-[var(--color-line)] bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <p className="eyebrow-luxe text-[var(--color-gold)]">Orientación al Paciente</p>
                <h2 className="mt-1 font-heading text-3xl text-[var(--color-ink)] sm:text-4xl">
                  Síntomas y Cuadros Clínicos
                </h2>
              </div>
              <Link
                href="/sintomas"
                className="text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors inline-flex items-center gap-1"
              >
                <span>Ver todos los síntomas ({symptoms.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
                actionText="Ver Orientación Médica"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. PRECIO Y FORMAS DE PAGO ─── */}
      <section className="border-t border-[var(--color-line)] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <RevealOnScroll>
            <div className="grid grid-cols-1 gap-10 border border-[var(--color-gold)] bg-white p-8 sm:p-12 md:grid-cols-2 shadow-[var(--shadow-soft)]">
              <div>
                <p className="eyebrow-luxe text-[var(--color-gold)]">Honorarios Quirúrgicos</p>
                <h2 className="mt-2 font-heading text-4xl text-[var(--color-ink)]">
                  ${doctor.consultationPrice.toLocaleString("es-MX")} <span className="text-xl text-[var(--color-slate)]">MXN</span>
                </h2>
                <p className="mt-1 text-sm text-[var(--color-slate)]">
                  Consulta de valoración quirúrgica de primera vez.
                </p>

                <div className="mt-6 space-y-2 text-xs text-[var(--color-slate)] border-t border-[var(--color-line)] pt-4">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Exploración física y revisión de ultrasonidos/laboratorios previos</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Diagnóstico quirúrgico claro y explicación del procedimiento</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Presupuesto personalizado para quirófanos privados en Tuxtla</span>
                  </p>
                </div>

                <p className="mt-4 text-xs font-semibold text-amber-800 bg-amber-50 p-2.5 border border-amber-200">
                  Nota: No se aceptan seguros de gastos médicos mayores.
                </p>
              </div>

              <div>
                <p className="eyebrow-luxe text-[var(--color-gold)]">Métodos de Pago Disponibles</p>
                <ul className="mt-4 space-y-3">
                  {doctor.paymentMethods.map((method) => {
                    const Icon = paymentIcons[method] ?? ShieldCheck;
                    return (
                      <li key={method} className="flex items-center gap-3 text-sm text-[var(--color-ink)] border border-[var(--color-line)] p-3 bg-[#FAF8F5]">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--color-gold)] bg-white text-[var(--color-gold)]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="font-medium">{method}</span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 pt-4 border-t border-[var(--color-line)] text-xs text-[var(--color-slate)]">
                  <p>Facturación electrónica disponible para pacientes que requieran comprobante fiscal.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── 9. CTA FINAL DE PRESTIGIO ─── */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-cream)] px-6 py-20 text-center">
        <RevealOnScroll>
          <div className="mx-auto w-14 h-14 mb-4 flex items-center justify-center">
            <Award className="w-10 h-10 text-[var(--color-gold)]" />
          </div>
          <p className="eyebrow-luxe text-[var(--color-gold)]">Atención Quirúrgica Personalizada</p>
          <h2 className="mx-auto mt-2 max-w-2xl font-heading text-3xl text-[var(--color-ink)] sm:text-4xl md:text-5xl">
            Agenda tu Consulta con el {doctor.title} {doctor.name}
          </h2>
          <div className="mx-auto mt-4 w-20">
            <GoldDivider />
          </div>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-[var(--color-slate)]">
            Consulta externa y valoración preoperatoria en Colonia Xamaipak, Tuxtla Gutiérrez, Chiapas.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[var(--color-ink)] bg-[var(--color-ink)] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[var(--color-cream)] shadow-[var(--shadow-soft)] transition-all hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-[var(--color-ink)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Escribir por WhatsApp</span>
            </a>
            <a
              href={`tel:${doctor.phone}`}
              className="inline-flex items-center gap-2 border border-[var(--color-ink)] bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)]"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar al Consultorio</span>
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
