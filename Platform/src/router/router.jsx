import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { Livestream } from "../pages/Livestream";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/livestream",
    element: <Livestream />,
  },
]);

export default router;
