import { CTASection } from '@/components/marketing/cta-section'
import { PageHero } from '@/components/marketing/page-hero'
import { SectionWrapper } from '@/components/marketing/section-wrapper'
import {  pageIntro, invitation } from '@/content/download'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <PageHero heading={pageIntro.heading} subtext={pageIntro.subtext} />

      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-2 flex items-center">
          <div className="group relative aspect-810/559">
            <Image 
              src="/cyclomat-ui-basic.jpeg"
              alt="Picture of the user interface"
              // width={405}
              // height={280}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="mx-auto rounded-2xl border border-primary/20 bg-primary/5 p-0 text-center"
            />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8 opacity-0 transition-opacity group-hover:opacity-100">
          <p className="text-sm font-medium text-white">Screenshot of the application</p>
        </div>

          </div>

          <CTASection
            heading={invitation.heading}
            description={invitation.body}
            primaryCta={invitation.cta}
            secondaryCta={{ label: "Explore the gallery", href: "/gallery" }}
          />
        </div>
      </SectionWrapper>
    </>
  )
}