import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <header>
      <div className="logo">
        <img className="header-logo" src={LOGO_URL} />
        <h2>ABC Foods</h2>
      </div>
      <ul>
        <li className="hover-effect">Home</li>
        <li className="hover-effect">About</li>
        <li className="hover-effect">Contact</li>
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
