import { useEffect, useState } from "react";

export default function Form() {
  // hook: usestate(), useEffect()//
  const [name, setName] = useState("");
  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?query=beans&apiKey=06710c61b482475fbd4b8340aac3f9a0"
    )
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log("somthing went wrong"));
  }, []);
  return (
    <div>
      <label htmlFor="name">
        <span className="text-sm font-medium text-gray-700"> Recipe Name </span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
        />
      </label>
    </div>
  );
}
