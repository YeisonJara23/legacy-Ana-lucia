"use client";

export function TimelineLine() {
  return (
    <div
      className="
        pointer-events-none

        absolute
        left-1/2
        top-0

        hidden
        lg:block

        h-full
        w-px

        -translate-x-1/2
      "
    >
      {/* Línea principal */}
      <div
        className="
          h-full
          w-full

          bg-gradient-to-b

          from-transparent
          via-pink-200/50
          to-transparent
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          inset-0

          bg-pink-200/30

          blur-xl
        "
      />
    </div>
  );
}