import { Hero } from "@/components/marketing/hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { ArtworkSample } from "@/components/marketing/artwork-sample";
import { CTASection } from "@/components/marketing/cta-section";
import { FadeIn } from "@/components/ui/fade-in";
import { heroContent, introContent, features, whyDifferent } from "@/content/home";
import { galleryItems } from "@/content/gallery";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from 'next/image'
import userInterfaceImage from '../../public/cyclomat-ui-perspective.png'

export default function HomePage() {
  const showcaseItems = galleryItems.slice(0, 4);

  return (
    <>
      <Hero
        headline={heroContent.headline}
        subtext={heroContent.subtext}
        primaryCta={heroContent.cta.primary}
        secondaryCta={heroContent.cta.secondary}
      />

      <SectionWrapper>
        <SectionHeading
          heading={introContent.heading}
          subtext={introContent.description}
        />
        <div className="relative">
          <Image 
            src={userInterfaceImage}
            alt="Picture of the user interface"
          />
        </div>
        {/* <div className="mt-4 flex justify-center items-center">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
          >
            Available for iPad or MacOS.
            <ArrowRight className="size-4" />
          </Link>
        </div> */}
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading heading="What makes it unique" />
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading heading={whyDifferent.heading} />
        <div className="grid gap-8 md:grid-cols-3">
          {whyDifferent.points.map((point, i) => (
            <FadeIn
              key={point.title}
              index={i}
              className="text-center md:text-left"
            >
              <h3 className="mb-2 text-lg font-semibold">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex items-end justify-between mb-12">
          <SectionHeading heading="Featured artwork" className="mb-0 text-left" align="left" />
          <Link
            href="/gallery"
            className="hidden items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            View gallery
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {showcaseItems.map((item, i) => (
            <FadeIn key={item.id} index={i}>
              <ArtworkSample
                source={item.source}
                title={item.title}
                className="aspect-square"
              />
            </FadeIn>
          ))}
        </div>
        <div className="mt-6 text-center md:hidden">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View full gallery
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </SectionWrapper>

      <CTASection
        heading="Ready to create something beautiful?"
        description="Start with a simple shape and discover what harmonic motion can do."
        primaryCta={{ label: "Get the app", href: "/download" }}
        secondaryCta={{ label: "See the gallery", href: "/gallery" }}
      />
    </>
  );
}
