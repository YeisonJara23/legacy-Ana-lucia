"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import type {
  TimelinePhotoLayout,
} from "@/components/timeline/types";

import {
  StoryCaption,
} from "./StoryCaption";

import {
  StoryPhoto,
} from "./StoryPhoto";

type Props = {
  src: string;
  alt: string;
  caption: string;

  priority?: boolean;

  featured?: boolean;
  featuredTitle?: string;

  layout?: TimelinePhotoLayout;
};

/* =========================================================
   ANIMACIONES
========================================================= */

const sectionVariants: Variants = {
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
    y: 16,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COMPONENTE
========================================================= */

export function StorySection({
  src,
  alt,
  caption,

  priority = false,

  featured = false,
  featuredTitle,

  layout = "center",
}: Props) {
  /* =======================================================
     COMPOSICIÓN DE LAS FOTOGRAFÍAS
  ======================================================= */

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
   * En móvil el texto es parte del flujo normal.
   *
   * A partir de md vuelve a colocarse dentro
   * de la fotografía.
   */

  const overlayPositionClasses: Record<
    TimelinePhotoLayout,
    string
  > = {
    center: `
      md:left-1/2
      md:-translate-x-1/2
    `,

    portrait: `
      md:left-1/2
      md:-translate-x-1/2
    `,

    wide: `
      md:left-1/2
      md:-translate-x-1/2
    `,

    left: `
      md:left-5
      md:translate-x-0
    `,

    right: `
      md:left-auto
      md:right-5
      md:translate-x-0
    `,
  };

  const overlayTextClasses: Record<
    TimelinePhotoLayout,
    string
  > = {
    center:
      "text-center",

    portrait:
      "text-center",

    wide:
      "text-center",

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
    center:
      "max-w-md",

    portrait:
      "max-w-sm",

    wide:
      "max-w-lg",

    left:
      "max-w-md",

    right:
      "max-w-md",
  };

  /* =======================================================
     RECUERDO DESTACADO
  ======================================================= */

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

          my-14

          w-full
          max-w-[980px]

          px-3

          sm:my-18
          sm:px-5

          md:my-24
          md:px-8
        "
      >
        {/* =============================================
            CABECERA
        ============================================= */}

        <motion.div
          variants={captionVariants}
          className="
            mx-auto

            mb-7
            max-w-3xl

            text-center

            sm:mb-9
            md:mb-12
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
              mt-4

              text-[9px]
              font-medium

              uppercase

              tracking-[0.36em]

              text-pink-100/65

              sm:text-[10px]
            "
          >
            Recuerdo destacado
          </p>

          {featuredTitle && (
            <h3
              className="
                mt-4

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

              mt-6

              h-px
              w-20

              bg-gradient-to-r

              from-transparent
              via-pink-100/65
              to-transparent

              sm:mt-7
              sm:w-28

              md:w-36
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
          {/* Luz exterior */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -inset-4

              -z-10

              rounded-[45px]

              bg-pink-300/[0.08]

              opacity-70

              blur-[50px]

              transition-opacity
              duration-700

              group-hover/photo:opacity-100

              sm:-inset-6

              md:-inset-10
              md:blur-[90px]
            "
          />

          {/* Foto */}

          <StoryPhoto
            src={src}
            alt={alt}
            priority={priority}
            featured
            layout="wide"
          />

          {/* =========================================
              TEXTO

              Móvil:
              debajo de la imagen.

              Escritorio:
              dentro de la fotografía.
          ========================================= */}

          {caption.trim() && (
            <motion.div
              variants={captionVariants}
              className="
                relative
                z-10

                mx-auto

                -mt-5

                w-[calc(100%-1.5rem)]
                max-w-2xl

                sm:-mt-6
                sm:w-[calc(100%-2rem)]

                md:absolute
                md:bottom-8
                md:left-1/2

                md:mt-0

                md:-translate-x-1/2
              "
            >
              <div
                className="
                  relative

                  overflow-hidden

                  rounded-[20px]

                  border
                  border-white/15

                  bg-[#3b2066]/80

                  px-4
                  py-3.5

                  text-center

                  shadow-[0_14px_38px_rgba(30,12,65,.30)]

                  backdrop-blur-xl

                  transition-all
                  duration-500

                  group-hover/photo:border-pink-100/30

                  sm:px-5
                  sm:py-4

                  md:border-white/20
                  md:bg-black/30

                  md:px-6

                  md:shadow-[0_18px_50px_rgba(0,0,0,.28)]

                  md:group-hover/photo:bg-black/38
                  md:group-hover/photo:shadow-[0_18px_55px_rgba(255,190,235,.12)]
                "
              >
                {/* Resplandor */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute
                    bottom-[-55px]
                    left-1/2

                    h-24
                    w-52

                    -translate-x-1/2

                    rounded-full

                    bg-pink-200/[0.06]

                    blur-3xl

                    transition-all
                    duration-700

                    md:bg-pink-200/0
                    md:group-hover/photo:bg-pink-200/10
                  "
                />

                <p
                  className="
                    relative
                    z-10

                    mb-1.5

                    text-[8px]
                    font-medium

                    uppercase

                    tracking-[0.28em]

                    text-pink-100/60

                    transition-colors
                    duration-500

                    sm:text-[9px]

                    group-hover/photo:text-pink-100/85
                  "
                >
                  Un momento para recordar
                </p>

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
                    size="featured"
                  >
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

  /* =======================================================
     RECUERDO NORMAL
  ======================================================= */

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

        my-8

        w-full

        px-3

        sm:my-12
        sm:px-5

        md:my-20
        md:px-6

        ${layoutClasses[layout]}
      `}
    >
      {/* =============================================
          MARCADOR
      ============================================= */}

      <motion.div
        variants={captionVariants}
        aria-hidden="true"
        className={`
          mb-4

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

            bg-white/20
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

            bg-white/20
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
              relative
              z-10

              mx-auto

              -mt-4

              w-[calc(100%-1rem)]

              sm:-mt-5
              sm:w-[calc(100%-1.5rem)]

              md:absolute
              md:bottom-5

              md:mt-0
              md:mx-0

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

                bg-[#3b2066]/80

                px-4
                py-3

                shadow-[0_14px_38px_rgba(30,12,65,.28)]

                backdrop-blur-lg

                transition-all
                duration-500

                group-hover/photo:border-pink-100/30

                md:bg-black/28

                md:shadow-[0_14px_40px_rgba(0,0,0,.24)]

                md:group-hover/photo:bg-black/36

                md:group-hover/photo:shadow-[0_14px_45px_rgba(255,190,235,.10)]

                ${overlayTextClasses[layout]}
              `}
            >
              {/* Resplandor */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute

                  bottom-[-55px]
                  left-1/2

                  h-24
                  w-44

                  -translate-x-1/2

                  rounded-full

                  bg-pink-200/[0.06]

                  blur-3xl

                  transition-all
                  duration-700

                  md:bg-pink-200/0

                  md:group-hover/photo:bottom-[-35px]
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