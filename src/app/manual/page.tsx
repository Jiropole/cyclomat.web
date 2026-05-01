import { CTASection } from '@/components/marketing/cta-section'
import { PageHero } from '@/components/marketing/page-hero'
import { SectionWrapper } from '@/components/marketing/section-wrapper'
import { aboutIntro, invitation } from '@/content/about'
import Manual from '@/content/manual.md'

export default function Page() {
  return (
    <>
      <PageHero heading="Cyclonaut Manual" subtext="" />

      <SectionWrapper>
         <Manual />
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