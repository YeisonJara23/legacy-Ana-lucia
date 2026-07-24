import { ReactNode } from "react";

type TimelineProps = {
  children: ReactNode;
};

export function Timeline({ children }: TimelineProps) {
  return (
    <section
      className="
        relative
        mx-auto
        max-w-6xl
        px-6
        py-24
        bg-red-500
      "
    >
      <h1 className="text-5xl text-white">
        
      </h1>

      {children}
    </section>
  );
}