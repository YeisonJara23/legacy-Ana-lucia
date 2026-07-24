"use client";

import { motion } from "framer-motion";

export function Glow() {
  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-1/2
        h-[450px]
        w-[450px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-yellow-300/5
        blur-[140px]
      "
      animate={{
        scale: [1, 1.12, 1],
        opacity: [0.5, 0.9, 0.5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}