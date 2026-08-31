import { footer, site } from "@/content"
import { Wordmark } from "@/components/site/wordmark"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="border-border/60 border-t px-5 py-14 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Wordmark className="text-base" />
            <p className="text-muted-foreground mt-3 max-w-xs text-sm">
              {site.tagline}
            </p>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-muted-foreground font-mono text-xs tracking-wide uppercase">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <a
                      href={l.href}
                      className="text-foreground/80 hover:text-primary text-sm transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="bg-border/40 my-10" />

        {/* The disclaimer is the most important text on the page, so it is not
            small print: same size as body copy, and first. */}
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed text-pretty">
          {footer.disclaimer}
        </p>

        <p className="text-muted-foreground/70 mt-6 font-mono text-xs">
          {footer.madeWith}
        </p>
      </div>
    </footer>
  )
}
