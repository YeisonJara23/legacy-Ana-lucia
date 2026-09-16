"use client";

import { motion } from "framer-motion";

import { StoryEnding } from "@/components/story/StoryEnding";

import { ChapterAtmosphere } from "./ChapterAtmosphere";
import { NextChapterTeaser } from "./NextChapterTeaser";
import { TimelineAgeMilestone } from "./TimelineAgeMilestone";
import { TimelineMedia } from "./TimelineMedia";

import type {
  TimelineMediaSectionData,
} from "./types";

/* =========================================================
   TYPES
========================================================= */

type NextSection = Pick<
  TimelineMediaSectionData,
  "id" | "chapter" | "title"
>;

type TimelineMediaSectionProps = {
  section: TimelineMediaSectionData;
  nextSection?: NextSection;
};

/* =========================================================
   COMPONENT
========================================================= */

export function TimelineMediaSection({
  section,
  nextSection,
}: TimelineMediaSectionProps) {
  /*
   * Extraemos solamente el número:
   *
   * "Capítulo 01" → "01"
   */
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
      {/* =====================================================
          ATMÓSFERA DEL CAPÍTULO

          Cada capítulo utiliza su propia atmósfera:
          rose, lavender, violet, warm o dream.
      ===================================================== */}

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
        {/* =================================================
            NÚMERO GIGANTE DEL CAPÍTULO
        ================================================= */}

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

        {/* =================================================
            LÍNEA SUPERIOR

            Conecta visualmente un capítulo con el anterior.
        ================================================= */}

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-0

            h-20
            w-px

            -translate-x-1/2

            bg-gradient-to-b

            from-transparent
            via-white/15
            to-pink-100/45

            sm:h-24

            md:h-28
          "
        />

        {/* =================================================
            CONTENIDO DEL ENCABEZADO
        ================================================= */}

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
          {/* =============================================
              MOMENTO DE VIDA / EDAD

              Ejemplos:
              Nacimiento
              Primeros días
              1 mes
              2 meses
          ============================================= */}

          {section.ageLabel ? (
            <TimelineAgeMilestone
              age={section.ageLabel}
              date={section.date}
            />
          ) : (
            /*
             * Fallback:
             * si un capítulo futuro no tiene ageLabel,
             * conservamos la estrella clásica.
             */
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
          )}

          {/* =============================================
              CAPÍTULO
          ============================================= */}

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
            className={`
              text-[10px]
              font-medium

              uppercase

              tracking-[0.42em]

              text-pink-100/65

              sm:text-xs

              ${
                section.ageLabel
                  ? "mt-2"
                  : "mt-8"
              }
            `}
          >
            {section.chapter}
          </motion.p>

          {/* =============================================
              TÍTULO
          ============================================= */}

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

          {/* =============================================
              FECHA FALLBACK

              La fecha normalmente ya aparece dentro de
              TimelineAgeMilestone.

              Solo la mostramos aquí si ese capítulo no
              tiene ageLabel.
          ============================================= */}

          {!section.ageLabel &&
            section.date && (
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
                  mt-6

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

          {/* =============================================
              SEPARADOR
          ============================================= */}

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

              mt-8

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

          {/* =============================================
              SUBTÍTULO
          ============================================= */}

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

                mt-8

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

          {/* =============================================
              INTRODUCCIÓN
          ============================================= */}

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

                mt-7

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

          {/* =============================================
              CONTINÚA LA HISTORIA
          ============================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
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
                mt-4

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
          FOTOGRAFÍAS / VIDEOS / GRUPOS / PUENTES
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mt-4

          sm:mt-6

          md:mt-8
        "
      >
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative

            mx-auto

            mt-20

            max-w-4xl

            px-6

            text-center

            sm:mt-24

            md:mt-28
          "
        >
          {/* Línea */}

          <div
            aria-hidden="true"
            className="
              mx-auto

              h-12
              w-px

              bg-gradient-to-b

              from-transparent
              via-pink-100/30
              to-pink-100/60

              sm:h-14
            "
          />

          {/* Estrella */}

          <motion.div
            aria-hidden="true"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              mt-4

              text-2xl

              text-pink-200/75

              drop-shadow-[0_0_18px_rgba(255,210,245,.45)]
            "
          >
            ✦
          </motion.div>

          {/* Texto final */}

          <p
            className="
              mx-auto

              mt-7

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

          {/* Indicador */}

          <p
            className="
              mt-7

              text-[9px]

              uppercase

              tracking-[0.35em]

              text-white/30

              sm:text-[10px]
            "
          >
            Fin de {section.chapter}
          </p>

          {/* Línea inferior */}

          <div
            aria-hidden="true"
            className="
              mx-auto

              mt-7

              h-14
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
          chapter={
            nextSection.chapter
          }
          title={
            nextSection.title
          }
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