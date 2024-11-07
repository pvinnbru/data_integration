import CardSection from "@/components/CardSection";
import Header from "@/components/Header";

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

  return (
    <>
      <Header />
      <main className="bg-slate-800 flex-1 py-10 px-20 flex flex-col items-center">
        <div className="max-w-screen-2xl w-full flex flex-col gap-16">
          <CardSection
            title="Recommendations for you"
            apiUrl={`${apiUrl}/recommendations/for_you`}
          />
          <CardSection
            title="Popular Diving Spots"
            apiUrl={`${apiUrl}/recommendations/popular`}
          />
        </div>
      </main>
    </>
  );
}
