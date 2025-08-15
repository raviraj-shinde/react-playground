import { useContext, useEffect, useState } from "react";
import { RESTAURENT_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
import useFoodItems from "../hooks/useFoodItems";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [userInput, setUserInput] = useState("");
  const [foodItems, foodItemsCopy, setFoodItemsCopy] = useFoodItems();
  const { loggedInUserName, setUserName } = useContext(UserContext);

  if (!foodItems) return <Shimmer />;

  return (
    <div className="main-utility-div w-full ">
      <div className="w-full utility-container my-6">
        <div className="w-full my-2">
          <input
            className="w-3/12 p-2 border-2 shadow-lg border-indigo-300 h-10 mx-4"
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
            className="w-1/12 h-10 text-2xl shadow-lg bg-indigo-400 text-white hover:bg-indigo-600 rounded-2xl mr-4"
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
          <button
            className="w-1/12 h-10 text-2xl shadow-lg bg-yellow-200 text-black font-semibold rounded-2xl mr-4 "
            onClick={() =>
              setFoodItemsCopy(
                foodItems.filter(
                  (restaurant) => restaurant.info.avgRating > 4.5
                )
              )
            }
          >
            &gt; 4.5 Star
          </button>
          <input
            className="ml-64 w-3/12 p-2 border-2 shadow-lg border-indigo-300 h-10 mx-4"
            type="text"
            value={loggedInUserName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Write your username to replace default"
          ></input>
        </div>
      </div>

      {foodItemsCopy.length == 0 && <NotFound />}

      <div className="card-container w-full flex flex-wrap justify-evenly gap-5">
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
