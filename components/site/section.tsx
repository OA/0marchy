import { Reveal } from "@/components/site/reveal"
import { cn } from "@/lib/utils"

/** Shared shell: id anchor, consistent rhythm, optional heading block. */
export function Section({
  id,
  heading,
  subheading,
  children,
  className,
  headingClassName,
}: {
  id?: string
  heading?: string
  subheading?: string
  children: React.ReactNode
  className?: string
  headingClassName?: string
}) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl">
        {heading ? (
          <Reveal className="mb-12 max-w-2xl sm:mb-16">
            <h2
              className={cn(
                "text-2xl font-semibold text-balance sm:text-3xl md:text-4xl",
                headingClassName,
              )}
            >
              {heading}
            </h2>
            {subheading ? (
              <p className="text-muted-foreground mt-4 text-base leading-relaxed text-pretty sm:text-lg">
                {subheading}
              </p>
            ) : null}
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  )
}
