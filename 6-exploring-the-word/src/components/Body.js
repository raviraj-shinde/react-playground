import { useEffect, useState } from "react";
import { RESTAURENT_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resListState, setResListState] = useState([]);
  const [resListCopy, setResListCopy] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    console.log("useEffect() called");

    const fetchData = async () => {
      const data = await fetch(RESTAURENT_API);
      const json = await data.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log(restaurants);
      //React Baches both triggers and renders once for each trigger
      setResListState(restaurants);
      setResListCopy(restaurants);
    };

    fetchData();
  }, []);

  console.log("body called first");

  return resListState.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="utility-container">
        {/* <input className="text" type="text"  /> */}

        <div>
          <input
            className="search-box text"
            type="text"
            value={userInput}
            onChange={(e) => {
              const filteredData = resListState.filter((item) =>
                item.info.name.toLowerCase().includes(e.target.value)
              );
              if (filteredData.length != 0) {
                setResListCopy(filteredData);
              }
              //React Baches both triggers and renders once for each trigger
              setUserInput(e.target.value);
            }}
            placeholder="Search Food"
          ></input>
        </div>

        <button
          onClick={() =>
            setResListCopy(
              resListState.filter(
                (restaurant) => restaurant.info.avgRating > 4.5
              )
            )
          }
        >
          Greater than 4.5 Star
        </button>
      </div>

      <div className="rcard-container">
        {resListCopy.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
