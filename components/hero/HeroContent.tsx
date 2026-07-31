"use client";

import { motion } from "framer-motion";

import {
  Heading,
  Text,
  Divider,
} from "@/components/ui";

import { PrimaryButton } from "@/components/ui/buttons/PrimaryButton";
import { ScrollIndicator } from "./ScrollIndicator";

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

        flex
        min-h-screen
        w-full

        flex-col
        items-center
        justify-center

        px-6
        sm:px-8
        lg:px-12

        pt-12
        pb-32

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
            ease: "easeInOut",
          }}
          className="
            mb-8

            block

            text-4xl
            sm:text-5xl

            text-pink-200

            drop-shadow-[0_0_35px_rgba(255,200,245,.85)]
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
        className="max-w-5xl"
      >
        <Heading
          variant="hero"
          className="
            leading-[0.9]

            text-center

            text-white

            drop-shadow-[0_0_30px_rgba(255,215,245,.25)]
          "
        >
          Para Siempre,

          <br />

          Ana Lucía
        </Heading>
      </motion.div>

      {/* Divider */}

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
          delay: 0.4,
          duration: 1,
        }}
        className="mt-8"
      >
        <Divider />
      </motion.div>

      {/* Texto */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 1,
        }}
        className="mt-8"
      >
        <Text
          variant="lead"
          className="
            mx-auto

            max-w-2xl

            text-center

            text-[#FFF2FD]

            leading-9
            lg:leading-10
          "
        >
          Porque algunos recuerdos nunca desaparecen.

          <br />
          <br />

          Permanecen vivos en nuestra memoria,

          creciendo con cada historia,

          cada fotografía

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
        className="mt-14"
      >
        <PrimaryButton
          onClick={handleStart}
        >
          Comenzar el viaje
        </PrimaryButton>
      </motion.div>

      {/* Indicador */}

      <div
        className="
          absolute

          bottom-8
          left-1/2

          -translate-x-1/2
        "
      >
        <ScrollIndicator />
      </div>
    </section>
  );
}