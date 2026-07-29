"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type PhotoFrameProps = {
  children: ReactNode;
};

export function PhotoFrame({
  children,
}: PhotoFrameProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.02]
        shadow-2xl
      "
    >
      {children}
    </motion.div>
  );
}