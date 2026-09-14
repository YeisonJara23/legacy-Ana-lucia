"use client";

import { motion } from "framer-motion";

type NextChapterTeaserProps = {
  id: string;
  chapter: string;
  title: string;
};

export function NextChapterTeaser({
  id,
  chapter,
  title,
}: NextChapterTeaserProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        relative

        mx-auto

        mb-24
        mt-6

        w-full
        max-w-3xl

        px-4

        sm:mb-28
        sm:px-6

        md:mb-36
      "
    >
      <a
        href={`#${id}`}
        className="
          group

          relative

          block

          overflow-hidden

          rounded-[26px]

          border
          border-white/10

          bg-white/[0.045]

          px-5
          py-7

          text-center

          shadow-[0_24px_70px_rgba(37,15,78,.16)]

          backdrop-blur-xl

          transition-all
          duration-500

          hover:-translate-y-1

          hover:border-pink-100/25
          hover:bg-white/[0.065]

          hover:shadow-[0_28px_80px_rgba(255,190,235,.10)]

          sm:rounded-[30px]
          sm:px-8
          sm:py-9

          md:px-12
          md:py-10
        "
      >
        {/* Glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            left-1/2
            top-full

            h-40
            w-80

            -translate-x-1/2

            rounded-full

            bg-pink-200/[0.06]

            blur-[70px]

            transition-all
            duration-700

            group-hover:top-[75%]
            group-hover:bg-pink-200/[0.10]
          "
        />

        {/* Símbolo */}

        <div
          aria-hidden="true"
          className="
            relative
            z-10

            text-xl

            text-pink-200/70

            transition-all
            duration-500

            group-hover:scale-110
            group-hover:text-pink-100

            sm:text-2xl
          "
        >
          ✦
        </div>

        {/* Texto pequeño */}

        <p
          className="
            relative
            z-10

            mt-5

            text-[9px]
            font-medium

            uppercase

            tracking-[0.35em]

            text-pink-100/50

            sm:text-[10px]
          "
        >
          La historia continúa
        </p>

        {/* Capítulo */}

        <p
          className="
            relative
            z-10

            mt-6

            text-[10px]

            uppercase

            tracking-[0.32em]

            text-white/40

            sm:text-xs
          "
        >
          {chapter}
        </p>

        {/* Título */}

        <h3
          className="
            relative
            z-10

            mx-auto

            mt-3

            max-w-2xl

            font-display

            text-3xl
            font-light

            leading-tight

            text-white

            transition-transform
            duration-500

            group-hover:-translate-y-[2px]

            sm:text-4xl
            md:text-5xl
          "
        >
          {title}
        </h3>

        {/* Línea */}

        <div
          aria-hidden="true"
          className="
            relative
            z-10

            mx-auto

            mt-7

            h-px
            w-20

            bg-gradient-to-r

            from-transparent
            via-pink-100/50
            to-transparent

            transition-all
            duration-500

            group-hover:w-28
            group-hover:via-pink-100/80
          "
        />

        {/* Acción */}

        <div
          className="
            relative
            z-10

            mt-6

            flex
            items-center
            justify-center

            gap-3

            text-[10px]
            font-medium

            uppercase

            tracking-[0.28em]

            text-white/55

            transition-colors
            duration-300

            group-hover:text-white/90
          "
        >
          <span>
            Continuar
          </span>

          <span
            aria-hidden="true"
            className="
              text-base

              transition-transform
              duration-300

              group-hover:translate-x-2
            "
          >
            →
          </span>
        </div>
      </a>
    </motion.div>
  );
}