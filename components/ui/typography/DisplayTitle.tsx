import { ReactNode } from "react";

type DisplayTitleProps = {
  children: ReactNode;
};

export function DisplayTitle({ children }: DisplayTitleProps) {
  return (
    <h1
      className="
        text-5xl
        md:text-7xl
        lg:text-8xl
        font-light
        tracking-tight
        text-white
      "
    >
      {children}
    </h1>
  );
}