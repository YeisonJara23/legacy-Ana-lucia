"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import { StoryPhoto } from "./StoryPhoto";
import { StoryCaption } from "./StoryCaption";

type Props = {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
};

export function StorySection({
  src,
  alt,
  caption,
  priority = false,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "center center"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    [0.45, 1, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.97, 1, 1]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{
        opacity,
        scale,
      }}
      className="
        relative

        mx-auto

        my-20
        sm:my-24
        md:my-32

        w-full
        max-w-[820px]

        bg-transparent

        px-3
        sm:px-5
        md:px-6
      "
    >
      <div className="relative">
        <StoryPhoto
          src={src}
          alt={alt}
          priority={priority}
        />

        {caption.trim() && (
          <StoryCaption>
            {caption}
          </StoryCaption>
        )}
      </div>
    </motion.section>
  );
}