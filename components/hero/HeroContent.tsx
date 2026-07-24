"use client";

import { motion } from "framer-motion";
import { DisplayTitle, Paragraph } from "@/components/ui";
import { PrimaryButton } from "@/components/ui/buttons/PrimaryButton";

export function HeroContent() {
  const handleStart = () => {
    document.getElementById("chapter-1")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative z-10 flex flex-col items-center px-6 text-center">
      {/* Estrella superior */}
      <motion.span
        className="mb-6 text-3xl text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ✦
      </motion.span>

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: {
            duration: 1.2,
            delay: 0.3,
          },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <DisplayTitle>
          Para Siempre,
          <br />
          Ana Lucía
        </DisplayTitle>
      </motion.div>

      {/* Descripción */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Paragraph>
          Porque algunos recuerdos merecen crecer contigo.
        </Paragraph>
      </motion.div>

      {/* Botón */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <PrimaryButton onClick={handleStart}>
          Comenzar el viaje →
        </PrimaryButton>
      </motion.div>
    </div>
  );
}