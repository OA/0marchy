import { announcement } from "@/content"

/**
 * The bar across the very top, as the original has.
 *
 * An anchor to the changelog rather than an external link: there is nothing
 * external to point at.
 */
export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <a
        href={announcement.href}
        className="mx-auto flex min-h-10 w-full max-w-6xl items-center justify-center px-4 py-2 text-center font-mono text-xs font-bold text-balance sm:text-sm"
      >
        {announcement.text}
      </a>
    </div>
  )
}
