import React from "react";
import { Container, Row, Col } from "reactstrap";
import Alexandrite from "../../Images/Alexandrite.jpg";
import Amethyst from "../../Images/Amethyst.jpg";
import Aqua from "../../Images/Aquamarine.jpg";
import Citrine from "../../Images/Citrine.jpg";
import Emerald from "../../Images/Emerald.jpg";
import Garnet from "../../Images/Garnet.jpg";
import Tanzanite from "../../Images/Tanzanite.jpg";
import Ruby from "../../Images/Ruby.jpg";

function Stones() {
  const container = {
    width: "100%",
    height: "77%",
    display: "inline-block",
    fontFamily: "'Julius Sans One', sans-serif",
    color: "#2f2f2d",
    fontSize: "20px",
    marginBottom: "20%",
    textAlign: "center"
  };

  const photo = {
    width: "100%",
    marginTop: "2.5%",
    marginBottom: "2.5%"
  };

  const left = {
    display: "inline-block",
    float: "left",
    width: "42.5%",
    marginRight: "2.5%",
    marginLeft: "5%"
  };

  const right = {
    display: "inline-block",
    float: "right",
    width: "42.5%",
    marginLeft: "2.5%",
    marginRight: "5%"
  };

  const row = {
    width: "100%"
  };

  const center = {
    width: "50%",
    textAlign: "center"
  };

  return (
    <Container style={container}>
      <h1>Stones</h1>
      <Row style={row}>
        <Col xs="auto" style={left}>
          <img style={photo} src={Ruby} />
          <img style={photo} src={Alexandrite} />
          <img style={photo} src={Citrine} />
          <img style={photo} src={Tanzanite} />
        </Col>
        <Col xs="auto" style={right}>
          <img style={photo} src={Amethyst} />
          <img style={photo} src={Emerald} />
          <img style={photo} src={Aqua} />
          <img style={photo} src={Garnet} />
        </Col>
      </Row>
      <row></row>
    </Container>
  );
}

export default Stones;
