import DynamicMap from "@/components/DynamicMap";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DiveSite, DiveSiteRating } from "@/types";
import Image from "next/image";
import Ratings from "./components/Ratings";
import RatingStars from "./components/RatingStars";
import { createClient } from "@/supabase/server";
import SitePageSidebar from "./components/SitePageSidebar";

const SiteDetailsPage = async ({
  params,
}: {
  params: Promise<{ siteId: string }>;
}) => {
  const { siteId } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

  const site: DiveSite = await fetch(`${apiUrl}/dive-sites/${siteId}`).then(
    (res) => res.json()
  );

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // TODO: Implement rating system
  const ratings: DiveSiteRating = await fetch(
    `${apiUrl}/dive-sites/${siteId}/ratings`
  ).then((res) => res.json());

  return (
    <div className="w-full flex flex-col xl:flex-row justify-end">
      <div className="w-full xl:w-3/4 px-4 xl:px-32">
        <div className="flex justify-between mb-4 gap-8 items-center">
          <div>
            <h2 className=" text-md">{site.region}</h2>
            <h1 className="font-semibold text-2xl ">{site.title}</h1>
          </div>
          <div className="flex gap-2 flex-wrap h-6">
            {site.categories.map((category, index) => (
              <Badge key={index}>{category.name}</Badge>
            ))}
          </div>
        </div>
        <Separator className="w-full  bg-slate-600 rounded-full mb-8" />
        <div className="flex justify-center">
          <Image
            src={site.image_url}
            alt={`image of ${site.title}`}
            width={500}
            height={500}
            className="rounded-md max-w-[800px] max-h-[800px] w-full h-auto object-contain"
          />
        </div>
        <Separator className="w-full  bg-slate-600 rounded-full my-8" />
        {site.description && (
          <>
            <h2 className="font-semibold text-xl mb-4">Description</h2>
            <p>{site.description}</p>
            <Separator className="w-full  bg-slate-600 rounded-full my-8" />
          </>
        )}

        {site.animals.length > 0 && (
          <>
            <h2 className="font-semibold text-xl mb-4">Animals</h2>
            <p className="mb-4">The following animals can be found here:</p>
            <div className="flex gap-4 flex-wrap">
              {site.animals.map((animal, index) => (
                <Badge key={index}>{animal.name}</Badge>
              ))}
            </div>
            <Separator className="w-full  bg-slate-600 rounded-full my-8" />
          </>
        )}

        <>
          {user && (
            <>
              <h2 className="font-semibold text-xl mb-4">
                Rate this dive spot now!
              </h2>
              <div className="flex justify-center items-center mb-8">
                <RatingStars siteId={siteId} userId={user?.id} />
              </div>
            </>
          )}
          <h2 className="font-semibold text-xl mb-4">Ratings:</h2>
          <Ratings ratings={ratings} />
          <Separator className="w-full  bg-slate-600 rounded-full my-8" />
        </>

        <h2 className="font-semibold text-xl mb-4">
          You are going to be here.
        </h2>
        <DynamicMap
          longitude={site.longitude}
          latitude={site.latitude}
          markers={[
            {
              latitude: site.latitude,
              longitude: site.longitude,
              title: site.title,
              href: `/sites/${siteId}`,
            },
          ]}
          zoom={8}
          className="h-[600px] max-h-[80vw] rounded-md"
        />
      </div>
      <SitePageSidebar />
    </div>
  );
};

export default SiteDetailsPage;
