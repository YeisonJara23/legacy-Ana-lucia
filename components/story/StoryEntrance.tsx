"use client";

import { motion } from "framer-motion";

export function StoryEntrance() {
  return (
    <section
      aria-label="Inicio de la historia"
      className="
        relative
        mx-auto
        flex
        min-h-[62svh]
        w-full
        max-w-6xl
        items-center
        justify-center
        overflow-hidden
        px-5
        py-20
        text-center

        sm:min-h-[68svh]
        sm:px-8
        sm:py-24

        md:min-h-[72svh]
        md:py-28
      "
    >
      {/* =====================================================
          LUZ CENTRAL
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

          bg-pink-200/[0.07]

          blur-[90px]

          sm:h-[380px]
          sm:w-[380px]
          sm:blur-[120px]

          md:h-[520px]
          md:w-[520px]
          md:blur-[150px]
        "
      />

      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div className="relative w-full max-w-4xl">
        {/* Línea superior */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            mx-auto
            h-16
            w-px
            origin-top

            bg-gradient-to-b
            from-transparent
            via-pink-100/30
            to-pink-100/65

            sm:h-20
          "
        />

        {/* Estrella */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
            rotate: -25,
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
            duration: 0.75,
            delay: 0.08,
            ease: "easeOut",
          }}
          aria-hidden="true"
          className="
            mx-auto
            mt-4

            flex
            h-12
            w-12

            items-center
            justify-center

            rounded-full

            border
            border-pink-100/20

            bg-white/[0.04]

            text-xl
            text-pink-100

            shadow-[0_0_35px_rgba(255,210,245,.16)]

            backdrop-blur-md

            sm:h-14
            sm:w-14
            sm:text-2xl
          "
        >
          ✦
        </motion.div>

        {/* Texto superior */}

        <motion.p
          initial={{
            opacity: 0,
            y: 14,
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
            delay: 0.16,
          }}
          className="
            mt-7

            text-[9px]
            font-medium
            uppercase

            tracking-[0.38em]

            text-pink-100/55

            sm:text-[10px]
          "
        >
          Aquí comienza su historia
        </motion.p>

        {/* Título */}

        <motion.h2
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
          }}
          transition={{
            duration: 0.8,
            delay: 0.22,
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

            drop-shadow-[0_0_26px_rgba(255,215,245,.15)]

            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          Algunos momentos pasan.
          <span
            className="
              mt-1
              block

              bg-gradient-to-r
              from-[#FFE7F8]
              via-white
              to-[#E9D8FF]

              bg-clip-text

              italic
              text-transparent
            "
          >
            Otros se quedan para siempre.
          </span>
        </motion.h2>

        {/* Separador */}

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
            delay: 0.3,
          }}
          className="
            mx-auto
            mt-9

            h-px
            w-24
            origin-center

            bg-gradient-to-r
            from-transparent
            via-pink-100/60
            to-transparent

            sm:w-36
          "
        />

        {/* Texto narrativo */}

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
            delay: 0.36,
          }}
          className="
            mx-auto
            mt-8
            max-w-2xl

            text-sm
            font-light
            leading-7

            text-white/60

            sm:text-base
            sm:leading-8

            md:text-lg
            md:leading-9
          "
        >
          Todo comenzó con un instante.
          Después llegaron los abrazos,
          las miradas, las primeras sonrisas
          y todos esos pequeños momentos que
          merecían quedarse guardados.
        </motion.p>

        {/* =====================================================
            CONTINUAR
        ===================================================== */}

        <motion.a
          href="#first-light"
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
            delay: 0.46,
          }}
          className="
            group

            mx-auto
            mt-11

            inline-flex
            flex-col
            items-center

            sm:mt-14
          "
        >
          <span
            className="
              text-[8px]
              font-medium
              uppercase

              tracking-[0.32em]

              text-white/35

              transition-colors
              duration-300

              group-hover:text-white/60

              sm:text-[9px]
            "
          >
            Comienza el viaje
          </span>

          <span
            aria-hidden="true"
            className="
              mt-4

              flex
              h-9
              w-9

              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/[0.035]

              text-sm
              text-pink-100/65

              backdrop-blur-md

              transition-all
              duration-300

              group-hover:translate-y-1
              group-hover:border-pink-100/25
              group-hover:bg-white/[0.06]
              group-hover:text-white
            "
          >
            ↓
          </span>
        </motion.a>

        {/* Línea inferior */}

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
            duration: 0.9,
            delay: 0.5,
          }}
          aria-hidden="true"
          className="
            mx-auto
            mt-5

            h-16
            w-px

            origin-top

            bg-gradient-to-b
            from-pink-100/45
            to-transparent

            sm:h-20
          "
        />
      </div>
    </section>
  );
}