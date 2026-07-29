import { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};

export function Paragraph({
  children,
}: ParagraphProps) {
  return (
    <p
      className="
        mx-auto

        mt-10

        max-w-3xl

        text-center

        text-2xl

        leading-[2.5rem]

        font-[family:var(--font-body)]

        text-[#FFF5FD]

        drop-shadow-[0_3px_12px_rgba(0,0,0,.35)]
      "
    >
      {children}
    </p>
  );
}