import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const { loggedInUserName, age } = useContext(UserContext);
  const [isLogin, setLogin] = useState(false);
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <header className="w-full h-20 flex justify-between items-center p-2 mb-4 shadow-lg">
      <div className="flex  items-center text-4xl font-bold ">
        <img className="w-2/12" src={LOGO_URL} />
        <h2>ABC Foods</h2>
      </div>

      {isLogin ? (
        <div className="font-semibold text-lg p-1 px-2 border-2 border-gray-200 text-zinc-50 bg-emerald-400">
          <span>User: {loggedInUserName}</span>
        </div>
      ) : null}

      <ul className="w-4/12 font-semibold text-2xl flex justify-evenly mx-4 items-center">
        <li className="hover:border-b-2 border-indigo-200">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:border-b-2 border-indigo-200">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-3xl" />
            {cartItem.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartItem.length}
              </span>
            )}
          </Link>
        </li>
        <li className="hover:border-b-2 border-indigo-200">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="hover:border-b-2 border-indigo-200">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <button
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => {
            if (btnName === "login") {
              setBtnName("logout");
              setLogin(true);
            } else {
              setBtnName("login");
              setLogin(false);
            }
          }}
        >
          {btnName}
        </button>
      </ul>
    </header>
  );
};

export default Header;
