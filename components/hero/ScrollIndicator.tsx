"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 2,
        duration: 1,
      }}
      className="
        mt-16

        flex
        flex-col
        items-center
        justify-center

        text-pink-100/80
      "
    >
      <span
        className="
          mb-4

          text-xs

          tracking-[0.45em]

          uppercase
        "
      >
        Descubre
      </span>

      <motion.div
        animate={{
          y: [0, 14, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          flex
          flex-col
          items-center
        "
      >
        <div className="h-10 w-px bg-pink-200/60" />

        <div
          className="
            mt-2

            h-3
            w-3

            rounded-full

            bg-pink-200

            shadow-[0_0_18px_rgba(255,210,235,.8)]
          "
        />
      </motion.div>
    </motion.div>
  );
}