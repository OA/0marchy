import { hero, site } from "@/content"
import { InstallCommand } from "@/components/site/install-command"
import { PillButtons } from "@/components/site/pill-buttons"
import { Reveal } from "@/components/site/reveal"
import { WordmarkArt } from "@/components/site/wordmark"

export function Hero() {
  return (
    <section
      id="top"
      className="px-5 pt-14 pb-16 text-center sm:px-8 sm:pt-20 sm:pb-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <h1 className="sr-only">
            {site.name} — {hero.title}
          </h1>
          <WordmarkArt />
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-8 font-mono text-base font-light text-balance sm:mt-10 sm:text-xl">
            {hero.title}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl font-mono text-sm italic text-pretty sm:text-base">
            {hero.flavour}
          </p>
        </Reveal>

        <Reveal delay={140}>
          <p className="text-foreground/90 mx-auto mt-5 max-w-2xl font-mono text-sm text-pretty sm:text-base">
            {hero.subhead}
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-10 sm:mt-12">
          <PillButtons />
        </Reveal>

        <Reveal delay={240} className="mx-auto mt-12 max-w-2xl sm:mt-14" id="install">
          <InstallCommand />
        </Reveal>

        <Reveal delay={280}>
          <dl className="border-border/70 mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-md border sm:mt-16 lg:grid-cols-4">
            {hero.stats.map((s) => (
              <div
                key={s.label}
                className="bg-card/50 outline-border/70 flex flex-col px-4 py-5 outline outline-offset-0 sm:px-6 sm:py-6"
              >
                <dd className="text-primary order-1 font-mono text-2xl font-bold sm:text-3xl">
                  {s.value}
                </dd>
                <dt className="text-muted-foreground order-2 mt-1 font-mono text-[0.6875rem] tracking-wide uppercase sm:text-xs">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
