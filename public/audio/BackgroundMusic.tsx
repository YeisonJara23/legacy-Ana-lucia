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

  const [ready, setReady] =
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
     CONFIGURACIÓN
  ========================================================= */

  useEffect(() => {
    const audio =
      audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = 0;

    const handleCanPlay = () => {
      setReady(true);
    };

    const handlePause = () => {
      setPlaying(false);
    };

    const handlePlay = () => {
      setPlaying(true);
    };

    audio.addEventListener(
      "canplay",
      handleCanPlay
    );

    audio.addEventListener(
      "pause",
      handlePause
    );

    audio.addEventListener(
      "play",
      handlePlay
    );

    return () => {
      clearFade();

      audio.removeEventListener(
        "canplay",
        handleCanPlay
      );

      audio.removeEventListener(
        "pause",
        handlePause
      );

      audio.removeEventListener(
        "play",
        handlePlay
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
        if (
          audio.volume +
            volumeStep >=
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
            audio.volume +
              volumeStep
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
        if (
          audio.volume -
            volumeStep <=
          0
        ) {
          audio.volume = 0;

          audio.pause();

          clearFade();

          return;
        }

        audio.volume =
          Math.max(
            0,
            audio.volume -
              volumeStep
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

      if (playing) {
        fadeOut();
        return;
      }

      try {
        audio.volume = 0;

        await audio.play();

        fadeIn();
      } catch (error) {
        console.error(
          "No se pudo reproducir la música:",
          error
        );
      }
    };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/ana-lucia-theme.mp3"
        preload="metadata"
        loop
      />

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
          fixed

          bottom-4
          right-4

          z-[60]

          sm:bottom-5
          sm:right-5

          md:bottom-6
          md:right-6
        "
      >
        <button
          type="button"
          onClick={toggleMusic}
          disabled={!ready}
          aria-label={
            playing
              ? "Pausar música"
              : "Reproducir música"
          }
          aria-pressed={
            playing
          }
          className="
            group

            relative

            flex
            h-12
            w-12

            items-center
            justify-center

            overflow-hidden

            rounded-full

            border
            border-white/15

            bg-[#6844b8]/75

            text-white

            shadow-[0_12px_40px_rgba(37,15,78,.24)]

            backdrop-blur-xl

            transition-all
            duration-300

            hover:border-pink-100/30
            hover:bg-[#7250c5]/85

            active:scale-[0.94]

            disabled:cursor-not-allowed
            disabled:opacity-40

            sm:h-14
            sm:w-14
          "
        >
          {/* Glow */}

          <div
            aria-hidden="true"
            className={`
              pointer-events-none

              absolute
              inset-0

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

                bg-pink-200/10

                blur-lg
              "
            />
          </div>

          {/* ICONO */}

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
                "
              >
                ♪
              </span>
            )}
          </div>

          {/* Pulso */}

          {playing && (
            <motion.div
              aria-hidden="true"
              animate={{
                scale: [
                  1,
                  1.22,
                  1,
                ],

                opacity: [
                  0.2,
                  0,
                  0.2,
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
                border-pink-100/40
              "
            />
          )}
        </button>

        {/* Texto escritorio */}

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

            bg-[#4c2c8a]/75

            px-3
            py-1.5

            text-[8px]

            uppercase

            tracking-[0.22em]

            text-white/60

            opacity-0

            backdrop-blur-lg

            transition-opacity
            duration-300

            group-hover:opacity-100

            md:block
          "
        >
          {playing
            ? "Pausar música"
            : "Música"}
        </div>
      </motion.div>
    </>
  );
}