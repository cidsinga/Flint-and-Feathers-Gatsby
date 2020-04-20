import React from "react"

import { Row, Col } from "reactstrap"
import {
  HoverText,
  HoverTitle,
  Main,
  PageLink,
  List,
  Menu,
  Space,
  A,
} from "./styled.js"

function Header() {
  return (
    <Main>
      <Row>
        <Col xs="5">
          <PageLink to="/">
            <HoverTitle>
              FLINT & <br />
              FEATHERS
            </HoverTitle>
          </PageLink>
        </Col>
        <Col />
        <Menu xs="4">
          <List>
            <A href="https://www.etsy.com/shop/flintandfeathers/">
              <HoverText>Shop</HoverText>
            </A>
          </List>
          <List>
            <PageLink to="/about">
              <HoverText>About</HoverText>
            </PageLink>
          </List>
          <List>
            <PageLink to="/gallery">
              <HoverText>Gallery</HoverText>
            </PageLink>
          </List>
          <List>
            <PageLink to="/">
              <HoverText>Collections</HoverText>
            </PageLink>
          </List>
          {/* <Style jsx>{`
              a:visited {
                color: #2f2f2d;
              }
            `}</Style> */}
        </Menu>
      </Row>
      <Space />
    </Main>
  )
}

export default Header
