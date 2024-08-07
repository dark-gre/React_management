import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Button, Space } from "antd";
// import { StarOutlined } from "@ant-design/icons";

//使用react-route-dom里面的组件
import { Outlet, Link, useRoutes } from "react-router-dom";
import router from "./router";

function App() {
  // const [count, setCount] = useState(0);
  const outlet = useRoutes(router); //useRoutes这个hooks的用法

  return (
    <>
      {/* <Link to="/home">Home </Link> |<Link to="/about">About </Link> |
      <Link to="/user">User </Link> */}
      {/* <Outlet></Outlet> */}
      {/* 占位符组件，类似于窗口，用来展示组件的。 旧的写法  */}
      {/* 新的路由方式 */}
      {outlet}
    </>
  );
}

export default App;
//APP默认为顶级组件