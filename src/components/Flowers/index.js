import React from "react";
import { Container, Row, Col } from "reactstrap";
import flowers from "../../Images/FlowersMock.jpg";
import Monroe from "../../Images/Monroe.jpg";
import NewBeginningsFlowers from "../../Images/NewBeginningsFlowers.jpg";
import Grey from "../../Images/PaynesGreyFloral.jpg";
import Poppies from "../../Images/Poppies.jpg";
import Spring from "../../Images/SpringFlowers.jpg";
import Summer from "../../Images/SummerFlowers.jpg";

function Flowers() {
  const container = {
    width: "100%",
    height: "100%",
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
    <div style={container}>
      <Container>
        <h1>Flowers</h1>
        <Row style={row}>
          <Col xs="auto" style={left}>
            <img style={photo} src={flowers} />
            <img style={photo} src={Spring} />
            <img style={photo} src={Grey} />
          </Col>
          <Col xs="auto" style={right}>
            <img style={photo} src={Summer} />
            <img style={photo} src={Poppies} />
            <img style={photo} src={Monroe} />
          </Col>
        </Row>
        <row>
          <img style={center} src={NewBeginningsFlowers} />
        </row>
        <Row></Row>
      </Container>
    </div>
  );
}

export default Flowers;
