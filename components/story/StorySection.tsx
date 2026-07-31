"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
  priority,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0.4, 1, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0.96, 1, 1]
  );

  return (
    <motion.section
      ref={ref}
      style={{
        opacity,
        scale,
      }}
      className="
        relative

        mx-auto

        my-40

        max-w-7xl

        px-6
      "
    >
      <div className="relative">

        <StoryPhoto
          src={src}
          alt={alt}
          priority={priority}
        />

        <StoryCaption>
          {caption}
        </StoryCaption>

      </div>
    </motion.section>
  );
}