"use client";

import { motion } from "framer-motion";

export function StoryEnding() {
  return (
    <section
      className="
        relative

        mx-auto

        mb-24
        mt-20

        w-full
        max-w-5xl

        overflow-hidden

        px-5
        py-16

        text-center

        sm:mb-32
        sm:mt-28
        sm:px-8
        sm:py-20

        md:mb-40
        md:mt-36
        md:py-28
      "
    >
      {/* =====================================================
          LUZ AMBIENTAL
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          -z-10

          h-[280px]
          w-[280px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-pink-200/[0.08]

          blur-[90px]

          sm:h-[380px]
          sm:w-[380px]

          md:h-[520px]
          md:w-[520px]
          md:blur-[140px]
        "
      />

      {/* =====================================================
          ESTRELLA
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.6,
          rotate: -20,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        aria-hidden="true"
        className="
          mx-auto

          flex
          h-14
          w-14

          items-center
          justify-center

          rounded-full

          border
          border-pink-100/20

          bg-white/[0.045]

          text-2xl

          text-pink-100

          shadow-[0_0_40px_rgba(255,210,245,.18)]

          backdrop-blur-lg

          sm:h-16
          sm:w-16
          sm:text-3xl
        "
      >
        ✦
      </motion.div>

      {/* =====================================================
          EYEBROW
      ===================================================== */}

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
          delay: 0.1,
        }}
        className="
          mt-8

          text-[9px]
          font-medium

          uppercase

          tracking-[0.38em]

          text-pink-100/55

          sm:text-[10px]
        "
      >
        Hasta aquí por ahora
      </motion.p>

      {/* =====================================================
          TÍTULO
      ===================================================== */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 26,
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
          delay: 0.16,
          ease: "easeOut",
        }}
        className="
          mx-auto

          mt-6

          max-w-4xl

          font-display

          text-4xl
          font-light

          leading-[1.05]

          text-white

          drop-shadow-[0_0_30px_rgba(255,215,245,.18)]

          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
      >
        Esta historia sigue
        <span
          className="
            block

            bg-gradient-to-r

            from-[#FFE4F6]
            via-white
            to-[#EBD8FF]

            bg-clip-text

            italic

            text-transparent
          "
        >
          escribiéndose
        </span>
      </motion.h2>

      {/* =====================================================
          LÍNEA DEL TIEMPO ABIERTA
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scaleY: 0,
        }}
        whileInView={{
          opacity: 1,
          scaleY: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.28,
          ease: "easeOut",
        }}
        className="
          mx-auto

          mt-12

          flex
          origin-top
          flex-col
          items-center

          sm:mt-14
        "
      >
        <div
          className="
            h-10
            w-px

            bg-gradient-to-b

            from-pink-100/60
            to-white/20

            sm:h-14
          "
        />

        <div
          className="
            flex
            h-8
            w-8

            items-center
            justify-center

            rounded-full

            border
            border-pink-100/25

            bg-white/[0.04]

            text-[9px]

            text-pink-100/80

            shadow-[0_0_25px_rgba(255,210,245,.13)]
          "
        >
          ✦
        </div>

        <div
          className="
            h-12
            w-px

            bg-gradient-to-b

            from-white/20
            to-white/10

            sm:h-16
          "
        />

        {/* Punto abierto = futuro */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-5
            w-5

            items-center
            justify-center

            rounded-full

            border
            border-pink-100/50

            bg-transparent

            shadow-[0_0_20px_rgba(255,210,245,.20)]
          "
        >
          <div
            className="
              h-1
              w-1

              rounded-full

              bg-pink-100/70
            "
          />
        </motion.div>

        <div
          className="
            h-16
            w-px

            bg-gradient-to-b

            from-white/10
            to-transparent

            sm:h-20
          "
        />
      </motion.div>

      {/* =====================================================
          MENSAJE
      ===================================================== */}

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
          delay: 0.38,
        }}
        className="
          mx-auto

          max-w-2xl

          font-display

          text-xl
          font-light
          italic

          leading-relaxed

          text-[#FFF0FA]

          sm:text-2xl
          md:text-3xl
        "
      >
        Cada nueva sonrisa, cada aventura
        y cada pequeño momento encontrará
        algún día su lugar aquí.
      </motion.p>

      <motion.p
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
          delay: 0.48,
        }}
        className="
          mx-auto

          mt-6

          max-w-lg

          text-sm
          font-light

          leading-7

          text-white/50

          sm:text-base
          sm:leading-8
        "
      >
        Porque crecer también es escribir
        una historia, y esta apenas está
        comenzando.
      </motion.p>

      {/* =====================================================
          VOLVER AL INICIO
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.55,
        }}
        className="
          mt-12

          flex
          justify-center

          sm:mt-14
        "
      >
        <a
          href="#top"
          className="
            group

            inline-flex

            items-center
            justify-center

            gap-3

            rounded-full

            border
            border-white/15

            bg-white/[0.045]

            px-5
            py-3

            text-[9px]
            font-medium

            uppercase

            tracking-[0.3em]

            text-white/55

            backdrop-blur-lg

            transition-all
            duration-300

            hover:-translate-y-1

            hover:border-pink-100/30

            hover:bg-white/[0.075]

            hover:text-white

            active:scale-[0.97]

            sm:px-6
            sm:text-[10px]
          "
        >
          <span>
            Volver al inicio
          </span>

          <span
            aria-hidden="true"
            className="
              text-sm

              transition-transform
              duration-300

              group-hover:-translate-y-1
            "
          >
            ↑
          </span>
        </a>
      </motion.div>

      {/* Firma */}

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
          duration: 1,
          delay: 0.65,
        }}
        className="
          mt-16

          sm:mt-20
        "
      >
        <div
          className="
            mx-auto

            h-px
            w-20

            bg-gradient-to-r

            from-transparent
            via-white/25
            to-transparent
          "
        />

        <p
          className="
            mt-6

            font-display

            text-lg
            font-light
            italic

            text-white/35

            sm:text-xl
          "
        >
          Para siempre, Ana Lucía
        </p>
      </motion.div>
    </section>
  );
}