"use client";

import { motion } from "framer-motion";

export function Aurora() {
  return (
    <>
      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-50, 40, -50],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          fixed
          top-[-20%]
          left-[-10%]

          -z-50

          h-[900px]
          w-[900px]

          rounded-full

          bg-pink-400/20

          blur-[220px]
        "
      />

      <motion.div
        animate={{
          x: [100, -50, 100],
          y: [80, -20, 80],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          fixed
          bottom-[-20%]
          right-[-15%]

          -z-50

          h-[1000px]
          w-[1000px]

          rounded-full

          bg-violet-500/20

          blur-[260px]
        "
      />
    </>
  );
}