type TextProps = {
  children: React.ReactNode;
};

export function Text({ children }: TextProps) {
  return (
    <p
      className="
        mt-6
        max-w-xl
        text-lg
        leading-8
        text-white/70
      "
    >
      {children}
    </p>
  );
}