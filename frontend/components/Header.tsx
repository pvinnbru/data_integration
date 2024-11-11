import { createClient } from "@/supabase/server";
import Link from "next/link";
import UserProfile from "./UserProfile";

const Header = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const headerLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Map",
      href: "/map",
    },
  ];

  return (
    <div className="w-full bg-black h-16 py-2 px-4 flex justify-between items-center gap-16">
      <div className="flex items-center gap-16">
        <Link
          href="/"
          className="text-white text-2xl font-bold hover:opacity-75 transition"
        >
          Dive Finder
        </Link>
        <nav>
          <ul className="flex space-x-4 font-semibold">
            {headerLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-white hover:opacity-75">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <UserProfile />
        ) : (
          <>
            <Link href="/login" className="text-white hover:opacity-75">
              Login
            </Link>
            <Link href="/sign-up" className="text-white hover:opacity-75">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
