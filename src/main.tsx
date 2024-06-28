import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import { BrowserRouter } from "react-router-dom";
//ui框架的样式

// 全局样式
import "@/assets/styles/global.scss";
// import '@'
// 组件的样式
//上面是正确的样式引入顺序
import App from "./App.tsx";

// import Router from "./router";

// import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  //严格模式  的开发环境下面，组件都会执行两次，，生产环境不会
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* 顶级组件，放到这里。 */}
    {/* <Router /> */}
  </React.StrictMode>
);
