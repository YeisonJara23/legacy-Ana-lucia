"use client";

import Image from "next/image";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* =========================================================
   TIPOS
========================================================= */

export type LightboxMemory = {
  src: string;
  alt: string;
  caption: string;

  chapter?: string;
  title?: string;
};

type MemoryLightboxContextValue = {
  openMemory: (src: string) => void;
};

type MemoryLightboxProviderProps = {
  children: ReactNode;
  memories: LightboxMemory[];
};

/* =========================================================
   CONTEXTO
========================================================= */

const MemoryLightboxContext =
  createContext<MemoryLightboxContextValue | null>(
    null
  );

/* =========================================================
   PROVIDER
========================================================= */

export function MemoryLightboxProvider({
  children,
  memories,
}: MemoryLightboxProviderProps) {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  const activeMemory =
    activeIndex !== null
      ? memories[activeIndex]
      : null;

  const hasMultiple =
    memories.length > 1;

  /* =======================================================
     ABRIR
  ======================================================= */

  const openMemory = useCallback(
    (src: string) => {
      const index =
        memories.findIndex(
          (memory) =>
            memory.src === src
        );

      if (index >= 0) {
        setActiveIndex(index);
      }
    },
    [memories]
  );

  /* =======================================================
     CERRAR
  ======================================================= */

  const closeMemory =
    useCallback(() => {
      setActiveIndex(null);
    }, []);

  /* =======================================================
     ANTERIOR
  ======================================================= */

  const previousMemory =
    useCallback(() => {
      setActiveIndex(
        (currentIndex) => {
          if (
            currentIndex === null ||
            memories.length === 0
          ) {
            return currentIndex;
          }

          return currentIndex === 0
            ? memories.length - 1
            : currentIndex - 1;
        }
      );
    }, [memories.length]);

  /* =======================================================
     SIGUIENTE
  ======================================================= */

  const nextMemory =
    useCallback(() => {
      setActiveIndex(
        (currentIndex) => {
          if (
            currentIndex === null ||
            memories.length === 0
          ) {
            return currentIndex;
          }

          return currentIndex ===
            memories.length - 1
            ? 0
            : currentIndex + 1;
        }
      );
    }, [memories.length]);

  /* =======================================================
     TECLADO
  ======================================================= */

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        closeMemory();
        return;
      }

      if (
        event.key === "ArrowLeft"
      ) {
        previousMemory();
        return;
      }

      if (
        event.key === "ArrowRight"
      ) {
        nextMemory();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    activeIndex,
    closeMemory,
    nextMemory,
    previousMemory,
  ]);

  /* =======================================================
     BLOQUEAR SCROLL
  ======================================================= */

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [activeIndex]);

  /* =======================================================
     CONTEXTO
  ======================================================= */

  const contextValue =
    useMemo<MemoryLightboxContextValue>(
      () => ({
        openMemory,
      }),
      [openMemory]
    );

  return (
    <MemoryLightboxContext.Provider
      value={contextValue}
    >
      {children}

      <AnimatePresence>
        {activeMemory &&
          activeIndex !== null && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              role="dialog"
              aria-modal="true"
              aria-label={`Recuerdo: ${activeMemory.alt}`}
              className="
                fixed
                inset-0
                z-[200]

                flex
                items-center
                justify-center

                bg-[#1c0d38]/90

                px-3
                py-3

                backdrop-blur-xl

                sm:px-6
                sm:py-6
              "
            >
              {/* ===========================================
                  FONDO PARA CERRAR
              =========================================== */}

              <button
                type="button"
                aria-label="Cerrar recuerdo"
                onClick={closeMemory}
                className="
                  absolute
                  inset-0
                  cursor-default
                "
              />

              {/* ===========================================
                  LUZ AMBIENTAL
              =========================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute
                  left-1/2
                  top-1/2

                  h-[300px]
                  w-[300px]

                  -translate-x-1/2
                  -translate-y-1/2

                  rounded-full

                  bg-pink-200/[0.08]

                  blur-[90px]

                  sm:h-[450px]
                  sm:w-[450px]

                  md:h-[650px]
                  md:w-[650px]
                  md:blur-[150px]
                "
              />

              {/* ===========================================
                  CONTENEDOR
              =========================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.97,
                  y: 15,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="
                  relative
                  z-10

                  flex

                  h-[calc(100svh-1.5rem)]
                  w-full
                  max-w-7xl

                  flex-col

                  overflow-hidden

                  rounded-[26px]

                  border
                  border-white/10

                  bg-[#2f1859]/35

                  shadow-[0_30px_120px_rgba(0,0,0,.45)]

                  backdrop-blur-xl

                  sm:h-[calc(100svh-3rem)]
                  sm:rounded-[34px]
                "
              >
                {/* =========================================
                    CABECERA
                ========================================= */}

                <div
                  className="
                    relative
                    z-30

                    flex
                    h-16
                    shrink-0

                    items-center
                    justify-between

                    border-b
                    border-white/[0.06]

                    px-4

                    sm:h-20
                    sm:px-6
                  "
                >
                  <div className="min-w-0">
                    <p
                      className="
                        text-[8px]

                        uppercase

                        tracking-[0.3em]

                        text-pink-100/50

                        sm:text-[9px]
                      "
                    >
                      {activeMemory.chapter ??
                        "Para siempre"}
                    </p>

                    <p
                      className="
                        mt-1

                        truncate

                        font-display

                        text-base
                        font-light

                        text-white/80

                        sm:text-lg
                      "
                    >
                      {activeMemory.title ??
                        "Un recuerdo"}
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    {/* Contador escritorio */}

                    <span
                      className="
                        hidden

                        text-[9px]

                        tracking-[0.18em]

                        text-white/30

                        sm:block
                      "
                    >
                      {String(
                        activeIndex + 1
                      ).padStart(2, "0")}
                      {" / "}
                      {String(
                        memories.length
                      ).padStart(2, "0")}
                    </span>

                    {/* Cerrar */}

                    <button
                      type="button"
                      onClick={closeMemory}
                      aria-label="Cerrar recuerdo"
                      className="
                        flex
                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-white/10

                        bg-white/[0.05]

                        text-xl
                        font-light

                        text-white/70

                        transition-all
                        duration-300

                        hover:border-white/20
                        hover:bg-white/10
                        hover:text-white

                        active:scale-95

                        sm:h-11
                        sm:w-11
                      "
                    >
                      ×
                    </button>
                  </div>
                </div>

                {/* =========================================
                    FOTO
                ========================================= */}

                <div
                  className="
                    relative

                    flex
                    min-h-0
                    flex-1

                    items-center
                    justify-center

                    overflow-hidden

                    px-2
                    py-2

                    sm:px-6
                    sm:py-4

                    md:px-20
                  "
                >
                  <AnimatePresence
                    mode="wait"
                    initial={false}
                  >
                    <motion.div
                      key={activeMemory.src}
                      initial={{
                        opacity: 0,
                        scale: 0.975,
                        x: 15,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.985,
                        x: -15,
                      }}
                      transition={{
                        duration: 0.28,
                        ease: "easeOut",
                      }}
                      drag={
                        hasMultiple
                          ? "x"
                          : false
                      }
                      dragConstraints={{
                        left: 0,
                        right: 0,
                      }}
                      dragElastic={0.16}
                      onDragEnd={(
                        _event,
                        info
                      ) => {
                        if (
                          info.offset.x <
                            -70 ||
                          info.velocity.x <
                            -500
                        ) {
                          nextMemory();
                          return;
                        }

                        if (
                          info.offset.x >
                            70 ||
                          info.velocity.x >
                            500
                        ) {
                          previousMemory();
                        }
                      }}
                      className="
                        relative

                        h-full
                        w-full

                        cursor-grab

                        touch-pan-y

                        active:cursor-grabbing
                      "
                    >
                      <Image
                        src={
                          activeMemory.src
                        }
                        alt={
                          activeMemory.alt
                        }
                        fill
                        priority
                        sizes="100vw"
                        draggable={false}
                        className="
                          select-none
                          object-contain
                        "
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* =======================================
                      ANTERIOR
                  ======================================= */}

                  {hasMultiple && (
                    <button
                      type="button"
                      onClick={
                        previousMemory
                      }
                      aria-label="Recuerdo anterior"
                      className="
                        absolute

                        left-3
                        top-1/2

                        z-20

                        hidden

                        h-11
                        w-11

                        -translate-y-1/2

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-white/10

                        bg-[#2c174f]/55

                        text-xl

                        text-white/65

                        backdrop-blur-lg

                        transition-all
                        duration-300

                        hover:border-pink-100/25
                        hover:bg-white/10
                        hover:text-white

                        md:flex
                      "
                    >
                      ←
                    </button>
                  )}

                  {/* =======================================
                      SIGUIENTE
                  ======================================= */}

                  {hasMultiple && (
                    <button
                      type="button"
                      onClick={
                        nextMemory
                      }
                      aria-label="Siguiente recuerdo"
                      className="
                        absolute

                        right-3
                        top-1/2

                        z-20

                        hidden

                        h-11
                        w-11

                        -translate-y-1/2

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-white/10

                        bg-[#2c174f]/55

                        text-xl

                        text-white/65

                        backdrop-blur-lg

                        transition-all
                        duration-300

                        hover:border-pink-100/25
                        hover:bg-white/10
                        hover:text-white

                        md:flex
                      "
                    >
                      →
                    </button>
                  )}
                </div>

                {/* =========================================
                    DESCRIPCIÓN
                ========================================= */}

                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  <motion.div
                    key={`${activeMemory.src}-caption`}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.04,
                    }}
                    className="
                      relative
                      z-20

                      shrink-0

                      border-t
                      border-white/[0.06]

                      bg-[#2b1553]/45

                      px-5
                      pb-5
                      pt-4

                      text-center

                      backdrop-blur-xl

                      sm:px-10
                      sm:pb-6
                      sm:pt-5
                    "
                  >
                    <div
                      aria-hidden="true"
                      className="
                        mx-auto

                        mb-3

                        h-px
                        w-14

                        bg-gradient-to-r

                        from-transparent
                        via-pink-100/45
                        to-transparent
                      "
                    />

                    <p
                      className="
                        mx-auto

                        max-w-3xl

                        font-display

                        text-base
                        font-light
                        italic

                        leading-6

                        text-[#FFF0FA]

                        sm:text-lg
                        sm:leading-7

                        md:text-xl
                        md:leading-8
                      "
                    >
                      {activeMemory.caption}
                    </p>

                    {/* Contador móvil */}

                    <div
                      className="
                        mt-3

                        flex
                        items-center
                        justify-center

                        gap-2

                        text-[8px]

                        tracking-[0.2em]

                        text-white/30

                        sm:hidden
                      "
                    >
                      <span>
                        {String(
                          activeIndex + 1
                        ).padStart(2, "0")}
                      </span>

                      <span>•</span>

                      <span>
                        {String(
                          memories.length
                        ).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Ayuda táctil */}

                    {hasMultiple && (
                      <p
                        className="
                          mt-2

                          text-[8px]

                          uppercase

                          tracking-[0.18em]

                          text-white/20

                          md:hidden
                        "
                      >
                        Desliza para continuar
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>
    </MemoryLightboxContext.Provider>
  );
}

/* =========================================================
   HOOK
========================================================= */

export function useMemoryLightbox() {
  const context =
    useContext(
      MemoryLightboxContext
    );

  if (!context) {
    throw new Error(
      "useMemoryLightbox debe usarse dentro de MemoryLightboxProvider"
    );
  }

  return context;
}