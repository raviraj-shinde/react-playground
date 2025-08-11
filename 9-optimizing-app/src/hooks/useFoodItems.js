import { useEffect, useState } from "react";
import { RESTAURENT_API } from "../utils/constants";

const useFoodItems = () => {
  const [foodItems, setFoodItems] = useState(null);
  const [foodItemsCopy, setFoodItemsCopy] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURENT_API);
    let json = await data.json();
    json = await json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
    setFoodItems(json);
    setFoodItemsCopy(json);
  };

  return [foodItems, foodItemsCopy, setFoodItemsCopy];
};

export default useFoodItems;
