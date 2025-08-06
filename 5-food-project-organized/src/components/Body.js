import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [resListState, setResListState] = useState(resList);

  return (
    <div className="body">
      <div className="search-container">
        {/* <input className="text" type="text" placeholder="Search Food or Restaurant" /> */}
        <button
          onClick={() =>
            setResListState(
              resListState.filter((restaurant) => restaurant.data.avgRating > 4.2)
            )
          }
        >
          Greater than 4.2 Star
        </button>
      </div>
      <div className="rcard-container">
        {resListState.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
