import { useEffect, useState } from "react";
import { getCharacters, type TCharacter } from "./lib/api";

const App = () => {
  const [characters, setCharacters] = useState<TCharacter[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await getCharacters();
      setCharacters(response.products);
    };
    fetchCharacters();
  }, []);

  return (
  <div className="p-4">
    <h1>Characters</h1>
    <div className="grid grid-cols-2 gap-4">
     {characters.map((character) => (
       <div className="border p-2 rounded-b-md" key={character.id}>
         <h1>{character.title}</h1>
         <p className="text-sm text-gray-500">{character.description}</p>
       </div>
     ))}
    </div>
  </div>
  );  
};

export default App;
