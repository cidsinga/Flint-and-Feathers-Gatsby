import React from "react";
import { FaEtsy } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Container, Row, Col } from "reactstrap";

function Footer() {


  return (
    <div classstyle='container'>
      <row className={{ marginTop: "20%" }}>
        <Col xs="3">
          <h5 className='left'>Copyright Brandy Idsinga 2020</h5>
        </Col>
        <Col xs="auto"></Col>
        <Col xs="3">
          <div className='icons'>
            <a href="https://www.etsy.com/shop/flintandfeathers/">
              <FaEtsy className='icon'></FaEtsy>
            </a>
            <a href="https://www.facebook.com/flintandfeathers/">
              <FaFacebookSquare className='icon'></FaFacebookSquare>
            </a>
            <a href="https://www.instagram.com/flintandfeathers/?hl=en">
              <FaInstagram className='icon'></FaInstagram>
            </a>
          </div>
        </Col>
      </row>
    </div>
  );
}

export default Footer;
