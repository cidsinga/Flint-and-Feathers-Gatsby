import React from "react"
import { Row, Col } from "reactstrap"
import Flowers from "../../images/FlowersMock.jpg"
import Ruby from "../../images/Ruby.jpg"
import Gorge from "../../images/Gorge.jpg"
import Jewel from "../../images/Jewel.jpg"
import Gathering from "../../images/Gathering.jpg"
import {
  Main,
  Tagline,
  Line,
  TopRow,
  PageLink,
  BottomRow,
  HoverPic,
} from "./styled.js"

function Collections() {
  return (
    <Main>
      <Tagline>EXPLORING NATURE'S BEAUTY ONE BRUSH STROKE AT A TIME</Tagline>
      <Line />
      <div>
        <Tagline>COLLECTIONS</Tagline>
      </div>

      <TopRow>
        <Col>
          <PageLink to="/flowers">
            <HoverPic src={Flowers} />
          </PageLink>
        </Col>
        <Col>
          <PageLink to="/scenes">
            <HoverPic src={Gorge} />
          </PageLink>
        </Col>
        <Col>
          <PageLink to="/stones">
            <HoverPic src={Ruby} />
          </PageLink>
        </Col>
      </TopRow>

      <BottomRow>
        <Col>
          <PageLink to="/Feathers">
            <HoverPic src={Gathering} />
          </PageLink>
        </Col>
        <Col>
          <PageLink to="/fun">
            <HoverPic src={Jewel} />
          </PageLink>
        </Col>
      </BottomRow>
      <Row />
    </Main>
  )
}

export default Collections
