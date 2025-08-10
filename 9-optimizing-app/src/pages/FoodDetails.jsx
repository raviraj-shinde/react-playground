import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import useFoodDetails from "../hooks/useFoodDetails";

const FoodDetails = () => {
  const { resId } = useParams();
  const resPageData = useFoodDetails(resId);

  if (!resPageData) return <Shimmer />;

  const { id, name, costForTwoMessage, cuisines, avgRating } = resPageData;

  return (
    <div className="food-details">
      <h1>{name}</h1>
      <p>ID: {id}</p>
      <p>Cost: {costForTwoMessage}</p>
      <p>Cuisines: {cuisines?.join(", ")}</p>
      <p>Rating: {avgRating}</p>
      <button className="button buyBtn">Buy</button>
    </div>
  );
};

export default FoodDetails;
