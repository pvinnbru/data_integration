import { Separator } from "@/components/ui/separator";
import { DiveSiteRating } from "@/types";
import React from "react";
import { IoIosStar } from "react-icons/io";

interface RatingsProps {
  ratings: DiveSiteRating;
}

const Ratings: React.FC<RatingsProps> = ({ ratings }) => {
  // Calculate the weighted sum
  const weightedSum = Object.entries(ratings).reduce((acc, [key, value]) => {
    return acc + Number(key) * value;
  }, 0);

  // Calculate the total amount of values
  const totalCount = Object.values(ratings).reduce(
    (acc, value) => acc + value,
    0
  );

  // Compute the result
  const weightedAverage = weightedSum / totalCount;

  // Compute the maximum amount of stars
  const maxStarsValue = Object.values(ratings).reduce(
    (acc, value) => Math.max(acc, value),
    0
  );

  return (
    <div className="flex w-full justify-between items-center gap-4">
      {totalCount > 0 ? (
        <>
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
                        (ratings[i as unknown as keyof DiveSiteRating] /
                          maxStarsValue) *
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
              <span>{`${weightedAverage.toPrecision(2)} / 5.0`}</span>
              <IoIosStar className="text-yellow-400" size={35} />
            </div>
            <span className="">{`Based on ${totalCount} rating${
              totalCount === 1 ? "" : "s"
            }`}</span>
          </div>
        </>
      ) : (
        <span>No ratings yet</span>
      )}
    </div>
  );
};

export default Ratings;
