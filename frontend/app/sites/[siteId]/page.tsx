import DynamicMap from "@/components/DynamicMap";
import { DiveSite } from "@/types";

const SiteDetailsPage = async ({
  params,
}: {
  params: Promise<{ siteId: string }>;
}) => {
  const { siteId } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

  const site: DiveSite = await fetch(`${apiUrl}/sites/${siteId}`).then((res) =>
    res.json()
  );

  return (
    <>
      <div className="w-full">Site Details: {site.title}</div>
      <DynamicMap
        longitude={site.location.longitude}
        latitude={site.location.latitude}
        markers={[
          {
            latitude: site.location.latitude,
            longitude: site.location.longitude,
            title: site.title,
            href: `/sites/${siteId}`,
          },
        ]}
        zoom={10}
      />
    </>
  );
};

export default SiteDetailsPage;
