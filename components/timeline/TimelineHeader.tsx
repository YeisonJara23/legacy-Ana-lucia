"use client";

import { motion } from "framer-motion";

import {
  TimelineThemeName,
  timelineThemes,
} from "./TimelineTheme";

type Props = {
  title: string;
  theme?: TimelineThemeName;
};

export function TimelineHeader({
  title,
  theme = "default",
}: Props) {
  const colors = timelineThemes[theme];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="text-center"
    >
      {/* Estrella */}

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.6, 1, 0.6],
          rotate: [0, 8, 0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          mb-8

          text-5xl
          md:text-6xl

          ${colors.accent}

          drop-shadow-[0_0_25px_rgba(255,220,245,.9)]
        `}
      >
        ✦
      </motion.div>

      {/* Título */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.15,
          duration: 0.8,
        }}
        className={`
          font-display

          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl

          font-light

          leading-[0.95]

          tracking-[0.10em]

          ${colors.title}

          ${colors.glow}
        `}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}