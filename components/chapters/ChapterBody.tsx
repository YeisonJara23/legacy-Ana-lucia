import { ReactNode } from "react";

type ChapterBodyProps = {
  children: ReactNode;
};

export function ChapterBody({
  children,
}: ChapterBodyProps) {
  return (
    <div className="mx-auto max-w-5xl px-8">
      {children}
    </div>
  );
}