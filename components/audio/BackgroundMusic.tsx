"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

/* =========================================================
   PLAYLIST
========================================================= */

const TRACKS = [
  {
    title:
      "Cute Joyful Ukulele Music",

    src:
      "/audio/01-cute-joyful-ukulele.mp3",
  },

  {
    title:
      "Baby Smile",

    src:
      "/audio/02-baby-smile.mp3",
  },

  {
    title:
      "Playful And Sweet Baby Piano",

    src:
      "/audio/03-playful-sweet-baby-piano.mp3",
  },

  {
    title:
      "Kris R. & GeezyDee - BOBADITA",

    src:
      "/audio/04-Bobadita.mp3",
  },
] as const;




/* =========================================================
   CONFIGURACIÓN DE AUDIO
========================================================= */

const NORMAL_VOLUME = 0.14;

const VIDEO_VOLUME = 0.015;

const FADE_DURATION = 1200;

const FADE_STEPS = 24;

type VideoEventDetail = {
  src: string;
};

/* =========================================================
   COMPONENTE
========================================================= */

export function BackgroundMusic() {
  const audioRef =
    useRef<HTMLAudioElement | null>(
      null
    );

  const fadeIntervalRef =
    useRef<ReturnType<
      typeof setInterval
    > | null>(null);

  /*
   * Nos dice si el visitante
   * quiere tener la música activa.
   */
  const wantsMusicRef =
    useRef(false);

  /*
   * Videos activos.
   */
  const activeVideosRef =
    useRef<Set<string>>(
      new Set()
    );

  const [playing, setPlaying] =
    useState(false);

  const [hasError, setHasError] =
    useState(false);

  const [
    currentTrackIndex,
    setCurrentTrackIndex,
  ] = useState(0);

  const currentTrack =
    TRACKS[currentTrackIndex];

  /* =========================================================
     LIMPIAR FADE
  ========================================================= */

  const clearFade =
    useCallback(() => {
      if (
        fadeIntervalRef.current
      ) {
        clearInterval(
          fadeIntervalRef.current
        );

        fadeIntervalRef.current =
          null;
      }
    }, []);

  /* =========================================================
     VOLUMEN OBJETIVO
  ========================================================= */

  const getTargetVolume =
    useCallback(() => {
      if (
        activeVideosRef.current
          .size > 0
      ) {
        return VIDEO_VOLUME;
      }

      return NORMAL_VOLUME;
    }, []);

  /* =========================================================
     FADE HACIA UN VOLUMEN
  ========================================================= */

  const fadeToVolume =
    useCallback(
      (
        targetVolume: number,
        duration = 700
      ) => {
        const audio =
          audioRef.current;

        if (!audio) {
          return;
        }

        if (audio.paused) {
          return;
        }

        clearFade();

        const startVolume =
          audio.volume;

        const difference =
          targetVolume -
          startVolume;

        const steps = 20;

        let currentStep = 0;

        fadeIntervalRef.current =
          setInterval(() => {
            currentStep += 1;

            const progress =
              currentStep /
              steps;

            const nextVolume =
              startVolume +
              difference *
                progress;

            audio.volume =
              Math.max(
                0,
                Math.min(
                  1,
                  nextVolume
                )
              );

            if (
              currentStep >=
              steps
            ) {
              audio.volume =
                targetVolume;

              clearFade();
            }
          }, duration / steps);
      },
      [clearFade]
    );

  /* =========================================================
     FADE IN
  ========================================================= */

  const fadeIn =
    useCallback(() => {
      const audio =
        audioRef.current;

      if (!audio) {
        return;
      }

      clearFade();

      audio.volume = 0;

      const targetVolume =
        getTargetVolume();

      const stepTime =
        FADE_DURATION /
        FADE_STEPS;

      const volumeStep =
        targetVolume /
        FADE_STEPS;

      fadeIntervalRef.current =
        setInterval(() => {
          const nextVolume =
            audio.volume +
            volumeStep;

          if (
            nextVolume >=
            targetVolume
          ) {
            audio.volume =
              targetVolume;

            clearFade();

            return;
          }

          audio.volume =
            Math.min(
              targetVolume,
              nextVolume
            );
        }, stepTime);
    }, [
      clearFade,
      getTargetVolume,
    ]);

  /* =========================================================
     FADE OUT
  ========================================================= */

  const fadeOut =
    useCallback(() => {
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
    }, [
      clearFade,
    ]);

  /* =========================================================
     EVENTOS DEL AUDIO
  ========================================================= */

  useEffect(() => {
    const audio =
      audioRef.current;

    if (!audio) {
      return;
    }

    const handlePlay = () => {
      setPlaying(true);

      setHasError(false);
    };

    const handlePause = () => {
      setPlaying(false);
    };

    const handleError = () => {
      console.error(
        `No se pudo cargar: ${currentTrack.src}`
      );

      wantsMusicRef.current =
        false;

      setPlaying(false);

      setHasError(true);
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
  }, [
    currentTrack.src,
  ]);

  /* =========================================================
     CAMBIAR CANCIÓN
  ========================================================= */

  const selectTrack =
    useCallback(
      (
        newIndex: number
      ) => {
        clearFade();

        setHasError(false);

        setCurrentTrackIndex(
          newIndex
        );
      },
      [clearFade]
    );

  const previousTrack =
    useCallback(() => {
      const newIndex =
        currentTrackIndex === 0
          ? TRACKS.length - 1
          : currentTrackIndex - 1;

      selectTrack(newIndex);
    }, [
      currentTrackIndex,
      selectTrack,
    ]);

  const nextTrack =
    useCallback(() => {
      const newIndex =
        currentTrackIndex ===
          TRACKS.length - 1
          ? 0
          : currentTrackIndex + 1;

      selectTrack(newIndex);
    }, [
      currentTrackIndex,
      selectTrack,
    ]);

  /* =========================================================
     CUANDO CAMBIA LA CANCIÓN
  ========================================================= */

  useEffect(() => {
    const audio =
      audioRef.current;

    if (!audio) {
      return;
    }

    /*
     * Cargamos el nuevo archivo.
     */
    audio.load();

    audio.volume = 0;

    /*
     * Si la música estaba apagada,
     * solamente cambiamos la pista.
     */
    if (
      !wantsMusicRef.current
    ) {
      return;
    }

    audio
      .play()
      .then(() => {
        fadeIn();
      })
      .catch((error) => {
        console.error(
          "No se pudo reproducir la canción:",
          error
        );

        setHasError(true);
      });
  }, [
    currentTrackIndex,
    fadeIn,
  ]);

  /* =========================================================
     CUANDO TERMINA UNA CANCIÓN
  ========================================================= */

  const handleTrackEnded =
    useCallback(() => {
      if (
        !wantsMusicRef.current
      ) {
        return;
      }

      const newIndex =
        currentTrackIndex ===
          TRACKS.length - 1
          ? 0
          : currentTrackIndex + 1;

      setCurrentTrackIndex(
        newIndex
      );
    }, [
      currentTrackIndex,
    ]);

  /* =========================================================
     EVENTOS DE VIDEO
  ========================================================= */

  useEffect(() => {
    const handleVideoPlay = (
      event: Event
    ) => {
      const customEvent =
        event as CustomEvent<VideoEventDetail>;

      if (
        customEvent.detail?.src
      ) {
        activeVideosRef.current.add(
          customEvent.detail.src
        );
      }

      const audio =
        audioRef.current;

      if (
        !audio ||
        audio.paused
      ) {
        return;
      }

      fadeToVolume(
        VIDEO_VOLUME,
        550
      );
    };

    const handleVideoStop = (
      event: Event
    ) => {
      const customEvent =
        event as CustomEvent<VideoEventDetail>;

      if (
        customEvent.detail?.src
      ) {
        activeVideosRef.current.delete(
          customEvent.detail.src
        );
      }

      const audio =
        audioRef.current;

      if (
        !audio ||
        audio.paused
      ) {
        return;
      }

      if (
        activeVideosRef.current
          .size === 0
      ) {
        fadeToVolume(
          NORMAL_VOLUME,
          900
        );
      }
    };

    window.addEventListener(
      "ana-lucia:video-play",
      handleVideoPlay
    );

    window.addEventListener(
      "ana-lucia:video-stop",
      handleVideoStop
    );

    return () => {
      window.removeEventListener(
        "ana-lucia:video-play",
        handleVideoPlay
      );

      window.removeEventListener(
        "ana-lucia:video-stop",
        handleVideoStop
      );
    };
  }, [
    fadeToVolume,
  ]);

  /* =========================================================
     REPRODUCIR / PAUSAR
  ========================================================= */

  const toggleMusic =
    async () => {
      const audio =
        audioRef.current;

      if (!audio) {
        return;
      }

      /*
       * Apagar música.
       */
      if (
        wantsMusicRef.current
      ) {
        wantsMusicRef.current =
          false;

        fadeOut();

        return;
      }

      /*
       * Encender música.
       */
      try {
        wantsMusicRef.current =
          true;

        setHasError(false);

        clearFade();

        audio.volume = 0;

        await audio.play();

        fadeIn();
      } catch (error) {
        console.error(
          "No se pudo iniciar la música:",
          error
        );

        wantsMusicRef.current =
          false;

        setPlaying(false);

        setHasError(true);
      }
    };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="metadata"
        onEnded={
          handleTrackEnded
        }
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 10,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 1.2,
          duration: 0.55,
          ease: "easeOut",
        }}
        className="
          group

          fixed

          bottom-4
          right-4

          z-[150]

          flex
          items-center

          gap-2

          sm:bottom-5
          sm:right-5

          md:bottom-6
          md:right-6
        "
      >
        {/* =================================================
            INFORMACIÓN DE CANCIÓN
        ================================================= */}

        <AnimatePresence>
          {playing && (
            <motion.div
              initial={{
                opacity: 0,
                x: 12,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: 12,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                absolute

                bottom-[62px]
                right-0

                w-[210px]

                rounded-[18px]

                border
                border-white/10

                bg-[#4b2b88]/85

                px-4
                py-3

                text-right

                shadow-[0_18px_50px_rgba(30,12,65,.26)]

                backdrop-blur-xl

                sm:bottom-[70px]

                md:w-[240px]
              "
            >
              <p
                className="
                  text-[8px]

                  uppercase

                  tracking-[0.25em]

                  text-pink-100/50
                "
              >
                Reproduciendo
              </p>

              <p
                className="
                  mt-1.5

                  truncate

                  font-display

                  text-sm
                  font-light

                  text-white/90

                  sm:text-base
                "
              >
                {currentTrack.title}
              </p>

              <div
                className="
                  mt-2

                  flex
                  items-center
                  justify-end

                  gap-2

                  text-[8px]

                  tracking-[0.18em]

                  text-white/30
                "
              >
                <span>
                  {currentTrackIndex +
                    1}
                </span>

                <span>
                  /
                </span>

                <span>
                  {TRACKS.length}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =================================================
            ANTERIOR
        ================================================= */}

        <AnimatePresence>
          {playing && (
            <motion.button
              type="button"

              initial={{
                opacity: 0,
                x: 16,
                scale: 0.8,
              }}

              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                x: 16,
                scale: 0.8,
              }}

              transition={{
                duration: 0.25,
              }}

              onClick={
                previousTrack
              }

              aria-label="Canción anterior"

              className="
                flex
                h-9
                w-9

                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-[#5b38a4]/75

                text-sm

                text-white/65

                shadow-[0_8px_25px_rgba(30,12,65,.20)]

                backdrop-blur-xl

                transition-all
                duration-300

                hover:border-pink-100/25
                hover:bg-[#6845b5]/90
                hover:text-white

                active:scale-90

                sm:h-10
                sm:w-10
              "
            >
              ←
            </motion.button>
          )}
        </AnimatePresence>

        {/* =================================================
            PLAY / PAUSE
        ================================================= */}

        <button
          type="button"

          onClick={
            toggleMusic
          }

          aria-label={
            playing
              ? "Pausar música"
              : "Reproducir música"
          }

          aria-pressed={
            playing
          }

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
                    bg-[#693d76]/85
                  `
                : playing
                  ? `
                      border-pink-100/35
                      bg-[#7650c8]/92
                    `
                  : `
                      border-white/15
                      bg-[#6844b8]/82

                      hover:border-pink-100/30
                      hover:bg-[#7250c5]/92
                    `
            }
          `}
        >
          {/* Glow */}

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

          {/* Icono */}

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

          {/* Pulso */}

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
            SIGUIENTE
        ================================================= */}

        <AnimatePresence>
          {playing && (
            <motion.button
              type="button"

              initial={{
                opacity: 0,
                x: -16,
                scale: 0.8,
              }}

              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                x: -16,
                scale: 0.8,
              }}

              transition={{
                duration: 0.25,
              }}

              onClick={
                nextTrack
              }

              aria-label="Siguiente canción"

              className="
                flex
                h-9
                w-9

                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-[#5b38a4]/75

                text-sm

                text-white/65

                shadow-[0_8px_25px_rgba(30,12,65,.20)]

                backdrop-blur-xl

                transition-all
                duration-300

                hover:border-pink-100/25
                hover:bg-[#6845b5]/90
                hover:text-white

                active:scale-90

                sm:h-10
                sm:w-10
              "
            >
              →
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}