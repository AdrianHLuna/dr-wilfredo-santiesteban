import type { Metadata, Viewport } from "next";
import { doctor } from "@/data";
import { cormorant, jost } from "@/lib/fonts";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsentBanner from "@/components/CookieConsentBanner";
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#212224",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="pb-16 md:pb-0">
        <GoogleAnalytics />
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
