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
        py-40
        bg-transparent
      "
    >
      <div
        className="
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