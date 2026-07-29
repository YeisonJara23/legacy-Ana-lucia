"use client";

import { motion } from "framer-motion";

type ChapterHeaderProps = {
  chapter: string;
  title: string;
  date?: string;
};

export function ChapterHeader({
  chapter,
  title,
  date,
}: ChapterHeaderProps) {
  return (
    <motion.header
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
      }}
      transition={{
        duration: 1,
      }}
      className="mb-32 text-center"
    >
      {/* Número del capítulo */}

      <p
        className="
          mb-8

          font-[family:var(--font-display)]

          text-4xl

          md:text-5xl

          tracking-[0.45em]

          uppercase

          text-[#FFD8F3]

          drop-shadow-[0_0_25px_rgba(255,210,240,.55)]
        "
      >
        ✦ {chapter} ✦
      </p>

      {/* Título */}

      <h2
        className="
          mx-auto

          max-w-5xl

          font-[family:var(--font-display)]

          text-6xl

          md:text-8xl

          lg:text-9xl

          font-light

          leading-none

          text-[#FFFDFE]

          drop-shadow-[0_0_40px_rgba(255,230,245,.65)]
        "
      >
        {title}
      </h2>

      {date && (
        <p
          className="
            mt-10

            text-xl

            tracking-[0.30em]

            uppercase

            text-[#FFEAF9]
          "
        >
          {date}
        </p>
      )}
    </motion.header>
  );
}