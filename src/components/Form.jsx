import { useEffect, useMemo, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "06710c61b482475fbd4b8340aac3f9a0";

export default function Form({ foods, setFoods }) {
  // hook: usestate(), useEffect()//
  const [name, setName] = useState("beans");

  useEffect(() => {
    async function fetchFood() {
      const data = await fetch(`${URL}?query=${name}&apiKey=${API_KEY}`);
      const response = await data.json();
      console.log(response.results);
      setFoods(response.results);
    }
    fetchFood();
  }, [name]);
  return (
    <div className="w-full h-fit flex justify-center my-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="py-2 px-4 w-1/2 rounded-md  border focus:outline-blue-500"
      />
    </div>
  );
}
