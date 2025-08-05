import ReactDOM from "react-dom/client"; ///client ***
import React from "react";

/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          className="header-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLEv9CsCH98v2cs6FFEoPj5U9WwGPpE4RJg&s"
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

/*Card */
const RestaurantCard = () => {
  return (
    <div className="fcard hover-effect">
      <img
        title="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRexBia36ixX_U4FoPlg0iqv2hZIvfRyeH8LQ&s"
      />
      <h3>ABC Food Restorent</h3>
      <div className="fcard-extra-data">
        <h4>Abc, North Indian, Asian</h4>
        <h4>* * * *</h4>
      </div>
      <h5>34 minutes</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">

      </div>
      <div className="rcard-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    //*** () Important ****/
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
