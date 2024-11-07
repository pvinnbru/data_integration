"use client";

import { DiveSpot } from "@/types";
import DiveSpotCard from "./DiveSpotCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface CardSectionProps {
  title: string;
  apiUrl: string;
}

const CardSection: React.FC<CardSectionProps> = ({ title, apiUrl }) => {
  const [data, setData] = useState<DiveSpot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false); // Set loading to false after 1 second
    }, 1000); // 1000ms = 1 second
    try {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (err) {
      console.log(err);
    }
    return () => clearTimeout(timeoutId);
  }, [apiUrl]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-2xl">{title}</h2>
      {loading ? (
        <div className="full flex gap-10 overflow-hidden">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              className="shadow-xl h-56 aspect-[10/7] py-2 pr-4"
            />
          ))}
        </div>
      ) : (
        <Carousel className="w-full ">
          <CarouselContent className="-ml-1 py-2 pr-4">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 3xl:basis-1/5"
              >
                <div className="p-1">
                  <DiveSpotCard data={item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
};

export default CardSection;
