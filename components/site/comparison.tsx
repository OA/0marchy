import { Check, Minus } from "lucide-react"

import { comparison } from "@/content"
import { Section } from "@/components/site/section"

export function Comparison() {
  return (
    <Section
      id="compare"
      heading={comparison.heading}
      subheading={comparison.subheading}
    >
      {/*
        One table, two layouts, no duplicated content.

        Below `sm` the table parts become blocks, so each row reads as a card
        and nothing scrolls sideways on a phone. That does drop the native table
        semantics at that width, so each cell carries its own visible label —
        the reader gets "0marchy: …" / "Other distros: …" inline rather than
        having to remember a header that is no longer beside it.

        From `sm` up the display values are restored and it is an ordinary
        table again, header row and all.
      */}
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">
          {comparison.heading}: {comparison.columns.ours} compared with{" "}
          {comparison.columns.theirs}. All claims are fictional.
        </caption>

        <thead className="sr-only sm:not-sr-only sm:table-header-group">
          <tr className="border-border/60 bg-card/60 border-b">
            <th
              scope="col"
              className="text-muted-foreground px-5 py-4 font-mono text-xs font-medium tracking-wide uppercase"
            >
              Metric
            </th>
            <th
              scope="col"
              className="text-primary px-5 py-4 font-mono text-sm font-bold"
            >
              {comparison.columns.ours}
            </th>
            <th
              scope="col"
              className="text-muted-foreground px-5 py-4 font-mono text-sm"
            >
              {comparison.columns.theirs}
            </th>
          </tr>
        </thead>

        <tbody className="block sm:table-row-group">
          {comparison.rows.map((r) => (
            <tr
              key={r.metric}
              className="border-border/60 mb-3 block rounded-md border p-4 last:mb-0 sm:border-border/40 sm:mb-0 sm:table-row sm:rounded-none sm:border-0 sm:border-b sm:p-0 sm:last:border-0"
            >
              <th
                scope="row"
                className="block px-0 py-0 text-left align-top font-mono text-sm font-bold sm:table-cell sm:px-5 sm:py-5 sm:font-medium"
              >
                {r.metric}
                <span className="text-muted-foreground mt-1 block text-xs font-light">
                  {r.note}
                </span>
              </th>

              <td className="mt-3 block px-0 py-0 align-top sm:mt-0 sm:table-cell sm:px-5 sm:py-5">
                <span className="flex items-start gap-2">
                  <Check
                    aria-hidden="true"
                    className="text-primary mt-0.5 size-4 shrink-0"
                  />
                  <span className="text-foreground">
                    <span className="text-primary font-bold sm:hidden">
                      {comparison.columns.ours}:{" "}
                    </span>
                    {r.ours}
                  </span>
                </span>
              </td>

              <td className="text-muted-foreground mt-2 block px-0 py-0 align-top sm:mt-0 sm:table-cell sm:px-5 sm:py-5">
                <span className="flex items-start gap-2">
                  <Minus
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 opacity-50"
                  />
                  <span>
                    <span className="font-bold sm:hidden">
                      {comparison.columns.theirs}:{" "}
                    </span>
                    {r.theirs}
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  )
}
