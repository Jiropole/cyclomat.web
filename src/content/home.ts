import { FeatureCardData } from "@/lib/types";
import { appStoreUrl } from "@/content/links";

export const heroContent = {
  headline: "Geometric art that moves",
  subtext:
    "Spin a few simple arms and watch intricate patterns bloom. Layer them, color them, set them in motion, then export seamless loops, images or print-ready vectors.",
  cta: {
    primary: { label: "Get it on the App Store", href: appStoreUrl },
    secondary: { label: "See what's possible", href: "/gallery" },
  },
};

export const introContent = {
  heading: "Drawing with rotation",
  description:
    "Cyclomat is a studio for making geometric art from motion. Every shape comes from arms that turn at different speeds and reach different distances. Change a number and the whole pattern changes, so you explore by feel, not by formula.",
};

export const features: FeatureCardData[] = [
  {
    title: "Start with rotation",
    description:
      "Choose how fast each arm turns and how far it reaches. Flowers, weaves, lattices and spirals appear from simple relationships.",
    icon: "waves",
  },
  {
    title: "Build in layers",
    description:
      "Stack shapes with their own colors, opacity, blur and blend modes. Add bloom and trails for depth and texture.",
    icon: "layers",
  },
  {
    title: "Set it in motion",
    description:
      "Animate any piece and export it as a seamless loop of video that you can post anywhere.",
    icon: "sparkles",
  },
];

export const whyDifferent = {
  heading: "Why Cyclomat",
  points: [
    {
      title: "Math underneath, play on top",
      description:
        "The patterns come from real harmonic relationships, so they feel ordered and alive. You never have to type an equation to enjoy them.",
    },
    {
      title: "Made to be shared",
      description:
        "Export high resolution images, looping video, or resolution-independent PDF for print.",
    },
    {
      title: "Nothing in the way",
      description:
        "No ads and no account. Just open it and make something.",
    },
  ],
};
