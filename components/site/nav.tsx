"use client"

import { Menu, Star, X } from "lucide-react"
import { useEffect, useState } from "react"

import { nav, site } from "@/content"
import { Wordmark } from "@/components/site/wordmark"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile sheet on resize to desktop, so the two never disagree.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-border/60 bg-background/85 border-b backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="focus-visible:ring-ring rounded-sm focus-visible:ring-2 focus-visible:outline-none"
        >
          <Wordmark className="text-xl sm:text-2xl" />
          <span className="sr-only">{site.name} home</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-primary focus-visible:ring-ring rounded-sm font-mono text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <GitHubButton />
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="border-border/60 bg-background/95 border-t backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-2 sm:px-8">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-primary block py-3 font-mono text-sm transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <GitHubButton />
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}

/**
 * Deliberately goes nowhere.
 *
 * A `<button>` rather than an `<a href="#">`: there is no repository, and a
 * link that navigates to the top of the page would be a worse lie than a
 * control that plainly does nothing.
 */
function GitHubButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="border-primary/30 hover:border-primary/60 hover:bg-primary/10 w-full font-mono text-xs md:w-auto"
        >
          <Star className="size-3.5" />
          {nav.cta.label}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{nav.cta.tooltip}</TooltipContent>
    </Tooltip>
  )
}
