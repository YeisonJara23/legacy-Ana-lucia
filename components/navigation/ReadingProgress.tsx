"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  const clipPath = useTransform(
    progress,
    (value) => `inset(${100 - value * 100}% 0 0 0)`
  );

  return (
    <>
      {/* Línea de fondo */}
      <div
        className="
          fixed
          top-0
          right-6

          h-screen
          w-[3px]

          rounded-full

          bg-white/10

          z-[999]
        "
      />

      {/* Barra */}
      <motion.div
        style={{ clipPath }}
        className="
          fixed
          top-0
          right-6

          h-screen
          w-[3px]

          rounded-full

          bg-gradient-to-b
          from-pink-300
          via-fuchsia-400
          to-violet-500

          shadow-[0_0_18px_rgba(255,180,240,.7)]

          z-[1000]
        "
      />
    </>
  );
}