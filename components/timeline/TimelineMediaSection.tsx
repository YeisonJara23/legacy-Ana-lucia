"use client";

import { motion } from "framer-motion";

import { NextChapterTeaser } from "./NextChapterTeaser";
import { TimelineMedia } from "./TimelineMedia";
import { ChapterAtmosphere } from "./ChapterAtmosphere";
import { StoryEnding } from "@/components/story/StoryEnding";

import type {
  TimelineMediaSectionData,
} from "./types";

type NextSection = Pick<
  TimelineMediaSectionData,
  "id" | "chapter" | "title"
>;

type TimelineMediaSectionProps = {
  section: TimelineMediaSectionData;
  nextSection?: NextSection;
};

export function TimelineMediaSection({
  section,
  nextSection,
}: TimelineMediaSectionProps) {
  const chapterNumber =
    section.chapter.match(/\d+/)?.[0] ?? "";

  return (
    <section
      id={section.id}
      className="
        relative
        mx-auto
        w-full
        overflow-hidden
        bg-transparent
      "
    >
      <ChapterAtmosphere
  theme={section.theme}
/>
      {/* =====================================================
          APERTURA DEL CAPÍTULO
      ===================================================== */}

      <div
        className="
          relative

          flex

          min-h-[54svh]

          w-full

          items-center
          justify-center

          px-5
          py-16

          sm:min-h-[58svh]
          sm:px-8
          sm:py-20

          md:min-h-[64svh]
          md:py-24
        "
      >
        {/* Número gigante */}

        {chapterNumber && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              left-1/2
              top-1/2

              -z-10

              -translate-x-1/2
              -translate-y-1/2

              select-none

              font-display

              text-[9rem]
              font-light
              leading-none

              text-white/[0.045]

              sm:text-[13rem]
              md:text-[18rem]
              lg:text-[22rem]
            "
          >
            {chapterNumber}
          </motion.div>
        )}

        {/* Luz ambiental */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            left-1/2
            top-1/2

            -z-20

            h-[320px]
            w-[320px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-pink-300/[0.08]

            blur-[110px]

            sm:h-[420px]
            sm:w-[420px]

            md:h-[520px]
            md:w-[520px]
            md:blur-[150px]
          "
        />

        {/* Línea superior */}

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-0

            h-24
            w-px

            -translate-x-1/2

            bg-gradient-to-b

            from-transparent
            via-white/15
            to-pink-100/50

            sm:h-28
            md:h-32
          "
        />

        {/* Contenido */}

        <div
          className="
            relative
            z-10

            mx-auto

            w-full
            max-w-5xl

            text-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mx-auto

              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-full

              border
              border-pink-100/20

              bg-white/[0.04]

              text-2xl
              text-pink-200

              shadow-[0_0_35px_rgba(255,210,245,.15)]

              backdrop-blur-sm

              sm:h-14
              sm:w-14
              sm:text-3xl
            "
          >
            ✦
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
              delay: 0.08,
            }}
            className="
              mt-8

              text-[10px]
              font-medium

              uppercase

              tracking-[0.42em]

              text-pink-100/65

              sm:text-xs
            "
          >
            {section.chapter}
          </motion.p>

          <motion.h2
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
            }}
            transition={{
              duration: 0.8,
              delay: 0.14,
            }}
            className="
              mx-auto

              mt-5

              max-w-4xl

              font-display

              text-4xl
              font-light

              leading-[1.02]

              text-white

              drop-shadow-[0_0_30px_rgba(255,215,245,.2)]

              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
            "
          >
            {section.title}
          </motion.h2>

          {section.date && (
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.2,
              }}
              className="
                mt-7

                text-[10px]

                uppercase

                tracking-[0.3em]

                text-white/45

                sm:text-xs
                md:text-sm
              "
            >
              {section.date}
            </motion.p>
          )}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.24,
            }}
            className="
              mx-auto

              mt-9

              h-px
              w-28

              origin-center

              bg-gradient-to-r

              from-transparent
              via-pink-100/70
              to-transparent

              sm:w-40
            "
          />

          {section.subtitle && (
            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.75,
                delay: 0.28,
              }}
              className="
                mx-auto

                mt-9

                max-w-3xl

                font-display

                text-xl
                font-light
                italic

                leading-relaxed

                text-[#FFE9FA]

                sm:text-2xl
                md:text-3xl
              "
            >
              {section.subtitle}
            </motion.p>
          )}

          {section.intro && (
            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.75,
                delay: 0.34,
              }}
              className="
                mx-auto

                mt-8

                max-w-2xl

                text-sm
                font-light

                leading-7

                text-white/65

                sm:text-base
                sm:leading-8

                md:text-lg
                md:leading-9
              "
            >
              {section.intro}
            </motion.p>
          )}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.42,
            }}
            className="
              mt-8

              flex
              flex-col
              items-center

              sm:mt-10
            "
          >
            <span
              className="
                text-[9px]

                uppercase

                tracking-[0.32em]

                text-white/35

                sm:text-[10px]
              "
            >
              Continúa la historia
            </span>

            <div
              aria-hidden="true"
              className="
                mt-5

                h-8
                w-px

                bg-gradient-to-b

                from-pink-100/50
                to-transparent

                sm:h-10
              "
            />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          CONTENIDO DEL CAPÍTULO
      ===================================================== */}

      <div className="relative z-10">
        <TimelineMedia
          items={section.items}
        />
      </div>

      {/* =====================================================
          CIERRE DEL CAPÍTULO
      ===================================================== */}

      {section.outro && (
        <motion.div
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative

            mx-auto

            mt-28

            max-w-4xl

            px-6

            text-center

            sm:mt-36

            md:mt-44
          "
        >
          <div
            aria-hidden="true"
            className="
              mx-auto

              h-16
              w-px

              bg-gradient-to-b

              from-transparent
              via-pink-100/30
              to-pink-100/60
            "
          />

          <div
            aria-hidden="true"
            className="
              mt-4

              text-2xl

              text-pink-200/75

              drop-shadow-[0_0_18px_rgba(255,210,245,.45)]
            "
          >
            ✦
          </div>

          <p
            className="
              mx-auto

              mt-8

              max-w-3xl

              font-display

              text-2xl
              font-light
              italic

              leading-[1.5]

              text-[#FFF2FB]

              sm:text-3xl

              md:text-4xl
              md:leading-[1.45]
            "
          >
            {section.outro}
          </p>

          <p
            className="
              mt-8

              text-[9px]

              uppercase

              tracking-[0.35em]

              text-white/30

              sm:text-[10px]
            "
          >
            Fin de {section.chapter}
          </p>

          <div
            aria-hidden="true"
            className="
              mx-auto

              mt-8

              h-16
              w-px

              bg-gradient-to-b

              from-pink-100/45
              to-transparent
            "
          />
        </motion.div>
      )}

      {/* =====================================================
          SIGUIENTE CAPÍTULO
      ===================================================== */}

      {nextSection && (
        <NextChapterTeaser
          id={nextSection.id}
          chapter={nextSection.chapter}
          title={nextSection.title}
        />
      )}

      {/* =====================================================
          FINAL DE LA HISTORIA ACTUAL
      ===================================================== */}

      {!nextSection && (
  <StoryEnding />
)}
    </section>
  );
}