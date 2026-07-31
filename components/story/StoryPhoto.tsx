"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function StoryPhoto({
  src,
  alt,
  priority = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-70, 70]);

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.12, 1.02, 1.12]
  );

  return (
    <div
      ref={ref}
      className="
        relative

        overflow-hidden

        rounded-[40px]

        border
        border-white/15

        bg-white/5

        shadow-[0_80px_200px_rgba(0,0,0,.45)]
      "
    >
      {/* Luz */}

      <div
        className="
          absolute
          inset-0

          z-20

          bg-gradient-to-t

          from-black/20

          via-transparent

          to-white/10
        "
      />

      <motion.div
        style={{
          y,
          scale,
        }}
      >
        <div
  className="
    pointer-events-none

    absolute
    inset-0

    z-20

    bg-gradient-to-t

    from-black/30
    via-transparent
    to-white/10
  "
/>

<div
  className="
    pointer-events-none

    absolute

    inset-0

    z-30

    bg-[radial-gradient(circle_at_center,rgba(255,255,255,.15),transparent_70%)]
  "
/>
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={1600}
          priority={priority}
          className="
            block

            h-auto
            w-full
          "
        />
      </motion.div>
    </div>
  );
}