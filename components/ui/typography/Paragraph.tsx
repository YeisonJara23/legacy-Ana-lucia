import { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};

export function Paragraph({ children }: ParagraphProps) {
  return (
    <p
      className="
        mt-6
        max-w-2xl
        text-lg
        leading-8
        text-white/70
      "
    >
      {children}
    </p>
  );
}