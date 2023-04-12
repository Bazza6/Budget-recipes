import RecipeContext from "../context/RecipeContext";
import Card from "./Card";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../App";

export default function RecipesList() {
  const { recetas, setRecetas } = useContext(RecipeContext);
  const [sliderValue, setSliderValue] = useState(500);

  const loadMoreRecipes = () => {
    axios
      .get(`${URL}&apiKey=${import.meta.env.VITE_API_KEY}`)
      .then((res) => {
        setRecetas(res.data.recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="recetas m-4">
      <div className="h-48 bg-indigo-300 flex flex-col items-center justify-center my-8 rounded-lg">
        <h2 className="mb-2 text-6xl font-bold tracking-tight text-gray-900">
          ON A BUDGET?
        </h2>
        <label htmlFor="slider">Filter by price per portion!</label>
        <div>
          <input
            type="range"
            id="slider"
            min="0"
            max="500"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
          />
        </div>
        <div> ${sliderValue / 100}</div>
      </div>
      <ul>
        {recetas
          .filter((r) => r.pricePerServing <= sliderValue)
          .map((r) => (
            <li key={r.id}>
              <Card receta={r} />
            </li>
          ))}
      </ul>
      <div className="flex items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full mt-8 mb-16"
          onClick={loadMoreRecipes}
        >
          Load More Recipes
        </button>
      </div>
    </main>
  );
}
