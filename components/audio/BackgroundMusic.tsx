"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

const NORMAL_VOLUME = 0.14;

const FADE_DURATION = 1200;

const FADE_STEPS = 24;

export function BackgroundMusic() {
  const audioRef =
    useRef<HTMLAudioElement | null>(
      null
    );

  const fadeIntervalRef =
    useRef<ReturnType<
      typeof setInterval
    > | null>(null);

  const [playing, setPlaying] =
    useState(false);

  const [hasError, setHasError] =
    useState(false);

  /* =========================================================
     LIMPIAR FADE
  ========================================================= */

  const clearFade = () => {
    if (
      fadeIntervalRef.current
    ) {
      clearInterval(
        fadeIntervalRef.current
      );

      fadeIntervalRef.current =
        null;
    }
  };

  /* =========================================================
     CONFIGURACIÓN DEL AUDIO
  ========================================================= */

  useEffect(() => {
    const audio =
      audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = 0;

    const handlePlay = () => {
      setPlaying(true);
      setHasError(false);
    };

    const handlePause = () => {
      setPlaying(false);
    };

    const handleError = () => {
      console.error(
        "No se pudo cargar ana-lucia-theme.mp3"
      );

      setHasError(true);
      setPlaying(false);
    };

    audio.addEventListener(
      "play",
      handlePlay
    );

    audio.addEventListener(
      "pause",
      handlePause
    );

    audio.addEventListener(
      "error",
      handleError
    );

    return () => {
      clearFade();

      audio.removeEventListener(
        "play",
        handlePlay
      );

      audio.removeEventListener(
        "pause",
        handlePause
      );

      audio.removeEventListener(
        "error",
        handleError
      );
    };
  }, []);

  /* =========================================================
     FADE IN
  ========================================================= */

  const fadeIn = () => {
    const audio =
      audioRef.current;

    if (!audio) {
      return;
    }

    clearFade();

    audio.volume = 0;

    const stepTime =
      FADE_DURATION /
      FADE_STEPS;

    const volumeStep =
      NORMAL_VOLUME /
      FADE_STEPS;

    fadeIntervalRef.current =
      setInterval(() => {
        const nextVolume =
          audio.volume +
          volumeStep;

        if (
          nextVolume >=
          NORMAL_VOLUME
        ) {
          audio.volume =
            NORMAL_VOLUME;

          clearFade();

          return;
        }

        audio.volume =
          Math.min(
            NORMAL_VOLUME,
            nextVolume
          );
      }, stepTime);
  };

  /* =========================================================
     FADE OUT
  ========================================================= */

  const fadeOut = () => {
    const audio =
      audioRef.current;

    if (!audio) {
      return;
    }

    clearFade();

    const stepTime =
      FADE_DURATION /
      FADE_STEPS;

    const volumeStep =
      Math.max(
        audio.volume /
          FADE_STEPS,
        0.001
      );

    fadeIntervalRef.current =
      setInterval(() => {
        const nextVolume =
          audio.volume -
          volumeStep;

        if (
          nextVolume <= 0
        ) {
          audio.volume = 0;

          audio.pause();

          clearFade();

          return;
        }

        audio.volume =
          Math.max(
            0,
            nextVolume
          );
      }, stepTime);
  };

  /* =========================================================
     PLAY / PAUSE
  ========================================================= */

  const toggleMusic =
    async () => {
      const audio =
        audioRef.current;

      if (!audio) {
        return;
      }

      /*
       * Si ya está reproduciendo,
       * bajamos suavemente el volumen.
       */

      if (!audio.paused) {
        fadeOut();
        return;
      }

      try {
        setHasError(false);

        /*
         * El clic del usuario permite
         * iniciar el audio en navegadores
         * de escritorio y móviles.
         */

        audio.volume = 0;

        await audio.play();

        fadeIn();
      } catch (error) {
        console.error(
          "No se pudo reproducir la música:",
          error
        );

        setHasError(true);
      }
    };

  return (
    <>
      {/* =====================================================
          AUDIO
      ===================================================== */}

      <audio
        ref={audioRef}
        src="/audio/ana-lucia-theme.mp3"
        preload="metadata"
        loop
      />

      {/* =====================================================
          CONTROL
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 10,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 1.3,
          duration: 0.6,
          ease: "easeOut",
        }}
        className="
          group

          fixed

          bottom-4
          right-4

          z-[150]

          sm:bottom-5
          sm:right-5

          md:bottom-6
          md:right-6
        "
      >
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={
            playing
              ? "Pausar música"
              : "Reproducir música"
          }
          aria-pressed={playing}
          className={`
            relative

            flex
            h-12
            w-12

            items-center
            justify-center

            overflow-visible

            rounded-full

            border

            text-white

            shadow-[0_12px_40px_rgba(37,15,78,.30)]

            backdrop-blur-xl

            transition-all
            duration-300

            hover:scale-[1.04]

            active:scale-[0.94]

            sm:h-14
            sm:w-14

            ${
              hasError
                ? `
                    border-red-200/30
                    bg-[#693d76]/80
                  `
                : playing
                  ? `
                      border-pink-100/35
                      bg-[#7650c8]/90
                    `
                  : `
                      border-white/15
                      bg-[#6844b8]/80

                      hover:border-pink-100/30
                      hover:bg-[#7250c5]/90
                    `
            }
          `}
        >
          {/* =============================================
              LUZ INTERIOR
          ============================================= */}

          <div
            aria-hidden="true"
            className={`
              pointer-events-none

              absolute
              inset-0

              overflow-hidden

              rounded-full

              transition-opacity
              duration-500

              ${
                playing
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          >
            <div
              className="
                absolute
                inset-2

                rounded-full

                bg-pink-200/15

                blur-lg
              "
            />
          </div>

          {/* =============================================
              ICONO
          ============================================= */}

          <div
            className="
              relative
              z-10

              flex
              items-center
              justify-center
            "
          >
            {playing ? (
              <div
                aria-hidden="true"
                className="
                  flex
                  h-5

                  items-center

                  gap-[3px]
                "
              >
                <motion.span
                  animate={{
                    height: [
                      7,
                      16,
                      9,
                      14,
                      7,
                    ],
                  }}
                  transition={{
                    duration: 1.1,
                    repeat:
                      Infinity,
                    ease:
                      "easeInOut",
                  }}
                  className="
                    block
                    w-[2px]

                    rounded-full

                    bg-pink-100
                  "
                />

                <motion.span
                  animate={{
                    height: [
                      14,
                      8,
                      17,
                      7,
                      14,
                    ],
                  }}
                  transition={{
                    duration: 1.25,
                    repeat:
                      Infinity,
                    ease:
                      "easeInOut",
                  }}
                  className="
                    block
                    w-[2px]

                    rounded-full

                    bg-white
                  "
                />

                <motion.span
                  animate={{
                    height: [
                      9,
                      17,
                      7,
                      15,
                      9,
                    ],
                  }}
                  transition={{
                    duration: 1.05,
                    repeat:
                      Infinity,
                    ease:
                      "easeInOut",
                  }}
                  className="
                    block
                    w-[2px]

                    rounded-full

                    bg-pink-100
                  "
                />
              </div>
            ) : (
              <span
                aria-hidden="true"
                className="
                  font-display

                  text-xl

                  text-pink-100

                  sm:text-2xl
                "
              >
                ♪
              </span>
            )}
          </div>

          {/* =============================================
              PULSO
          ============================================= */}

          {playing && (
            <motion.div
              aria-hidden="true"
              animate={{
                scale: [
                  1,
                  1.25,
                  1,
                ],

                opacity: [
                  0.25,
                  0,
                  0.25,
                ],
              }}
              transition={{
                duration: 2.5,
                repeat:
                  Infinity,
                ease:
                  "easeOut",
              }}
              className="
                pointer-events-none

                absolute
                inset-0

                rounded-full

                border
                border-pink-100/45
              "
            />
          )}
        </button>

        {/* =================================================
            TEXTO EN ESCRITORIO
        ================================================= */}

        <div
          className="
            pointer-events-none

            absolute

            right-16
            top-1/2

            hidden

            -translate-y-1/2

            whitespace-nowrap

            rounded-full

            border
            border-white/10

            bg-[#4c2c8a]/80

            px-3
            py-1.5

            text-[8px]

            uppercase

            tracking-[0.22em]

            text-white/65

            opacity-0

            shadow-[0_10px_30px_rgba(30,12,65,.22)]

            backdrop-blur-lg

            transition-all
            duration-300

            group-hover:opacity-100

            md:block
          "
        >
          {hasError
            ? "Audio no disponible"
            : playing
              ? "Pausar música"
              : "Música"}
        </div>
      </motion.div>
    </>
  );
}