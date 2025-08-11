import { useEffect, useState } from "react";
import { RESTAURENT_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
import useFoodItems from "../hooks/useFoodItems";

const Body = () => {
  const [userInput, setUserInput] = useState("");
  const [foodItems, foodItemsCopy, setFoodItemsCopy] = useFoodItems();

  return !foodItems ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="utility-container">
        <div>
          <input
            className="search-box text"
            type="text"
            value={userInput}
            onChange={(e) => {
              const filteredData = foodItems.filter((item) =>
                item.info.name.toLowerCase().includes(e.target.value)
              );
              if (filteredData.length != 0) {
                setFoodItemsCopy(filteredData);
              }
              //React Baches both triggers and renders once for each trigger
              setUserInput(e.target.value);
            }}
            placeholder="Search Food"
          ></input>

          <button
            onClick={() => {
              const input = userInput.toLowerCase();
              const filteredData = foodItems.filter((item) =>
                item.info.name.toLowerCase().includes(input)
              );
              if (filteredData.length == 0) {
                setFoodItemsCopy(filteredData);
              }
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-chip"
          onClick={() =>
            setFoodItemsCopy(
              foodItems.filter((restaurant) => restaurant.info.avgRating > 4.5)
            )
          }
        >
          &gt; 4.5 Star
        </button>
      </div>

      {foodItemsCopy.length == 0 && <NotFound />}

      <div className="rcard-container">
        {foodItemsCopy.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurant/" + restaurant.info.id}
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
