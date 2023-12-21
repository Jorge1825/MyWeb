import { Avatar, Row, Col } from "antd";

import "./SiderBar.css";

import PropTypes from "prop-types";

export function Header({ show }) {
  return (
    <>
      <Row className=" jus-center header items-center">
        <Col className="jus-center d-flex" span={20}>
          <Avatar
            className="mt-1 m-0 p-0"
            src="/assets/images/logo.png"
            size={80}
          />
        </Col>
        <Col 
        className={`jus-center d-flex ${show ? "d-none" : ""}`}
        span={20}>
          <div className="card-user w-full">
            <p className=" nameuser">Jorge</p>
            <p className=" rol">Administrador</p>
          </div>
        </Col>
      </Row>
    </>
  );
}

Header.propTypes = {
  show: PropTypes.bool.isRequired,
};
