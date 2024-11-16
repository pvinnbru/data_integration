import CardSection from "@/components/CardSection";
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
        <div className="w-full flex flex-col gap-16 min-h-full">
          {user && (
            <CardSection
              title="Recommendations for you"
              apiUrl={`${apiUrl}/dive-sites/`}
            />
          )}
          <CardSection
            title="Popular Diving Spots"
            apiUrl={`${apiUrl}/dive-sites/`}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
