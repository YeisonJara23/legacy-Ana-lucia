type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <h1
      className="
        text-6xl
        md:text-8xl
        font-light
        tracking-tight
        text-white
      "
    >
      {children}
    </h1>
  );
}