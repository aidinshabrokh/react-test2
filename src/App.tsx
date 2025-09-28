import { useEffect, useState } from "react";
import { getCharacters, type TCharacter } from "./lib/api";

const App = () => {
  const [characters, setCharacters] = useState<TCharacter[]>([]);
 
  const searchParams = new URLSearchParams(window.location.search);
  const queryInit = searchParams.get("query") || "";
  const limitInit = Number(searchParams.get("limit")) || 0;
  const skipInit = Number(searchParams.get("skip")) || 0;
 
  const [query, setQuery] = useState(queryInit);
  const [limit, setLimit] = useState(limitInit);
  const [skip, setSkip] = useState(skipInit);

  const fetchCharacters = async () => {
    const response = await getCharacters({ limit, skip, query });
    setCharacters(response.products);
  };

  useEffect(() => {  
    fetchCharacters();
  }, []);

  const editURL = () => {
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    params.set("limit", String(limit));
    params.set("skip", String(skip));

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);

    fetchCharacters();
  };

  return (
  <div className="min-h-screen bg-slate-900 text-gray-100">
    
    <header className="bg-slate-800 text-white p-6 shadow-md">
       <h1 className="text-3xl font-extrabold tracking-wide">Products</h1>
    </header>
    
    <main className="max-w-6xl mx-auto p-6">
        <div className="flex flex-wrap gap-4 mb-8 items-end bg-gray-100 p-6 text-slate-900 rounded-xl shadow">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
          </div>

       <div className="flex flex-col">
          <label className="text-sm font-medium mb-3 ml-4">limit</label>
          <select
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="border border-gray-300 p-3 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700"
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
          <label className="text-sm font-medium mb-3 ml-4">skip</label>
          <select
            value={skip}
            onChange={(e) => setSkip(Number(e.target.value))}
            className="border border-gray-300 p-3 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700"
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

        <button onClick={editURL} className="bg-slate-800 text-white hover:bg-gray-500 px-8 py-3 rounded-lg shadow font-semibold transition">
        apply
        </button>
      </div>
    
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {characters.map((character) => (
        <div className="bg-white text-slate-900 border border-gray-200 rounded-xl hover:bg-gray-400 transition p-5"
         key={character.id}>
         <h2 className="font-bold text-xl mb-2 tracking-tight">{character.title}</h2>
         <p className="text-gray-700 leading-relaxed">{character.description}</p>
       </div>
     ))}
     </div>
   </main>
  </div>
  );  
};

export default App;
