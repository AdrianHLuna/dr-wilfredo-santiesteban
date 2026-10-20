import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";

const MAX_LINKS = 6;

/** Footer "Minimalista de Lujo" — negro del logo (no navy), acentos dorados. */
export default function Footer() {
  const columns = [
    { title: "Enfermedades", base: "/enfermedades", items: diseases },
    { title: "Servicios", base: "/servicios", items: services },
    { title: "Síntomas", base: "/sintomas", items: symptoms },
  ] as const;

  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-4 border-b border-white/10 pb-12 text-center">
          <Image
            src="/logo-white.png"
            alt={`${doctor.title} ${doctor.name} — ${doctor.specialistTitle}`}
            width={320}
            height={155}
            className="h-20 w-auto md:h-24 lg:h-28"
          />
          <p className="flex items-center justify-center gap-2 text-base text-white/80">
            <MapPin className="h-4 w-4 text-[var(--color-gold)] shrink-0" aria-hidden="true" />
            <span>{doctor.address}, {doctor.city}, {doctor.state}</span>
          </p>
          <a href={`tel:${doctor.phone}`} className="flex items-center gap-2 text-base text-white hover:text-[var(--color-gold)] transition-colors">
            <Phone className="h-4 w-4 text-[var(--color-gold)]" aria-hidden="true" />
            {doctor.phone}
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 border-b border-white/10 py-12 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-xl text-[var(--color-gold)]">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.slice(0, MAX_LINKS).map((item) => (
                  <li key={item.id}>
                    <Link href={`${col.base}/${item.slug}` as `${typeof col.base}/${string}`} className="text-base text-white/80 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={col.base as "/enfermedades"} className="mt-4 inline-block text-base font-medium text-[var(--color-gold)] hover:text-white transition-colors">
                Ver todos →
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl leading-relaxed">
            La información de este sitio tiene fines educativos e informativos y no sustituye una consulta médica
            profesional. Ante cualquier urgencia, acude de inmediato a un servicio de urgencias.
          </p>
          <Link href="/aviso-de-privacidad" className="shrink-0 text-sm text-white/70 hover:text-white transition-colors">
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
