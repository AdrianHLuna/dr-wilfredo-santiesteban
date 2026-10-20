"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { Stethoscope, ArrowRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

interface EntityCardProps {
  index: number;
  title: string;
  description: string;
  href: Route;
  image?: string;
  eyebrow: string;
  delay?: number;
  actionText?: string;
}

/**
 * Tarjeta de "Minimalista de Lujo" — grid uniforme con borde dorado fino,
 * contenedor de imagen superior y botón de acción institucional con micro-interacción.
 */
export default function EntityCard({
  index,
  title,
  description,
  href,
  image,
  eyebrow,
  delay = 0,
  actionText,
}: EntityCardProps) {
  const [failed, setFailed] = useState(!image);

  // Etiqueta institucional concisa por tipo de entidad
  const label =
    actionText ||
    (eyebrow.toLowerCase().includes("enfermedad")
      ? "Ver Guía Médica"
      : eyebrow.toLowerCase().includes("síntoma") || eyebrow.toLowerCase().includes("sintoma")
      ? "Ver Orientación Médica"
      : "Ver Ficha del Procedimiento");

  return (
    <RevealOnScroll delay={delay}>
      <Link
        href={href}
        className="group flex h-full flex-col justify-between border border-[var(--color-line)] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-[var(--shadow-gold)]"
      >
        <div>
          <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-52 bg-[var(--color-gold-pale)]">
            {failed || !image ? (
              <div
                className="image-fallback-luxe absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
                role="img"
                aria-label={title}
              >
                <div className="w-12 h-12 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center bg-white/60 mb-1">
                  <Stethoscope className="h-6 w-6 text-[var(--color-gold)]" aria-hidden="true" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[var(--color-slate)] font-medium">
                  Cirugía General
                </span>
              </div>
            ) : (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={() => setFailed(true)}
              />
            )}
            <span className="eyebrow-luxe absolute left-4 top-4 bg-white/95 px-2.5 py-1 text-[var(--color-gold)] border border-[var(--color-line)] shadow-xs">
              {String(index).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col gap-2 p-6">
            <p className="eyebrow-luxe text-[var(--color-gold)]">{eyebrow}</p>
            <h3 className="font-heading text-2xl text-[var(--color-ink)] leading-snug group-hover:text-[var(--color-gold)] transition-colors">
              {title}
            </h3>
            <p className="line-clamp-2 text-base text-[var(--color-slate)] leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Botón institucional de acción */}
        <div className="px-6 pb-6 pt-2">
          <div className="flex items-center justify-between border-t border-[var(--color-line)] pt-4 text-sm font-medium uppercase tracking-wider text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-gold)]">
            <span>{label}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </RevealOnScroll>
  );
}
