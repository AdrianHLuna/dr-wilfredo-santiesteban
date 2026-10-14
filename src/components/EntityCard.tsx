"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { Stethoscope } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

interface EntityCardProps {
  index: number;
  title: string;
  description: string;
  href: Route;
  image?: string;
  eyebrow: string;
  delay?: number;
}

/**
 * Tarjeta de "Minimalista de Lujo" — grid uniforme con borde dorado fino,
 * imagen GRANDE en banda superior (AGENTS.md §2, nunca una miniatura de
 * acento), deliberadamente distinta de la lista-índice numerada de
 * dr-gustavo-alvarez y de los recuadros con badge flotante de los otros 3
 * sitios oscuros. Hover: elevación suave + sombra dorada, sin scale
 * agresivo ni underline-draw.
 */
export default function EntityCard({ index, title, description, href, image, eyebrow, delay = 0 }: EntityCardProps) {
  const [failed, setFailed] = useState(!image);

  return (
    <RevealOnScroll delay={delay}>
      <Link
        href={href}
        className="group flex h-full flex-col border border-[var(--color-line)] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-[var(--shadow-gold)]"
      >
        <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-52">
          {failed || !image ? (
            <div className="image-fallback-luxe absolute inset-0 flex items-center justify-center" role="img" aria-label={title}>
              <Stethoscope className="h-9 w-9 text-[var(--color-ink)]/35" aria-hidden="true" />
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
          <span className="eyebrow-luxe absolute left-4 top-4 bg-white/90 px-2.5 py-1 text-[var(--color-gold)]">
            {String(index).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-6">
          <p className="eyebrow-luxe text-[var(--color-gold)]">{eyebrow}</p>
          <h3 className="font-heading text-xl text-[var(--color-ink)]">{title}</h3>
          <p className="line-clamp-2 text-sm text-[var(--color-slate)]">{description}</p>
        </div>
      </Link>
    </RevealOnScroll>
  );
}
