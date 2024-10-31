import CardSection from "@/components/CardSection";
import Header from "@/components/Header";
import { DiveSpot } from "@/types";

export default function Home() {
  const forYou: DiveSpot[] = [
    {
      title: "HMS Maori",
      diveTypes: ["Wreck", "Reef"],
      rating: 1,
      image:
        "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/2d/8c/2d8cfafb53ccc04b34f02470b193cd69.webp",
    },
    {
      title: "USAT Liberty Shipwreck",
      diveTypes: ["Wreck", "Reef", "Wall"],
      rating: 1,
      image:
        "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/6c/75/6c75b5ca3c2c6789390d49cf45e8886f.webp",
    },
    {
      title: "Manta Point",
      diveTypes: ["Reef"],
      rating: 1,
      image:
        "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/e3/9e/e39eed5b53e83aa50982d89d613ea141.webp",
    },
    {
      title: "THE HOLE / GREEN BAY CAVES",
      diveTypes: ["Cave", "Reef"],
      rating: 1,
      image:
        "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/b7/96/b79669fdcab3a66aa4d5801acf011f3b.webp",
    },
    {
      title: "Cyclops",
      diveTypes: ["Wall", "Channel", "Ocean"],
      rating: 1,
      image:
        "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/2d/8c/2d8cfafb53ccc04b34f02470b193cd69.webp",
    },
  ];
  const popular: DiveSpot[] = [
    {
      title: "SS Dunraven Wreck",
      diveTypes: ["Wreck", "Reef", "Wall"],
      rating: 1,
      image:
        "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/54/00/5400da7aa84ead48f45088be3a355759.webp",
    },
    {
      title: "Gilboa Quarry",
      diveTypes: ["Lake"],
      rating: 1,
      image:
        "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/0e/2b/0e2b251b2827a75f2c04485cd78cc0cd.webp",
    },
    {
      title: "3 Rocks (Sharm rock)",
      diveTypes: ["Reef"],
      rating: 1,
      image:
        "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/2c/e8/2ce83ec488aa41aa153c45990ee2e927.webp",
    },
    {
      title: "Casino Point Dive Park",
      diveTypes: ["Beach"],
      rating: 1,
      image:
        "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/06/8c/068ca23c8292937bcefe76a2e0989b1a.webp",
    },
    {
      title: "Car Pile (The Dive Bus House Reef)",
      diveTypes: ["Wreck", "Reef", "Wall"],
      rating: 1,
      image:
        "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/f7/28/f72828e2de27251b63156bcfafba61d8.webp",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-slate-800 flex-1 py-10 px-20 flex flex-col items-center">
        <div className="max-w-screen-2xl w-full flex flex-col gap-16">
          <CardSection title="Recommendations for you" data={forYou} />
          <CardSection title="Popular Diving Spots" data={popular} />
        </div>
      </main>
    </>
  );
}
