"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function ParallaxPhoto({
  src,
  alt,
  priority = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Movimiento vertical muy suave
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  // Zoom muy sutil
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.08]);

  return (
    <div
      ref={ref}
      className="
relative

overflow-hidden

rounded-[32px]
md:rounded-[40px]

border
border-white/20

bg-white/5

backdrop-blur-xl

shadow-[0_60px_140px_rgba(0,0,0,.30)]
md:shadow-[0_80px_180px_rgba(0,0,0,.45)]

ring-1
ring-white/10
"
    >
      {/* Luz superior */}

      <div
        className="
          pointer-events-none

          absolute

          inset-0

          z-20

          bg-gradient-to-t

          from-transparent

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

    rounded-[32px]
    md:rounded-[40px]

    border

    border-white/10
  "
/>
        <Image
          src={src}
          alt={alt}
          width={2200}
          height={1400}
          priority={priority}
          className="block h-auto w-full"
        />
      </motion.div>
    </div>
  );
}