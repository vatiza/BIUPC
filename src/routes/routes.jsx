import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/mainLayouts";
import HomePage from "../pages/home/home";
import TeamPage from "../pages/team/team";
import ByteCoinPage from "../pages/bytecoin/bytecoin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/team",
        element: <TeamPage />,
      },
      {
        path: "/bytecoin",
        element: <ByteCoinPage />,
      },
    ],
  },
]);
export default routes;
