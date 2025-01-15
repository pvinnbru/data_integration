import { Animal } from "@/types";

const AnimalsPage = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

  const animals: Animal[] = await fetch(`${apiUrl}/animals`).then((res) =>
    res.json()
  );

  return (
    <div>
      <h1>Animals</h1>
      {animals.map((animal, index) => (
        <div key={index}>
          <h2>{animal.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default AnimalsPage;
