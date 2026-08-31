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
                  // Matches the original's `.button`: solid accent fill, dark
                  // text, 0.4em radius, a soft drop shadow, 1.4em icons and a
                  // 0.6em gap. The one difference is the accent colour.
                  className="bg-primary text-primary-foreground shadow-primary/20 hover:bg-primary/85 focus-visible:ring-ring focus-visible:ring-offset-background inline-flex h-[2.9em] cursor-default items-center gap-[0.6em] rounded-[0.4em] px-[1em] font-mono text-sm font-bold uppercase shadow-[0_0.2em_1.2em_-0.4em_rgba(0,0,0,0.5)] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:text-base"
                >
                  <Icon aria-hidden="true" className="size-[1.4em]" />
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
