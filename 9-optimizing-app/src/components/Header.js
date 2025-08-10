import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import About from "../pages/About";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <header>
      <div className="logo">
        <img className="header-logo" src={LOGO_URL} />
        <h2>ABC Foods</h2>
      </div>
      <ul>
        <li className="hover-effect"><Link to={"/"}>Home</Link></li>
        <li className="hover-effect"><Link to={"/about"}>About</Link></li>
        <li className="hover-effect"><Link to={"/contact"}>Contact</Link></li>
        <button
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
