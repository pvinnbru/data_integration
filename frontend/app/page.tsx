import CardSection from "@/components/CardSection";
import CategoryCardSection from "@/components/CategoryCardSection";
import TallCardSection from "@/components/TallCardSection";
import { createClient } from "@/supabase/server";

const Home = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="py-10 px-14 flex-1 w-full h-full  flex justify-center">
        <div className="w-full flex flex-col gap-8 min-h-full">
          {user && (
            <CardSection
              title="Recommendations for you"
              apiUrl={`${apiUrl}/dive-sites/recommendations/users/${user.id}`}
            />
          )}
          {user && (
            <CardSection
              title="Users like you also liked"
              apiUrl={`${apiUrl}/recommendations/recommend_dive_spots/${user.id}`}
            />
          )}
          <TallCardSection
            title="Popular Dive Spots"
            apiUrl={`${apiUrl}/recommendations/recommend_top10`}
          />
          <CategoryCardSection
            title="Categories"
            apiUrl={`${apiUrl}/dive-site-categories/`}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
