import { createBrowserRouter } from "react-router-dom";
import { TourDetails } from "../components/TourDetails";
import App from "../App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tour/:id",
    element: <TourDetails />,
  },
]);
