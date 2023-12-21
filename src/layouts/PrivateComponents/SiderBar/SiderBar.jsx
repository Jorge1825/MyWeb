import React, { useState } from "react";
import { Layout, Divider } from "antd";

import { Header, Body, Footer } from "./";

import "./SiderBar.css";

const { Sider } = Layout;
export function Sidebar({ collapsed }) {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidthScreen(window.innerWidth);
  });

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth={widthScreen < 992 ? 0 : 85}
      onBreakpoint={() => {}}
      onCollapse={() => {}}
      width={256}
      trigger={widthScreen < 992 ? undefined : null}
      collapsible
      {...(widthScreen < 992 ? {} : { collapsed })}
    >
      <div className="demo-logo-vertical" />

      <Header show={collapsed} />
      <Divider className="divider my-1" />
      <Body show={collapsed} />
      <Divider className="divider my-1" />
      <Footer 
      show={collapsed}
      />
    </Sider>
  );
}
