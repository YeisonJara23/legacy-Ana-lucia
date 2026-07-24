import { HeroBackground } from "./HeroBackground";
import { Glow } from "./Glow";
import { Stars } from "./Stars";
import { ShootingStar } from "./ShootingStar";
import { CursorGlow } from "./CursorGlow";

export function HeroScene() {
  return (
    <>
      <HeroBackground />

      <CursorGlow />

      <Glow />

      <Stars />

      <ShootingStar />
    </>
  );
}