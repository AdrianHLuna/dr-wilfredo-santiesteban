"use client";

import { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  /** Retraso en ms antes de revelar, para escalonar varios elementos. */
  delay?: number;
}

/**
 * Mecánica de animación propia de "Minimalista de Lujo": revelado por
 * scroll (IntersectionObserver), no por hover — distinto del subrayado-en-
 * hover de dr-gustavo-alvarez y del barrido mecánico de dr-aram-alarcon.
 * Respeta `prefers-reduced-motion` dejando el contenido visible de
 * inmediato (AGENTS.md §5, accesibilidad WCAG 2.2 AA).
 */
export default function RevealOnScroll({ children, className = "", delay = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const immediate = setTimeout(() => setInView(true), 0);
      return () => clearTimeout(immediate);
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setInView(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-luxe ${inView ? "in-view" : ""} ${className}`}>
      {children}
    </div>
  );
}
