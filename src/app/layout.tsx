import type { Metadata, Viewport } from "next";
import { doctor } from "@/data";
import { cormorant, jost } from "@/lib/fonts";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import ConversionTracker from "@/components/ConversionTracker";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomNav from "@/components/StickyBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dr-wilfredo-santiesteban.com"),
  title: {
    default: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    template: `%s | ${doctor.title} Wilfredo Santiesteban`,
  },
  description: `${doctor.title} ${doctor.name}, ${doctor.specialistTitle} en ${doctor.city}, ${doctor.state}. Cirugía de vesícula, hernias, piel y tejidos blandos, región anorrectal y pie diabético.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    description: doctor.bio,
    locale: "es_MX",
    type: "website",
    images: [{ url: doctor.photo, width: 1024, height: 1280, alt: `${doctor.title} ${doctor.name}` }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#212224",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-K6VV8686"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />

        {/* Google Ads */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18546857629"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18546857629');
            `,
          }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2M4NJESYKK"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-2M4NJESYKK');
            `,
          }}
        />

        {/* Google Ads Conversion Event Handlers */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion_llamadas(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined' && url) {
                    window.location = url;
                  }
                };
                if (typeof gtag === 'function') {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-18546857629/9-CzCLTEkK8dEJ2t6otF',
                    'event_callback': callback
                  });
                }
                return false;
              }

              function gtag_report_conversion_whatsapp(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined' && url) {
                    window.location = url;
                  }
                };
                if (typeof gtag === 'function') {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-18546857629/RTEdCLfEkK8dEJ2t6otF',
                    'event_callback': callback
                  });
                }
                return false;
              }
            `,
          }}
        />
      </head>
      <body className="pb-16 md:pb-0">
        <ConversionTracker />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6VV8686"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
        <StickyBottomNav />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
