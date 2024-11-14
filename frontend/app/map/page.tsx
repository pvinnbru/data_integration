import DynamicMap from "@/components/DynamicMap";
import { DiveSite } from "@/types";

const MapOverview = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";
  const sites: DiveSite[] = await fetch(`${apiUrl}/dive-sites/`).then((res) =>
    res.json()
  );

  return (
    <DynamicMap
      longitude={0}
      latitude={0}
      markers={sites.map((site) => ({
        latitude: site.latitude,
        longitude: site.longitude,
        title: site.title,
        href: `/sites/${site.id}`,
      }))}
      zoom={3}
      className="h-full"
    />
  );
};

export default MapOverview;
