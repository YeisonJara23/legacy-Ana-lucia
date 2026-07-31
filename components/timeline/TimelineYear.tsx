"use client";

import { motion } from "framer-motion";

type Props = {
  year: string;
};

export function TimelineYear({
  year,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        mb-28

        flex
        justify-center
      "
    >
      <div
        className="
          rounded-full

          border
          border-pink-200/20

          bg-white/5

          px-10
          py-4

          backdrop-blur-xl

          text-4xl
          md:text-5xl

          font-light

          tracking-[0.45em]

          text-pink-100

          shadow-[0_0_50px_rgba(255,190,235,.15)]
        "
      >
        {year}
      </div>
    </motion.div>
  );
}