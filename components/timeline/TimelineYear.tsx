type TimelineYearProps = {
  year: string;
};

export function TimelineYear({
  year,
}: TimelineYearProps) {
  return (
    <div className="mb-24 text-center">
      <h2
        className="
          text-7xl
          font-light
          text-white
          opacity-20
        "
      >
        {year}
      </h2>
    </div>
  );
}