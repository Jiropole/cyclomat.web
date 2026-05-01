import { CTASection } from '@/components/marketing/cta-section'
import { PageHero } from '@/components/marketing/page-hero'
import { SectionWrapper } from '@/components/marketing/section-wrapper'
import { FadeIn } from '@/components/ui/fade-in'
import { keyPrinciple, pageIntro, invitation } from '@/content/download'

export default function Page() {
  return (
    <>
      <PageHero heading={pageIntro.heading} subtext={pageIntro.subtext} />

      {/* <SectionWrapper>
        <FadeIn
          duration={0.6}
          className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center"
        >
          <blockquote className="text-2xl font-semibold tracking-tight md:text-3xl">
            &ldquo;{keyPrinciple.text}&rdquo;
          </blockquote>
          <p className="mt-4 text-muted-foreground">{keyPrinciple.subtext}</p>
        </FadeIn>
      </SectionWrapper> */}

      <CTASection
        heading={invitation.heading}
        description={invitation.body}
        primaryCta={invitation.cta}
        secondaryCta={{ label: "Explore the gallery", href: "/gallery" }}
      />
    </>
  )
}