import { ReactNode } from "react";

type DisplayTitleProps = {
  children: ReactNode;
};

export function DisplayTitle({
  children,
}: DisplayTitleProps) {
  return (
    <h1
      className="
        text-center

        font-[family:var(--font-display)]

        text-6xl

        md:text-8xl

        lg:text-[8rem]

        font-light

        leading-none

        tracking-wide

        text-[#FFFDFE]

        drop-shadow-[0_0_45px_rgba(255,220,245,.70)]
      "
    >
      {children}
    </h1>
  );
}