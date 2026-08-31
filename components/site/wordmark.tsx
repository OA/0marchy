import { cn } from "@/lib/utils"

/**
 * `0MARCHY`, drawn as block art.
 *
 * The genre sets its wordmark as monospace block characters (`█ ▄ ▀`) in the
 * body font. Doing that literally does not survive contact with the web:
 * JetBrains Mono's `latin` subset — which is what `next/font` ships — does not
 * include U+2580–U+259F, so every block glyph falls back to another font with a
 * different advance width, the 80-column grid stops lining up, and the mark
 * renders as a smear.
 *
 * So the same grid is emitted as a single SVG path instead: one rect per run of
 * cells, `█` filling a cell and `▄`/`▀` filling its lower/upper half. Identical
 * on every platform, no font dependency, no fallback metrics, and it scales to
 * any width without a `clamp` on the font size.
 *
 * The letterforms are a standard public figlet style; the slashed zero is drawn
 * here, running bottom-left to top-right through the counter.
 */
export function WordmarkArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 81 20"
      role="img"
      aria-label="0marchy"
      // `shape-rendering: crispEdges` keeps the cell boundaries hard, which is
      // the whole point of block art; antialiasing them reads as a blur.
      shapeRendering="crispEdges"
      className={cn("mx-auto block h-auto w-full max-w-3xl", className)}
    >
      <defs>
        <linearGradient id="wordmark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="55%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--destructive)" />
        </linearGradient>
      </defs>
      <path fill="url(#wordmark-fill)" d="M17 1h3v1h-3z M1 3h1v1h-1z M2 2h5v2h-5z M7 3h1v1h-1z M12 3h1v1h-1z M13 2h11v2h-11z M24 3h1v1h-1z M29 3h1v1h-1z M30 2h7v2h-7z M40 3h1v1h-1z M41 2h7v2h-7z M51 3h1v1h-1z M52 2h7v2h-7z M62 3h1v1h-1z M63 2h1v2h-1z M67 2h1v2h-1z M68 3h1v1h-1z M73 3h1v1h-1z M74 2h1v2h-1z M78 2h1v2h-1z M79 3h1v1h-1z M0 4h3v2h-3z M5 4h4v2h-4z M11 4h3v2h-3z M17 4h3v2h-3z M23 4h3v2h-3z M28 4h3v2h-3z M34 4h3v2h-3z M39 4h3v2h-3z M45 4h3v2h-3z M50 4h3v2h-3z M56 4h3v2h-3z M61 4h3v2h-3z M67 4h3v2h-3z M72 4h3v2h-3z M78 4h3v2h-3z M0 6h3v2h-3z M5 6h4v2h-4z M11 6h3v2h-3z M17 6h3v2h-3z M23 6h3v2h-3z M28 6h3v2h-3z M34 6h3v2h-3z M39 6h3v2h-3z M45 6h3v2h-3z M50 6h3v2h-3z M56 6h1v2h-1z M57 6h1v1h-1z M61 6h3v2h-3z M67 6h3v2h-3z M72 6h3v2h-3z M78 6h3v2h-3z M0 8h3v2h-3z M4 8h1v2h-1z M6 8h3v2h-3z M11 8h3v2h-3z M17 8h3v2h-3z M23 8h3v2h-3z M27 9h1v1h-1z M28 8h3v2h-3z M31 9h3v1h-3z M34 8h3v2h-3z M38 9h1v1h-1z M39 8h3v2h-3z M42 9h3v1h-3z M45 8h2v2h-2z M47 8h1v1h-1z M50 8h3v2h-3z M60 9h1v1h-1z M61 8h3v2h-3z M64 9h3v1h-3z M67 8h3v2h-3z M70 9h1v1h-1z M72 8h3v2h-3z M75 9h3v1h-3z M78 8h3v2h-3z M0 10h3v2h-3z M4 10h1v2h-1z M6 10h3v2h-3z M11 10h3v2h-3z M17 10h3v2h-3z M23 10h3v2h-3z M27 10h1v1h-1z M28 10h3v2h-3z M31 10h3v1h-3z M34 10h3v2h-3z M38 10h1v1h-1z M39 10h3v2h-3z M42 10h4v1h-4z M50 10h3v2h-3z M59 10h2v1h-2z M61 10h3v2h-3z M64 10h3v1h-3z M67 10h3v2h-3z M72 10h6v1h-6z M78 10h3v2h-3z M0 12h4v2h-4z M6 12h3v2h-3z M11 12h3v2h-3z M17 12h3v2h-3z M23 12h3v2h-3z M28 12h3v2h-3z M34 12h3v2h-3z M38 12h10v2h-10z M50 12h3v2h-3z M56 12h1v2h-1z M57 13h1v1h-1z M61 12h3v2h-3z M67 12h3v2h-3z M72 13h1v1h-1z M73 12h2v2h-2z M78 12h3v2h-3z M0 14h4v2h-4z M6 14h3v2h-3z M11 14h3v2h-3z M17 14h3v2h-3z M23 14h3v2h-3z M28 14h3v2h-3z M34 14h3v2h-3z M39 14h3v2h-3z M45 14h3v2h-3z M50 14h3v2h-3z M56 14h3v2h-3z M61 14h3v2h-3z M67 14h3v2h-3z M72 14h3v2h-3z M78 14h3v2h-3z M1 16h1v1h-1z M2 16h5v2h-5z M7 16h1v1h-1z M12 16h1v1h-1z M13 16h1v2h-1z M17 16h3v2h-3z M23 16h1v2h-1z M24 16h1v1h-1z M28 16h3v2h-3z M34 16h1v2h-1z M35 16h1v1h-1z M39 16h3v2h-3z M45 16h3v2h-3z M50 16h7v2h-7z M57 16h1v1h-1z M61 16h3v2h-3z M67 16h1v2h-1z M68 16h1v1h-1z M73 16h1v1h-1z M74 16h5v2h-5z M79 16h1v1h-1z M39 18h3v2h-3z M45 18h1v2h-1z M46 18h1v1h-1z" />
    </svg>
  )
}

/**
 * The compact wordmark, for the nav and footer where the block art would not
 * fit. A real `0` in the body font — JetBrains Mono already slashes its zero,
 * so it matches the art without a drawn overlay.
 */
export function Wordmark({
  className,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...rest}
      className={cn(
        "text-primary font-mono font-bold tracking-[0.14em] lowercase",
        className,
      )}
    >
      0marchy
    </span>
  )
}
