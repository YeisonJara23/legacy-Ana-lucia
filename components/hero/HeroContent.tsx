"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import { PrimaryButton } from "@/components/ui/buttons/PrimaryButton";

import { ScrollIndicator } from "./ScrollIndicator";

/* =========================================================
   ANIMACIÓN GENERAL
========================================================= */

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const starVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: -30,
  },

  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,

    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export function HeroContent() {
  const handleStart = () => {
    document
      .getElementById("story-entrance")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        relative
        z-20

        flex
        min-h-[100svh]
        w-full
        max-w-7xl

        flex-col
        items-center
        justify-center

        px-5

        pb-24
        pt-16

        text-center

        sm:px-8
        sm:pb-28
        sm:pt-20

        md:px-10

        lg:px-12
        lg:pb-32
      "
    >
      {/* =====================================================
          ESTRELLA
      ===================================================== */}

      <motion.div
        variants={starVariants}
        className="
          mb-5

          sm:mb-6
          md:mb-8
        "
      >
        <motion.span
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.75, 1, 0.75],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            block

            text-3xl

            text-pink-200

            drop-shadow-[0_0_30px_rgba(255,200,245,.75)]

            sm:text-4xl
            md:text-5xl
          "
        >
          ✦
        </motion.span>
      </motion.div>

      {/* =====================================================
          PEQUEÑO TEXTO SUPERIOR
      ===================================================== */}

      <motion.p
        variants={itemVariants}
        className="
          mb-4

          text-[9px]
          font-medium

          uppercase

          tracking-[0.38em]

          text-pink-100/55

          sm:text-[10px]
          md:mb-5
        "
      >
        Un recuerdo para toda la vida
      </motion.p>

      {/* =====================================================
          TÍTULO
      ===================================================== */}

      <motion.div
        variants={itemVariants}
        className="
          mx-auto

          w-full
          max-w-5xl
        "
      >
        <h1
          className="
            font-display

            text-[3.25rem]
            font-light

            leading-[0.9]

            tracking-[-0.035em]

            text-white

            drop-shadow-[0_0_30px_rgba(255,215,245,.20)]

            min-[390px]:text-[3.7rem]

            sm:text-7xl
            sm:leading-[0.9]

            md:text-8xl

            lg:text-[7rem]

            xl:text-[8rem]
          "
        >
          <span className="block">
            Para Siempre,
          </span>

          <span
            className="
              mt-1
              block

              bg-gradient-to-r

              from-[#FFE4F7]
              via-white
              to-[#EBD9FF]

              bg-clip-text

              italic

              text-transparent

              sm:mt-2
            "
          >
            Ana Lucía
          </span>
        </h1>
      </motion.div>

      {/* =====================================================
          DIVISOR
      ===================================================== */}

      <motion.div
        variants={itemVariants}
        className="
          mx-auto

          mt-7

          flex
          items-center
          justify-center

          gap-3

          sm:mt-8
          md:mt-10
        "
      >
        <span
          className="
            h-px
            w-10

            bg-gradient-to-r
            from-transparent
            to-pink-100/55

            sm:w-14
          "
        />

        <span
          aria-hidden="true"
          className="
            text-[7px]
            text-pink-100/55
          "
        >
          ✦
        </span>

        <span
          className="
            h-px
            w-10

            bg-gradient-to-l
            from-transparent
            to-pink-100/55

            sm:w-14
          "
        />
      </motion.div>

      {/* =====================================================
          TEXTO
      ===================================================== */}

      <motion.div
        variants={itemVariants}
        className="
          mx-auto

          mt-6

          max-w-xl

          px-2

          sm:mt-7
          sm:max-w-2xl

          md:mt-8
        "
      >
        <p
          className="
            font-display

            text-lg
            font-light
            italic

            leading-7

            text-[#FFF2FD]/85

            sm:text-xl
            sm:leading-8

            md:text-2xl
            md:leading-9
          "
        >
          Porque algunos recuerdos merecen crecer contigo.
        </p>

        <p
          className="
            mx-auto

            mt-3

            max-w-lg

            text-xs
            font-light

            leading-6

            text-white/45

            sm:mt-4
            sm:text-sm
            sm:leading-7

            md:text-base
          "
        >
          Una historia construida con fotografías,
          pequeños momentos y mucho amor.
        </p>
      </motion.div>

      {/* =====================================================
          BOTÓN
      ===================================================== */}

      <motion.div
        variants={itemVariants}
        className="
          mt-8

          sm:mt-10
          md:mt-11
        "
      >
        <PrimaryButton
          onClick={handleStart}
        >
          Explorar la historia
        </PrimaryButton>
      </motion.div>

      {/* =====================================================
          INDICADOR INFERIOR
      ===================================================== */}

      <motion.div
        variants={itemVariants}
        className="
          absolute

          bottom-5
          left-1/2

          -translate-x-1/2

          sm:bottom-6
          md:bottom-8
        "
      >
        <ScrollIndicator
          onClick={handleStart}
        />
      </motion.div>
    </motion.div>
  );
}