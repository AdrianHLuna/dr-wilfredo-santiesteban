"use client";

import { useState } from "react";
import Image from "next/image";
import { Stethoscope } from "lucide-react";

interface EntityHeroImageProps {
  src: string;
  alt: string;
}

/** Hero de banner para páginas de detalle — más grande que la tarjeta que llevó aquí (AGENTS.md §2). */
export default function EntityHeroImage({ src, alt }: EntityHeroImageProps) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className="image-fallback-luxe relative flex h-56 w-full items-center justify-center md:h-72"
        role="img"
        aria-label={alt}
      >
        <Stethoscope className="h-10 w-10 text-[var(--color-ink)]/40" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="relative h-56 w-full md:h-72">
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" onError={() => setFailed(true)} />
    </div>
  );
}
