const Header = () => {
  return (
    <div className="w-full bg-black h-16 py-2 px-4 flex items-center gap-16">
      <h1 className="text-white text-2xl font-bold">Dive Finder</h1>
      <nav>
        <ul className="flex space-x-4 font-semibold">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
