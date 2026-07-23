type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button
      className="
        rounded-full
        border
        border-white/20
        bg-white/5
        px-8
        py-4
        text-white
        backdrop-blur-md
        transition-all
        duration-300
        hover:bg-white/10
        hover:scale-105
      "
    >
      {children}
    </button>
  );
}