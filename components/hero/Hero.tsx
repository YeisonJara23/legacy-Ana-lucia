import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Luz central muy sutil */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[42%]

          -z-10

          h-[320px]
          w-[320px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-pink-200/[0.07]

          blur-[90px]

          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[120px]

          md:h-[600px]
          md:w-[600px]
          md:blur-[160px]
        "
      />

      {/* Halo superior */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[-100px]

          -z-10

          h-[260px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-violet-200/[0.05]

          blur-[100px]

          md:h-[360px]
          md:w-[700px]
        "
      />

      <HeroContent />
    </section>
  );
}