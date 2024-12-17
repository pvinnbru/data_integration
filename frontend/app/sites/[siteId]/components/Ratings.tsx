import { Separator } from "@/components/ui/separator";
import React from "react";
import { IoIosStar } from "react-icons/io";

interface RatingsProps {
  ratings: number[];
}

const Ratings: React.FC<RatingsProps> = ({ ratings }) => {
  const ratingAverage = ratings.reduce((a, b) => a + b, 0) / ratings.length;

  return (
    <div className="flex w-full justify-between items-center gap-4">
      <div className="flex-1">
        <h3 className="font-semibold">Total ratings</h3>
        {Array.from({ length: 5 }, (_, i) => 5 - i).map((i) => (
          <div key={i} className="flex items-center gap-2">
            <span>{i}</span>
            <div className="rounded-full bg-slate-500 h-2 flex-1 overflow-hidden">
              <div
                className={"bg-white h-full"}
                style={{
                  width: `${
                    (ratings.filter((rating) => rating === i).length /
                      ratings.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <Separator
        orientation="vertical"
        className="h-full bg-slate-600 rounded-full my-8"
      />
      <div className="flex justify-center flex-col items-center py-4 flex-1">
        <div className="text-3xl flex items-center justify-center gap-2">
          <span>{`${ratingAverage} / 5.0`}</span>
          <IoIosStar className="text-yellow-400" size={35} />
        </div>
        <span className="">{`Based on ${ratings.length} ratings`}</span>
      </div>
    </div>
  );
};

export default Ratings;
