import { createElement } from "react";

import HomeIcon from "@mui/icons-material/Home";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TaskIcon from "@mui/icons-material/Task";

import { Menu, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

import { useLocation, NavLink } from "react-router-dom";
export function Body({show}) {
  const navigate = useNavigate();

  const optionsSidebar = [
    {
      icon: <HomeIcon />,
      name: "Inicio",
      route: "/dasboard/home",
    },
    {
      icon: <SupervisedUserCircleIcon />,
      name: "Usuarios",
      route: "/dasboard/users",
    },
    {
      icon: <TaskIcon />,
      name: "Proyectos",
      route: "/dasboard/projects",
    },
    {
      icon: <AssessmentIcon />,
      name: "Reportes",
      route: "/dasboard/reports",
    },
    {
      icon: <AccountCircleIcon />,
      name: "Perfil",
      route: "/dasboard/profile",
    },
  ];

  const location = useLocation();

  return (
    <>
      <div className="jus-center flex body items-center bg-primary">
        <Col span={20}>
          <Menu
            className={`menu-item ${show ? "collapse" : ""}`}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={() => {
              const index = optionsSidebar.findIndex((route) =>
                location.pathname.includes(route.route)
              );
              return [`${index}`];
            }}
            items={optionsSidebar.map((routeOp, index) => ({
              key: index,
              icon: routeOp.icon,
              label: routeOp.name,
              route: routeOp.route,
            }))}
            onClick={(route) => navigate(optionsSidebar[route.key].route)}
          />
        </Col>
      </div>
    </>
  );
}
