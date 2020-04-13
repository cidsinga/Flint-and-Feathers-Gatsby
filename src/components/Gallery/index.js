import React from "react";
import { Container, Row, Col } from "reactstrap";
import Gathering from "../../Images/Gathering.jpg";
import Monroe from "../../Images/Monroe2.jpg";
import Group from "../../Images/PeacockGroup.jpg";
import Group2 from "../../Images/Group2.jpg";
import Ruby from "../../Images/Ruby.jpg";
import Everest from "../../Images/Everest.jpg";
import Emerald2 from "../../Images/Emerald2.jpg";
import Summer from "../../Images/SummerFlowers.jpg";
import Gorge from "../../Images/Gorge.jpg";
import Iris from "../../Images/Iris.jpg";

function Gallery() {


  return (
    <Container className='container'>
      <h1>Gallery</h1>
      <Row className='row'>
        <Col xs="auto" className='left'>
          <img className='photo' src={Monroe} />
          <img className='photo' src={Ruby} />
          <img className='photo' src={Group2} />
          <img className='photo' src={Summer} />
          <img className='photo' src={Gorge} />
        </Col>
        <Col xs="auto" className={right}>
          <img className='photo' src={Gathering} />
          <img className='photo' src={Group} />
          <img className='photo' src={Everest} />
          <img className='photo' src={Iris} />
          <img className='photo' src={Emerald2} />
        </Col>
      </Row>
      <row></row>
    </Container>
  );
}
export default Gallery;
