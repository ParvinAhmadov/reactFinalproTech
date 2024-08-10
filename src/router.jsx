import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import GadgetsPage from "./pages/Gadgets";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./featured/Layout/Layout";


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
        element: <GadgetsPage />,
      },
      
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routers;
