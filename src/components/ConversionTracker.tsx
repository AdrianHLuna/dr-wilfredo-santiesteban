"use client";

import { useEffect } from "react";
import { trackCallConversion, trackWhatsAppConversion } from "@/lib/analytics";

/**
 * Escucha global para enlaces de WhatsApp y teléfono en todo el sitio web.
 * Garantiza que cualquier clic en `tel:` o `wa.me` registre la conversión de Google Ads
 * correspondiente incluso si el elemento no tiene un onClick explícito.
 */
export default function ConversionTracker() {
  useEffect(() => {
    // Definir funciones globales de Google Ads para Tag Assistant y scripts externos
    if (typeof window !== "undefined") {
      window.gtag_report_conversion_llamadas = function (url?: string) {
        trackCallConversion("callback");
        if (typeof url !== "undefined" && url) {
          window.location.href = url;
        }
        return false;
      };

      window.gtag_report_conversion_whatsapp = function (url?: string) {
        trackWhatsAppConversion("callback");
        if (typeof url !== "undefined" && url) {
          window.location.href = url;
        }
        return false;
      };
    }

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        trackCallConversion("global_click");
      } else if (href.includes("wa.me") || href.includes("whatsapp.com") || href.includes("api.whatsapp")) {
        trackWhatsAppConversion("global_click");
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return null;
}

