import {BASE_IMAGE_URL} from "../utils/constants";

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
    <div className="fcard hover-effect">
      <img
        title="food-img"
        src={BASE_IMAGE_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <div className="fcard-extra-data">
        <h4>{cuisines.join(", ")}</h4>
        <h4 className="ratting">{avgRating}</h4>
      </div>
      <h5>{deliveryTime} minutes</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;