//组件形式的写法
import App from "../App";
import Home from "../views/Home";
import About from "../views/User";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//两种路由模式的组件，BrowserRouter,(history模式),HashRouter(hash模式)
// const baseRouter = ()=>{
//     return ()
// }

//老版本的路由实现。  
const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default baseRouter;
