import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { DiveSite } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

interface DiveSpotCardProps {
  data: DiveSite;
}

const DiveSpotCard: React.FC<DiveSpotCardProps> = ({ data }) => {
  return (
    <Card className="relative hover:scale-105 transition overflow-hidden hover:border-white hover:border-2 border-opacity-0 hover:border-opacity-100 shadow-xl duration-300 aspect-[10/7] select-none">
      <Link
        href={`/sites/${data.id}`}
        className="transition flex flex-col justify-between h-full"
      >
        <Image
          src={data.image_url}
          width={500}
          height={500}
          alt="Picture of the author"
          className="rounded-t-md object-cover h-full w-full"
          priority
        />
        <div className="absolute top-0 left-0 right-0 py-2 px-2 flex justify-end gap-2">
          {data.categories.map((category, index) => (
            <Badge key={index}>{category.name}</Badge>
          ))}
        </div>
        <CardHeader
          className="bg-zinc-800 absolute bottom-0 left-0 right-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%)",
          }}
        >
          <CardTitle>{data.title}</CardTitle>
          {/* <CardDescription>Description</CardDescription> */}
        </CardHeader>
        {/* <CardContent></CardContent> */}
        {/* <CardFooter className="flex justify-end">
        <Button>Explore</Button>
      </CardFooter> */}
      </Link>
    </Card>
  );
};

export default DiveSpotCard;
