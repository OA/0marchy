import { ImageResponse } from "next/og"

import { site, hero } from "@/content"

// `output: "export"` has no server, so this must be pre-rendered at build time.
export const dynamic = "force-static"

export const alt = `${site.name} — ${site.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * The social card.
 *
 * It has to look like the site, so it uses the same things the site uses: the
 * Tokyo Night background, JetBrains Mono, and the *same* block-art wordmark
 * path, exported from `components/site/wordmark.tsx` into
 * `scripts/wordmark-data-uri.txt`. Reusing that path is the point -- a card
 * redrawn by hand drifts away from the page the first time either changes.
 *
 * Satori (which `next/og` uses) cannot read a webfont from `next/font`, so the
 * font is fetched at build time. That adds no new requirement: the build
 * already fetches from Google Fonts for `next/font`.
 */
const WORDMARK = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MSAyMCIgd2lkdGg9IjgxMCIgaGVpZ2h0PSIyMDAiIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzllZjAxYSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOWVmMDFhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTBhZjY4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNnKSIgZD0iTTE3IDFoM3YxaC0zeiBNMSAzaDF2MWgtMXogTTIgMmg1djJoLTV6IE03IDNoMXYxaC0xeiBNMTIgM2gxdjFoLTF6IE0xMyAyaDExdjJoLTExeiBNMjQgM2gxdjFoLTF6IE0yOSAzaDF2MWgtMXogTTMwIDJoN3YyaC03eiBNNDAgM2gxdjFoLTF6IE00MSAyaDd2MmgtN3ogTTUxIDNoMXYxaC0xeiBNNTIgMmg3djJoLTd6IE02MiAzaDF2MWgtMXogTTYzIDJoMXYyaC0xeiBNNjcgMmgxdjJoLTF6IE02OCAzaDF2MWgtMXogTTczIDNoMXYxaC0xeiBNNzQgMmgxdjJoLTF6IE03OCAyaDF2MmgtMXogTTc5IDNoMXYxaC0xeiBNMCA0aDN2MmgtM3ogTTUgNGg0djJoLTR6IE0xMSA0aDN2MmgtM3ogTTE3IDRoM3YyaC0zeiBNMjMgNGgzdjJoLTN6IE0yOCA0aDN2MmgtM3ogTTM0IDRoM3YyaC0zeiBNMzkgNGgzdjJoLTN6IE00NSA0aDN2MmgtM3ogTTUwIDRoM3YyaC0zeiBNNTYgNGgzdjJoLTN6IE02MSA0aDN2MmgtM3ogTTY3IDRoM3YyaC0zeiBNNzIgNGgzdjJoLTN6IE03OCA0aDN2MmgtM3ogTTAgNmgzdjJoLTN6IE01IDZoNHYyaC00eiBNMTEgNmgzdjJoLTN6IE0xNyA2aDN2MmgtM3ogTTIzIDZoM3YyaC0zeiBNMjggNmgzdjJoLTN6IE0zNCA2aDN2MmgtM3ogTTM5IDZoM3YyaC0zeiBNNDUgNmgzdjJoLTN6IE01MCA2aDN2MmgtM3ogTTU2IDZoMXYyaC0xeiBNNTcgNmgxdjFoLTF6IE02MSA2aDN2MmgtM3ogTTY3IDZoM3YyaC0zeiBNNzIgNmgzdjJoLTN6IE03OCA2aDN2MmgtM3ogTTAgOGgzdjJoLTN6IE00IDhoMXYyaC0xeiBNNiA4aDN2MmgtM3ogTTExIDhoM3YyaC0zeiBNMTcgOGgzdjJoLTN6IE0yMyA4aDN2MmgtM3ogTTI3IDloMXYxaC0xeiBNMjggOGgzdjJoLTN6IE0zMSA5aDN2MWgtM3ogTTM0IDhoM3YyaC0zeiBNMzggOWgxdjFoLTF6IE0zOSA4aDN2MmgtM3ogTTQyIDloM3YxaC0zeiBNNDUgOGgydjJoLTJ6IE00NyA4aDF2MWgtMXogTTUwIDhoM3YyaC0zeiBNNjAgOWgxdjFoLTF6IE02MSA4aDN2MmgtM3ogTTY0IDloM3YxaC0zeiBNNjcgOGgzdjJoLTN6IE03MCA5aDF2MWgtMXogTTcyIDhoM3YyaC0zeiBNNzUgOWgzdjFoLTN6IE03OCA4aDN2MmgtM3ogTTAgMTBoM3YyaC0zeiBNNCAxMGgxdjJoLTF6IE02IDEwaDN2MmgtM3ogTTExIDEwaDN2MmgtM3ogTTE3IDEwaDN2MmgtM3ogTTIzIDEwaDN2MmgtM3ogTTI3IDEwaDF2MWgtMXogTTI4IDEwaDN2MmgtM3ogTTMxIDEwaDN2MWgtM3ogTTM0IDEwaDN2MmgtM3ogTTM4IDEwaDF2MWgtMXogTTM5IDEwaDN2MmgtM3ogTTQyIDEwaDR2MWgtNHogTTUwIDEwaDN2MmgtM3ogTTU5IDEwaDJ2MWgtMnogTTYxIDEwaDN2MmgtM3ogTTY0IDEwaDN2MWgtM3ogTTY3IDEwaDN2MmgtM3ogTTcyIDEwaDZ2MWgtNnogTTc4IDEwaDN2MmgtM3ogTTAgMTJoNHYyaC00eiBNNiAxMmgzdjJoLTN6IE0xMSAxMmgzdjJoLTN6IE0xNyAxMmgzdjJoLTN6IE0yMyAxMmgzdjJoLTN6IE0yOCAxMmgzdjJoLTN6IE0zNCAxMmgzdjJoLTN6IE0zOCAxMmgxMHYyaC0xMHogTTUwIDEyaDN2MmgtM3ogTTU2IDEyaDF2MmgtMXogTTU3IDEzaDF2MWgtMXogTTYxIDEyaDN2MmgtM3ogTTY3IDEyaDN2MmgtM3ogTTcyIDEzaDF2MWgtMXogTTczIDEyaDJ2MmgtMnogTTc4IDEyaDN2MmgtM3ogTTAgMTRoNHYyaC00eiBNNiAxNGgzdjJoLTN6IE0xMSAxNGgzdjJoLTN6IE0xNyAxNGgzdjJoLTN6IE0yMyAxNGgzdjJoLTN6IE0yOCAxNGgzdjJoLTN6IE0zNCAxNGgzdjJoLTN6IE0zOSAxNGgzdjJoLTN6IE00NSAxNGgzdjJoLTN6IE01MCAxNGgzdjJoLTN6IE01NiAxNGgzdjJoLTN6IE02MSAxNGgzdjJoLTN6IE02NyAxNGgzdjJoLTN6IE03MiAxNGgzdjJoLTN6IE03OCAxNGgzdjJoLTN6IE0xIDE2aDF2MWgtMXogTTIgMTZoNXYyaC01eiBNNyAxNmgxdjFoLTF6IE0xMiAxNmgxdjFoLTF6IE0xMyAxNmgxdjJoLTF6IE0xNyAxNmgzdjJoLTN6IE0yMyAxNmgxdjJoLTF6IE0yNCAxNmgxdjFoLTF6IE0yOCAxNmgzdjJoLTN6IE0zNCAxNmgxdjJoLTF6IE0zNSAxNmgxdjFoLTF6IE0zOSAxNmgzdjJoLTN6IE00NSAxNmgzdjJoLTN6IE01MCAxNmg3djJoLTd6IE01NyAxNmgxdjFoLTF6IE02MSAxNmgzdjJoLTN6IE02NyAxNmgxdjJoLTF6IE02OCAxNmgxdjFoLTF6IE03MyAxNmgxdjFoLTF6IE03NCAxNmg1djJoLTV6IE03OSAxNmgxdjFoLTF6IE0zOSAxOGgzdjJoLTN6IE00NSAxOGgxdjJoLTF6IE00NiAxOGgxdjFoLTF6Ii8+PC9zdmc+"

const BG = "#1a1b26" // Tokyo Night background
const BLUE = "#7aa2f7" // terminal blue, the body colour
const GREEN = "#9ef01a" // the parody's accent
const MUTED = "#787c99"

/** JetBrains Mono as a TTF, which is the only format Satori accepts. */
async function mono(weight: 400 | 700): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@${weight}`,
      {
        headers: {
          // An old UA makes Google serve TTF rather than WOFF2.
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36",
        },
      },
    ).then((r) => r.text())
    const url = /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/.exec(css)?.[1]
    if (!url) return null
    return await fetch(url).then((r) => r.arrayBuffer())
  } catch {
    // Offline: Satori falls back to its bundled face. The card is still
    // correct, just not monospace.
    return null
  }
}

export default async function OpengraphImage() {
  const [regular, bold] = await Promise.all([mono(400), mono(700)])
  const fonts = [
    regular && { name: "JetBrains Mono", data: regular, weight: 400 as const, style: "normal" as const },
    bold && { name: "JetBrains Mono", data: bold, weight: 700 as const, style: "normal" as const },
  ].filter((f) => f !== null && f !== undefined)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: "72px 80px",
          fontFamily: "JetBrains Mono, monospace",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={WORDMARK} width={810} height={200} alt="" />

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 40, color: BLUE, lineHeight: 1.25 }}>
            {site.tagline}
          </div>
          <div style={{ fontSize: 26, color: MUTED, lineHeight: 1.4, maxWidth: 1000 }}>
            {hero.subhead}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
          }}
        >
          <div style={{ color: GREEN }}>{site.domain}</div>
          <div style={{ color: MUTED }}>A parody. Not real software.</div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  )
}
