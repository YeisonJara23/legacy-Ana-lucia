"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function PrimaryButton({
  children,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`
        mt-10
        rounded-full
        bg-gradient-to-r
        from-[#F77DB8]
        via-[#F69CD4]
        to-[#C69AFF]
        px-10
        py-4
        text-white
        font-semibold
        shadow-[0_12px_35px_rgba(255,150,220,.35)]
        transition-all
        duration-500
        hover:scale-105
        hover:shadow-[0_20px_45px_rgba(255,150,220,.45)]
        ${className}
      `}
    >
      {children}
    </button>
  );
}