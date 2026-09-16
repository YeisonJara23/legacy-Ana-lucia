"use client";

import { motion } from "framer-motion";

type ScrollIndicatorProps = {
  onClick?: () => void;
};

export function ScrollIndicator({
  onClick,
}: ScrollIndicatorProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label="Continuar hacia la historia"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1.5,
        duration: 0.8,
      }}
      className="
        group

        flex
        flex-col

        items-center
        justify-center

        text-pink-100/55

        transition-colors
        duration-300

        hover:text-pink-100/85
      "
    >
      <span
        className="
          mb-2

          text-[8px]
          font-medium

          uppercase

          tracking-[0.32em]

          sm:text-[9px]
        "
      >
        Descubre
      </span>

      <motion.div
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          flex
          flex-col
          items-center
        "
      >
        <div
          className="
            h-5
            w-px

            bg-gradient-to-b

            from-pink-100/55
            to-pink-100/15

            sm:h-6
          "
        />

        <div
          className="
            mt-1.5

            h-1.5
            w-1.5

            rounded-full

            bg-pink-100/70

            shadow-[0_0_12px_rgba(255,210,235,.55)]

            transition-all
            duration-300

            group-hover:bg-pink-100
            group-hover:shadow-[0_0_18px_rgba(255,210,235,.75)]
          "
        />
      </motion.div>
    </motion.button>
  );
}