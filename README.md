# 0marchy

A single-page parody website for a fictional Linux distribution, "0marchy —
the zero day native operating system", in which every security flaw is
presented as a deliberate, proudly opinionated feature.

**None of it is real.** There is no distribution, no ISO, no repository, no
release and no script behind the install command. The version numbers, the
release notes, the CVE-shaped identifiers (all of which use a literal `XXXX`
placeholder) and the people quoted in the testimonials are invented. It is not
affiliated with, endorsed by, or connected to Omarchy, Arch Linux, or their
maintainers.

## Running it

```sh
bun install
bun run dev      # http://localhost:3000
```

```sh
bun run build    # static export to ./out
bun run lint
bun run typecheck
```

The site is a **static export** (`output: "export"` in `next.config.ts`), so
`out/` is plain HTML, CSS and JS and can be served by anything. There is no
server, no runtime and no API route.

## Editing the copy

All user-visible text lives in [`content.ts`](./content.ts) — nothing is written
inline in a component. That file also carries the standing rules for anything
added to it: no real CVE identifiers, no real people or products, no exploit
code, and the install command must never resolve.

## Structure

| Path | What |
|---|---|
| `content.ts` | every word on the site |
| `app/layout.tsx` | metadata, OpenGraph, fonts |
| `app/opengraph-image.png` | the social card |
| `scripts/og-image.tsx` | the generator that produced it — see below |
| `app/icon.svg` | favicon: a slashed zero |
| `components/site/` | one component per section |
| `components/ui/` | shadcn primitives |

## Regenerating the social card

`app/opengraph-image.png` is a committed static file, not a generated route.
Under `output: "export"` a generated route is written to an *extensionless*
file, which hosts then serve as `application/octet-stream` — and several social
crawlers refuse to render that. A static `.png` gets the right content type
everywhere.

The generator still exists. To rebuild the card after editing the tagline:

```sh
bun run og
```

That temporarily restores `scripts/og-image.tsx` into `app/`, builds, copies the
result to `app/opengraph-image.png`, removes the route, and rebuilds.

## Design

Tokyo Night (`#1a1b26`), JetBrains Mono throughout, Silkscreen for the
wordmark, and a single toxic-green accent. The layout deliberately mirrors the
shape of a modern distro landing page — that resemblance is the joke, and the
footer says so in as many words.

There are no scroll animations. Content is present on load; the only motion is
a colour transition on hover.
