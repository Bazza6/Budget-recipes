import { Link } from "react-router-dom";

export default function Card({ receta }) {
  return (
    <Link to={`/recipe/${receta.id}`}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <img src={receta.image} alt={receta.title} className="rounded-t-lg" />
        <div className="p-5 h-32">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {receta.title}
          </h5>
          <span className="flex mb-1 text-xl tracking-tight text-gray-900">
            ${(receta.pricePerServing / 100).toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}
