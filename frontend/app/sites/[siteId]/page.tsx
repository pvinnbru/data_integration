import DynamicMap from "@/components/DynamicMap";
import { Separator } from "@/components/ui/separator";
import { DiveSite } from "@/types";

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

  return (
    <>
      <h1 className="font-semibold text-2xl mb-8">Explore: {site.title}</h1>
      <Separator className="w-full  bg-slate-600 rounded-full mb-8" />
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
