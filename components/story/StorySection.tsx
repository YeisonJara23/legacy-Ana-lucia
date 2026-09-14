"use client";

import { motion } from "framer-motion";

import type {
  TimelinePhotoLayout,
} from "@/components/timeline/types";

import { StoryCaption } from "./StoryCaption";
import { StoryPhoto } from "./StoryPhoto";

type Props = {
  src: string;
  alt: string;
  caption: string;

  priority?: boolean;

  featured?: boolean;
  featuredTitle?: string;

  layout?: TimelinePhotoLayout;
};

export function StorySection({
  src,
  alt,
  caption,

  priority = false,

  featured = false,
  featuredTitle,

  layout = "center",
}: Props) {
  /*
   * ==========================================
   * CONFIGURACIÓN EDITORIAL
   * ==========================================
   */

  const layoutClasses: Record<
    TimelinePhotoLayout,
    string
  > = {
    center: `
      mx-auto
      max-w-[760px]
    `,

    left: `
      mx-auto
      max-w-[920px]

      md:ml-[6%]
      md:mr-auto

      lg:ml-[9%]
    `,

    right: `
      mx-auto
      max-w-[920px]

      md:ml-auto
      md:mr-[6%]

      lg:mr-[9%]
    `,

    portrait: `
      mx-auto
      max-w-[620px]
    `,

    wide: `
      mx-auto
      max-w-[1080px]
    `,
  };

  const textAlignmentClasses: Record<
    TimelinePhotoLayout,
    string
  > = {
    center: "text-center",

    portrait: "text-center",

    wide: "text-center",

    left: `
      text-center
      md:text-left
    `,

    right: `
      text-center
      md:text-right
    `,
  };

  /*
   * ==========================================
   * RECUERDO DESTACADO
   * ==========================================
   */

  if (featured) {
    return (
      <motion.section
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
          amount: 0.08,
        }}
        transition={{
          duration: 0.65,
          ease: "easeOut",
        }}
        className="
          relative

          mx-auto

          my-28

          w-full
          max-w-[980px]

          px-3

          sm:my-36
          sm:px-5

          md:my-44
          md:px-8
        "
      >
        {/* ======================================
            CABECERA
        ====================================== */}

        <div
          className="
            mx-auto

            mb-10
            max-w-3xl

            text-center

            md:mb-14
          "
        >
          <div
            className="
              text-3xl
              text-pink-200

              drop-shadow-[0_0_20px_rgba(255,210,245,.7)]

              md:text-4xl
            "
          >
            ✦
          </div>

          <p
            className="
              mt-5

              text-[10px]
              font-medium

              uppercase

              tracking-[0.38em]

              text-pink-100/70

              sm:text-xs
            "
          >
            Recuerdo destacado
          </p>

          {featuredTitle && (
            <h3
              className="
                mt-5

                font-display

                text-4xl
                font-light
                leading-[1.05]

                text-white

                drop-shadow-[0_0_25px_rgba(255,215,245,.25)]

                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              {featuredTitle}
            </h3>
          )}

          <div
            className="
              mx-auto

              mt-8

              h-px
              w-24

              bg-gradient-to-r

              from-transparent
              via-pink-100/70
              to-transparent

              sm:w-36
            "
          />
        </div>

        {/* ======================================
            FOTO DESTACADA
        ====================================== */}

        <div
          className="
            relative

            rounded-[26px]

            shadow-[0_35px_100px_rgba(49,20,100,.30)]

            sm:rounded-[32px]
            md:rounded-[40px]
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -inset-6

              -z-10

              rounded-[50px]

              bg-pink-300/10

              blur-[60px]

              md:-inset-10
              md:blur-[90px]
            "
          />

          <StoryPhoto
            src={src}
            alt={alt}
            priority={priority}
            featured
            layout="wide"
          />
        </div>

        {/* ======================================
            TEXTO DESTACADO
        ====================================== */}

        {caption.trim() && (
          <div
            className="
              relative

              mx-auto

              mt-8
              max-w-3xl

              overflow-hidden

              rounded-[24px]

              border
              border-white/10

              bg-white/[0.06]

              px-6
              py-7

              text-center

              backdrop-blur-md

              sm:px-8

              md:mt-10
              md:px-12
              md:py-9
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                left-1/2
                top-0

                h-24
                w-52

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-pink-200/10

                blur-3xl
              "
            />

            <p
              className="
                relative
                z-10

                font-display

                text-xl
                font-light
                italic

                leading-relaxed

                text-[#FFF2FB]

                sm:text-2xl
                md:text-[1.7rem]
              "
            >
              “{caption}”
            </p>
          </div>
        )}
      </motion.section>
    );
  }

  /*
   * ==========================================
   * RECUERDO NORMAL
   * ==========================================
   */

  return (
    <motion.section
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
        amount: 0.06,
      }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      className={`
        relative

        my-16

        w-full

        px-3

        sm:my-20
        sm:px-5

        md:my-28
        md:px-6

        ${layoutClasses[layout]}
      `}
    >
      {/* Pequeño marcador editorial */}

      <div
        aria-hidden="true"
        className={`
          mb-5

          flex
          items-center
          gap-3

          ${
            layout === "right"
              ? "justify-center md:justify-end"
              : layout === "left"
                ? "justify-center md:justify-start"
                : "justify-center"
          }
        `}
      >
        <span
          className="
            block
            h-px
            w-7

            bg-white/25
          "
        />

        <span
          className="
            text-[8px]
            text-pink-100/50
          "
        >
          ✦
        </span>

        <span
          className="
            block
            h-px
            w-7

            bg-white/25
          "
        />
      </div>

      {/* Fotografía */}

      <StoryPhoto
        src={src}
        alt={alt}
        priority={priority}
        layout={layout}
      />

      {/* Descripción */}

      {caption.trim() && (
        <div
          className={`
            mt-6

            ${
              layout === "portrait"
                ? "mx-auto max-w-xl"
                : "max-w-2xl"
            }

            ${
              layout === "right"
                ? "md:ml-auto"
                : ""
            }

            ${
              layout === "center" ||
              layout === "wide"
                ? "mx-auto"
                : ""
            }

            ${textAlignmentClasses[layout]}
          `}
        >
          <StoryCaption>
            {caption}
          </StoryCaption>
        </div>
      )}
    </motion.section>
  );
}