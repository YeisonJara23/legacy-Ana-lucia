import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`
        py-24
        lg:py-36
        ${className}
      `}
    >
      {children}
    </section>
  );
}