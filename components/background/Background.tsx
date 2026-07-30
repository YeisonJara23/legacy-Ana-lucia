import { Aurora } from "./Aurora";
import { SkyCanvas } from "./SkyCanvas";
import { FloatingParticles } from "./FloatingParticles";
import { ShootingStars } from "./ShootingStars";

export function Background() {
  return (
    <>
      <SkyCanvas />
      <Aurora />
      <FloatingParticles />
      <ShootingStars />
    </>
  );
}