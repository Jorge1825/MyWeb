import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { Header, Body, Footer } from "./";
import MuiDrawer from "@mui/material/Drawer";
import "./SiderBar.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function Sidebar({ collapsed }) {


  return (
    <Drawer className="bg-primary" variant="permanent" open={!collapsed}>

      <Header show={collapsed} />
      <Divider className="divider my-1" />
      <Body show={collapsed} />
      <Divider className="divider my-1" />
      <Footer show={collapsed} />
    </Drawer>
  );
}
