import { cn } from "@/lib/utils"

/**
 * The `0MARCHY` wordmark.
 *
 * Two spans, not one, and deliberately so.
 *
 * The gradient is painted with `background-clip: text`, which WebKit does
 * **not** reliably paint over a positioned descendant: with the slash overlay
 * nested inside the clipped element, iOS Safari left the `0` fully transparent
 * and rendered the mark as `/MARCHY`. So the zero lives outside the clipped
 * element and is a solid accent colour, and only `MARCHY` is clipped.
 *
 * The gradient is also applied behind an `@supports` guard (see
 * `globals.css`), so a browser that cannot clip a background to text gets solid
 * accent text rather than `color: transparent` and an invisible wordmark.
 */
export function Wordmark({
  className,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...rest}
      className={cn("font-pixel inline-flex items-center leading-none", className)}
    >
      {/* The zero: solid accent, never clipped, so it cannot disappear. */}
      <span className="text-primary relative inline-block">
        0
        <span
          aria-hidden="true"
          className="bg-primary pointer-events-none absolute top-1/2 left-1/2 block h-[0.09em] w-[0.74em] origin-center -translate-x-1/2 -translate-y-1/2 -rotate-[54deg]"
        />
      </span>
      <span className="wordmark-gradient">MARCHY</span>
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
