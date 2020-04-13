import React from "react";
import { Container, Row, Col } from "reactstrap";
import SmallP from "../../Images/BackPeacock.jpg";
import Blue from "../../Images/BlueJay.jpg";
import Flicker from "../../Images/Flicker.jpg";
import Guinea from "../../Images/Guinea.jpg";
import Kestral from "../../Images/Kestral.jpg";
import Mac from "../../Images/Macgregor.jpg";
import Peacock from "../../Images/Peacock.jpg";
import Gathering from "../../Images/Gathering.jpg";

function Feathers() {


  return (
    <Container className='container'>
      <h1>Feathers</h1>
      <Row className={row}>
        <Col xs="auto" className='left'>
          <img className='photo' src={Gathering} />
          <img className='photo' src={Blue} />
          <img className='photo' src={Kestral} />
          <img className='photo' src={Guinea} />
        </Col>
        <Col xs="auto" className={right}>
          <img className='photo' src={Flicker} />
          <img className='photo' src={Mac} />
          <img className='photo' src={SmallP} />
          <img className='photo' src={Peacock} />
        </Col>
      </Row>
      <row></row>
    </Container>
  );
}

export default Feathers;
