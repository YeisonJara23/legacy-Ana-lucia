"use client";

import {
  useEffect,
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
    useRef<HTMLVideoElement | null>(
      null
    );

  const [hasStarted, setHasStarted] =
    useState(false);

  const [isPlaying, setIsPlaying] =
    useState(false);

  /* =========================================================
     AVISAR QUE EL VIDEO EMPEZÓ
  ========================================================= */

  const notifyVideoPlay = () => {
    window.dispatchEvent(
      new CustomEvent(
        "ana-lucia:video-play",
        {
          detail: {
            src,
          },
        }
      )
    );
  };

  /* =========================================================
     AVISAR QUE EL VIDEO SE DETUVO
  ========================================================= */

  const notifyVideoStop = () => {
    window.dispatchEvent(
      new CustomEvent(
        "ana-lucia:video-stop",
        {
          detail: {
            src,
          },
        }
      )
    );
  };

  /* =========================================================
     PLAY DESDE BOTÓN PERSONALIZADO
  ========================================================= */

  const handleStart =
    async () => {
      const video =
        videoRef.current;

      if (!video) {
        return;
      }

      try {
        /*
         * Pausamos cualquier otro video
         * de la historia que esté reproduciéndose.
         */

        document
          .querySelectorAll<HTMLVideoElement>(
            'video[data-story-video="true"]'
          )
          .forEach(
            (otherVideo) => {
              if (
                otherVideo !==
                  video &&
                !otherVideo.paused
              ) {
                otherVideo.pause();
              }
            }
          );

        await video.play();

        setHasStarted(true);
      } catch (error) {
        console.error(
          "No se pudo reproducir el video:",
          error
        );
      }
    };

  /* =========================================================
     SI EL COMPONENTE DESAPARECE MIENTRAS EL VIDEO SUENA
  ========================================================= */

  useEffect(() => {
    return () => {
      const video =
        videoRef.current;

      if (
        video &&
        !video.paused
      ) {
        window.dispatchEvent(
          new CustomEvent(
            "ana-lucia:video-stop",
            {
              detail: {
                src,
              },
            }
          )
        );
      }
    };
  }, [src]);

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <motion.figure
      initial={{
        opacity: 0,
        y: 28,
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
      {/* =====================================================
          CABECERA
      ===================================================== */}

      <div
        className="
          mx-auto

          mb-6

          flex
          max-w-4xl

          items-center

          gap-4

          sm:mb-8
        "
      >
        {/* Número */}

        {number !== undefined && (
          <div
            className="
              flex
              h-10
              w-10
              shrink-0

              items-center
              justify-center

              rounded-full

              border
              border-pink-100/20

              bg-white/[0.04]

              font-display

              text-sm

              text-pink-100/75

              shadow-[0_0_25px_rgba(255,210,245,.10)]

              backdrop-blur-lg

              sm:h-12
              sm:w-12
              sm:text-base
            "
          >
            {String(
              number
            ).padStart(
              2,
              "0"
            )}
          </div>
        )}

        {/* Título */}

        <div className="min-w-0">
          <p
            className="
              text-[8px]
              font-medium

              uppercase

              tracking-[0.3em]

              text-pink-100/50

              sm:text-[9px]
            "
          >
            Recuerdo en movimiento
          </p>

          <h3
            className="
              mt-1.5

              font-display

              text-xl
              font-light

              text-white

              sm:text-2xl
              md:text-3xl
            "
          >
            {title}
          </h3>
        </div>
      </div>

      {/* =====================================================
          VIDEO
      ===================================================== */}

      <div
        className="
          group/video

          relative

          mx-auto

          max-w-4xl

          overflow-hidden

          rounded-[24px]

          border
          border-white/15

          bg-black/20

          shadow-[0_28px_80px_rgba(37,15,78,.25)]

          ring-1
          ring-inset
          ring-white/10

          sm:rounded-[30px]

          md:rounded-[36px]
        "
      >
        {/* Relación visual */}

        <div
          className="
            relative

            aspect-video

            w-full
          "
        >
          <video
            ref={videoRef}
            data-story-video="true"

            src={src}
            poster={poster}

            playsInline

            preload="none"

            controls={
              hasStarted
            }

            onPlay={() => {
              /*
               * Si se inició desde los controles
               * nativos también funciona.
               */

              setHasStarted(
                true
              );

              setIsPlaying(
                true
              );

              /*
               * Pausar cualquier otro video.
               */

              document
                .querySelectorAll<HTMLVideoElement>(
                  'video[data-story-video="true"]'
                )
                .forEach(
                  (
                    otherVideo
                  ) => {
                    if (
                      otherVideo !==
                        videoRef.current &&
                      !otherVideo.paused
                    ) {
                      otherVideo.pause();
                    }
                  }
                );

              notifyVideoPlay();
            }}

            onPause={() => {
              setIsPlaying(
                false
              );

              notifyVideoStop();
            }}

            onEnded={() => {
              setIsPlaying(
                false
              );

              notifyVideoStop();
            }}

            className="
              h-full
              w-full

              object-contain

              bg-black/10
            "
          />

          {/* =============================================
              PORTADA PERSONALIZADA
          ============================================= */}

          {!hasStarted && (
            <button
              type="button"

              onClick={
                handleStart
              }

              aria-label={`Reproducir ${title}`}

              className="
                absolute
                inset-0

                z-10

                flex

                items-center
                justify-center

                overflow-hidden

                focus:outline-none

                focus-visible:ring-2
                focus-visible:ring-inset
                focus-visible:ring-pink-100/60
              "
            >
              {/* Degradado */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t

                  from-black/55
                  via-black/10
                  to-black/5
                "
              />

              {/* Glow */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute
                  left-1/2
                  top-1/2

                  h-44
                  w-44

                  -translate-x-1/2
                  -translate-y-1/2

                  rounded-full

                  bg-pink-200/[0.08]

                  blur-[60px]

                  transition-all
                  duration-700

                  group-hover/video:bg-pink-200/[0.13]

                  sm:h-56
                  sm:w-56
                "
              />

              {/* Botón */}

              <div
                className="
                  relative
                  z-10

                  flex
                  flex-col

                  items-center
                  justify-center
                "
              >
                <motion.div
                  whileHover={{
                    scale: 1.06,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  className="
                    flex
                    h-16
                    w-16

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/25

                    bg-[#6f4bc0]/70

                    text-white

                    shadow-[0_12px_45px_rgba(35,13,75,.30)]

                    backdrop-blur-xl

                    transition-colors
                    duration-300

                    group-hover/video:border-pink-100/40
                    group-hover/video:bg-[#7957c8]/80

                    sm:h-20
                    sm:w-20
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      ml-1

                      text-2xl

                      sm:text-3xl
                    "
                  >
                    ▶
                  </span>
                </motion.div>

                <p
                  className="
                    mt-5

                    text-[8px]
                    font-medium

                    uppercase

                    tracking-[0.3em]

                    text-white/65

                    sm:text-[9px]
                  "
                >
                  Toca para revivir
                  este momento
                </p>
              </div>
            </button>
          )}

          {/* Indicador cuando está reproduciendo */}

          {isPlaying && (
            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                left-4
                top-4

                z-20

                rounded-full

                border
                border-white/10

                bg-black/25

                px-3
                py-1.5

                text-[8px]

                uppercase

                tracking-[0.2em]

                text-white/55

                backdrop-blur-lg
              "
            >
              Reproduciendo
            </div>
          )}
        </div>
      </div>

      {/* =====================================================
          DESCRIPCIÓN
      ===================================================== */}

      {caption.trim() && (
        <motion.figcaption
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: 0.08,
          }}
          className="
            mx-auto

            mt-5
            max-w-3xl

            px-3

            text-center

            sm:mt-6
          "
        >
          <div
            aria-hidden="true"
            className="
              mx-auto

              mb-4

              h-px
              w-12

              bg-gradient-to-r

              from-transparent
              via-pink-100/40
              to-transparent
            "
          />

          <p
            className="
              font-display

              text-base
              font-light
              italic

              leading-7

              text-[#FFF0FA]/85

              sm:text-lg
              sm:leading-8

              md:text-xl
            "
          >
            “{caption}”
          </p>
        </motion.figcaption>
      )}
    </motion.figure>
  );
}