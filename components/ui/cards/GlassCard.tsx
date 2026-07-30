import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-[36px]

        border
        border-white/10

        bg-white/[0.05]

        backdrop-blur-xl

        shadow-[0_30px_90px_rgba(0,0,0,.25)]

        ${className}
      `}
    >
      {children}
    </div>
  );
}