"use client";

import { useState } from "react";
import DiveSpotCard from "@/components/DiveSpotCard";
import { Input } from "@/components/ui/input";
import { DiveSite } from "@/types";
import { FaSearch } from "react-icons/fa";

const SearchPage = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDone, setSearchDone] = useState(false);
  const [filteredSites, setFilteredSites] = useState<DiveSite[]>([]);

  const fetchSearchResults = async () => {
    if (!searchQuery) return;

    const response = await fetch(
      `${apiUrl}/dive-sites/search?q=${encodeURIComponent(searchQuery)}`
    );
    const results = await response.json();
    setFilteredSites(results);
    setSearchDone(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchSearchResults(); // Trigger search on Enter key press
    } else {
      setSearchDone(false);
    }
  };

  return (
    <>
      <div className="flex items-center mb-10 gap-4">
        <Input
          type="search"
          placeholder="Search for dive sites, animals, regions or categories..."
          className="rounded-full text-5xl p-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for Enter key press
        />
        <button
          className="bg-black h-full aspect-square rounded-full flex items-center justify-center border hover:opacity-75 transition"
          onClick={fetchSearchResults}
        >
          <FaSearch size={40} />
        </button>
      </div>
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredSites.length === 0 && searchDone && (
          <p className="col-span-full text-center text-lg">
            {`No results found for ${searchQuery}`}
          </p>
        )}
        {filteredSites.map((item) => (
          <DiveSpotCard key={item.id} data={item} />
        ))}
      </section>
    </>
  );
};

export default SearchPage;
