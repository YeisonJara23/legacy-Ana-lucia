import { ReactNode } from "react";

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

        bg-gradient-to-b

        from-[#D9C2F2]

        via-[#E8D6F8]

        to-[#F7ECFB]
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

      <div
        className="
          relative

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