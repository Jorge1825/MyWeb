
import { Col } from "antd";
import { ArrowBackIosNew } from "@mui/icons-material";
import { CardLogin } from "../Login_Register/CardLogin";
import { FormLogin } from "../Login_Register/FormLogin";

export function Register({ handleIsRegister }) {
  return (
    <>
      <Col
        span={10}
        style={{
          minHeight: "80vh",
        }}
        className="d-flex-column jus-center items-center "
      >
        <CardLogin />
      </Col>
      <Col
        style={{
          minHeight: "80vh",
          borderRadius: "0 10px 10px 0",
          backgroundColor: "rgba(255,255,255,1)",
        }}
        className="text-black items-center d-flex-column jus-center"
        span={9}
      >
        <img
          src="/src/assets/images/cloud.png"
          alt="cloud"
          className="img-right"
        />
        <p className="subtitle pb-2">Inicia Sesión</p>
        <button className="btn-back">
          
            <ArrowBackIosNew className="icon-btn"
            onClick={() => handleIsRegister()}
            />
       
        </button>
        <FormLogin />
      </Col>
    </>
  );
}
