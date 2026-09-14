"use client";

import {
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

type TimelineVideoProps = {
  src: string;
  poster: string;

  title: string;
  caption: string;

  number?: number;
};

export function TimelineVideo({
  src,
  poster,

  title,
  caption,

  number,
}: TimelineVideoProps) {
  const videoRef =
    useRef<HTMLVideoElement>(null);

  const [hasStarted, setHasStarted] =
    useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      await video.play();

      setHasStarted(true);
    } catch {
      /*
       * Si el navegador bloquea la reproducción,
       * simplemente dejamos disponibles los
       * controles nativos.
       */
      setHasStarted(true);
    }
  };

  return (
    <motion.figure
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        relative

        mx-auto

        w-full
        max-w-5xl

        px-3
        sm:px-5
        md:px-8
      "
    >
      {/* ===============================================
          CABECERA
      =============================================== */}

      <div
        className="
          mx-auto

          mb-8
          md:mb-10

          max-w-3xl

          text-center
        "
      >
        {/* Número */}

        {number !== undefined && (
          <div
            className="
              mx-auto

              flex
              h-9
              w-9

              items-center
              justify-center

              rounded-full

              border
              border-pink-100/20

              bg-white/[0.05]

              text-[10px]
              font-medium

              tracking-[0.15em]

              text-pink-100/70

              backdrop-blur-sm

              sm:h-10
              sm:w-10
            "
          >
            {String(number).padStart(
              2,
              "0"
            )}
          </div>
        )}

        {/* Tipo */}

        <p
          className="
            mt-5

            text-[10px]
            font-medium

            uppercase

            tracking-[0.38em]

            text-pink-100/60

            sm:text-xs
          "
        >
          Recuerdo en movimiento
        </p>

        {/* Título */}

        <h3
          className="
            mx-auto

            mt-4

            font-display

            text-3xl
            font-light
            leading-tight

            text-white

            sm:text-4xl
            md:text-5xl
          "
        >
          {title}
        </h3>

        {/* Línea */}

        <div
          aria-hidden="true"
          className="
            mx-auto

            mt-6

            h-px
            w-20

            bg-gradient-to-r

            from-transparent
            via-pink-100/60
            to-transparent

            sm:w-28
          "
        />
      </div>

      {/* ===============================================
          VIDEO
      =============================================== */}

      <div
        className="
          group
          relative

          overflow-hidden

          rounded-[26px]
          sm:rounded-[32px]
          md:rounded-[40px]

          border
          border-white/15

          bg-black/25

          shadow-[0_35px_100px_rgba(36,12,76,.35)]

          ring-1
          ring-inset
          ring-white/10
        "
      >
        {/* Glow exterior */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            left-1/2
            top-1/2

            -z-10

            h-[80%]
            w-[85%]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-pink-300/10

            blur-[80px]
          "
        />

        {/* Video */}

        <video
          ref={videoRef}

          playsInline

          preload="none"

          poster={poster}

          controls={hasStarted}

          aria-label={title}

          onPlay={() =>
            setHasStarted(true)
          }

          className="
            block

            max-h-[78vh]

            w-full

            bg-black/25

            object-contain
          "
        >
          <source
            src={src}
            type="video/mp4"
          />

          Tu navegador no puede reproducir
          este video.
        </video>

        {/* =============================================
            PORTADA PERSONALIZADA
        ============================================= */}

        {!hasStarted && (
          <div
            className="
              absolute
              inset-0

              flex
              items-center
              justify-center
            "
          >
            {/* Oscurecimiento */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                inset-0

                bg-gradient-to-t

                from-black/55
                via-black/10
                to-black/15
              "
            />

            {/* Luz detrás del botón */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                left-1/2
                top-1/2

                h-40
                w-40

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-pink-200/15

                blur-[55px]
              "
            />

            {/* Botón */}

            <button
              type="button"

              onClick={handlePlay}

              aria-label={`Reproducir ${title}`}

              className="
                relative
                z-10

                flex
                h-20
                w-20

                cursor-pointer

                items-center
                justify-center

                rounded-full

                border
                border-white/30

                bg-white/10

                shadow-[0_0_45px_rgba(255,215,245,.25)]

                backdrop-blur-md

                transition

                duration-300

                hover:scale-105
                hover:bg-white/15

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-pink-100

                sm:h-24
                sm:w-24
              "
            >
              {/* Triángulo play */}

              <span
                aria-hidden="true"
                className="
                  ml-1

                  block

                  h-0
                  w-0

                  border-y-[10px]
                  border-y-transparent

                  border-l-[16px]
                  border-l-white

                  drop-shadow-[0_0_12px_rgba(255,255,255,.5)]

                  sm:border-y-[12px]
                  sm:border-l-[19px]
                "
              />
            </button>

            {/* Texto inferior */}

            <div
              className="
                pointer-events-none

                absolute
                bottom-6
                left-1/2

                w-full
                max-w-md

                -translate-x-1/2

                px-5

                text-center

                sm:bottom-8
              "
            >
              <p
                className="
                  text-[9px]

                  uppercase

                  tracking-[0.32em]

                  text-white/65

                  sm:text-[10px]
                "
              >
                Toca para revivir este
                momento
              </p>
            </div>
          </div>
        )}

        {/* Borde interior */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            inset-0

            rounded-[26px]
            sm:rounded-[32px]
            md:rounded-[40px]

            ring-1
            ring-inset
            ring-white/10
          "
        />
      </div>

      {/* ===============================================
          DESCRIPCIÓN
      =============================================== */}

      {caption.trim() && (
        <div
          className="
            relative

            mx-auto

            mt-7
            md:mt-9

            max-w-3xl

            px-4

            text-center
          "
        >
          <div
            aria-hidden="true"
            className="
              mx-auto

              mb-6

              text-lg

              text-pink-200/55
            "
          >
            ✦
          </div>

          <figcaption
            className="
              font-display

              text-xl
              font-light
              italic

              leading-relaxed

              text-[#FFF0FB]

              sm:text-2xl
              md:text-[1.65rem]
            "
          >
            “{caption}”
          </figcaption>
        </div>
      )}
    </motion.figure>
  );
}