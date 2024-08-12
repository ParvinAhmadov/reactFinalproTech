import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./featured/Layout/Layout";
import GadgetsPagee from "./pages/GadgetsPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/homepage",
        element: <Home />,
      },
      {
        path: "/gadgetspage",
        element: <GadgetsPagee />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routers;
