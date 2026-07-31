"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export function TimelineQuote({
  children,
}: Props) {
  return (
    <motion.blockquote
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
        duration: 0.9,
      }}
      className="
        mx-auto

        mt-16

        max-w-4xl

        text-center

        text-2xl
        md:text-3xl

        italic

        leading-relaxed

        text-pink-100

        drop-shadow-[0_0_25px_rgba(255,220,245,.25)]
      "
    >
      “{children}”
    </motion.blockquote>
  );
}