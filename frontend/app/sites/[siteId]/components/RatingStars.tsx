"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

interface RatingStarsProps {
  siteId: string;
  userId: string | undefined;
}

const RatingStars: React.FC<RatingStarsProps> = ({ siteId, userId }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

  const [rating, setRating] = useState(0);
  const [activated, setActivated] = useState(false);

  const { toast } = useToast();

  const handleClick = (i: number) => {
    setRating(i);
    setActivated(true);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${apiUrl}/dive-sites/${siteId}/ratings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating: rating,
          user_id: userId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit rating");
      }

      toast({
        title: "Rating",
        description: `Rating successfully submitted!`,
      });

      setActivated(false);
    } catch (error) {
      toast({
        title: "Error",
        description: `Error submitting rating
        ${error}`,
      });
      console.error("Error submitting rating", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row-reverse">
        {Array.from({ length: 5 }, (_, i) => 5 - i).map((i) => (
          <button onClick={() => handleClick(i)} key={i}>
            {i <= rating ? (
              <IoIosStar key={i} className="text-yellow-400" size={50} />
            ) : (
              <IoIosStarOutline key={i} className="text-yellow-400" size={50} />
            )}
          </button>
        ))}
      </div>
      <Button
        onClick={() => handleSubmit()}
        disabled={!activated}
        className="transition font-semibold mt-4"
      >
        Submit
      </Button>
    </div>
  );
};

export default RatingStars;
