"use client";

import { useState } from "react";
import Image from "next/image";

interface DoctorPortraitProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Marco con borde dorado fino — ver `.image-fallback-luxe` en globals.css. */
  frame?: boolean;
}

/**
 * Retrato del doctor con fallback — no hay fotos reales todavía (PENDIENTE,
 * el doctor solicitó fotos). Componente cliente dedicado: un `onError`
 * inline en un Server Component rompe el build en Next 16.
 */
export default function DoctorPortrait({ src, alt, className = "", priority, frame = false }: DoctorPortraitProps) {
  const [failed, setFailed] = useState(false);

  const content = failed ? (
    <div
      className={`image-fallback-luxe absolute inset-0 flex items-center justify-center text-center text-sm text-[var(--color-ink)]/70 ${frame ? "" : className}`}
      role="img"
      aria-label={alt}
    >
      Foto de {alt}
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      fill
      className={`absolute inset-0 object-cover ${frame ? "" : className}`}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority={priority}
      onError={() => setFailed(true)}
    />
  );

  if (frame) {
    return (
      <div className={`border border-[var(--color-gold)] p-2 shadow-[var(--shadow-soft)] h-full w-full ${className}`}>
        <div className="relative h-full w-full overflow-hidden">{content}</div>
      </div>
    );
  }

  return content;
}
