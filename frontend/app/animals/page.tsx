import { Animal } from "@/types";
import AnimalHoverCard from "./components/AnimalHoverCard";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const AnimalsPage = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

  const animals: Animal[] = await fetch(`${apiUrl}/animals`).then((res) =>
    res.json()
  );

  return (
    <div className="max-w-xl w-full">
      <div className="flex justify-between mb-4 gap-8 items-center">
        <div>
          <h1 className="font-semibold text-2xl ">Animals</h1>
        </div>
      </div>
      <Separator className="w-full  bg-slate-600 rounded-full mb-8" />
      <div className="flex gap-1 flex-col">
        {animals.map((animal, index) => (
          <div key={index}>
            <AnimalHoverCard name={animal.name} imageUrl={animal.image_url}>
              <Badge className="w-fit">{animal.name}</Badge>
            </AnimalHoverCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalsPage;
