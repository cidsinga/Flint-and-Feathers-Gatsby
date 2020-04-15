import React from "react"
import { Col } from "reactstrap"
import { Main, MainRow, Left, Etsy, FB, Insta, Icons } from "./styled.js"

function Footer() {
  return (
    <Main>
      <MainRow>
        <Col xs="3">
          <Left>Copyright Brandy Idsinga 2020</Left>
        </Col>
        <Col xs="auto" />
        <Col xs="3">
          <Icons>
            <a href="https://www.etsy.com/shop/flintandfeathers/">
              <Etsy />
            </a>
            <a href="https://www.facebook.com/flintandfeathers/">
              <FB />
            </a>
            <a href="https://www.instagram.com/flintandfeathers/?hl=en">
              <Insta />
            </a>
          </Icons>
        </Col>
      </MainRow>
    </Main>
  )
}

export default Footer
