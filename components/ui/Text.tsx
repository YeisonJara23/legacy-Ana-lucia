import { ReactNode } from "react";
import clsx from "clsx";

type Variant =
  | "lead"
  | "body"
  | "quote"
  | "small";

interface Props {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variants = {
  lead: `
    text-xl
    md:text-2xl
    leading-10
  `,

  body: `
    text-lg
    md:text-xl
    leading-9
  `,

  quote: `
    text-2xl
    italic
    leading-10
  `,

  small: `
    text-sm
    leading-7
  `,
};

export function Text({
  children,
  variant = "body",
  className,
}: Props) {
  return (
    <p
      className={clsx(
        `
        font-[var(--font-body)]
        text-[#F8ECFF]
        opacity-95
        `,
        variants[variant],
        className
      )}
    >
      {children}
    </p>
  );
}