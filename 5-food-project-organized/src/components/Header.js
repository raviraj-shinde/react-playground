import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          className="header-logo"
          src={LOGO_URL}
        />
        <h2>ABC Foods</h2>
      </div>
      <ul>
        <li className="hover-effect">Home</li>
        <li className="hover-effect">About</li>
        <li className="hover-effect">Contact</li>
      </ul>
    </header>
  );
};

export default Header;