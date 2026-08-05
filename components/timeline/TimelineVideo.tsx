"use client";

import { motion } from "framer-motion";

type TimelineVideoProps = {
  src: string;
  poster: string;
  caption: string;
};

export function TimelineVideo({
  src,
  poster,
  caption,
}: TimelineVideoProps) {
  return (
    <motion.figure
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="
        mx-auto
        w-full
        max-w-5xl
      "
    >
      <div
        className="
          relative
          overflow-hidden

          rounded-[28px]
          md:rounded-[40px]

          border
          border-white/15

          bg-black/20

          shadow-[0_40px_120px_rgba(0,0,0,.35)]
        "
      >
        <video
          controls
          playsInline
          preload="metadata"
          poster={poster}
          className="
            block
            h-auto
            w-full
          "
        >
          <source
            src={src}
            type="video/mp4"
          />

          Tu navegador no puede reproducir este video.
        </video>

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            rounded-[28px]
            md:rounded-[40px]

            ring-1
            ring-inset
            ring-white/10
          "
        />
      </div>

      <figcaption
        className="
          mx-auto
          mt-6
          max-w-3xl
          px-4

          text-center
          text-base
          italic
          leading-8
          text-pink-100

          md:mt-8
          md:text-xl
        "
      >
        {caption}
      </figcaption>
    </motion.figure>
  );
}