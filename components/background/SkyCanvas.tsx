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

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

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
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          alpha: Math.random(),
          speed,
          layer,
        };
      });
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(
        window.innerHeight,
        document.documentElement.scrollHeight
      );

      createStars();
    }

    resize();

    window.addEventListener("resize", resize);

    function drawNebulas() {
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.25,
        canvas.height * 0.2,
        100,
        canvas.width * 0.25,
        canvas.height * 0.2,
        600
      );

      gradient1.addColorStop(0, "rgba(255,170,240,0.12)");
      gradient1.addColorStop(1, "rgba(255,170,240,0)");

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.7,
        50,
        canvas.width * 0.8,
        canvas.height * 0.7,
        700
      );

      gradient2.addColorStop(0, "rgba(190,170,255,0.10)");
      gradient2.addColorStop(1, "rgba(190,170,255,0)");

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawNebulas();

      for (const star of stars) {
        star.alpha += star.speed;

        if (star.alpha >= 1) {
          star.speed *= -1;
        }

        if (star.alpha <= 0.2) {
          star.speed *= -1;
        }

        ctx.beginPath();

        ctx.arc(
          star.x,
          star.y,
          star.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;

        ctx.shadowBlur = star.radius * 8;

        switch (star.layer) {
          case 1:
            ctx.shadowColor = "#ffffff";
            break;

          case 2:
            ctx.shadowColor = "#ffd6f7";
            break;

          case 3:
            ctx.shadowColor = "#e6c7ff";
            break;
        }

        ctx.fill();
      }

      ctx.shadowBlur = 0;

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