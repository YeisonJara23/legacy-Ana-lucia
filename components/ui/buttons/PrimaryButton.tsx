import { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
};

export function PrimaryButton({
  children,
}: PrimaryButtonProps) {
  return (
    <button
      className="
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
      "
    >
      {children}
    </button>
  );
}