import ReactDOM from "react-dom/client"; // client ***
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactUs from "./pages/ContactUs";
import FoodDetails from "./pages/FoodDetails";
import NotFound from "./components/NotFound";
import React, { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./pages/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    //call an API
    const data = "Default U2";
    setUserName(data);
  }, []);

  return (
    <Provider store={appStore}>
      <div>
        <UserContext.Provider
          value={{ loggedInUserName: userName, setUserName }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </div>
    </Provider>
  );
};

//Lazy Loading Pages/Coponents
const A = lazy(() => import("./pages/About"));

const configuration = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Parent layout
    children: [
      {
        path: "/", // Default route inside layout
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <FoodDetails />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <A />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={configuration} />);
