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
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.9,
      }}
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
        shadow-[0_20px_80px_rgba(0,0,0,.45)]
      "
    >
      {children}
    </motion.div>
  );
}