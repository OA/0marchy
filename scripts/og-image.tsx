import { ImageResponse } from "next/og"

import { site } from "@/content"

// `output: "export"` has no server, so the route has to be pre-rendered at
// build time rather than treated as dynamic.
export const dynamic = "force-static"

export const alt = `${site.name} — ${site.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * The social card, rendered once at build time.
 *
 * `next/og` runs during `next build`, so a static export ships a real PNG and
 * needs no runtime. Everything here is inline styles and system-stack fonts —
 * loading a webfont would mean a network fetch during the build for no visible
 * gain at this size.
 */
export default function OpengraphImage() {
  const accent = "#4ade80"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0f0d",
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 50% -15%, rgba(74,222,128,0.20), rgba(11,15,13,0) 70%)",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="80" viewBox="0 0 16 20" fill="none">
            <ellipse
              cx="8"
              cy="10"
              rx="6.25"
              ry="8.25"
              stroke={accent}
              strokeWidth="2.5"
            />
            <path
              d="M13 3.5 3 16.5"
              stroke={accent}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#eef2f0",
              letterSpacing: "-0.03em",
            }}
          >
            marchy
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 700,
              color: "#eef2f0",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: 940,
            }}
          >
            {site.tagline}
          </div>
          <div style={{ fontSize: 30, color: "#8c9a93", maxWidth: 900 }}>
            Ships with the vulnerabilities other distros make you find yourself.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: accent,
          }}
        >
          <div>{site.domain}</div>
          <div style={{ color: "#6b7a73" }}>A parody. Not real software.</div>
        </div>
      </div>
    ),
    size,
  )
}
