import { changelog } from "@/content"
import { Reveal } from "@/components/site/reveal"
import { Section } from "@/components/site/section"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function Changelog() {
  return (
    <Section
      id="changelog"
      heading={changelog.heading}
      subheading={changelog.subheading}
    >
      <ol className="space-y-10">
        {changelog.entries.map((e, i) => (
          <Reveal as="li" key={e.version} delay={i === 0 ? 0 : 40}>
            <article className="grid gap-4 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <header className="flex flex-row items-baseline gap-3 sm:flex-col sm:items-start sm:gap-2">
                <h3 className="text-primary font-mono text-lg font-semibold">
                  {e.version}
                </h3>
                <Badge
                  variant={e.tag === "current" ? "default" : "secondary"}
                  className="font-mono text-[0.6875rem]"
                >
                  {e.tag}
                </Badge>
                <time
                  dateTime={e.date}
                  className="text-muted-foreground font-mono text-xs"
                >
                  {e.date}
                </time>
              </header>

              <div>
                <p className="text-foreground/90 font-mono text-sm">
                  “{e.codename}”
                </p>
                <ul className="mt-3 space-y-2">
                  {e.notes.map((n) => (
                    <li
                      key={n}
                      className="text-muted-foreground flex gap-3 text-sm leading-relaxed text-pretty"
                    >
                      <span
                        aria-hidden="true"
                        className="text-primary/60 mt-[0.35rem] size-1 shrink-0 rounded-full bg-current"
                      />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            {i < changelog.entries.length - 1 ? (
              <Separator className="bg-border/40 mt-10" />
            ) : null}
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12">
        <p className="text-muted-foreground/80 text-xs">
          Version numbers, dates and identifiers on this page are invented. The{" "}
          <code className="font-mono">XXXX</code> in each identifier is a
          literal placeholder — no real advisory is referenced anywhere on this
          site.
        </p>
      </Reveal>
    </Section>
  )
}
