import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import useFoodDetails from "../hooks/useFoodDetails";

const FoodDetails = () => {
  const { resId } = useParams();
  const resPageData = useFoodDetails(resId);

  if (!resPageData) return null;
  console.log(resPageData);


  const { id, name, costForTwoMessage, cuisines, avgRating } = resPageData;

  return (
    <div className="food-details w-6/12 m-auto p-4 text-center border-2 border-b-blue-950 flex flex-col gap-3 ">
      <h1 className="text-5xl font-bold ">{name}</h1>
      <p>ID: {id}</p>
      <p>Cost: {costForTwoMessage}</p>
      <p>Cuisines: {cuisines?.join(", ")}</p>
      <p>Rating: {avgRating}</p>
      <button className="hover:bg-sky-200 cursor-pointer bg-indigo-300 rounded-2xl w-2/12 h-12">Buy</button>
    </div>
  );
};

export default FoodDetails;
