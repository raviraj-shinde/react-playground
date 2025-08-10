import { useState, useEffect } from "react";
import { RESTAURENT_PAGE_API } from "../utils/constants";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { resId } = useParams();
  const [resPageData, setResPageData] = useState([]);
  console.log(resPageData);
  const { id, name, costForTwoMessage, cuisines, avgRating } = resPageData;

  useEffect(() => {
    console.log("useEffect() called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURENT_PAGE_API + resId);
    const json = await data.json();
    const resData = json?.data?.cards[2]?.card?.card?.info;
    setResPageData(resData);
  };

  if (resPageData.length == 0) return <Shimmer />;

  return (
    <>
      <div className="food-details">
        <h1>{name}</h1>

        <p>ID: {id}</p>
        <p>Cost: {costForTwoMessage}</p>
        <p>Cuisines: {cuisines?.join(", ")}</p>
        <p>Rating: {avgRating}</p>
        <button className="button buyBtn">Buy</button>
      </div>
    </>
  );
};

export default FoodDetails;
