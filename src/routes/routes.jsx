import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/mainLayouts";
import BiupcPage from "../pages/biupc/biupc";
import NotFoundPage from "../pages/error/404page";
import HomePage from "../pages/home/home";
import IcPcPage from "../pages/icpc/icpc";
import ShowLeaderBoard from "../pages/show_leaderboard/showLeaderboard";
import TeamPage from "../pages/team/team";
import CfStanding from "../pages/cf_standing/cfStanding";
import Alumni from "../pages/alumni/alumni";

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
        path: "/biupc",
        element: <BiupcPage />,
      },

      {
        path: "/icpc",
        element: <IcPcPage />,
      },
      {
        path: "showleaderboard",
        element: <ShowLeaderBoard />,
      },
      {
        path: "/cfstanding",
        element: <CfStanding />,
      },
      {
        path: "/alumni",
        element: <Alumni />,
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
