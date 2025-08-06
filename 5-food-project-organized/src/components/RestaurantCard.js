import {IMAGE_URL} from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
  } = resData?.data; /*? Why I used*/

  return (
    <div className="fcard hover-effect">
      <img
        title="food-img"
        src={IMAGE_URL}
      />
      <h3>{name}</h3>
      <div className="fcard-extra-data">
        <h4>{cuisines.join(", ")}</h4>
        <h4 className="ratting">{avgRating}</h4>
      </div>
      <h5>{deliveryTime} minutes</h5>
      <h5>Cost for 2 :{costForTwo / 100} rs</h5>
    </div>
  );
};

export default RestaurantCard;