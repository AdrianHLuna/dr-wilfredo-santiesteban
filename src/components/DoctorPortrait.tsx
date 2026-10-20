"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Award, MapPin } from "lucide-react";
import { doctor } from "@/data";

interface DoctorPortraitProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Marco con doble ribete dorado de lujo. */
  frame?: boolean;
  subtitle?: string;
}

/**
 * Retrato institucional de alta gama para el Dr. Wilfredo Marcial Santiesteban Herrera.
 * Soporta fotografías oficiales con marco de alta costura o despliega un
 * fallback clínico de prestigio avalado por el Consejo Mexicano de Cirugía General.
 */
export default function DoctorPortrait({
  src,
  alt,
  className = "",
  priority = false,
  frame = false,
  subtitle = "Cirugía General & Laparoscopía",
}: DoctorPortraitProps) {
  const [failed, setFailed] = useState(!src || src.includes("placeholder"));

  const imageElement = !failed ? (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        onError={() => setFailed(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/75 via-transparent to-transparent" />
      
      {/* Badges sobre la fotografía oficial */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center gap-1.5 bg-[var(--color-ink)]/90 backdrop-blur-md px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wider text-[var(--color-gold)] border border-[var(--color-gold)]/40 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[var(--color-gold)]" />
          CMCG C24000624
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10 p-4 bg-[var(--color-ink)]/90 backdrop-blur-md border border-[var(--color-gold)]/30 text-white shadow-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="font-heading text-base text-[var(--color-gold-light)]">{alt}</span>
          <span className="text-xs uppercase tracking-widest text-[var(--color-gold)]">Tuxtla Gtz.</span>
        </div>
        <p className="text-xs text-white/80 mt-1">{subtitle}</p>
      </div>
    </div>
  ) : (
    /* Fallback Clínico Editorial de Lujo */
    <div
      className="relative h-full w-full flex flex-col items-center justify-between p-6 sm:p-8 text-center bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE8] to-[#E9DFCE] text-[var(--color-ink)] overflow-hidden select-none"
      role="img"
      aria-label={alt}
    >
      {/* Fondo con anillos finos concéntricos de prestigio */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[380px] h-[380px] rounded-full border border-[var(--color-gold)]/20 animate-pulse" />
        <div className="absolute w-[480px] h-[480px] rounded-full border border-[var(--color-gold)]/10" />
        <div className="absolute w-72 h-72 rounded-full bg-[radial-gradient(circle,_rgba(188,164,136,0.2)_0%,_transparent_70%)]" />
      </div>

      {/* Cabecera del sello */}
      <div className="relative z-10 w-full flex items-center justify-between border-b border-[var(--color-gold)]/30 pb-3">
        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[var(--color-gold)]">
          <Award className="w-4 h-4 text-[var(--color-gold)]" />
          Certificación Vigente
        </span>
        <span className="text-xs font-mono text-[var(--color-slate)] bg-white/70 px-2.5 py-0.5 border border-[var(--color-line)]">
          Folio C24000624
        </span>
      </div>

      {/* Centro: Isotipo Oficial Vectorial + Nombre */}
      <div className="relative z-10 my-auto py-4 flex flex-col items-center">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4 flex items-center justify-center rounded-2xl bg-white/80 p-3.5 shadow-[var(--shadow-gold)] border border-[var(--color-gold)]/40">
          <Image
            src="/emblema-dorado.svg"
            alt="Emblema Dr. Wilfredo Santiesteban"
            width={80}
            height={80}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <span className="eyebrow-luxe text-[var(--color-gold)] text-xs mb-1">
          Consejo Mexicano de Cirugía General
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl text-[var(--color-ink)] leading-tight max-w-xs">
          Dr. Wilfredo Marcial Santiesteban Herrera
        </h3>
        <p className="mt-1.5 text-sm text-[var(--color-slate)] max-w-xs font-sans">
          Cirujano General · Especialista en Cirugía de Vesícula, Pared Abdominal y Región Anorrectal
        </p>

        {/* Cédulas — formato exacto "Céd Prof: NNNNNNNN (SIGLAS)"
            (AGENTS.md §3), siempre desde doctor.ts, nunca texto fijo */}
        <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--color-ink)]/90 font-mono">
          <span className="bg-white/80 border border-[var(--color-line)] px-2.5 py-1">
            Céd Prof: {doctor.cedula} ({doctor.cedulaInstitucion})
          </span>
          <span className="bg-white/80 border border-[var(--color-line)] px-2.5 py-1">
            Céd Esp: {doctor.cedulaEspecialidad} ({doctor.cedulaEspecialidadInstitucion})
          </span>
        </div>
      </div>

      {/* Pie del Fallback con Métricas y Sede */}
      <div className="relative z-10 w-full pt-3 border-t border-[var(--color-gold)]/30 space-y-2">
        <div className="grid grid-cols-3 divide-x divide-[var(--color-gold)]/30 text-center">
          <div>
            <span className="font-heading text-lg sm:text-xl font-bold text-[var(--color-gold)] block">
              +3,500
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--color-slate)] block">
              Pacientes
            </span>
          </div>
          <div>
            <span className="font-heading text-lg sm:text-xl font-bold text-[var(--color-gold)] block">
              +400
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--color-slate)] block">
              Cirugías
            </span>
          </div>
          <div>
            <span className="font-heading text-lg sm:text-xl font-bold text-[var(--color-gold)] block">
              +4 Años
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--color-slate)] block">
              Trayectoria
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--color-slate)] pt-1">
          <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" />
          <span>Colonia Xamaipak · Tuxtla Gutiérrez, Chiapas</span>
        </div>
      </div>
    </div>
  );

  if (frame) {
    return (
      <div
        className={`group relative p-3 sm:p-4 bg-white/70 backdrop-blur-md border border-[var(--color-gold)] shadow-[var(--shadow-gold)] transition-all duration-500 hover:shadow-2xl ${className}`}
      >
        {/* Esquinas de adorno dorado de alta costura */}
        <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--color-gold)] pointer-events-none" />
        <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--color-gold)] pointer-events-none" />
        <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--color-gold)] pointer-events-none" />
        <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--color-gold)] pointer-events-none" />

        <div className="relative h-full w-full overflow-hidden border border-[var(--color-line)] bg-white">
          {imageElement}
        </div>
      </div>
    );
  }

  return <div className={`relative h-full w-full ${className}`}>{imageElement}</div>;
}
