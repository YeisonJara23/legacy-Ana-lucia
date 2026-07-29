type PhotoCaptionProps = {
  title?: string;
  children: React.ReactNode;
};

export function PhotoCaption({
  title,
  children,
}: PhotoCaptionProps) {
  return (
    <div
      className="
        mx-auto
        mt-10
        max-w-3xl
        text-center
      "
    >
      {title && (
        <h3
          className="
            mb-4
            font-serif
            text-3xl
            text-white
          "
        >
          {title}
        </h3>
      )}

      <p
        className="
          text-lg
          italic
          leading-9
          text-white/70
        "
      >
        {children}
      </p>
    </div>
  );
}