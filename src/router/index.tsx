import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

import Home from "../views/Home";
// import About from "../views/About";
// import User from "../views/User";
// const User = lazy(() => import("../views/User"));
//
import Login from "../views/Login/index";
//login这种页面不需要懒加载这种形式

const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
const Page301 = lazy(() => import("../views/Page301"));
// const Login = lazy(() => import("../views/Login/index"));

const ViewTest = lazy(() => import("../views/otherView/index"));

const Error = lazy(() => import("../views/error"));

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading... </div>}>{comp} </React.Suspense>
  // 大括号包裹一下，因为传进来的就是一个组件了
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
        path: "/page3/page301",
        element: withLoadingComponent(<Page301 />),
      },
      // {
      //   path: "/user",
      //   element: withLoadingComponent(<User />),
      // },
      {
        path: "/otherTest/index",
        element: withLoadingComponent(<ViewTest />),
      },
    ],
  },
  //上面是嵌套路由，，，，，结束。 
  {
    path: '/login',
    element: <Login />
  },
  {
    path: "/error",
    element: withLoadingComponent(<Error />),
  },
  {
    path: "*",
    element: <Navigate to="/error" />,
    // element: withLoadingComponent(<Error />),
  },
  //这个就是，当路由，不在路由表里面的时候，重定向。
  //重定向，不会存放到路由历史中，无法退回
];

export default routes;
