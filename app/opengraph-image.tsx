import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Deep Contractor – AI Consultant, Engineer & Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #1B1B1B 0%, #2D2D2D 50%, #1B1B1B 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #FF3621 0%, #FF6A4D 50%, #FF3621 100%)",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.1,
            letterSpacing: "-1px",
          }}
        >
          Deep Contractor
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "#FF6A4D",
            marginTop: "16px",
          }}
        >
          AI Consultant, Engineer & Architect
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#FF3621",
            marginTop: "32px",
            borderRadius: "2px",
          }}
        />

        {/* Credentials */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "32px",
          }}
        >
          <div style={{ fontSize: 22, color: "#CCCCCC" }}>
            Databricks Partner Solution Architect Champion 2025
          </div>
          <div style={{ fontSize: 22, color: "#CCCCCC" }}>
            Kaggle Grandmaster &middot; 5+ Years GenAI, ML & MLOps
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: 20,
            color: "#888888",
          }}
        >
          deepcontractor.me
        </div>
      </div>
    ),
    { ...size }
  );
}
