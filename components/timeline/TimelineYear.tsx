type TimelineYearProps = {
  year: string;
};

export function TimelineYear({
  year,
}: TimelineYearProps) {
  return (
    <div className="mb-32 text-center">
      <h2
        className="
          font-[family:var(--font-display)]

          text-7xl

          md:text-8xl

          font-light

          tracking-wide

          text-[#FFF8FD]

          drop-shadow-[0_0_30px_rgba(255,220,245,.55)]
        "
      >
        {year}
      </h2>

      <div
        className="
          mx-auto

          mt-10

          h-32

          w-px

          bg-gradient-to-b

          from-pink-200

          via-pink-100

          to-transparent
        "
      />
    </div>
  );
}