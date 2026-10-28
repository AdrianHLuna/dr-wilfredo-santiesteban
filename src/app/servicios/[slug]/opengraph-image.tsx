import { ImageResponse } from "next/og";
import { services, doctor } from "@/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Información médica del sitio oficial del doctor";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function OpengraphImage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #212224 0%, #3a2a14 100%)",
          color: "#faf8f5",
        }}
      >
        <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.1 }}>{service?.name}</div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 28, color: "#d4ba88" }}>
          {`${doctor.title} ${doctor.name} · ${doctor.specialty} · ${doctor.city}`}
        </div>
      </div>
    ),
    size
  );
}
