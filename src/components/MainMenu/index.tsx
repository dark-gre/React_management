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
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "/page1", <PieChartOutlined />),
  getItem("Option 2", "/page2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const CompMenu: React.FC = () => {
  const [openkeys, setOpenkeys] = useState([""]);

  const navigateTo = useNavigate();
  const memu = (e: { key: string }) => {
    console.log("点击", e.key);
    //编程式导航，需要一个hooks
    navigateTo(e.key);
  };
  const openhandlemenu = (keys: string[]) => {
    console.log("keys", keys);

    setOpenkeys([keys[keys.length - 1]]);
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["/page1"]}
      mode="inline"
      items={items}
      onClick={memu}
      //菜单的展开和回收事件
      onOpenChange={openhandlemenu}
      //展示的当前项。
      openKeys={openkeys}
    />
  );
};

export default CompMenu;
