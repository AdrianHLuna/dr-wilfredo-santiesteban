import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { doctor } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapFacade from "@/components/MapFacade";

export const metadata: Metadata = {
  title: "Contacto",
  alternates: { canonical: "/contacto" },
};

const schedule = [
  { day: "Lunes a viernes", hours: "10:00 – 13:00" },
  { day: "Sábado", hours: "11:00 – 17:00" },
  { day: "Domingo", hours: "Previa disponibilidad" },
];

/**
 * Mapa real a todo el ancho, solo, sin tarjeta superpuesta (AGENTS.md §7,
 * decisión 2026-09-24 tras bug confirmado) — la información de contacto va
 * en una sección aparte debajo.
 */
export default function ContactPage() {
  return (
    <div className="pb-20">
      <div className="mx-auto max-w-6xl px-6 pt-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
        <header className="mt-4 mb-8 text-center">
          <p className="eyebrow-luxe text-[var(--color-gold)]">Agenda tu cita</p>
          <h1 className="mt-2 font-heading text-4xl sm:text-5xl text-[var(--color-ink)]">Contacto</h1>
        </header>
      </div>

      <MapFacade address={`${doctor.address}, ${doctor.city}, ${doctor.state}`} whatsapp={doctor.whatsapp} />

      <div className="mx-auto max-w-5xl px-6 pt-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow-luxe text-[var(--color-gold)]">Horario</p>
            <ul className="mt-3 divide-y divide-[var(--color-line)]">
              {schedule.map((row) => (
                <li key={row.day} className="flex items-center justify-between py-3.5 text-base">
                  <span className="flex items-center gap-2.5 text-[var(--color-ink)] font-medium">
                    <Clock className="h-4 w-4 text-[var(--color-gold)]" aria-hidden="true" />
                    {row.day}
                  </span>
                  <span className="text-[var(--color-slate)]">{row.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[var(--color-slate)] leading-relaxed">
              Todas las consultas se realizan mediante cita previa. Existe la posibilidad de consultas fuera del
              horario habitual sujetas a disponibilidad, y las urgencias quirúrgicas se atienden mediante contacto
              telefónico previo y valoración.
            </p>
          </div>

          <div>
            <p className="eyebrow-luxe text-[var(--color-gold)]">Contacto directo</p>
            <ul className="mt-3 space-y-3.5 text-base">
              <li>
                <a href={`tel:${doctor.phone}`} className="flex items-center gap-2.5 text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors">
                  <Phone className="h-4 w-4 text-[var(--color-gold)]" aria-hidden="true" />
                  {doctor.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[var(--color-gold)]" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[var(--color-ink)]">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[var(--color-gold)]" aria-hidden="true" />
                <span>{doctor.address}, {doctor.city}, {doctor.state}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
