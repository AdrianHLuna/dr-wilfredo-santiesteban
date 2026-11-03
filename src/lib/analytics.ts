declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    gtag_report_conversion_llamadas?: (url?: string) => boolean;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
  }
}

export const GOOGLE_ADS_CONVERSIONS = {
  CALLS: "AW-18546857629/9-CzCLTEkK8dEJ2t6otF",
  WHATSAPP: "AW-18546857629/RTEdCLfEkK8dEJ2t6otF",
} as const;

/** Registra la acción de conversión de Llamadas en Google Ads y GA4 */
export function trackCallConversion(source = "unknown") {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_CONVERSIONS.CALLS,
      });
      window.gtag("event", "clic_llamar", { source });
    }
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "conversion_llamadas",
        send_to: GOOGLE_ADS_CONVERSIONS.CALLS,
        source,
      });
    }
  }
}

/** Registra la acción de conversión de WhatsApp en Google Ads y GA4 */
export function trackWhatsAppConversion(source = "unknown") {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_CONVERSIONS.WHATSAPP,
      });
      window.gtag("event", "clic_whatsapp", { source });
    }
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "conversion_whatsapp",
        send_to: GOOGLE_ADS_CONVERSIONS.WHATSAPP,
        source,
      });
    }
  }
}

/** Dispara un evento personalizado en GA4 / Google Ads. Usar en onClick de botones de conversión. */
export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", eventName, params);

      // Si el evento corresponde a llamadas o WhatsApp, disparar su conversión correspondiente en Google Ads
      if (eventName === "clic_llamar" || eventName === "clic_agendar_cita" || eventName.includes("telefono")) {
        window.gtag("event", "conversion", {
          send_to: GOOGLE_ADS_CONVERSIONS.CALLS,
        });
      } else if (eventName === "clic_whatsapp" || eventName.includes("whatsapp")) {
        window.gtag("event", "conversion", {
          send_to: GOOGLE_ADS_CONVERSIONS.WHATSAPP,
        });
      }
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  }
}

/** Trackea scroll hasta un elemento específico. Usar con IntersectionObserver en secciones clave. */
export function trackScrollTo(sectionName: string) {
  trackEvent(`scroll_${sectionName}`, { section: sectionName });
}
