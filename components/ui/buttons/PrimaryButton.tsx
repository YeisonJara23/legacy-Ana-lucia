"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type PrimaryButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export function PrimaryButton({
  children,
  onClick,
}: PrimaryButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="
        mt-10
        rounded-full
        border
        border-white/20
        bg-white/5
        px-8
        py-4
        text-sm
        font-medium
        tracking-wide
        text-white
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-white/40
        hover:bg-white/10
      "
    >
      {children}
    </motion.button>
  );
}