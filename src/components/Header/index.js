import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

function Header() {


  const HoverText = styled.h3`
    color: #000;
    :hover {
      color: gray;
      cursor: pointer;
    }
  `;

  const HoverTitle = styled.h1`
    color: #000;
    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
  `;

  return (
    <Container className='container'>
      <Row>
        <Col xs="5">
          <Link to="/" className={{ textDecoration: "none" }}>
            <HoverTitle className='title'>FLINT & FEATHERS</HoverTitle>
          </Link>
        </Col>
        <Col xs="3"></Col>
        <Col xs="4">
          <div className='menu'>
            <li className='list'>
              <a
                href="https://www.etsy.com/shop/flintandfeathers/"
                className='link'
              >
                <HoverText className={h3}>Shop</HoverText>
              </a>
            </li>
            <li className='list'>
              <Link to="/about" className='link'>
                <HoverText className={h3}>About</HoverText>
              </Link>
            </li>
            <li className='list'>
              <Link to="/gallery" className='link'>
                <HoverText className={h3}>Gallery</HoverText>
              </Link>
            </li>
            <li className='list'>
              <Link to="/" className='link'>
                <HoverText className={h3}>Collections</HoverText>
              </Link>
            </li>
            <style jsx>{`
              a:visited {
                color: #2f2f2d;
              }
            `}</style>
          </div>
        </Col>
      </Row>
      <div className='space'> </div>
    </Container>
  );
}

export default Header;
