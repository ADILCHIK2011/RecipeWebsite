import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Uzbek from "./pages/Uzbek";
import Yevropa from "./pages/Yevropa";
import Xitoy from "./pages/Xitoy";
import Koreya from "./pages/Koreya";
import Yaponiya from "./pages/Yapon";
import Amerika from "./pages/Amerika";
import Hind from "./pages/Hind";
import Misr from "./pages/Misr";
import Italyan from "./pages/Italyan";
import Fransuz from "./pages/Fransuz";
import Dubay from "./pages/Dubay";
import Saudi from "./pages/Arabiston";
import Rus from "./pages/Rus";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodsDetail from "./pages/SingleFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/uzbek",
    element: <Uzbek />,
  },
  {
    path: "/yevropa",
    element: <Yevropa />,
  },
  {
    path: "/xitoy",
    element: <Xitoy />,
  },
  {
    path: "/yapon",
    element: <Yaponiya />,
  },
  {
    path: "/koreya",
    element: <Koreya />,
  },
  {
    path: "/misr",
    element: <Misr />,
  },
  {
    path: "/saudiya",
    element: <Saudi />,
  },
  {
    path: "/fransuz",
    element: <Fransuz />,
  },
  {
    path: "/dubay",
    element: <Dubay />,
  },
  {
    path: "/hind",
    element: <Hind />,
  },
  {
    path: "/rus",
    element: <Rus />,
  },
  {
    path: "/amerika",
    element: <Amerika />,
  },
  {
    path: "/italyan",
    element: <Italyan />,
  },
  {
    path: "/foods/:id",
    element: <FoodsDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
