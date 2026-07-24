import { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
};

export function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <button
      className="
        mt-10
        rounded-full
        border
        border-white/20
        bg-white/5
        px-8
        py-4
        text-sm
        font-medium
        tracking-wide
        text-white
        backdrop-blur-md
        transition-all
        duration-300
        hover:scale-105
        hover:border-white/40
        hover:bg-white/10
      "
    >
      {children}
    </button>
  );
}