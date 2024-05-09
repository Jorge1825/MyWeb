import {React,useEffect} from "react";
import AddIcon from "@mui/icons-material/Add";

import { Row, Col, Button } from "antd";
import { HeaderSubPage } from "../layouts/PrivateComponents/HeaderSubPage";
import CardProject from "../components/Proyects/CardProyect";

import { useNavigate } from "react-router-dom";



export const Projects = () => {
  const navigate = useNavigate();

  //hacer la peticion a la api de github una vez que se monte el componente
 useEffect(() => {

  }, []);



  return (
    <>
      <HeaderSubPage title="Proyectos" />
      <Row className="pt-1 pl-1">
        <Col span={24}>
          <Button
            className="btn-large jus-center d-flex items-center"
            type="primary"
            shape="round"
            onClick={() => navigate("/dasboard/projects/new")}
          >
            <AddIcon
              style={{
                fontSize: 26,
                color: "#fff",
                marginRight: 6,
              }}
            />
            Nuevo
          </Button>
        </Col>
      </Row>
      <Row 
      style={{
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
  
      }}
      className="py-1 pl-1 my-1" gutter={16}>
        <Col span={7}>
          <CardProject />
        </Col>
      </Row>
    </>
  );
};
