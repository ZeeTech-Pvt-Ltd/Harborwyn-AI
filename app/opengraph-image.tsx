import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Harborwyn AI, AI-powered trading platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded Open Graph image used for every shared link. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#04070F",
          color: "#EAF0FB",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        {/* gold glow */}
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "rgba(240, 184, 75, 0.12)",
            filter: "blur(90px)",
          }}
        />
        {/* lighthouse mark */}
        <div
          style={{
            display: "flex",
            width: 96,
            height: 96,
            borderRadius: 28,
            background: "#0A1224",
            border: "2px solid rgba(240, 184, 75, 0.5)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#F0B84B",
            }}
          />
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -1 }}>
          Harborwyn AI
        </div>
        <div style={{ fontSize: 30, color: "#9AA8C7", marginTop: 16 }}>
          AI-Powered Trading Intelligence
        </div>
        <div style={{ fontSize: 26, color: "#F0B84B", marginTop: 40 }}>
          Your safe harbor in volatile markets.
        </div>
      </div>
    ),
    { ...size }
  );
}
