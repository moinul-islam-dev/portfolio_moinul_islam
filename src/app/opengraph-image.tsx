import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.formalName} — ${siteConfig.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#081426",
          padding: "64px 80px",
          border: "1px solid #263B55",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#102A4C",
                border: "1px solid #263B55",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              MI
            </div>
            <span
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#FFFFFF",
                letterSpacing: "-0.5px",
              }}
            >
              {siteConfig.formalName}
            </span>
          </div>

          <div
            style={{
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "#102A4C",
              border: "1px solid #263B55",
              color: "#7894B8",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            PORTFOLIO
          </div>
        </div>

        {/* Center Main Identity */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <span
            style={{
              color: "#1D4ED8",
              fontSize: "18px",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Junior Frontend / Full-stack Developer
          </span>
          <h1
            style={{
              fontSize: "54px",
              fontWeight: "800",
              color: "#FFFFFF",
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-1.5px",
            }}
          >
            Building thoughtful web experiences with modern JavaScript.
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#B4C2D5",
              margin: 0,
              maxWidth: "960px",
              lineHeight: 1.4,
            }}
          >
            React &bull; Next.js &bull; TypeScript &bull; Better Auth &bull; Tailwind CSS
          </p>
        </div>

        {/* Bottom Details Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #263B55",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "32px",
              color: "#7894B8",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <span>Location: {siteConfig.location}</span>
            <span>National University, BD</span>
          </div>

          <span
            style={{
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {siteConfig.siteUrl.replace("https://", "")}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
