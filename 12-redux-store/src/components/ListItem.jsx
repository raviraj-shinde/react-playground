import { ITEM_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, clearItem, removeItem } from "../redux/cartSlice";

const ListItem = (props) => {
  const { itemCard } = props;
  const dispatch = useDispatch();
  const itemCardInfo = itemCard?.card?.info;

  const {
    id,
    name,
    category,
    description,
    imageId,
    itemAttribute: { vegClassifier },
    price,
    finalPrice,
    ratings: {
      aggregatedRating: { rating, ratingCount },
    },
  } = itemCardInfo;

  const handleAddCart = () => {
    dispatch(addItem(itemCard));
  }

  return (!price && !finalPrice) ? null: (
    <div className="w-full p-5 bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:shadow-xl transition-shadow duration-300 mb-4">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">{name}</h2>

        <p className="mb-3 text-gray-700">
          {finalPrice ? (
            <>
              <span className="line-through text-gray-400 mr-2 text-sm">
                ₹{price / 100}
              </span>
              <span className="text-green-600 font-bold text-lg mr-4">
                ₹{finalPrice / 100}
              </span>
            </>
          ) : (
            <span className="text-green-600 font-bold text-lg mr-4">
              ₹{price / 100}
            </span>
          )}

          <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-md text-xs">
            {category}
          </span>
        </p>

        <div className="flex items-center gap-3 mb-3 text-sm">
          <span className="flex items-center gap-1 text-yellow-500">
            ⭐ <span className="text-gray-700">{rating}</span>
          </span>
          <span className="text-gray-500">({ratingCount} ratings)</span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Right Image */}
      <div className="sm:ml-6 flex-shrink-0 relative hover:scale-105 transition-transform duration-300">
        <button className="absolute top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white w-12 h-8 flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-500 hover:scale-120"
        onClick={handleAddCart}
        >
          Add+
        </button>
        <img
          src={ITEM_IMAGE_URL + imageId}
          alt={name}
          className="w-32 h-32 object-cover rounded-xl shadow-md "
        />
      </div>
    </div>
  );
};


///do Higher Order Component for adding remove button for cart with condtion by passing new prop from cart page

export default ListItem;
