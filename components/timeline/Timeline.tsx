"use client";

import type { ReactNode } from "react";
import { TimelineLine } from "./TimelineLine";

type TimelineProps = {
  children: ReactNode;
};

export function Timeline({
  children,
}: TimelineProps) {
  return (
    <section
     className="
relative

overflow-hidden

py-44

bg-transparent
"
    >
      {/* Glow izquierdo */}
      <div
        className="
          absolute
          left-0
          top-0

          h-[700px]
          w-[700px]

          rounded-full
          bg-pink-200/30
          blur-[170px]
        "
      />

      {/* Glow derecho */}
      <div
        className="
          absolute
          right-0
          bottom-0

          h-[650px]
          w-[650px]

          rounded-full
          bg-violet-300/25
          blur-[180px]
        "
      />

      <TimelineLine />

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-6xl

          px-6
        "
      >
        {children}
      </div>
    </section>
  );
}