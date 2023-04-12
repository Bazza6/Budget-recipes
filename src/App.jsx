import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import { useEffect, useState } from "react";
import RecipesList from "./components/RecipesList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeContext from "./context/RecipeContext";
// import mock from "../fakeRecepies.json";
export const URL = "https://api.spoonacular.com/recipes/random?number=9";

export default function App() {
  // const [recetas, setRecetas] = useState(mock); Use to make test with mocked data
  const [recetas, setRecetas] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}&apiKey=${import.meta.env.VITE_API_KEY}`)
      .then((res) => setRecetas(res.data.recipes));
  }, []);

  const contextValue = {
    recetas,
    setRecetas,
  };

  return (
    <RecipeContext.Provider value={contextValue}>
      <Router>
        <Routes>
          <Route path="/" element={<RecipesList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </RecipeContext.Provider>
  );
}
