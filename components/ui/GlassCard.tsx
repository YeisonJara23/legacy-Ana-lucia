"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        duration: 0.35,
      }}
      className={`
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-white/10

        bg-white/[0.05]

        backdrop-blur-2xl

        shadow-[0_30px_90px_rgba(0,0,0,.20)]

        ${className}
      `}
    >
      {/* Glow superior */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-br

          from-pink-200/10

          via-transparent

          to-violet-200/10
        "
      />

      {/* Brillo */}

      <div
        className="
          pointer-events-none

          absolute
          -top-40
          left-1/2

          h-80
          w-80

          -translate-x-1/2

          rounded-full

          bg-white/10

          blur-3xl
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}