import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 16,
          background:
            "linear-gradient(135deg, #0f172a 0%, #111827 40%, #0b1220 100%)",
          color: "white",
          padding: 64,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Taha Hussein
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
          }}
        >
          SaaS Dashboard Expert • Next.js
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 24,
            opacity: 0.85,
          }}
        >
          High-performance real-time data solutions
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

