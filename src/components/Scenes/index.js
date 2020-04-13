import React from "react";
import { Container, Row, Col } from "reactstrap";
import Gorge from "../../Images/Gorge.jpg";
import Everest from "../../Images/Everest.jpg";

function Scenes() {

  return (
    <div className='container'>
      <Container>
        <Row>
          <h1>Scenes</h1>
          <img className='photo' src={Gorge} />
          <img className='photo' src={Everest} />
        </Row>
      </Container>
    </div>
  );
}

export default Scenes;
