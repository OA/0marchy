"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

/**
 * Fade-and-rise once, when the element first scrolls into view.
 *
 * One `IntersectionObserver` per element, disconnected as soon as it fires --
 * no animation library, no scroll listener, no work after the reveal. The
 * transition itself lives in `globals.css` so that `prefers-reduced-motion` can
 * switch it off in one place without this component knowing.
 *
 * The element starts at `opacity: 0`, so if JavaScript never runs the content
 * would be invisible. `useEffect` reveals it unconditionally on the first tick
 * when the observer is unavailable, and the no-JS case is covered by a
 * `<noscript>` rule in the layout.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode
  className?: string
  /** Milliseconds. Used to stagger a grid; keep it small. */
  delay?: number
  as?: "div" | "section" | "li" | "article"
} & Omit<React.HTMLAttributes<HTMLElement>, "children" | "className">) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.reveal = "shown"
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        el.dataset.reveal = "shown"
        observer.disconnect()
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      {...rest}
      ref={ref as React.Ref<never>}
      data-reveal=""
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(className)}
    >
      {children}
    </Tag>
  )
}
