import React, { useState } from "react";
import { Sidebar } from "../layouts/PrivateComponents/SiderBar/SiderBar";
import { HeaderPrivate } from "../layouts/PrivateComponents/HeaderPage";
import "./css/MainPrivate.css";

export function MainPrivate({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="h-screen w-screen flex">
        <div className="flex-none">
          <Sidebar className="bg-blue" collapsed={collapsed} />
        </div>
        <div className="flex-auto w-64">
          <HeaderPrivate collapsed={collapsed} setCollapsed={setCollapsed} />
          <div style={{ padding: "0 24px 24px", margin: "24px 16px 0" }}>
            <div style={{minHeight: 360}}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
