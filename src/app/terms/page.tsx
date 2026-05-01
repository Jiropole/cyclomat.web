import { CTASection } from '@/components/marketing/cta-section'
import { PageHero } from '@/components/marketing/page-hero'
import { SectionWrapper } from '@/components/marketing/section-wrapper'
import { aboutIntro, invitation } from '@/content/about'
import Terms from '@/content/terms.md'

export default function Page() {
  return (
    <>
      <PageHero heading="Terms of Service" subtext="" />

      <SectionWrapper className="bg-sky-500/15">
         <Terms />
      </SectionWrapper>

      <CTASection
        heading={invitation.heading}
        description={invitation.body}
        primaryCta={invitation.cta}
        secondaryCta={{ label: "Explore the gallery", href: "/gallery" }}
      />
    </>
  )
}