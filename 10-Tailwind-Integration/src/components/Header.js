import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import About from "../pages/About";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <header className="w-full h-20 flex justify-between items-center p-2 mb-4 shadow-lg">
      <div className="flex  items-center text-4xl font-bold ">
        <img className="w-2/12" src={LOGO_URL} />
        <h2>ABC Foods</h2>
      </div>
      <ul className="w-4/12 font-semibold text-2xl flex justify-evenly mx-4 items-center">
        <li className="hover:border-b-2 border-indigo-200"><Link to={"/"}>Home</Link></li>
        <li className="hover:border-b-2 border-indigo-200"><Link to={"/about"}>About</Link></li>
        <li className="hover:border-b-2 border-indigo-200"><Link to={"/contact"}>Contact</Link></li>
        <button
        className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => {
            btnName === "login" ? setBtnName("logout") : setBtnName("login");
          }}
        >
          {btnName}
        </button>
      </ul>
    </header>
  );
};

export default Header;
