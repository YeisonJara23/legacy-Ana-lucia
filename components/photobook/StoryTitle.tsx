type StoryTitleProps = {
  children: React.ReactNode;
};

export function StoryTitle({
  children,
}: StoryTitleProps) {
  return (
    <h2
      className="
        mt-20
        mb-10
        text-center
        font-serif
        text-5xl
        text-white
      "
    >
      {children}
    </h2>
  );
}