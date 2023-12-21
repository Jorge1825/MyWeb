import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { CardActionArea } from "@mui/material";

import { Row, Col, Button } from "antd";
import { Chip } from "../Chip";

export default function CardProject({
  urlImage,
  title,
  description,
  category,
  tags,
}) {
  return (
    <Card>
      <CardActionArea>
        <Row>
          <Col span={24}>
            <div className="badge ">Categoria</div>
            <CardMedia
              component="img"
              height="140"
              image="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              alt="green iguana"
            />

            <CardContent>
              <Button
                style={{
                  position: "absolute",
                  top: "40%",
                  right: "10px",
                  transform: "translateY(-50%)",
                }}
                type="primary"
                shape="circle"
                icon={<EditIcon />}
              />
              <Typography gutterBottom variant="h5" component="div">
                Botones animados
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Col>
          <Col span={24} className="d-flex jus-center">

            <Chip text="React" />
            <Chip text="HTML" />
            <Chip text="CSS" />
          </Col>
        </Row>
      </CardActionArea>
    </Card>
  );
}
