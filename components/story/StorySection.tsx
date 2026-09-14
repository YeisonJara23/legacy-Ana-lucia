"use client";

import { motion, type Variants } from "framer-motion";

import type { TimelinePhotoLayout } from "@/components/timeline/types";

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

/*
 * =========================================================
 * ANIMACIONES
 * =========================================================
 *
 * La sección controla la entrada.
 * Los elementos internos heredan el estado de animación,
 * evitando añadir lógica de scroll adicional.
 */

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: "easeOut",

      staggerChildren: 0.08,
    },
  },
};

const photoVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.025,
    y: 12,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

const captionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.65,
      delay: 0.12,
      ease: "easeOut",
    },
  },
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
   * =========================================================
   * COMPOSICIÓN EDITORIAL
   * =========================================================
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

  /*
   * Posición del texto sobre la fotografía.
   */

  const overlayPositionClasses: Record<
    TimelinePhotoLayout,
    string
  > = {
    center: `
      left-1/2
      -translate-x-1/2
    `,

    portrait: `
      left-1/2
      -translate-x-1/2
    `,

    wide: `
      left-1/2
      -translate-x-1/2
    `,

    left: `
      left-1/2
      -translate-x-1/2

      md:left-5
      md:translate-x-0
    `,

    right: `
      left-1/2
      -translate-x-1/2

      md:left-auto
      md:right-5
      md:translate-x-0
    `,
  };

  const overlayTextClasses: Record<
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

  const overlayWidthClasses: Record<
    TimelinePhotoLayout,
    string
  > = {
    center: "max-w-md",

    portrait: "max-w-sm",

    wide: "max-w-lg",

    left: "max-w-md",

    right: "max-w-md",
  };

  /*
   * =========================================================
   * RECUERDO DESTACADO
   * =========================================================
   */

  if (featured) {
    return (
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
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
        {/* =============================================
            CABECERA DEL RECUERDO
        ============================================= */}

        <motion.div
          variants={captionVariants}
          className="
            mx-auto

            mb-10
            max-w-3xl

            text-center

            md:mb-14
          "
        >
          <div
            aria-hidden="true"
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
            aria-hidden="true"
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
        </motion.div>

        {/* =============================================
            FOTO DESTACADA
        ============================================= */}

        <motion.div
          variants={photoVariants}
          className="
            group/photo
            relative
          "
        >
          {/* Luz exterior */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -inset-6

              -z-10

              rounded-[50px]

              bg-pink-300/10

              opacity-70

              blur-[60px]

              transition-opacity
              duration-700

              group-hover/photo:opacity-100

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

          {/* =========================================
              TEXTO DESTACADO
          ========================================= */}

          {caption.trim() && (
            <motion.div
              variants={captionVariants}
              className="
                absolute

                bottom-4
                left-1/2

                z-10

                w-[calc(100%-1.25rem)]
                max-w-2xl

                -translate-x-1/2

                sm:bottom-6
                sm:w-[calc(100%-2rem)]

                md:bottom-8
              "
            >
              <div
                className="
                  relative

                  overflow-hidden

                  rounded-[20px]

                  border
                  border-white/20

                  bg-black/30

                  px-4
                  py-4

                  text-center

                  shadow-[0_18px_50px_rgba(0,0,0,.28)]

                  backdrop-blur-xl

                  transition-all
                  duration-500

                  group-hover/photo:border-pink-100/35
                  group-hover/photo:bg-black/38

                  group-hover/photo:shadow-[0_18px_55px_rgba(255,190,235,.12)]

                  sm:px-5

                  md:px-6
                "
              >
                {/* Luz que aparece al hacer hover */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-full

                    h-20
                    w-52

                    -translate-x-1/2

                    rounded-full

                    bg-pink-200/0

                    blur-3xl

                    transition-all
                    duration-700

                    group-hover/photo:top-1/2

                    group-hover/photo:bg-pink-200/10
                  "
                />

                <p
                  className="
                    relative
                    z-10

                    mb-2

                    text-[9px]
                    font-medium

                    uppercase

                    tracking-[0.3em]

                    text-pink-100/65

                    transition-colors
                    duration-500

                    group-hover/photo:text-pink-100/90
                  "
                >
                  Un momento para recordar
                </p>

                <div
                  className="
                    relative
                    z-10

                    transition-all
                    duration-500

                    group-hover/photo:text-white

                    md:group-hover/photo:-translate-y-[1px]
                  "
                >
                  <StoryCaption size="featured">
                    {caption}
                  </StoryCaption>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.section>
    );
  }

  /*
   * =========================================================
   * RECUERDO NORMAL
   * =========================================================
   */

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.06,
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
      {/* =============================================
          MARCADOR EDITORIAL
      ============================================= */}

      <motion.div
        variants={captionVariants}
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
      </motion.div>

      {/* =============================================
          FOTO + TEXTO
      ============================================= */}

      <motion.div
        variants={photoVariants}
        className="
          group/photo
          relative
        "
      >
        <StoryPhoto
          src={src}
          alt={alt}
          priority={priority}
          layout={layout}
        />

        {caption.trim() && (
          <motion.div
            variants={captionVariants}
            className={`
              absolute

              bottom-3

              z-10

              w-[calc(100%-1rem)]

              sm:bottom-4
              sm:w-[calc(100%-1.5rem)]

              md:bottom-5

              ${overlayPositionClasses[layout]}
              ${overlayWidthClasses[layout]}
            `}
          >
            <div
              className={`
                relative

                overflow-hidden

                rounded-[18px]

                border
                border-white/15

                bg-black/28

                px-4
                py-3

                shadow-[0_14px_40px_rgba(0,0,0,.24)]

                backdrop-blur-lg

                transition-all
                duration-500

                group-hover/photo:border-pink-100/30

                group-hover/photo:bg-black/36

                group-hover/photo:shadow-[0_14px_45px_rgba(255,190,235,.10)]

                ${overlayTextClasses[layout]}
              `}
            >
              {/* Resplandor inferior */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute

                  bottom-[-60px]
                  left-1/2

                  h-24
                  w-44

                  -translate-x-1/2

                  rounded-full

                  bg-pink-200/0

                  blur-3xl

                  transition-all
                  duration-700

                  group-hover/photo:bottom-[-35px]

                  group-hover/photo:bg-pink-200/[0.08]
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
                <StoryCaption size="compact">
                  {caption}
                </StoryCaption>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
}