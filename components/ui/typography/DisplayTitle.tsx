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
        font-serif
        text-6xl
        md:text-8xl
        font-light
        leading-none
        tracking-tight
        text-white
      "
    >
      {children}
    </h1>
  );
}