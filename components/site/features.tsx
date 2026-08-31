import { features } from "@/content"
import { Reveal } from "@/components/site/reveal"
import { Section } from "@/components/site/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  return (
    <Section
      id="features"
      heading={features.heading}
      subheading={features.subheading}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.items.map((f, i) => (
          <Reveal
            as="li"
            key={f.title}
            // Stagger within a row only; a long cascade reads as a gimmick.
            delay={(i % 3) * 70}
          >
            <Card className="border-border/60 bg-card/50 hover:border-primary/40 h-full gap-4 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-mono text-base font-semibold">
                  <span className="text-primary mr-2 select-none">›</span>
                  {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  {f.body}
                </p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
