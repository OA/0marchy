import { testimonials } from "@/content"
import { Reveal } from "@/components/site/reveal"
import { Section } from "@/components/site/section"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      heading={testimonials.heading}
      subheading={testimonials.subheading}
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {testimonials.items.map((t, i) => (
          <Reveal as="li" key={t.handle} delay={i * 70}>
            <Card className="border-border/60 bg-card/50 h-full justify-between gap-6">
              <CardContent>
                <blockquote className="text-foreground/90 text-sm leading-relaxed text-pretty">
                  <span aria-hidden="true" className="text-primary/60 select-none">
                    “
                  </span>
                  {t.quote}
                  <span aria-hidden="true" className="text-primary/60 select-none">
                    ”
                  </span>
                </blockquote>
              </CardContent>
              <CardFooter className="flex-col items-start gap-0.5">
                <p className="font-mono text-sm font-medium">{t.name}</p>
                <p className="text-primary/80 font-mono text-xs">{t.handle}</p>
                <p className="text-muted-foreground mt-1 text-xs">{t.role}</p>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-8">
        <p className="text-muted-foreground/80 text-xs">
          These people do not exist. The names, handles, roles and quotations
          are invented for the parody.
        </p>
      </Reveal>
    </Section>
  )
}
