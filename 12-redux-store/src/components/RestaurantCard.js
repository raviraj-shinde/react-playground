import { BASE_IMAGE_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
  } = resData?.info; /*? Why I used*/

  return (
    <div className="w-72 p-4 border-2 border-indigo-100 shadow-lg shadow-gray-200 hover:border-gray-400 transition-colors duration-200 rounded-lg">
      <img
        className="rounded-lg mb-4 shadow-lg shadow-gray-100"
        title="food-img" 
        src={BASE_IMAGE_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl">{name}</h3>
      <div className="fcard-extra-data">
        <h4 className="font-semibold text-md">{cuisines.join(", ")}</h4>
        <h4 className="ratting">{avgRating}</h4>
      </div>
      <h5>{deliveryTime ? deliveryTime : 30} minutes</h5>
      <h5 className="font-bold text-green-700">{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
