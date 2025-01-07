import { createClient } from "@/supabase/server";
import Link from "next/link";
import UserProfile from "./UserProfile";
import { TiHome } from "react-icons/ti";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const headerLinks = [
    {
      name: "Home",
      href: "/",
      icon: TiHome,
      iconSize: 20,
    },
    {
      name: "Search",
      href: "/search",
      icon: FaSearch,
      iconSize: 18,
    },
    {
      name: "Map",
      href: "/map",
      icon: FaMapMarkedAlt,
      iconSize: 20,
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
          <ul className="flex space-x-10 font-semibold">
            {headerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white hover:opacity-75 flex items-center gap-2"
                >
                  <link.icon size={link.iconSize} />
                  <p>{link.name}</p>
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
