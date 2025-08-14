import { useState } from "react";
import Form from "../components/Form";
import Foods from "../components/Foods";
import Details from "../components/Details";

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <div className="w-full h-screen overflow-y-scroll">
      {/* navbar */}

      {/* input */}
      <Form foods={foods} setFoods={setFoods} />

      {/* container */}
      <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="w-full h-fit flex justify-between gap-3 flex-wrap">
          {foods.map((food) => (
            <Foods
              title={food.title}
              image={food.image}
              id={food.id}
              setFoodID={setFoodId}
            />
          ))}
        </div>

        {/* details */}
        <div className="w-full">
          <Details foodId={foodId} />
        </div>
      </div>
      {/* footer */}
    </div>
  );
}
