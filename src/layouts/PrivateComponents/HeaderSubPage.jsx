import React from "react";
import AddIcon from "@mui/icons-material/Add";

import { Row, Col, Button } from "antd";

export const HeaderSubPage = ({ title = "header" }) => {
  return (
    <Row>
      <Col 
      className="header-sub" span={24}>
        {title}
      </Col>
    </Row>
  );
};
