import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";

export function HeroContent() {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="mb-6 text-2xl">✦</span>

      <Heading>
        Para Siempre,
        <br />
        Ana Lucía
      </Heading>

      <Text>
        Porque algunos recuerdos merecen crecer contigo.
      </Text>

      <div className="mt-10">
        <Button>Comenzar el viaje</Button>
      </div>
    </div>
  );
}