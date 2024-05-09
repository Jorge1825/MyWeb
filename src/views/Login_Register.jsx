import "../styles/components/login_register.sass";
import { useState } from "react";
import { Row } from "antd";
import { Login } from "../components/Login_Register/Login";
import { Loading } from "../components/Loading";

export const Login_Register = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleIsRegister = () => {
    console.log("click");
    setIsRegister(!isRegister);
  };

  return (
    <div className="p-0 m-0  h-screen w-full d-flex jus-center items-center">
      <div className="img-background" alt="background" />

      <Row
        className="d-flex jus-center items-center animate__animated animate__bounceInUp"
        style={{
          borderRadius: "10px",
        }}
      >
        {
          // Si isRegister es true, muestra el formulario de registro
          isRegister ? (
            <Loading />
          ) : (
            <Login handleIsRegister={handleIsRegister} />
          )
        }
      </Row>
    </div>
  );
};
