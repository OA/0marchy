import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static export: the whole site is HTML/CSS/JS on disk, so it can be dropped
  // on any host with no server, no runtime and no build step at the edge.
  output: "export",
  // `next/image`'s optimiser needs a server; a static export has none.
  images: { unoptimized: true },
  // Emit `about/index.html` rather than `about.html`, which is what most static
  // hosts expect when they serve a directory.
  trailingSlash: true,
}

export default nextConfig
