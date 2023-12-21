import { createElement } from "react";

import LogoutIcon from "@mui/icons-material/Logout";
import { Menu, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

import { useLocation, NavLink } from "react-router-dom";
export function Footer({show}) {
  const navigate = useNavigate();

  const optionsSidebar = [
    {
      icon: <LogoutIcon />,
      name: "Salir",
      route: "/login",
    },
  ];

  return (
    <>
      <Row className="jus-center flex footer pb-1">
        <Col span={20}>
          <Menu
           className={`menu-item jus-center d-flex ${show ? "collapse" : ""}`}
            theme="dark"
            mode="inline"
            items={optionsSidebar.map((routeOp, index) => ({
              key: index,
              icon: routeOp.icon,
              label: routeOp.name,
            }))}
            onClick={(route) => navigate(optionsSidebar[route.key].route)}
          />
        </Col>
      </Row>
    </>
  );
}
