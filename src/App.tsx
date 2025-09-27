import { useEffect, useState } from "react";
import { getCharacters, type TCharacter } from "./lib/api";

const App = () => {
  const [characters, setCharacters] = useState<TCharacter[]>([]);
 
  const searchParams = new URLSearchParams(window.location.search);
  const initialQuery = searchParams.get("query") || "";
  const initialLimit = Number(searchParams.get("limit")) || 0;
  const initialSkip = Number(searchParams.get("skip")) || 0;
 
  const [query, setQuery] = useState(initialQuery);
  const [limit, setLimit] = useState(initialLimit);
  const [skip, setSkip] = useState(initialSkip);

  const fetchCharacters = async () => {
    const response = await getCharacters({ limit, skip, query });
    setCharacters(response.products);
  };

  useEffect(() => {  
    fetchCharacters();
  }, []);

  const updateURL = () => {
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    params.set("limit", String(limit));
    params.set("skip", String(skip));

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);

    fetchCharacters();
  };

  return (
  <div className="p-4">
    <h1 className="text-xl font-bold mb-4">Characters</h1>
    
     <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded"
        />

       <div className="flex flex-col">
          <label className="text-sm mb-1">limit</label>
          <select
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="border p-2 rounded"
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
            <option value={16}>16</option>
            <option value={17}>17</option>
            <option value={18}>18</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">skip</label>
          <select
            value={skip}
            onChange={(e) => setSkip(Number(e.target.value))}
            className="border p-2 rounded"
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
            <option value={16}>16</option>
            <option value={17}>17</option>
            <option value={18}>18</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
          </select>
        </div>

        <button onClick={updateURL} className="bg-blue-500 text-white px-4 py-2 rounded">
        apply
        </button>
      </div>
    
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
