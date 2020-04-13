import React from "react";
import { Container, Row, Col } from "reactstrap";
import Balloons from "../../Images/Balloons.jpg";
import Cactus from "../../Images/Cactus.jpg";
import Arrows from "../../Images/CupidsArrows.jpg";
import Eggs from "../../Images/Eggs.jpg";
import Abstract from "../../Images/FirstAbstract.jpg";
import Jasmine from "../../Images/Jasmine.jpg";
import Mushroom from "../../Images/Mushroom.jpg";
import Shroom from "../../Images/WhiteShroomSquare.jpg";
import Jewel from "../../Images/Jewel.jpg";

function Fun() {
  return (
    <Container className='container'>
      <h1>Fun</h1>
      <Row className='row'>
        <Col xs="auto" className='left'>
          <img className='photo' src={Balloons} />
          <img className='photo' src={Abstract} />
          <img className='photo' src={Jasmine} />
          <img className='photo' src={Eggs} />
        </Col>
        <Col xs="auto" className='right'>
          <img className='photo' src={Jewel} />
          <img className='photo' src={Shroom} />
          <img className='photo' src={Mushroom} />
          <img className='photo' src={Arrows} />
        </Col>
      </Row>
      <row></row>
      <Row></Row>
    </Container>
  );
}

export default Fun;
