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
      id="timeline"
      className="
        relative

        overflow-hidden

        bg-transparent

        py-20
        sm:py-28
        md:py-36
      "
    >
      <TimelineLine />

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-7xl

          px-3
          sm:px-5
          md:px-8
          lg:px-12
        "
      >
        {children}
      </div>
    </section>
  );
}