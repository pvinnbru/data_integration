import Link from "next/link";

const Header = () => {
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
    <div className="w-full bg-black h-16 py-2 px-4 flex items-center gap-16">
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
  );
};

export default Header;
