"use client";

import { motion } from "framer-motion";

export function ShootingStars() {
  return (
    <motion.div
      className="
        absolute
        h-[2px]
        w-28
        rounded-full
        bg-gradient-to-r
        from-white
        to-transparent
      "
      initial={{
        x: -300,
        y: -150,
        opacity: 0,
        rotate: 25,
      }}
      animate={{
        x: 1600,
        y: 500,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2,
        delay: 6,
        repeat: Infinity,
        repeatDelay: 20,
        ease: "easeOut",
      }}
    />
  );
}