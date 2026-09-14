import { ReactNode } from "react";

type StoryCaptionProps = {
  children: ReactNode;
  size?: "compact" | "featured";
};

export function StoryCaption({
  children,
  size = "compact",
}: StoryCaptionProps) {
  const styles =
    size === "featured"
      ? `
        text-base
        leading-6

        sm:text-lg
        sm:leading-7

        md:text-xl
        md:leading-8
      `
      : `
        text-sm
        leading-5

        sm:text-[15px]
        sm:leading-6

        md:text-base
        md:leading-7
      `;

  return (
    <p
      className={`
        ${styles}

        font-light
        italic
        tracking-[0.01em]

        text-[#FFF8FD]
      `}
    >
      {children}
    </p>
  );
}