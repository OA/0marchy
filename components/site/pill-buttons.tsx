"use client"

import {
  BookOpen,
  Calendar,
  Download,
  GitBranch,
  Heart,
  MessageCircle,
  Newspaper,
  Puzzle,
  Server,
  Shield,
  Shirt,
  Users,
  type LucideIcon,
} from "lucide-react"

import { hero } from "@/content"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const icons: Record<string, LucideIcon> = {
  book: BookOpen,
  download: Download,
  puzzle: Puzzle,
  github: GitBranch,
  shield: Shield,
  newspaper: Newspaper,
  users: Users,
  heart: Heart,
  message: MessageCircle,
  calendar: Calendar,
  shirt: Shirt,
  server: Server,
}

/**
 * The grid of pill buttons under the hero.
 *
 * Every one is a `<button>`, not a link. There is no project behind any of
 * them, and a link that navigated nowhere would be a worse lie than a control
 * that plainly does nothing and says why on hover.
 */
export function PillButtons() {
  return (
    <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
      {hero.buttons.map((b) => {
        const Icon = icons[b.icon] ?? Shield
        return (
          <li key={b.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-ring inline-flex h-10 cursor-default items-center gap-2 rounded-md border px-3.5 font-mono text-xs font-bold tracking-wide uppercase transition-colors focus-visible:ring-2 focus-visible:outline-none sm:px-4 sm:text-sm"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {b.label}
                </button>
              </TooltipTrigger>
              <TooltipContent>{b.tip}</TooltipContent>
            </Tooltip>
          </li>
        )
      })}
    </ul>
  )
}
