"use client";

import { motion } from "framer-motion";

type StoryBridgeProps = {
  eyebrow?: string;
  text: string;
};

export function StoryBridge({
  eyebrow,
  text,
}: StoryBridgeProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.45,
      }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="
        relative
        mx-auto

        my-24
        sm:my-28
        md:my-36

        max-w-3xl

        px-6

        text-center
      "
    >
      {/* Luz ambiental muy sutil */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          -z-10

          h-44
          w-72

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-pink-200/[0.06]

          blur-[70px]
        "
      />

      {/* Estrella */}
      <div
        aria-hidden="true"
        className="
          text-2xl

          text-pink-200/80

          drop-shadow-[0_0_18px_rgba(255,210,245,.55)]
        "
      >
        ✦
      </div>

      {/* Texto pequeño superior */}
      {eyebrow && (
        <p
          className="
            mt-6

            text-[10px]
            font-medium

            uppercase

            tracking-[0.38em]

            text-pink-100/55

            sm:text-xs
          "
        >
          {eyebrow}
        </p>
      )}

      {/* Línea */}
      <div
        aria-hidden="true"
        className="
          mx-auto

          mt-7

          h-px
          w-16

          bg-gradient-to-r

          from-transparent
          via-pink-100/50
          to-transparent
        "
      />

      {/* Frase */}
      <p
        className="
          mx-auto

          mt-8

          max-w-2xl

          font-display

          text-2xl
          font-light
          italic

          leading-[1.45]

          text-[#FFF3FC]

          sm:text-3xl
          md:text-4xl
          md:leading-[1.4]
        "
      >
        {text}
      </p>

      {/* Puntos decorativos */}
      <div
        aria-hidden="true"
        className="
          mt-9

          flex
          items-center
          justify-center

          gap-3

          text-[8px]

          text-white/35
        "
      >
        <span>•</span>
        <span className="text-pink-100/60">
          ✦
        </span>
        <span>•</span>
      </div>
    </motion.section>
  );
}