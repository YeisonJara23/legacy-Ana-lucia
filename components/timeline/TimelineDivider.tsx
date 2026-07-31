export function TimelineDivider() {
  return (
    <div className="relative my-20 flex justify-center">
      <div
        className="
          h-px
          w-72

          bg-gradient-to-r
          from-transparent
          via-pink-300
          to-transparent
        "
      />

      <div
        className="
          absolute

          -top-2

          text-pink-200

          drop-shadow-[0_0_15px_rgba(255,220,245,.9)]
        "
      >
        ✦
      </div>
    </div>
  );
}