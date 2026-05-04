import { CTASection } from '@/components/marketing/cta-section'
import { PageHero } from '@/components/marketing/page-hero'
import { SectionWrapper } from '@/components/marketing/section-wrapper'
import { pageIntro, invitation, installInvitation } from '@/content/download'
import Image from 'next/image'
import userInterfaceImage from '../../../public/cyclomat-ui-basic.jpeg'

export default function Page() {
  return (
    <>
      <PageHero heading={pageIntro.heading} subtext={pageIntro.subtext} />

      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-2 flex items-center">
          <div className="group relative aspect-810/559 pl-6">
            <Image 
              src={userInterfaceImage}
              alt="Picture of the user interface"
            />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8 opacity-0 transition-opacity group-hover:opacity-100">
            <p className="text-sm font-medium text-white">Screenshot of the application</p>
          </div>
        </div>

        <CTASection
            heading={installInvitation.heading}
            description={installInvitation.body}
            primaryCta={installInvitation.cta}
          />
        </div>
      </SectionWrapper>

      <CTASection
            heading={invitation.heading}
            description={invitation.body}
            primaryCta={invitation.cta}
            secondaryCta={invitation.secondaryCta}
      />
    </>
  )
}