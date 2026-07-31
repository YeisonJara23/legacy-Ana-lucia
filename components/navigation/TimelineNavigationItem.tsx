"use client";

type Props = {
  title: string;
  active?: boolean;
};

export function TimelineNavigationItem({
  title,
  active = false,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
      "
    >
      <div
        className={`
            h-3
            w-3
            rounded-full
            transition-all
            duration-500

            ${
              active
                ? "bg-pink-200 shadow-[0_0_18px_rgba(255,210,240,.8)] scale-125"
                : "bg-white/25"
            }
        `}
      />

      <span
        className={`
            text-sm

            transition-all

            ${
              active
                ? "text-pink-100"
                : "text-white/45"
            }
        `}
      >
        {title}
      </span>
    </div>
  );
}