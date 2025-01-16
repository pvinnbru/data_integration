import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

const AnimalHoverCard = ({
  name,
  imageUrl,
  children,
}: {
  name: string;
  imageUrl: string;
  children: React.ReactNode;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="flex justify-center items-center flex-col gap-4">
        <h1>{name}</h1>
        <Image
          src={imageUrl}
          width={200}
          height={200}
          alt={"Fish"}
          className="rounded-md"
        />
        <Button>Find {name}!</Button>
      </HoverCardContent>
    </HoverCard>
  );
};

export default AnimalHoverCard;
