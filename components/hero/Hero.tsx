import { HeroScene } from "./HeroScene";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-transparent
      "
    >
      <HeroScene />

      <HeroContent />
    </section>
  );
}