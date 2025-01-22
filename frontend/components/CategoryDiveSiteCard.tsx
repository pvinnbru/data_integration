import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { DiveSiteCategory } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryDiveSiteCardProps {
  data: DiveSiteCategory;
}

const CategoryDiveSiteCard: React.FC<CategoryDiveSiteCardProps> = ({
  data,
}) => {
  return (
    <Card className="relative hover:scale-105 transition overflow-hidden hover:border-white hover:border-2 border-opacity-0 hover:border-opacity-100 shadow-xl duration-300 aspect-square select-none rounded-3xl">
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
        <CardHeader
          className="bg-zinc-800 absolute bottom-0 left-0 right-0 h-1/3 flex justify-center items-center"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%)",
          }}
        >
          <CardTitle className="text-3xl">{data.name}</CardTitle>
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

export default CategoryDiveSiteCard;
