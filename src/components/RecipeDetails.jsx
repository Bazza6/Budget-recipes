import { useContext, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import RecipeContext from "../context/RecipeContext";

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recetas } = useContext(RecipeContext);
  const recipe = recetas.find((r) => r.id === parseInt(id));

  useEffect(() => {
    if (!recipe) {
      navigate("/");
    }
  }, [recipe, navigate]);

  if (!recipe) {
    return null;
  }

  return (
    <div className="place-content-end ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full mt-8"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </button>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full  mt-8">
        <img
          className="object-contain h-full rounded-t-lg max-h-96 md:h-full md:rounded-none md:rounded-l-lg"
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {recipe.title}
          </h5>
          <div>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-600 mt-4">
              Ingridients:
            </h5>
            <div className="columns-3">
              {recipe.extendedIngredients.map((i) => (
                <div key={i.id}>
                  <span className="mb-3 font-normal text-gray-600 bg-slate-300  px-4 rounded-lg">
                    {i.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-600 mt-4">
              Recipe:
            </h5>
            <div
              className="mb-3 font-normal text-gray-600"
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
