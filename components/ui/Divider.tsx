export function Divider() {
  return (
    <div className="relative my-16 flex justify-center">
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
        h-2
        w-2
        rounded-full

        bg-pink-300

        shadow-[0_0_25px_rgba(255,170,240,.9)]
        "
      />
    </div>
  );
}