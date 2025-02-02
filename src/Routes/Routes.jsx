import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import UserDetails from "../Components/UserDetails/UserDetails";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import HotelDetails from "../Components/HotelDetails/HotelDetails";
import DetailsUpdate from "../Components/DetailsUpdate/DetailsUpdate";
import About from "../Components/About/About";
import Slider from "../Components/Swiper/Slider";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/user",
        element: (
          <PrivateRoute>
            <UserDetails></UserDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update",
        element: (
          <PrivateRoute>
            <DetailsUpdate></DetailsUpdate>
          </PrivateRoute>
        ),
      },
      {
        path: "/hotel/:id",
        element: (
          <PrivateRoute>
            <HotelDetails></HotelDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("../hotel.json"),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/slider",
        element: <Slider></Slider>,
      },
    ],
  },
]);

export default routes;
