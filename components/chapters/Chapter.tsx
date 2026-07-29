import { ReactNode } from "react";

type ChapterProps = {
  children: ReactNode;
};

export function Chapter({
  children,
}: ChapterProps) {
  return (
    <section
      className="
        relative
        py-40
        overflow-hidden
        bg-transparent
      "
    >
      {/* Luz superior */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          h-[500px]
          w-[500px]

          rounded-full

          bg-pink-300/20

          blur-[180px]
        "
      />

      {/* Luz inferior */}
      <div
        className="
          absolute
          bottom-0
          right-0

          h-[450px]
          w-[450px]

          rounded-full

          bg-violet-300/20

          blur-[180px]
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}