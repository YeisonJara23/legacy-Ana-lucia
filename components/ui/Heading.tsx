import { ReactNode } from "react";
import clsx from "clsx";

type Variant =
  | "hero"
  | "display"
  | "section"
  | "card";

interface HeadingProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variants = {
  hero: `
    text-6xl
    md:text-8xl
    lg:text-9xl
    font-light
  `,

  display: `
    text-5xl
    md:text-7xl
    font-light
  `,

  section: `
    text-4xl
    md:text-6xl
    font-light
  `,

  card: `
    text-3xl
    md:text-5xl
    font-light
  `,
};

export function Heading({
  children,
  variant = "section",
  className,
}: HeadingProps) {
  return (
    <h2
      className={clsx(
        `
        font-[var(--font-display)]
        tracking-tight
        leading-none
        text-[#FFEAF8]

drop-shadow-[0_0_12px_rgba(255,220,245,.95)]

[text-shadow:
0_0_12px_rgba(255,220,245,.90),
0_0_25px_rgba(255,185,235,.70),
0_0_45px_rgba(255,160,230,.40)]
        `,
        variants[variant],
        className
      )}
    >
      {children}
    </h2>
  );
}