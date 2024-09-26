import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/mainLayouts";
import BiupcPage from "../pages/biupc/biupc";
import ByteCoinPage from "../pages/bytecoin/bytecoin";
import ContestPage from "../pages/contest/contest";
import NotFoundPage from "../pages/error/404page";
import HomePage from "../pages/home/home";
import TeamPage from "../pages/team/team";
import IcPcPage from "../pages/icpc/icpc";

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
      {
        path: "/biupc",
        element: <BiupcPage />,
      },
      {
        path: "/contest",
        element: <ContestPage />,
      },
      {
        path: "/icpc",
        element: <IcPcPage />,
      },

      // error 404 route
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
export default routes;
