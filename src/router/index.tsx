import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

import Home from "../views/Home";
// import About from "../views/About";
// import User from "../views/User";
const About = lazy(() => import("../views/About"));
const User = lazy(() => import("../views/User"));
//
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading... </div>}>{comp} </React.Suspense>
  // 大括号包裹一下，因为穿进来的就是一个组件了
);

//普通新形式路由
// const routes = [
//   {
//     path: "/",
//     element: <Navigate to="/home" />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: withLoadingComponent(<About />),
//   },
//   {
//     path: "/user",
//     element: withLoadingComponent(<User />),
//   },
// ];

//嵌套路由的写法
const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: "/page2",
        element: withLoadingComponent(<Page2 />),
      },
      {
        path: "/about",
        element: withLoadingComponent(<About />),
      },
      {
        path: "/user",
        element: withLoadingComponent(<User />),
      },
    ],
  },
];

export default routes;
