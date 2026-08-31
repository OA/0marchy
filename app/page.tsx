import { AnnouncementBar } from "@/components/site/announcement"
import { Changelog } from "@/components/site/changelog"
import { Comparison } from "@/components/site/comparison"
import { Faq } from "@/components/site/faq"
import { Features } from "@/components/site/features"
import { SiteFooter } from "@/components/site/footer"
import { Hero } from "@/components/site/hero"
import { SiteNav } from "@/components/site/nav"
import { Testimonials } from "@/components/site/testimonials"

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteNav />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <Changelog />
        <Testimonials />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
