import React, { useState } from "react";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
// useLocation，是路由里面的hook，获取路由相关信息。
// const currentRoute = useLocation()
//console.log('----',currentRoute)

type MenuItem = Required<MenuProps>["items"][number];
// 登录请求到数据之后，跟items匹配

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem("Option 1", "/page1", <PieChartOutlined />),
//   getItem("Option 2", "/page2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];

const items: MenuItem[] = [
  {
    label: "栏目 1",
    key: "/page1",
    icon: <PieChartOutlined />,
  },
  {
    label: "栏目 2",
    key: "/page2",
    icon: <DesktopOutlined />,
  },
  {
    label: "栏目 3",
    key: "page3",
    icon: <UserOutlined />,
    children: [
      {
        label: "栏目 301",
        key: "/page3/page301",
      },
      {
        label: "栏目 302",
        key: "/page3/page302",
      },
      {
        label: "栏目 303",
        key: "/page3/page303",
      },
    ],
  },
  {
    label: "栏目 4",
    key: "page4",
    icon: <TeamOutlined />,
    children: [
      {
        label: "栏目 401",
        key: "/page4/page401",
      },
      {
        label: "栏目 402",
        key: "/page4/page402",
      },
    ],
  },
  {
    label: "栏目 5",
    key: "page5",
    icon: <FileOutlined />,
  },
  {
    label: "其他",
    key: "/otherTest/index",
    icon: <DesktopOutlined />,
  },
];

const CompMenu: React.FC = () => {
  const currenRoute = useLocation();
  //这里打印currentRoute的时候，会打印两次，原因是，在开发环境下会重复两次， 需要关掉严格模式，不过在生产环境下是正常的。
  //设置初始展开项
  let firstOpenKey: string = "";

  function findKey(obj: { key: string }) {
    //这里返回的是一个true和false
    return obj.key === currenRoute.pathname;
  }

  for (let i = 0; i < items.length; i++) {
    if (
      items[i]!["children"] &&
      items[i]!["children"].length > 0 &&
      items[i]!["children"].find(findKey)
      //find方法
    ) {
      //ts语法，items[i].children    ==>   items[i]?['children']，这里ts不会报错了。但是，会被认为是三元运算符，
      //ts语法，items[i].children    ==>   items[i]！['children']，这里ts不会报错了。换成！,认为是items必然存在。但是还未解决红下划线的问题，需要用配置项来处理。
      //这里注意find的用法，find需要传一个方法，这个方法返回的是一个true。
      firstOpenKey = items[i]!.key as string;//这里不添加as string 前面变量会报错

      break;
      //循环到这里，找到数值之后，break就好了，就不用遍历下面的了。
    }
  }

  const [openkeys, setOpenkeys] = useState([firstOpenKey]);

  const navigateTo = useNavigate();
  const memu = (e: { key: string }) => {
    console.log("点击", e.key);
    //编程式导航，需要一个hooks
    navigateTo(e.key);
  };
  const openhandlemenu = (keys: string[]) => {
    console.log("keys", keys);
    //这里是打印了点击菜单之后，数组里面的值变化，
    setOpenkeys([keys[keys.length - 1]]);//或者slice(-1)
  };

  return (
    <Menu
      theme="dark"
      // defaultSelectedKeys={["/page1"]}//默认样式问题
      defaultSelectedKeys={[currenRoute.pathname]}
      mode="inline"
      items={items}
      onClick={memu}
      //菜单的展开和回收事件,（就是点击其他的菜单的时候，关闭上一次的菜单）菜单展开和回收的时候执行
      onOpenChange={openhandlemenu}
      //当前展开的菜单项的key数组，只负责展开相关属性 
      openKeys={openkeys}
    />
  );
};

export default CompMenu;
