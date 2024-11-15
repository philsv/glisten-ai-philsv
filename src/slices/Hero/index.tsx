import Bounded from "@/app/components/Bounded";
import { type Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
    <AnimatedContent slice={slice} />
    </Bounded>
  );
};

export default Hero;
