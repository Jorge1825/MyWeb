import React, { useState } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { Layout, theme, Button } from "antd";

import { Sidebar } from "../layouts/PrivateComponents/SiderBar/SiderBar";
import { HeaderPrivate } from "../layouts/PrivateComponents/HeaderPage";

import "./css/MainPrivate.css";
const { Header, Content } = Layout;
export function MainPrivate({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="h-screen">
      <Sidebar collapsed={collapsed} />
      <Layout>
        <HeaderPrivate collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            padding: '0 24px 24px',
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
