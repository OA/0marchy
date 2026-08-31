import { Check, Minus } from "lucide-react"

import { comparison } from "@/content"
import { Reveal } from "@/components/site/reveal"
import { Section } from "@/components/site/section"

export function Comparison() {
  return (
    <Section
      id="compare"
      heading={comparison.heading}
      subheading={comparison.subheading}
    >
      <Reveal>
        {/* A real table: it is tabular data, and a screen reader should get the
            row and column relationships. On narrow screens it scrolls rather
            than reflowing into cards, which keeps the comparison legible. */}
        <div className="border-border/60 overflow-x-auto rounded-lg border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              {comparison.heading}: {comparison.columns.ours} compared with{" "}
              {comparison.columns.theirs}. All claims are fictional.
            </caption>
            <thead>
              <tr className="border-border/60 bg-card/60 border-b">
                <th scope="col" className="text-muted-foreground px-5 py-4 font-mono text-xs font-medium tracking-wide uppercase">
                  Metric
                </th>
                <th scope="col" className="text-primary px-5 py-4 font-mono text-sm font-semibold">
                  {comparison.columns.ours}
                </th>
                <th scope="col" className="text-muted-foreground px-5 py-4 font-mono text-sm font-medium">
                  {comparison.columns.theirs}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((r) => (
                <tr
                  key={r.metric}
                  className="border-border/40 last:border-0 border-b"
                >
                  <th
                    scope="row"
                    className="px-5 py-5 align-top font-mono text-sm font-medium"
                  >
                    {r.metric}
                    <span className="text-muted-foreground mt-1 block text-xs font-normal">
                      {r.note}
                    </span>
                  </th>
                  <td className="px-5 py-5 align-top">
                    <span className="flex items-start gap-2">
                      <Check
                        aria-hidden="true"
                        className="text-primary mt-0.5 size-4 shrink-0"
                      />
                      <span className="text-foreground">{r.ours}</span>
                    </span>
                  </td>
                  <td className="text-muted-foreground px-5 py-5 align-top">
                    <span className="flex items-start gap-2">
                      <Minus
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 opacity-50"
                      />
                      <span>{r.theirs}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  )
}
