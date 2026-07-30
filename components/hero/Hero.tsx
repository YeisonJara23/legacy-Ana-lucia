import { HeroContent } from "./HeroContent";
import { Container } from "@/components/ui/layout/Container";

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
      "
    >
      <Container>
        <HeroContent />
      </Container>
    </section>
  );
}