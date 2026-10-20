import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

const leftLinks = navItems.slice(1, 3);
const rightLinks = navItems.slice(3);

/**
 * Header "Minimalista de Lujo" — logotipo CENTRADO con navegación dividida
 * a ambos lados (patrón de marca de lujo clásico), a propósito distinto de
 * los 4 headers ya usados en el proyecto (todos logo-izquierda + nav-
 * derecha). En móvil cae a logo-izquierda + hamburguesa, como los demás.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-cream)]/95 backdrop-blur">
      <div className="hidden md:block border-b border-[var(--color-line)] px-6 py-2 text-center">
        <span className="credentials-luxe text-[var(--color-ink)]/75">{formatCredentials(doctor)}</span>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-6 py-2.5 md:grid-cols-[1fr_auto_1fr] md:py-2.5">
        <nav aria-label="Principal" className="hidden md:flex items-center justify-start gap-8">
          {leftLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-base font-medium tracking-wide text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="md:justify-self-center py-1 flex items-center justify-center" aria-label={`${doctor.title} ${doctor.name}`}>
          <Image
            src="/logo-black.png"
            alt={`${doctor.title} ${doctor.name} — ${doctor.specialistTitle}`}
            width={320}
            height={155}
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center justify-end gap-8">
          <nav aria-label="Secundaria" className="flex items-center gap-8">
            {rightLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-base font-medium tracking-wide text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap border border-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold tracking-wider uppercase text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)]"
          >
            Agendar
          </a>
        </div>

        <div className="justify-self-end md:hidden">
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
