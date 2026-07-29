type StoryParagraphProps = {
  children: React.ReactNode;
};

export function StoryParagraph({
  children,
}: StoryParagraphProps) {
  return (
    <p
      className="
        mx-auto
        my-20
        max-w-3xl
        text-center
        text-xl
        leading-[2.4]
        text-white/75
      "
    >
      {children}
    </p>
  );
}