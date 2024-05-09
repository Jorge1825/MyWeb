import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import { Layout, Button, Row, Col, Switch, Tooltip } from "antd";
const { Header, Content } = Layout;

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 5,
    border: `1px solid white`,
    padding: "0 4px",
    backgroundColor: "green",
    color: "white",
  },
}));

export function HeaderPrivate({ collapsed, setCollapsed }) {
  const [checked, setchecked] = useState(false);

  return (
    <>
      <Header className="header-page">
        <Row className="w-full ju">
          <Col span={1} className="items-center flex">
            <button
              type="button"
              className="
              btn-close-open
               font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center me-2 "
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowLeftIcon />
              )}
              <span className="sr-only">Icon description</span>
            </button>
          </Col>
          <Col span={1} className="">
            <Switch
              checkedChildren={<Brightness7Icon />}
              unCheckedChildren={<NightsStayIcon />}
              {...{ checked }}
              className={
                checked ? "switch inactive-dark" : "switch active-dark"
              }
              onChange={() => setchecked(!checked)}
            />
          </Col>
          <Col span={20} className=" jus-end d-flex items-center">
            {/* <Tooltip title="Usuarios Activos">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4}>
                  <PeopleAltIcon style={{ fontSize: 26, color: "#808080" }} />
                </StyledBadge>
              </IconButton>
            </Tooltip> */}
          </Col>
          <Col span={1} className=" jus-end d-flex items-center">
            <Tooltip title="Notificaciones">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4}>
                  <NotificationsIcon
                    style={{ fontSize: 26, color: "#808080" }}
                  />
                </StyledBadge>
              </IconButton>
            </Tooltip>
          </Col>
        </Row>
      </Header>
    </>
  );
}
