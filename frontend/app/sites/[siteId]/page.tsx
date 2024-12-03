import DynamicMap from "@/components/DynamicMap";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DiveSite } from "@/types";
import Image from "next/image";
import Ratings from "./components/Ratings";

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

  // TODO: Implement rating system
  const ratings = [5, 4, 3, 3, 3, 5, 4, 1, 5, 5, 5, 5, 5, 5, 5];

  const ratingAverage = ratings.reduce((a, b) => a + b, 0) / ratings.length;

  return (
    <>
      <div className="flex justify-between mb-8 gap-8">
        <h1 className="font-semibold text-2xl ">Explore: {site.title}</h1>
        <div className="flex gap-2 flex-wrap">
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
          className="w-full rounded-md"
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

      {ratings.length > 0 && (
        <>
          <h2 className="font-semibold text-xl mb-4">Ratings</h2>
          <div className="flex justify-center flex-col items-center py-4">
            <span className="text-3xl">{`${ratingAverage} / 5.0 ⭐`}</span>
            <span className="">{`Based on ${ratings.length} ratings`}</span>
          </div>
          <Ratings ratings={ratings} />
          <Separator className="w-full  bg-slate-600 rounded-full my-8" />
        </>
      )}

      <h2 className="font-semibold text-xl mb-4">You are going to be here.</h2>
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
      />
    </>
  );
};

export default SiteDetailsPage;
