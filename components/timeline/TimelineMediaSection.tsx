"use client";

import { motion } from "framer-motion";

import { TimelineDivider } from "./TimelineDivider";
import { TimelineMedia } from "./TimelineMedia";

import type {
  TimelineMediaSection as TimelineMediaSectionType,
} from "@/content/timeline/2026/ana-lucia-media";

type TimelineMediaSectionProps = {
  section: TimelineMediaSectionType;
};

export function TimelineMediaSection({
  section,
}: TimelineMediaSectionProps) {
  return (
    <section
      id={section.id}
      className="
        relative

        mx-auto
        w-full

        bg-transparent

        py-20
        sm:py-24
        md:py-32
      "
    >
      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-28

          -z-10

          h-64
          w-64

          -translate-x-1/2

          rounded-full

          bg-pink-300/10

          blur-[130px]
        "
      />

      <motion.header
        initial={{
          opacity: 0,
          y: 45,
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
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
          relative
          z-10

          mx-auto
          max-w-4xl

          px-5

          text-center
        "
      >
        <span
          className="
            text-xs
            uppercase
            tracking-[0.32em]
            text-pink-100/75

            sm:text-sm
          "
        >
          Recuerdos de 2026
        </span>

        <h2
          className="
            mt-6

            font-display

            text-4xl
            font-light
            leading-tight

            text-white

            drop-shadow-[0_0_30px_rgba(255,210,245,.3)]

            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          {section.title}
        </h2>

        <TimelineDivider />
      </motion.header>

      <TimelineMedia items={section.items} />
    </section>
  );
}