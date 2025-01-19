import DiveSpotCard from "@/components/DiveSpotCard";
import { Separator } from "@/components/ui/separator";
import { DiveSite } from "@/types";
import React from "react";

interface SitePageSidebarProps {
  siteId: string;
}

const SitePageSidebar: React.FC<SitePageSidebarProps> = async ({ siteId }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

  const data: DiveSite[] = await fetch(
    `${apiUrl}/dive-sites/recommendations/${siteId}`
  ).then((res) => res.json());

  return (
    <div className="w-full xl:w-1/4 h-full xl:pr-8 mt-16 xl:mt-0 px-4">
      <div className="mb-4">
        <h2 className=" text-md">Based on your search</h2>
        <h1 className="font-semibold text-2xl ">Similar divespots:</h1>
      </div>
      <Separator className="w-full  bg-slate-600 rounded-full mb-8" />

      <div className="xl:flex xl:flex-col gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
        {data.map((item, index) => (
          <DiveSpotCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SitePageSidebar;
