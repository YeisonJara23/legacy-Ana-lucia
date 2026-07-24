type ChapterHeaderProps = {
  chapter: string;
  title: string;
  date: string;
};

export function ChapterHeader({
  chapter,
  title,
  date,
}: ChapterHeaderProps) {
  return (
    <div className="mx-auto mb-20 max-w-4xl text-center">
      <p className="mb-3 uppercase tracking-[0.4em] text-white/40">
        {chapter}
      </p>

      <h2 className="mb-4 text-6xl text-white">
        {title}
      </h2>

      <p className="text-white/50">
        {date}
      </p>
    </div>
  );
}