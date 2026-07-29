"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speed: number;
  layer: 1 | 2 | 3;
};

export function SkyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas === null) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (ctx === null) {
      return;
    }

    // Referencias no nulas para que TypeScript no genere errores
    const canvasElement = canvas;
    const context = ctx;

    let animationId = 0;

    let stars: Star[] = [];

    function createStars() {
      stars = Array.from({ length: 1200 }, () => {
        const layer = (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3;

        let radius = 1;
        let speed = 0.004;

        switch (layer) {
          case 1:
            radius = Math.random() * 0.8 + 0.3;
            speed = 0.002;
            break;

          case 2:
            radius = Math.random() * 1.8 + 0.8;
            speed = 0.004;
            break;

          case 3:
            radius = Math.random() * 2.8 + 1.2;
            speed = 0.006;
            break;
        }

        return {
          x: Math.random() * canvasElement.width,
          y: Math.random() * canvasElement.height,
          radius,
          alpha: Math.random(),
          speed,
          layer,
        };
      });
    }

    function resize() {
      canvasElement.width = window.innerWidth;
      canvasElement.height = Math.max(
        window.innerHeight,
        document.documentElement.scrollHeight
      );

      createStars();
    }

    resize();

    window.addEventListener("resize", resize);

    function drawNebulas() {
      const gradient1 = context.createRadialGradient(
        canvasElement.width * 0.25,
        canvasElement.height * 0.2,
        100,
        canvasElement.width * 0.25,
        canvasElement.height * 0.2,
        600
      );

      gradient1.addColorStop(0, "rgba(255,170,240,0.12)");
      gradient1.addColorStop(1, "rgba(255,170,240,0)");

      context.fillStyle = gradient1;
      context.fillRect(0, 0, canvasElement.width, canvasElement.height);

      const gradient2 = context.createRadialGradient(
        canvasElement.width * 0.8,
        canvasElement.height * 0.7,
        50,
        canvasElement.width * 0.8,
        canvasElement.height * 0.7,
        700
      );

      gradient2.addColorStop(0, "rgba(190,170,255,0.10)");
      gradient2.addColorStop(1, "rgba(190,170,255,0)");

      context.fillStyle = gradient2;
      context.fillRect(0, 0, canvasElement.width, canvasElement.height);
    }

    function draw() {
      context.clearRect(0, 0, canvasElement.width, canvasElement.height);

      drawNebulas();

      for (const star of stars) {
        star.alpha += star.speed;

        if (star.alpha >= 1) {
          star.speed *= -1;
        }

        if (star.alpha <= 0.2) {
          star.speed *= -1;
        }

        context.beginPath();

        context.arc(
          star.x,
          star.y,
          star.radius,
          0,
          Math.PI * 2
        );

        context.fillStyle = `rgba(255,255,255,${star.alpha})`;

        context.shadowBlur = star.radius * 8;

        switch (star.layer) {
          case 1:
            context.shadowColor = "#ffffff";
            break;

          case 2:
            context.shadowColor = "#ffd6f7";
            break;

          case 3:
            context.shadowColor = "#e6c7ff";
            break;
        }

        context.fill();
      }

      context.shadowBlur = 0;

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -40,
      }}
    />
  );
}