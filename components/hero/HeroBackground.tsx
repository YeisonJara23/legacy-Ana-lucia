export function HeroBackground() {
  return (
    <>
      {/* Fondo principal */}
      <div className="absolute inset-0 -z-30 bg-[#02060C]" />

      {/* Degradado */}
      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-b
          from-[#07111F]
          via-[#0E1A2B]
          to-[#02060C]
        "
      />

      {/* Nebulosa superior */}
      <div
        className="
          absolute
          left-1/2
          top-0
          -z-10
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[180px]
        "
      />
    </>
  );
}