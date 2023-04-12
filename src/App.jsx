import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/card";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
export default function App() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian,dessert&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => setRecetas(res.data.recipes));
  }, []);

  console.log(recetas);
  return (
    <>
      <h1 className="font-black text-6xl">RECETAS</h1>
      <main className="recetas">
        <ul>
          {recetas.map((r) => (
            <li key={r.id}>
              <Card receta={r} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
