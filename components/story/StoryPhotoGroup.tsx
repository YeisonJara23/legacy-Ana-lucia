"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import type {
  TimelinePhotoGroupItem,
} from "@/components/timeline/types";

import {
  StoryCaption,
} from "./StoryCaption";

import {
  StoryPhoto,
} from "./StoryPhoto";

type Props = {
  group: TimelinePhotoGroupItem;
};

/* =========================================================
   ANIMACIONES
========================================================= */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",

      staggerChildren: 0.12,
    },
  },
};

const photoVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.72,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COMPONENTE
========================================================= */

export function StoryPhotoGroup({
  group,
}: Props) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="
        relative

        mx-auto

        my-14

        w-full
        max-w-6xl

        px-3

        sm:my-20
        sm:px-5

        md:my-24
        md:px-8
      "
    >
      {/* =====================================================
          ENCABEZADO
      ===================================================== */}

      {(group.eyebrow ||
        group.title) && (
        <motion.header
          variants={photoVariants}
          className="
            mx-auto

            mb-7
            max-w-2xl

            text-center

            sm:mb-9
            md:mb-12
          "
        >
          <div
            aria-hidden="true"
            className="
              text-xl
              text-pink-200/70
            "
          >
            ✦
          </div>

          {group.eyebrow && (
            <p
              className="
                mt-3

                text-[9px]
                font-medium

                uppercase

                tracking-[0.34em]

                text-pink-100/55

                sm:mt-4
                sm:text-[10px]
              "
            >
              {group.eyebrow}
            </p>
          )}

          {group.title && (
            <h3
              className="
                mx-auto

                mt-3
                max-w-3xl

                font-display

                text-3xl
                font-light

                leading-tight

                text-white

                sm:mt-4
                sm:text-4xl

                md:text-5xl
              "
            >
              {group.title}
            </h3>
          )}
        </motion.header>
      )}

      {/* =====================================================
          FOTOGRAFÍAS

          Móvil:
          una debajo de otra.

          Escritorio:
          dos columnas.
      ===================================================== */}

      <div
        className="
          grid

          grid-cols-1

          gap-9

          sm:gap-11

          md:grid-cols-2
          md:items-start
          md:gap-8

          lg:gap-10
        "
      >
        {group.photos.map(
          (
            photo,
            index
          ) => (
            <motion.article
              key={photo.src}
              variants={
                photoVariants
              }
              className={`
                group/photo

                relative

                ${
                  index === 0
                    ? `
                        md:-rotate-[0.5deg]
                      `
                    : `
                        md:translate-y-10
                        md:rotate-[0.5deg]
                      `
                }
              `}
            >
              {/* =========================================
                  LUZ
              ========================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute
                  inset-8

                  -z-10

                  rounded-full

                  bg-pink-200/[0.06]

                  opacity-60

                  blur-[60px]

                  transition-opacity
                  duration-700

                  group-hover/photo:opacity-100

                  md:blur-[70px]
                "
              />

              {/* =========================================
                  IMAGEN
              ========================================= */}

              <StoryPhoto
                src={photo.src}
                alt={photo.alt}
                priority={false}
                layout="center"
              />

              {/* =========================================
                  TEXTO

                  Móvil:
                  debajo.

                  Escritorio:
                  dentro.
              ========================================= */}

              {photo.caption.trim() && (
                <motion.div
                  variants={
                    photoVariants
                  }
                  className="
                    relative
                    z-10

                    mx-auto

                    -mt-4

                    w-[calc(100%-1rem)]
                    max-w-md

                    sm:-mt-5
                    sm:w-[calc(100%-1.5rem)]

                    md:absolute
                    md:bottom-5
                    md:left-1/2

                    md:mt-0

                    md:-translate-x-1/2
                  "
                >
                  <div
                    className="
                      relative

                      overflow-hidden

                      rounded-[18px]

                      border
                      border-white/15

                      bg-[#3b2066]/80

                      px-4
                      py-3

                      text-center

                      shadow-[0_14px_38px_rgba(30,12,65,.28)]

                      backdrop-blur-lg

                      transition-all
                      duration-500

                      group-hover/photo:border-pink-100/30

                      md:bg-black/30

                      md:shadow-[0_14px_40px_rgba(0,0,0,.24)]

                      md:group-hover/photo:bg-black/38
                    "
                  >
                    {/* Glow */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none

                        absolute

                        bottom-[-50px]
                        left-1/2

                        h-20
                        w-40

                        -translate-x-1/2

                        rounded-full

                        bg-pink-200/[0.06]

                        blur-3xl

                        transition-all
                        duration-700

                        md:bg-pink-200/0

                        md:group-hover/photo:bg-pink-200/[0.08]
                      "
                    />

                    <div
                      className="
                        relative
                        z-10

                        transition-transform
                        duration-500

                        md:group-hover/photo:-translate-y-[1px]
                      "
                    >
                      <StoryCaption
                        size="compact"
                      >
                        {photo.caption}
                      </StoryCaption>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.article>
          )
        )}
      </div>

      {/* =====================================================
          CIERRE DECORATIVO
      ===================================================== */}

      <motion.div
        variants={photoVariants}
        aria-hidden="true"
        className="
          mx-auto

          mt-10

          flex
          items-center
          justify-center

          gap-3

          md:mt-14
        "
      >
        <span
          className="
            h-px
            w-10

            bg-white/15
          "
        />

        <span
          className="
            text-[8px]
            text-pink-100/45
          "
        >
          ✦
        </span>

        <span
          className="
            h-px
            w-10

            bg-white/15
          "
        />
      </motion.div>
    </motion.section>
  );
}