import { cn } from "@/lib/utils"

/**
 * The `0MARCHY` wordmark.
 *
 * Set entirely in the pixel face, so the letterforms match. The slash across
 * the leading zero is drawn on top rather than relying on the font: pixel faces
 * disagree about whether a zero is slashed, dotted or bare, and the slash is
 * the identity — it has to look the same here, in the favicon and on the social
 * card.
 */
export function Wordmark({
  className,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...rest}
      className={cn(
        "font-pixel from-primary via-primary to-destructive inline-block bg-gradient-to-b bg-clip-text leading-none text-transparent",
        className,
      )}
    >
      <span className="relative inline-block">
        0
        {/* The slash. Sized in `em` so it tracks the font size, and coloured
            with the accent directly because the parent is clipping a gradient
            to text and would not paint a child. */}
        <span
          aria-hidden="true"
          className="bg-primary pointer-events-none absolute top-1/2 left-1/2 block h-[0.09em] w-[0.8em] origin-center -translate-x-1/2 -translate-y-1/2 -rotate-[54deg]"
        />
      </span>
      MARCHY
    </span>
  )
}

/** The mark alone, for the favicon and the social card. */
export function SlashedZero({
  size = 22,
  className,
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 16 20"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <ellipse
        cx="8"
        cy="10"
        rx="6.25"
        ry="8.5"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path
        d="M13 3.5 3 16.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
