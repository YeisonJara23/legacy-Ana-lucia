"use client";

import { motion } from "framer-motion";

type Props = {
  age: string;
  date?: string;
};

export function TimelineAgeMilestone({
  age,
  date,
}: Props) {
  return (
    <motion.div
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
        amount: 0.6,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        mx-auto
        mb-7
        flex
        max-w-md
        flex-col
        items-center
        text-center

        sm:mb-8

        md:mb-10
      "
    >
      {/* Línea temporal */}

      <div
        aria-hidden="true"
        className="
          flex
          w-full
          items-center
          justify-center
        "
      >
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            h-px
            flex-1

            origin-right

            bg-gradient-to-r

            from-transparent
            to-pink-100/35
          "
        />

        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
            delay: 0.35,
            type: "spring",
            stiffness: 150,
            damping: 14,
          }}
          className="
            relative

            mx-4

            flex
            h-7
            w-7

            items-center
            justify-center

            rounded-full

            border
            border-pink-100/30

            bg-[#8d65df]/70

            shadow-[0_0_24px_rgba(255,210,245,.20)]

            backdrop-blur-md
          "
        >
          <span
            className="
              h-1.5
              w-1.5

              rounded-full

              bg-pink-100
            "
          />

          <motion.span
            aria-hidden="true"
            animate={{
              scale: [
                1,
                1.5,
                1,
              ],
              opacity: [
                0.28,
                0,
                0.28,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-0

              rounded-full

              border
              border-pink-100/35
            "
          />
        </motion.div>

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            h-px
            flex-1

            origin-left

            bg-gradient-to-l

            from-transparent
            to-pink-100/35
          "
        />
      </div>

      {/* Edad */}

      <motion.p
        initial={{
          opacity: 0,
          y: 8,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.55,
          delay: 0.3,
        }}
        className="
          mt-4

          text-[9px]
          font-medium

          uppercase

          tracking-[0.34em]

          text-pink-100/75

          sm:text-[10px]
        "
      >
        {age}
      </motion.p>

      {/* Fecha */}

      {date && (
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
            duration: 0.6,
            delay: 0.45,
          }}
          className="
            mt-1.5

            font-display

            text-sm
            font-light
            italic

            tracking-[0.04em]

            text-white/40

            sm:text-base
          "
        >
          {date}
        </motion.p>
      )}
    </motion.div>
  );
}