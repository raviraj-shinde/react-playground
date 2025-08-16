import { useSelector } from "react-redux";
import ListItem from "../components/ListItem";
import {useDispatch} from "react-redux";
import { clearItem } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Calculate total
  const total = cartItems.reduce((sum, itemCard) => {
    return (
      sum + (itemCard?.card?.info.finalPrice || itemCard?.card?.info.price || 0)
    );
  }, 0);

  const handleClearCart = () => {
    dispatch(clearItem());
  }

  return (
    <div className="w-6/12 m-auto text-gray-800 shadow-xl p-4 rounded-2xl ">
      <div className="w-full p-8 mb-4 border-2 rounded-4xl flex justify-between ">
        <div>
          {" "}
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p>Total: ₹{total / 100}</p>{" "}
        </div>
        <div>
          <button className="text-lg p-3 bg-blue-500 text-white rounded-2xl cursor-pointer hover:scale-105 transition-all duration-100 mr-3">
            Place Order
          </button>
          <button className="text-lg p-3 bg-red-500 text-white rounded-2xl cursor-pointer hover:scale-105 transition-all duration-100"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div className="flex-1">
        {cartItems.length > 0 ? (
          cartItems.map((itemCard, idx) => (
            <ListItem key={idx} itemCard={itemCard} />
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">
            Your cart is empty 🛒
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
