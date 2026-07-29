type SceneHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SceneHeader({
  title,
  subtitle,
}: SceneHeaderProps) {
  return (
    <header className="mb-16 text-center">
      {subtitle && (
        <p
          className="
            mb-4
            uppercase
            tracking-[0.4em]
            text-[#D8B36A]
          "
        >
          {subtitle}
        </p>
      )}

      <h2
        className="
          font-serif
          text-5xl
          text-white
        "
      >
        {title}
      </h2>
    </header>
  );
}