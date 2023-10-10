import React, { useState } from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import Mainmenu from "@/components/MainMenu";
const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Mainmenu></Mainmenu>
      </Sider>
      <Layout>
        <Header style={{ paddingLeft: "16px", background: colorBgContainer }}>
          {/* 一般面包屑，用crumb这个单词  */}
          <Breadcrumb style={{ lineHeight: "64px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content
          style={{
            margin: "16px 16px 0",
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
          }}
        >
          {/* <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div> */}
          <Outlet />
        </Content>
        <Footer
          style={{ textAlign: "center", padding: "0", lineHeight: "48px" }}
        >
          {/* 样式，因为原本有padding ，现在设置padding为0,然后设置行高 */}
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
