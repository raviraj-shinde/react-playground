import { useEffect, useState } from "react";
import { RESTAURENT_PAGE_API } from "../utils/constants";

const useFoodDetails = (resId) => {
  const [foodData, setFoodData] = useState(null);

  useEffect(() => {
    if (!resId) return;
    const fetchData = async () => {
      try {
        const data = await fetch(RESTAURENT_PAGE_API + resId);
        const json = await data.json();
        const resData = json?.data?.cards[2]?.card?.card?.info;
        setFoodData(resData);
      } catch (err) {
        console.error("Error fetching food details:", err);
      }
    };
    fetchData();
  }, [resId]);

  return foodData;
};

export default useFoodDetails;
