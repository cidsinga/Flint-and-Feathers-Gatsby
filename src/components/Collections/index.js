import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import Flowers from "../../images/FlowersMock.jpg";
import Ruby from "../../images/Ruby.jpg";
import Gorge from "../../images/Gorge.jpg";
import Jewel from "../../images/Jewel.jpg";
import Gathering from "../../images/Gathering.jpg";
import './styles.css';

function Collections() {

  const HoverPic = styled.img`
    color: #000;
    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  `;

  return (
    <Container className='container'>
      <h1 className='tagline'>
        EXPLORING NATURE'S BEAUTY ONE BRUSH STROKE AT A TIME
      </h1>
      <hr className='line'></hr>
      <div>
        <h1 className='tagline'>COLLECTIONS</h1>
      </div>

      <Row className='topRow'>
        <Col>
          <Link to="/flowers" className='link'>
            <HoverPic className='photo' src={Flowers} />
          </Link>
          
        </Col>
        <Col>
          <Link to="/scenes" className='link'>
            <HoverPic className='photo' src={Gorge} />
          </Link>
        </Col>
        <Col>
          <Link to="/stones" className='link'>
            <HoverPic className='photo' src={Ruby} />
          </Link>
        </Col>
      </Row>

      <Row className='topRow'>
        <Col>
          <Link to="/Feathers" className='link'>
            <HoverPic className='photo' src={Gathering} />
          </Link>
        </Col>
        <Col>
          <Link to="/fun" className='link'>
            <HoverPic className='photo' src={Jewel} />
          </Link>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default Collections;
