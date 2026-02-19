import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1B1B1B 0%, #2D2D2D 100%)",
          borderRadius: "36px",
          fontSize: 80,
          fontWeight: 800,
          color: "#FF3621",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        DC
      </div>
    ),
    { ...size }
  );
}
