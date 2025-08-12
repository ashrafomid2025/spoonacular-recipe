import { useState } from "react";
import Form from "../components/Form";
import Foods from "../components/Foods";

export default function Home() {
  const [foods, setFoods] = useState([]);
  return (
    <div className="w-full h-screen overflow-y-scroll">
      {/* navbar */}

      {/* input */}
      <Form foods={foods} setFoods={setFoods} />

      {/* container */}
      <div className="w-full h-fit flex justify-between gap-3 flex-wrap">
        {foods.map((food) => (
          <Foods title={food.title} image={food.image} />
        ))}
      </div>
      {/* footer */}
    </div>
  );
}
