"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speed: number;
};

export function SkyCanvas() {
  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    /*
     * ==========================================
     * OBTENER CANVAS
     * ==========================================
     */

    const currentCanvas =
      canvasRef.current;

    if (!currentCanvas) {
      return;
    }

    const currentContext =
      currentCanvas.getContext("2d");

    if (!currentContext) {
      return;
    }

    /*
     * Creamos referencias ya comprobadas.
     *
     * De esta forma TypeScript sabe que nunca
     * serán null dentro de las funciones que
     * definimos más abajo.
     */
    const canvas: HTMLCanvasElement =
      currentCanvas;

    const context: CanvasRenderingContext2D =
      currentContext;

    /*
     * ==========================================
     * VARIABLES
     * ==========================================
     */

    let animationId = 0;

    let stars: Star[] = [];

    let isMobile =
      window.innerWidth < 768;

    const reducedMotion =
      window
        .matchMedia(
          "(prefers-reduced-motion: reduce)"
        )
        .matches;

    /*
     * ==========================================
     * CREAR ESTRELLAS
     * ==========================================
     */

    function createStars() {
      isMobile =
        window.innerWidth < 768;

      const starCount =
        isMobile
          ? 110
          : 240;

      stars = Array.from(
        {
          length: starCount,
        },
        () => ({
          x:
            Math.random() *
            window.innerWidth,

          y:
            Math.random() *
            window.innerHeight,

          radius:
            Math.random() *
              (isMobile
                ? 1.1
                : 1.6) +
            0.25,

          alpha:
            Math.random() * 0.55 +
            0.25,

          speed:
            Math.random() * 0.003 +
            0.001,
        })
      );
    }

    /*
     * ==========================================
     * AJUSTAR CANVAS
     * ==========================================
     */

    function resize() {
      /*
       * Limitamos el DPR para evitar que móviles
       * con pantallas de alta densidad creen un
       * canvas demasiado pesado.
       */
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        1.5
      );

      const width =
        window.innerWidth;

      const height =
        window.innerHeight;

      canvas.width =
        Math.floor(width * dpr);

      canvas.height =
        Math.floor(height * dpr);

      canvas.style.width =
        `${width}px`;

      canvas.style.height =
        `${height}px`;

      /*
       * Reinicia la transformación y adapta
       * el contexto al DPR.
       */
      context.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      createStars();
    }

    /*
     * ==========================================
     * LUCES DEL FONDO
     * ==========================================
     */

    function drawBackground() {
      const width =
        window.innerWidth;

      const height =
        window.innerHeight;

      /*
       * Glow rosado superior izquierdo
       */

      const pinkGlow =
        context.createRadialGradient(
          width * 0.24,
          height * 0.18,
          20,

          width * 0.24,
          height * 0.18,

          Math.max(
            width,
            height
          ) * 0.65
        );

      pinkGlow.addColorStop(
        0,
        "rgba(255,170,240,0.08)"
      );

      pinkGlow.addColorStop(
        1,
        "rgba(255,170,240,0)"
      );

      context.fillStyle =
        pinkGlow;

      context.fillRect(
        0,
        0,
        width,
        height
      );

      /*
       * Glow violeta inferior derecho
       */

      const violetGlow =
        context.createRadialGradient(
          width * 0.8,
          height * 0.75,
          20,

          width * 0.8,
          height * 0.75,

          Math.max(
            width,
            height
          ) * 0.7
        );

      violetGlow.addColorStop(
        0,
        "rgba(190,170,255,0.08)"
      );

      violetGlow.addColorStop(
        1,
        "rgba(190,170,255,0)"
      );

      context.fillStyle =
        violetGlow;

      context.fillRect(
        0,
        0,
        width,
        height
      );
    }

    /*
     * ==========================================
     * DIBUJAR ESTRELLAS
     * ==========================================
     */

    function drawStars() {
      for (const star of stars) {
        /*
         * Parpadeo muy suave.
         *
         * Si el usuario tiene activado
         * reduced-motion las estrellas
         * permanecen estáticas.
         */
        if (!reducedMotion) {
          star.alpha +=
            star.speed;

          if (
            star.alpha >= 0.88
          ) {
            star.speed =
              -Math.abs(
                star.speed
              );
          }

          if (
            star.alpha <= 0.2
          ) {
            star.speed =
              Math.abs(
                star.speed
              );
          }
        }

        context.beginPath();

        context.arc(
          star.x,
          star.y,
          star.radius,
          0,
          Math.PI * 2
        );

        context.fillStyle =
          `rgba(255,255,255,${star.alpha})`;

        context.fill();
      }
    }

    /*
     * ==========================================
     * DIBUJAR ESCENA
     * ==========================================
     */

    function draw() {
      const width =
        window.innerWidth;

      const height =
        window.innerHeight;

      context.clearRect(
        0,
        0,
        width,
        height
      );

      drawBackground();

      drawStars();

      /*
       * Solo mantenemos requestAnimationFrame
       * cuando las animaciones están permitidas.
       */
      if (!reducedMotion) {
        animationId =
          window.requestAnimationFrame(
            draw
          );
      }
    }

    /*
     * ==========================================
     * INICIO
     * ==========================================
     */

    resize();

    draw();

    /*
     * ==========================================
     * RESIZE
     * ==========================================
     */

    window.addEventListener(
      "resize",
      resize
    );

    /*
     * ==========================================
     * LIMPIEZA
     * ==========================================
     */

    return () => {
      window.cancelAnimationFrame(
        animationId
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none

        fixed
        inset-0

        -z-40

        h-screen
        w-screen
      "
    />
  );
}