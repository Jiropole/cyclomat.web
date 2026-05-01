import { CTASection } from '@/components/marketing/cta-section'
import { PageHero } from '@/components/marketing/page-hero'
import { SectionWrapper } from '@/components/marketing/section-wrapper'
import { aboutIntro, invitation } from '@/content/about'
import Privacy from '@/content/privacy.md'

export default function Page() {
  return (
    <>
      <PageHero heading="Privacy Notice" subtext="" />

      <SectionWrapper className="bg-sky-500/15">
         <Privacy />
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