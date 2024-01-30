import React, { useState } from "react";

import { HeaderSubPage } from "../layouts/PrivateComponents/HeaderSubPage";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Row, Col } from "antd";
import { Modal, Upload } from "antd";
import { FormRegisterProject } from "../components/Forms/FormRegisterProject";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const CreateProject = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <CloudUploadIcon
        style={{
          fontSize: 100,
          color: "#1890ff",
        }}
      />
      <div
        style={{
          marginTop: 8,
          fontSize: 20,
          color: "#1890ff",
        }}
      >
        Click para subir o Arrastra tus imagenes
      </div>
    </div>
  );
  return (
    <>
      <HeaderSubPage title="Nuevo Proyecto" />
      <Row className="pt-1 pl-1 d-flex jus-between">
        <Col
          style={{
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
            maxHeight: "75vh",
            overflowY: "auto",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          span={8}
          className="d-flex bg-red"
        >
          <Upload
            action={() => {
              return {
                success: true,
              };
            }}
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            style={{
              height: "100vh",
              backgroundColor: "red",
            }}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="example"
              style={{
                width: "100%",
              }}
              src={previewImage}
            />
          </Modal>
        </Col>
        <Col span={15}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <span
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "500",
                }}
              >
                Datos Básicos
              </span>
              <br />

              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                Información del proyecto
              </Typography>
              <FormRegisterProject />
            </CardContent>
            <CardActions>Botones</CardActions>
          </Card>
        </Col>
      </Row>
    </>
  );
};
