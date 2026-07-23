import { HeroBackground } from "./HeroBackground";
import { Stars } from "./Stars";
import { Glow } from "./Glow";

export function HeroScene() {
  return (
    <>
      <HeroBackground />
      <Glow />
      <Stars />
    </>
  );
}