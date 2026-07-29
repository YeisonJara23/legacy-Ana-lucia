import { ReactNode } from "react";

type ChapterBodyProps = {
  children: ReactNode;
};

export function ChapterBody({
  children,
}: ChapterBodyProps) {
  return (
    <div
      className="
        mx-auto

        max-w-4xl

        text-center

        font-[family:var(--font-body)]

        text-[#FFF5FD]
      "
    >
      {children}
    </div>
  );
}