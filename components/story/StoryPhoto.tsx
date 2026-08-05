"use client";

import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

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
  const photoRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-18, 18]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.025, 1, 1.025]
  );

  return (
    <div
      ref={photoRef}
      className="
        relative

        flex
        min-h-[320px]
        w-full

        items-center
        justify-center

        overflow-hidden

        rounded-[24px]
        sm:rounded-[30px]
        md:rounded-[36px]

        border
        border-white/15

        bg-black/10

        shadow-[0_35px_100px_rgba(39,16,88,.28)]

        ring-1
        ring-inset
        ring-white/10
      "
    >
      <motion.div
        style={{
          y,
          scale,
        }}
        className="
          relative

          flex
          w-full

          items-center
          justify-center
        "
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={2000}
          priority={priority}
          sizes="
            (max-width: 640px) 94vw,
            (max-width: 1024px) 82vw,
            820px
          "
          className="
            block

            h-auto
            max-h-[72vh]
            w-auto
            max-w-full

            object-contain
          "
        />
      </motion.div>

      {/* Sombra inferior para facilitar la lectura */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-10

          bg-gradient-to-t

          from-black/30
          via-transparent
          to-white/5
        "
      />

      {/* Halo central suave */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-10

          bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent_68%)]
        "
      />

      {/* Borde interior */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-20

          rounded-[24px]
          sm:rounded-[30px]
          md:rounded-[36px]

          border
          border-white/10
        "
      />
    </div>
  );
}