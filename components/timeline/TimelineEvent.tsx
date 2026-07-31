"use client";

import { motion } from "framer-motion";

import { TimelineDivider } from "./TimelineDivider";
import { TimelineGallery } from "./TimelineGallery";
import { TimelineHeader } from "./TimelineHeader";
import { TimelineMeta } from "./TimelineMeta";
import { TimelineQuote } from "./TimelineQuote";

import type { TimelineThemeName } from "./TimelineTheme";

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

type Props = {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  photos?: Photo[];
  quote?: string;
  theme?: TimelineThemeName;
};

export function TimelineEvent({
  title,
  date,
  time,
  location,
  description,
  photos = [],
  quote,
  theme = "default",
}: Props) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 120,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="
        relative

        mx-auto

        mb-48

        max-w-7xl

        px-6
        md:px-10
        lg:px-16
      "
    >
      {/* Glow decorativo */}

      <div
        className="
          absolute

          left-1/2
          top-40

          -translate-x-1/2

          h-80
          w-80

          rounded-full

          bg-pink-200/10

          blur-[120px]

          pointer-events-none
        "
      />

      {/* Cabecera */}

      <TimelineHeader
        title={title}
        theme={theme}
      />

      <TimelineDivider />

      {/* Fecha */}

      <TimelineMeta
        date={date}
        time={time}
        location={location}
      />

      <TimelineDivider />

      {/* Historia */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.25,
          duration: 0.9,
        }}
        className="
          mx-auto

          mt-12

          max-w-3xl
        "
      >
        <p
          className="
            whitespace-pre-line

            text-center

            text-xl
            md:text-2xl

            font-light

            leading-[2.3]

            tracking-wide

            text-[#FFF8FD]
          "
        >
          {description}
        </p>
      </motion.div>

      {/* Fotografías */}

      {photos.length > 0 && (
        <>
          <TimelineDivider />

          <TimelineGallery
            photos={photos}
          />
        </>
      )}

      {/* Frase */}

      {quote && (
        <>
          <TimelineDivider />

          <TimelineQuote>
            {quote}
          </TimelineQuote>
        </>
      )}
    </motion.section>
  );
}