import { Cormorant_Garamond, Jost } from "next/font/google";

// El logo real (carpeta LOGO/) no trajo manual de tipografía ni paleta
// aparte — la paleta se extrajo directamente del logo (negro #212224 +
// dorado/champán #BCA488) y la tipografía se eligió para igualar su
// carácter: serif alta-contraste y elegante para encabezados (el wordmark
// "WILFREDO SANTIESTEBAN" usa un serif condensado con mucho tracking), sans
// geométrico minimalista para el cuerpo — ambas de Google Fonts, sin
// necesidad de sustituir ninguna fuente de paga.
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

export const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-jost",
});
