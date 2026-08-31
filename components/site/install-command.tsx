"use client"

import { Check, Copy } from "lucide-react"
import { useEffect, useState } from "react"

import { hero } from "@/content"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * The install command, with a copy button.
 *
 * The command is inert by construction -- `0marchy.org/install` serves nothing,
 * and there is no script behind it. The copy confirmation says so out loud
 * rather than only in the small print, because copying is the one action on
 * this page a reader might carry somewhere else.
 */
export function InstallCommand({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2600)
    return () => clearTimeout(t)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(hero.install)
      setCopied(true)
    } catch {
      // Clipboard access can be denied (insecure context, permissions policy).
      // The command is selectable, so there is a manual path; say nothing
      // rather than pop an error the reader cannot act on.
    }
  }

  return (
    <div className={cn("w-full text-left", className)}>
      <div className="border-primary/25 bg-card/70 group relative flex items-center gap-3 rounded-lg border px-4 py-3 backdrop-blur-sm sm:px-5">
        <span
          aria-hidden="true"
          className="text-primary/70 font-mono text-sm select-none"
        >
          $
        </span>
        <code className="text-foreground min-w-0 flex-1 overflow-x-auto text-left font-mono text-[0.8125rem] whitespace-nowrap sm:text-sm">
          {hero.install}
        </code>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={copy}
          aria-label={copied ? hero.copy.done : `${hero.copy.idle} install command`}
          className="text-muted-foreground hover:text-primary hover:bg-primary/10 size-8 shrink-0"
        >
          {copied ? (
            <Check className="text-primary size-4" />
          ) : (
            <Copy className="size-4" />
          )}
        </Button>
      </div>

      <p
        aria-live="polite"
        className={cn(
          "mt-3 text-xs sm:text-sm",
          copied ? "text-destructive" : "text-muted-foreground",
        )}
      >
        {copied ? hero.copyWarning : hero.installNote}
      </p>
    </div>
  )
}
