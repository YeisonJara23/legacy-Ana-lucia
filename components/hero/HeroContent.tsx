"use client";

import { motion } from "framer-motion";
import { DisplayTitle, Paragraph } from "@/components/ui";
import { PrimaryButton } from "@/components/ui/buttons/PrimaryButton";

export function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center px-6 text-center">
      <motion.span
        className="mb-6 text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ✦
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <DisplayTitle>
          Para Siempre,
          <br />
          Ana Lucía
        </DisplayTitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Paragraph>
          Porque algunos recuerdos merecen crecer contigo.
        </Paragraph>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <PrimaryButton>
          Comenzar el viaje →
        </PrimaryButton>
      </motion.div>
    </div>
  );
}