import CardSection from "@/components/CardSection";

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

  return (
    <>
      <div className="py-10 px-20 flex-1">
        <div className="max-w-screen-2xl w-full flex flex-col gap-16 min-h-full">
          <CardSection
            title="Recommendations for you"
            apiUrl={`${apiUrl}/recommendations/for_you`}
          />
          <CardSection
            title="Popular Diving Spots"
            apiUrl={`${apiUrl}/recommendations/popular`}
          />
        </div>
      </div>
    </>
  );
}
