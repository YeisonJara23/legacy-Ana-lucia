"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function StoryCaption({
  children,
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
        duration: 0.9,
      }}
      className="
        absolute

        bottom-5
        left-1/2

        z-30

        w-[92%]
        max-w-3xl

        -translate-x-1/2

        rounded-[30px]

        border
        border-white/15

        bg-black/20

        backdrop-blur-3xl

        p-6
        md:p-10

        shadow-[0_40px_120px_rgba(0,0,0,.45)]
      "
    >
      <p
        className="
          text-center

          text-base
          md:text-xl
          lg:text-2xl

          font-light

          italic

          leading-relaxed

          tracking-wide

          text-white
        "
      >
        {children}
      </p>
    </motion.div>
  );
}