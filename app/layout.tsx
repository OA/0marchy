import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Silkscreen } from "next/font/google"

import "./globals.css"
import { site } from "@/content"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

// The whole site is monospace, as the original is.
const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

// Pixel face, for the wordmark only.
const fontPixel = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "0marchy",
    "parody",
    "satire",
    "linux distro parody",
    "security parody",
  ],
  alternates: { canonical: "/" },
  // `app/opengraph-image.png` supplies the card automatically, including its
  // dimensions and a hashed URL. It is a *static* PNG rather than a generated
  // route on purpose: under `output: "export"` a generated route is written to
  // an extensionless file, which hosts then serve as
  // `application/octet-stream`, and several social crawlers refuse to render
  // that. The generator lives in `scripts/og-image.tsx`; see the README.
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  other: { rating: "parody" },
}

export const viewport: Viewport = {
  themeColor: "#1a1b26",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("dark antialiased", fontMono.variable, fontPixel.variable)}
      suppressHydrationWarning
    >
      <head>
        {/* Revealed elements start transparent and are shown by an
            IntersectionObserver. With scripting off nothing would ever run, so
            show everything up front instead. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-mono">
        <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
      </body>
    </html>
  )
}
