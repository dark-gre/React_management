import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

import Home from "../views/Home";
// import About from "../views/About";
// import User from "../views/User";
const About = lazy(() => import("../views/About"));
const User = lazy(() => import("../views/User"));

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading... </div>}>{comp} </React.Suspense>
  // 大括号包裹一下，因为穿进来的就是一个组件了
);

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: withLoadingComponent(<About />),
  },
  {
    path: "/user",
    element: withLoadingComponent(<User />),
  },
];

export default routes;
