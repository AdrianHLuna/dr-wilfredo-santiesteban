import { AlertTriangle } from "lucide-react";

interface AlarmSignsSectionProps {
  signs: string[];
}

/**
 * AISO v3.1 §3.8 — obligatoria en toda página de síntoma. Dirige a
 * urgencias, nunca a WhatsApp. Esquinas rectas (borde-L, no rounded-2xl)
 * para seguir el lenguaje "Minimalista de Lujo"; sin variantes `dark:`
 * porque este sitio no ofrece tema oscuro.
 */
export default function AlarmSignsSection({ signs }: AlarmSignsSectionProps) {
  return (
    <section className="my-10 border-l-4 border-red-700 bg-red-50 p-6 sm:p-7">
      <h2 className="flex items-center gap-2.5 font-heading text-xl sm:text-2xl text-red-800">
        <AlertTriangle className="h-5 w-5 shrink-0 text-red-700" aria-hidden="true" />
        Señales de alarma: acude a urgencias
      </h2>
      <p className="mt-2.5 text-base text-red-700/90 leading-relaxed">
        Si presentas cualquiera de lo siguiente, acude de inmediato a un servicio de urgencias o llama a
        emergencias. No esperes a agendar una consulta ni escribas por WhatsApp.
      </p>
      <ul className="mt-4 space-y-2.5 text-base text-red-800">
        {signs.map((sign, i) => (
          <li key={i} className="flex gap-2.5 items-start">
            <span aria-hidden="true" className="font-bold">•</span>
            <span>{sign}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
