import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import useFoodDetails from "../hooks/useFoodDetails";
import ItemCategory from "../components/ItemCategory";
import { useState } from "react";

const FoodDetails = () => {
  const { resId } = useParams();
  const [resData, foodData] = useFoodDetails(resId); // API
  const [showIdx, setShowIdx] = useState(0);

  if (!foodData || !resData) return <Shimmer />;

  const cards =
    resData.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="food-details w-10/12 m-auto p-6 flex flex-col gap-4">
      {/* Food Header */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col sm:flex-row items-start gap-2">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {foodData.name}
          </h1>
          <p className="text-gray-600 mb-1">
            Cuisines: {foodData.cuisines.join(", ")}
          </p>
          <p className="text-gray-600 mb-1">
            Cost: {foodData.costForTwoMessage}
          </p>
          <p className="text-yellow-500 font-semibold">
            Rating: {foodData.avgRating} ⭐
          </p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Buy
        </button>
      </div>

      {/* Food Categories */}
      {cards.map((card, index) => {  
        if (!card.card?.card?.itemCards) return null;

        return (
          <ItemCategory key={card?.card?.["@type"] || index} cards={card} index={index} showIdx={showIdx} setShowIdx={setShowIdx}/>
        );
      })}
    </div>
  );
};

export default FoodDetails;
