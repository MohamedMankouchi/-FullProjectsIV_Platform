import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Info from "../pages/Info";
import { Livestream } from "../pages/Livestream";
import {Timetable}  from "../pages/Timetable";
import BillboardShowroom  from "../components/BillboardShowroom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/livestream",
    element: <Livestream />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/info",
    element: <Info />,
  },
    {
    path: "/timetable",
    element: <Timetable />,
  },
    {
    path: "/billboardshowroom",
    element: <BillboardShowroom />,
  },
]);

export default router;
