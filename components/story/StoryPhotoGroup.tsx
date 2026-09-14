"use client";

import { motion, type Variants } from "framer-motion";

import type {
  TimelinePhotoGroupItem,
} from "@/components/timeline/types";

import { StoryCaption } from "./StoryCaption";
import { StoryPhoto } from "./StoryPhoto";

type Props = {
  group: TimelinePhotoGroupItem;
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",

      staggerChildren: 0.14,
    },
  },
};

const photoVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.975,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

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

        my-24
        w-full
        max-w-6xl

        px-3

        sm:my-28
        sm:px-5

        md:my-36
        md:px-8
      "
    >
      {/* =========================================
          TÍTULO DE LA SECUENCIA
      ========================================= */}

      {(group.eyebrow || group.title) && (
        <motion.header
          variants={photoVariants}
          className="
            mx-auto

            mb-9
            max-w-2xl

            text-center

            sm:mb-12
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
                mt-4

                text-[9px]
                font-medium

                uppercase

                tracking-[0.36em]

                text-pink-100/55

                sm:text-[10px]
              "
            >
              {group.eyebrow}
            </p>
          )}

          {group.title && (
            <h3
              className="
                mt-4

                font-display

                text-3xl
                font-light

                leading-tight

                text-white

                sm:text-4xl
                md:text-5xl
              "
            >
              {group.title}
            </h3>
          )}
        </motion.header>
      )}

      {/* =========================================
          DOS FOTOGRAFÍAS
      ========================================= */}

      <div
        className="
          grid

          grid-cols-1

          gap-8

          sm:gap-10

          md:grid-cols-2
          md:items-start
          md:gap-8

          lg:gap-10
        "
      >
        {group.photos.map(
          (photo, index) => (
            <motion.article
              key={photo.src}
              variants={photoVariants}
              className={`
                group/photo
                relative

                ${
                  index === 0
                    ? `
                        md:-rotate-[0.5deg]
                      `
                    : `
                        md:translate-y-12
                        md:rotate-[0.5deg]
                      `
                }
              `}
            >
              {/* Glow */}

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

                  blur-[70px]

                  transition-opacity
                  duration-700

                  group-hover/photo:opacity-100
                "
              />

              {/* Imagen */}

              <StoryPhoto
                src={photo.src}
                alt={photo.alt}
                priority={false}
                layout="center"
              />

              {/* =====================================
                  TEXTO COMPACTO
              ===================================== */}

              {photo.caption.trim() && (
                <div
                  className="
                    absolute

                    bottom-3
                    left-1/2

                    z-10

                    w-[calc(100%-1rem)]
                    max-w-md

                    -translate-x-1/2

                    sm:bottom-4
                    sm:w-[calc(100%-1.5rem)]

                    md:bottom-5
                  "
                >
                  <div
                    className="
                      relative

                      overflow-hidden

                      rounded-[18px]

                      border
                      border-white/15

                      bg-black/30

                      px-4
                      py-3

                      text-center

                      shadow-[0_14px_40px_rgba(0,0,0,.24)]

                      backdrop-blur-lg

                      transition-all
                      duration-500

                      group-hover/photo:border-pink-100/30
                      group-hover/photo:bg-black/38
                    "
                  >
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

                        bg-pink-200/0

                        blur-3xl

                        transition-all
                        duration-700

                        group-hover/photo:bg-pink-200/[0.08]
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                      "
                    >
                      <StoryCaption size="compact">
                        {photo.caption}
                      </StoryCaption>
                    </div>
                  </div>
                </div>
              )}
            </motion.article>
          )
        )}
      </div>

      {/* =========================================
          CIERRE DECORATIVO
      ========================================= */}

      <motion.div
        variants={photoVariants}
        aria-hidden="true"
        className="
          mx-auto

          mt-16

          flex
          items-center
          justify-center

          gap-3

          md:mt-24
        "
      >
        <span className="h-px w-10 bg-white/15" />

        <span
          className="
            text-[8px]
            text-pink-100/45
          "
        >
          ✦
        </span>

        <span className="h-px w-10 bg-white/15" />
      </motion.div>
    </motion.section>
  );
}