"use client";

import { motion } from "framer-motion";

type Props = {
  chapter: string;
  year: string;
  subtitle: string;
};

export function ChapterIntro({
  chapter,
  year,
  subtitle,
}: Props) {
  return (
    <section
      className="
        relative

        flex

        min-h-[70vh]

        items-center
        justify-center

        px-6
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: .5,
        }}
        transition={{
          duration: 1.3,
        }}
        className="
          mx-auto

          max-w-4xl

          text-center
        "
      >
        <p
          className="
            mb-8

            text-sm

            uppercase

            tracking-[0.45em]

            text-pink-200/70
          "
        >
          {chapter}
        </p>

        <h2
          className="
            font-display

            text-6xl
            md:text-8xl

            font-light

            text-white

            drop-shadow-[0_0_35px_rgba(255,210,245,.45)]
          "
        >
          {year}
        </h2>

        <div
          className="
            mx-auto

            my-10

            h-px

            w-40

            bg-gradient-to-r

            from-transparent

            via-pink-200/50

            to-transparent
          "
        />

        <p
          className="
            text-xl
            md:text-3xl

            italic

            font-light

            leading-relaxed

            text-pink-50
          "
        >
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}