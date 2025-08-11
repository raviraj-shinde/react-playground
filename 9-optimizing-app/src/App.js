import ReactDOM from "react-dom/client"; // client ***
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactUs from "./pages/ContactUs";
import FoodDetails from "./pages/FoodDetails";
import NotFound from "./components/NotFound";
import React, { lazy, Suspense } from "react";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

//Lazy Loading Pages/Coponents
const A = lazy(() => (import("./pages/About")));


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
    ],
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={configuration} />);
