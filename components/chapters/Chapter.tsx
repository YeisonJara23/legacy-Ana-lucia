import { ReactNode } from "react";

type ChapterProps = {
  children: ReactNode;
};

export function Chapter({ children }: ChapterProps) {
  return (
    <section
      id="chapter-1"
      className="
        relative
        min-h-screen
        bg-[#02060C]
        py-32
      "
    >
      {children}
    </section>
  );
}