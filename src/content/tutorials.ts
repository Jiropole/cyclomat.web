import { Tutorial } from "@/lib/types";

export const learnIntro = {
  heading: "Learn Cyclomat",
  subtext:
    "Follow these guided tutorials to go from your first shape to complex layered compositions. Each lesson builds on the last.",
};

export const tutorials: Tutorial[] = [
  {
    id: "first-shape",
    title: "Your First Shape",
    subtitle: "Create a complete, symmetric form",
    difficulty: "beginner",
    outcome: "A clean, closed geometric shape using two arms",
    steps: [
      {
        step: 1,
        title: "Start with two arms",
        description:
          "Open Cyclomat and set the number of arms to 2. This is the simplest configuration that creates interesting shapes.",
        tip: "Two arms is where all great Cyclomat artwork begins.",
      },
      {
        step: 2,
        title: "Set arm frequencies",
        description:
          "The ratio between arm frequencies, along with their direction of spin, determines the shape family.",
        tip: "A general convention is to order from lower to higher frequencies, but the order does not actually matter. Try different combinations of numbers and observe how each ratio yields a characteristic visual symmetry.",
      },
      {
        step: 3,
        title: "Adjust the radius slowly",
        description:
          "Change the radius of the second arm. Watch how the aspects of the shape stretch and contract. Small changes create subtle variations within the same family.",
      },
      {
        step: 4,
        title: "Tune the line style",
        description:
          "Use line width, blur, color and opacity to bring character and presence to the shape.",
      },
    ],
  },
  {
    id: "complexity",
    title: "Increasing Complexity",
    subtitle: "Add depth with more arms and direction changes",
    difficulty: "beginner",
    outcome: "A more intricate pattern with three arms and varied spin",
    steps: [
      {
        step: 1,
        title: "Add a third arm",
        description:
          "Increase the arm count to 3. The third arm adds a new layer of detail to your shape, creating finer geometric structures.",
      },
      {
        step: 2,
        title: "Change spin direction",
        description:
          "Set one arm to spin in the opposite direction. Co-rotating arms creating outward arcs and inner detail. Counter-rotating arms create patterns that fold back on themselves in beautiful ways.",
        tip: "You will observe symmetry change when flipping spin direction. If this is bothersome try Gear Size mode, under Settings.",
      },
      {
        step: 3,
        title: "Experiment with phase",
        description:
          "Shift the phase of each arm. Phase controls the starting angle. It is the difference in phase between arms that creates novelty.",
        tip: "Phase is one of the most powerful parameters. Don't skip it.",
      },
      {
        step: 4,
        title: "Change the wheel shape",
        description:
          "Normally the pen is controlled by circular motion. Change the wheel shape by reducing curvature and selecting polygonal sides to influence the art in new ways.",
        tip: "Try selecting a number of sides that is a multiple of the shape symmetry.",
      },
    ],
  },
  {
    id: "layers-and-color",
    title: "Layers & Color",
    subtitle: "Build rich compositions with color and transparency",
    difficulty: "intermediate",
    outcome: "A multi-layered artwork with color and blending",
    steps: [
      {
        step: 1,
        title: "Duplicate your layer",
        description:
          "Take your current shape and duplicate the layer. Now you have two identical shapes stacked on top of each other, so make some interesting changes to the copy.",
        tip: "Try changing the line width or color, or alter the shape geometry. Or try a new frequency ratio that complements the original layer.",
      },
      {
        step: 2,
        title: "Change the palette",
        description:
          "Assign different colors to each layer. Choose colors that complement each other — warm and cool combinations work especially well. Or use the palette generation feature.",
        tip: "Try a vibrant color on top of a muted one for visual depth.",
      },
      {
        step: 3,
        title: "Apply blending modes",
        description:
          "Change the blend mode of the top layer. Screen, multiply, and overlay each create different interactions between the layers.",
        tip: "For light artwork, Multiply and Darken are useful to model ink pens. For dark artwork, Screen or Lighten have a similar effect.",
      },
      {
        step: 4,
        title: "Adjust opacity",
        description:
          "Lower the opacity of one or both layers to adjust the balance or \"mix\" between them. Semi-transparent layers create a sense of depth and luminosity.",
        tip: "Opacity can be applied at the Cycloid or Layout levels.",
      },
      {
        step: 5,
        title: "Adjust blur",
        description:
          "Try increasing blur to produce inner or other blur, control depth-of-detail, or achieve other effects with blending.",
        tip: "Blur can be applied at the Cycloid or Layout levels. Blur is a heavy operation, so go easy!",
      },
    ],
  },
  {
    id: "keyframes",
    title: "Keyframes",
    subtitle: "Create colorful shape variations with smoothly interpolating parameters.",
    difficulty: "advanced",
    outcome: "A mathematically precise shape series that transitions smoothly between defined states",
    steps: [
      {
        step: 1,
        title: "Define your first keyframe",
        description:
          "On a new layer, set up a cycloid you like - it's settings <em>are</em> the first keyframe! Of course, what's the sound of one keyframe clapping?",
      },
      {
        step: 2,
        title: "Create a second keyframe",
        description:
          "Duplicate the first keyframe, and change the geometry, line width, color, blur, etc. Make the changes significant enough to see a clear transformation.",
        tip: "Changing radius and phase between keyframes creates dramatic morphing effects.",
      },
      {
        step: 3,
        title: "Add more keyframes",
        description:
          "Add additional keyframes to create fades or unusual sweeping effects. Each keyframe is a waypoint — the shape flows from one to the next.",
        tip: "Three to five keyframes is the sweet spot for mesmerizing shape effects.",
      },
      {
        step: 4,
        title: "Repeat for Layout",
        description:
          "All the above methods for keyframe design can also be used at the Layout level.",
        tip: "Often used to copy, scale and repeat the primary shapes. Produce gridded, circular, spiral, or mixed layouts.",
      },
    ],
  },
  {
    id: "motion-animation",
    title: "Motion & Animation",
    subtitle: "Bring your shapes to life with animated transitions",
    difficulty: "advanced",
    outcome: "An animation that smoothly evolves the artwork parameters in surprising and mesmerizing ways",
    steps: [
      {
        step: 1,
        title: "View with animation",
        description:
          "Your still artwork was already prepared to animate, so open the Animate section and switch to the animation view.",
      },
      {
        step: 2,
        title: "Adjust primary animation controls",
        description:
          "Change the duration of the loop and the entropy of the resulting animation.",
        tip: "Use the cycle intensity to increase or decrease the overall speed of the animation.",
      },
      {
        step: 3,
        title: "Preview the animation",
        description:
          "Play or scrub through the animation. Cyclomat shows exactly what will be rendered at any point.",
      },
      {
        step: 4,
        title: "Adjust advanced settings",
        description:
          "Control the degree of animation applied to various parameter groups, enable looping and more.",
        tip: "Try turning off all but one of the intensity controls at a time, and play the video in order to see its effect.",
      },
      {
        step: 5,
        title: "Export",
        description:
          "In order to see complex animations play smoothly, export to a video file.",
        tip: "Try exporting a small sample first to verify settings.",
      },
    ],
  },
];
