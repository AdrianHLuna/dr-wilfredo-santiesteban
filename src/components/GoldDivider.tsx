"use client";

import { useEffect, useRef, useState } from "react";

/** Línea dorada que se dibuja de izquierda a derecha al entrar en pantalla — firma visual de "Minimalista de Lujo". */
export default function GoldDivider({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const immediate = setTimeout(() => setInView(true), 0);
      return () => clearTimeout(immediate);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`gold-divider ${inView ? "in-view" : ""} ${className}`} />;
}
