"use client";

import { motion } from "framer-motion";

import {
  Heading,
  Text,
  Divider,
} from "@/components/ui";

import { PrimaryButton } from "@/components/ui/buttons/PrimaryButton";

export function HeroContent() {
  const handleStart = () => {
    document
      .getElementById("chapter-1")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
  className="
    relative
    z-20

    mx-auto

    flex
    min-h-screen

    max-w-7xl

    flex-col
    items-center
    justify-center

    px-8

    pt-10
    pb-28

    -translate-y-10

    text-center
  "
>
      {/* Estrella */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          rotate: -180,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1.4,
        }}
      >
        <motion.span
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            mb-10
            block
            text-5xl
            text-pink-200
            drop-shadow-[0_0_30px_rgba(255,190,240,.8)]
          "
        >
          ✦
        </motion.span>
      </motion.div>

      {/* Título */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <Heading
          variant="hero"
          className="
            text-center
            leading-[0.95]
          "
        >
          Para Siempre,

          <br />

          Ana Lucía
        </Heading>
      </motion.div>

      {/* Línea */}

      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
      >
        <Divider />
      </motion.div>

      {/* Texto */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 1,
        }}
      >
        <Text
          variant="lead"
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-center
            text-[#FFE8FA]
          "
        >
          Porque algunos recuerdos nunca desaparecen.

          <br />

          Permanecen vivos en nuestra memoria,

          <br />

          creciendo con cada historia,

          <br />

          con cada fotografía,

          <br />

          y con cada latido.
        </Text>
      </motion.div>

      {/* Botón */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
      >
        <PrimaryButton
          onClick={handleStart}
        >
          Comenzar el viaje
        </PrimaryButton>
      </motion.div>

      {/* Indicador */}

      <motion.div
        className="
          absolute
          bottom-5
          flex
          flex-col
          items-center
        "
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span
          className="
            text-sm
            tracking-[0.35em]
            uppercase
            text-pink-200/80
          "
        >
          Descubre
        </span>

        <span
          className="
            mt-4
            text-3xl
            text-pink-300
          "
        >
          ↓
        </span>
      </motion.div>
    </section>
  );
}