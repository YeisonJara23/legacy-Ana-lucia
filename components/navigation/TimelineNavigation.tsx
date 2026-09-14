"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  TimelineNavigationItem,
} from "./TimelineNavigationItem";

/*
 * =========================================================
 * CAPÍTULOS
 * =========================================================
 *
 * Los IDs deben coincidir exactamente con los de
 * ana-lucia-media.ts.
 *
 * Esta lista es pequeña a propósito:
 * evitamos importar todo anaLuciaMedia al navegador.
 */

const chapters = [
  {
    id: "01-nacimiento-y-primer-dia",
    number: "01",
    title: "El día que llegaste",
  },

  {
    id: "02-primeros-dias",
    number: "02",
    title: "Descubriendo el mundo",
  },

  {
    id: "03-videos-primeros-recuerdos",
    number: "03",
    title: "Recuerdos en movimiento",
  },

  {
    id: "04-familia-y-primer-mes",
    number: "04",
    title: "Nuestro primer mes contigo",
  },

  {
    id: "05-segundo-mes-y-crecimiento",
    number: "05",
    title: "Cada día, algo nuevo",
  },
] as const;

export function TimelineNavigation() {
  const [activeId, setActiveId] =
    useState<string>(
      chapters[0].id
    );

  const [mobileOpen, setMobileOpen] =
    useState(false);

  /*
   * =========================================================
   * DETECTAR CAPÍTULO ACTUAL
   * =========================================================
   *
   * IntersectionObserver es preferible a escuchar
   * constantemente el evento scroll.
   */

  useEffect(() => {
    const elements =
      chapters
        .map((chapter) =>
          document.getElementById(
            chapter.id
          )
        )
        .filter(
          (
            element
          ): element is HTMLElement =>
            element !== null
        );

    if (!elements.length) {
      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          /*
           * Solo nos interesa el elemento que
           * está atravesando aproximadamente
           * la zona central de la pantalla.
           */

          const visible =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          if (!visible.length) {
            return;
          }

          setActiveId(
            visible[0].target.id
          );
        },
        {
          /*
           * Creamos una banda imaginaria
           * en la zona central del viewport.
           */
          rootMargin:
            "-35% 0px -50% 0px",

          threshold: 0,
        }
      );

    elements.forEach(
      (element) =>
        observer.observe(element)
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * Cerrar menú con Escape.
   */

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (
        event.key === "Escape"
      ) {
        setMobileOpen(false);
      }
    };

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
  }, [mobileOpen]);

  const activeIndex =
    chapters.findIndex(
      (chapter) =>
        chapter.id === activeId
    );

  const safeActiveIndex =
    activeIndex < 0
      ? 0
      : activeIndex;

  const activeChapter =
    chapters[safeActiveIndex];

  const progress =
    chapters.length > 1
      ? (safeActiveIndex /
          (chapters.length - 1)) *
        100
      : 0;

  const closeMobileMenu =
    () => {
      setMobileOpen(false);
    };

  return (
    <>
      {/* =====================================================
          ESCRITORIO
      ===================================================== */}

      <nav
        aria-label="Capítulos de la historia"
        className="
          fixed

          left-5
          top-1/2

          z-40

          hidden

          -translate-y-1/2

          lg:block
          xl:left-8
        "
      >
        <div
          className="
            relative

            rounded-[28px]

            border
            border-white/[0.08]

            bg-[#6d48c5]/35

            px-3
            py-5

            shadow-[0_18px_55px_rgba(35,13,74,.12)]

            backdrop-blur-xl
          "
        >
          {/* Texto superior */}

          <div
            className="
              mb-4

              flex
              justify-center
            "
          >
            <span
              className="
                [writing-mode:vertical-rl]

                rotate-180

                text-[8px]

                uppercase

                tracking-[0.32em]

                text-white/30
              "
            >
              Nuestra historia
            </span>
          </div>

          {/* Línea de progreso */}

          <div
            aria-hidden="true"
            className="
              absolute

              left-[25px]
              top-[70px]
              bottom-[23px]

              w-px

              overflow-hidden

              bg-white/10
            "
          >
            <div
              className="
                absolute
                left-0
                top-0

                w-full

                bg-gradient-to-b

                from-pink-100/80
                via-pink-200/60
                to-white/35

                transition-[height]
                duration-700
                ease-out
              "
              style={{
                height: `${progress}%`,
              }}
            />
          </div>

          {/* Capítulos */}

          <div
            className="
              relative
              z-10

              flex
              flex-col

              gap-4
            "
          >
            {chapters.map(
              (chapter) => (
                <TimelineNavigationItem
                  key={
                    chapter.id
                  }
                  id={
                    chapter.id
                  }
                  number={
                    chapter.number
                  }
                  title={
                    chapter.title
                  }
                  active={
                    activeId ===
                    chapter.id
                  }
                />
              )
            )}
          </div>
        </div>
      </nav>

      {/* =====================================================
          MÓVIL Y TABLET
      ===================================================== */}

      <div
        className="
          fixed

          bottom-4
          left-4

          z-50

          lg:hidden

          sm:bottom-5
          sm:left-5
        "
      >
        <button
          type="button"

          onClick={() =>
            setMobileOpen(true)
          }

          aria-label="Abrir navegación de capítulos"

          aria-expanded={
            mobileOpen
          }

          className="
            group

            flex
            items-center

            gap-3

            rounded-full

            border
            border-white/15

            bg-[#6945bd]/75

            px-3
            py-2.5

            shadow-[0_12px_40px_rgba(38,14,79,.24)]

            backdrop-blur-xl

            transition-all
            duration-300

            active:scale-[0.97]

            sm:px-4
          "
        >
          {/* Número */}

          <span
            className="
              flex
              h-8
              w-8

              items-center
              justify-center

              rounded-full

              border
              border-pink-100/25

              bg-white/[0.07]

              font-display

              text-sm

              text-white
            "
          >
            {activeChapter.number}
          </span>

          {/* Texto */}

          <div
            className="
              max-w-[145px]

              text-left

              sm:max-w-[190px]
            "
          >
            <p
              className="
                text-[8px]

                uppercase

                tracking-[0.25em]

                text-pink-100/55
              "
            >
              Explorando
            </p>

            <p
              className="
                mt-0.5

                truncate

                font-display

                text-sm
                font-light

                text-white

                sm:text-base
              "
            >
              {activeChapter.title}
            </p>
          </div>

          {/* Icono */}

          <span
            aria-hidden="true"
            className="
              ml-1

              text-xs

              text-white/55
            "
          >
            ↑
          </span>
        </button>
      </div>

      {/* =====================================================
          PANEL MÓVIL
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Fondo */}

            <motion.button
              type="button"

              aria-label="Cerrar navegación"

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

              onClick={
                closeMobileMenu
              }

              className="
                fixed
                inset-0

                z-[70]

                bg-[#25134a]/50

                backdrop-blur-sm

                lg:hidden
              "
            />

            {/* Panel */}

            <motion.nav
              aria-label="Seleccionar capítulo"

              initial={{
                opacity: 0,
                y: 40,
                scale: 0.98,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                y: 35,
                scale: 0.98,
              }}

              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}

              className="
                fixed

                bottom-3
                left-3
                right-3

                z-[80]

                max-h-[82svh]

                overflow-y-auto

                rounded-[30px]

                border
                border-white/15

                bg-[#6742b6]/90

                px-4
                pb-5
                pt-4

                shadow-[0_30px_100px_rgba(28,10,60,.45)]

                backdrop-blur-2xl

                sm:bottom-5
                sm:left-1/2
                sm:right-auto

                sm:w-[min(520px,calc(100%-2.5rem))]

                sm:-translate-x-1/2

                lg:hidden
              "
            >
              {/* Tirador */}

              <div
                aria-hidden="true"
                className="
                  mx-auto

                  mb-5

                  h-1
                  w-10

                  rounded-full

                  bg-white/20
                "
              />

              {/* Encabezado */}

              <div
                className="
                  mb-5

                  flex
                  items-start
                  justify-between

                  gap-4

                  px-1
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]

                      uppercase

                      tracking-[0.35em]

                      text-pink-100/55
                    "
                  >
                    Para siempre
                  </p>

                  <h2
                    className="
                      mt-2

                      font-display

                      text-3xl
                      font-light

                      text-white
                    "
                  >
                    Explora la historia
                  </h2>

                  <p
                    className="
                      mt-2

                      max-w-sm

                      text-xs
                      leading-5

                      text-white/50

                      sm:text-sm
                    "
                  >
                    Puedes continuar desde
                    aquí o volver a cualquier
                    momento.
                  </p>
                </div>

                <button
                  type="button"

                  onClick={
                    closeMobileMenu
                  }

                  aria-label="Cerrar"

                  className="
                    flex
                    h-9
                    w-9
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/10

                    bg-white/[0.05]

                    text-lg

                    text-white/60

                    transition

                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  ×
                </button>
              </div>

              {/* Lista */}

              <div
                className="
                  space-y-2
                "
              >
                {chapters.map(
                  (chapter) => (
                    <TimelineNavigationItem
                      key={
                        chapter.id
                      }
                      id={
                        chapter.id
                      }
                      number={
                        chapter.number
                      }
                      title={
                        chapter.title
                      }
                      active={
                        activeId ===
                        chapter.id
                      }
                      mobile
                      onClick={
                        closeMobileMenu
                      }
                    />
                  )
                )}
              </div>

              {/* Progreso */}

              <div
                className="
                  mt-6

                  px-1
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between

                    text-[9px]

                    uppercase

                    tracking-[0.25em]

                    text-white/35
                  "
                >
                  <span>
                    Recorrido
                  </span>

                  <span>
                    {safeActiveIndex + 1}
                    {" / "}
                    {chapters.length}
                  </span>
                </div>

                <div
                  className="
                    mt-3

                    h-px
                    w-full

                    overflow-hidden

                    bg-white/10
                  "
                >
                  <div
                    className="
                      h-full

                      bg-gradient-to-r

                      from-pink-100/80
                      to-white/45

                      transition-[width]
                      duration-700
                      ease-out
                    "
                    style={{
                      width: `${
                        ((safeActiveIndex +
                          1) /
                          chapters.length) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}