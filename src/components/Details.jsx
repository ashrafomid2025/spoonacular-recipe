import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/";
const API_KEY = "06710c61b482475fbd4b8340aac3f9a0";
export default function Details({ foodId }) {
  const [details, setDetails] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`${URL}${foodId}/information?apiKey=${API_KEY}`);
      const response = await data.json();
      console.log(response);
      setDetails(response);
    }
    fetchData();
  }, [foodId]);
  return (
    <div className="w-full p-4 rounded-lg h-fit shadow-md ">
      <img className="rounded-lg" src={details.image} alt="" />
      <div className="w-full flex justify-between">
        <span className="py-2 px-4 bg-blue-400 text-white">
          {details.pricePerServing} AFG
        </span>
        <span className="py-2 px-4 bg-red-400 text-white">
          {details.readyInMinutes} Min
        </span>
      </div>
      <div className="flex justify-between flex-wrap gap-1.5 my-3">
        {details.extendedIngredients.map((ing) => (
          <span className="py-1 px-3 bg-purple-400 text-white">
            {ing.aisle}
          </span>
        ))}
      </div>
      <p>{details.instructions}</p>
    </div>
  );
}
