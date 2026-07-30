"use client";

import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function PrimaryButton({
  children,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center

        overflow-hidden

        rounded-full

        border
        border-pink-200/40

        bg-white/10

        backdrop-blur-xl

        px-8
        py-4

        sm:px-10
        sm:py-5

        font-medium
        tracking-[0.15em]

        text-white

        shadow-[0_8px_35px_rgba(255,180,230,.18)]

        transition-all
        duration-500

        hover:border-pink-200/80
        hover:bg-white/20
        hover:shadow-[0_0_60px_rgba(255,180,230,.45)]

        focus:outline-none
        focus:ring-2
        focus:ring-pink-300/40

        ${className}
      `}
      {...props}
    >
      {/* Fondo degradado */}
      <span
        className="
          absolute
          inset-0

          bg-gradient-to-r
          from-pink-300/10
          via-violet-300/10
          to-pink-300/10

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Reflejo animado */}
      <span
        className="
          absolute
          inset-0

          overflow-hidden

          rounded-full
        "
      >
        <span
          className="
            absolute

            -left-1/2
            top-0

            h-full
            w-1/3

            rotate-12

            bg-gradient-to-r

            from-transparent
            via-white/30
            to-transparent

            transition-transform
            duration-1000

            group-hover:translate-x-[350%]
          "
        />
      </span>

      {/* Glow inferior */}
      <span
        className="
          absolute
          -bottom-12

          h-24
          w-24

          rounded-full

          bg-pink-300/20

          blur-3xl

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Texto */}
      <span
        className="
          relative
          z-10

          flex
          items-center
          gap-2

          text-sm
          sm:text-base
          md:text-lg

          font-semibold
        "
      >
        {children}
      </span>
    </motion.button>
  );
}