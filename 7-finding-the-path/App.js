import ReactDOM from "react-dom/client"; // client ***
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import About from "./src/pages/About";
import ContactUs from "./src/pages/ContactUs";
import FoodDetails from "./src/pages/FoodDetails";
import NotFound from "./src/components/NotFound";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

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
        element: <About />,
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
