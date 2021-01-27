import React from "react"
import { Row } from "reactstrap"
import Flowers from "../../images/FlowersSquare.jpg"
import Ruby from "../../images/RubySquare.jpg"
import Gorge from "../../images/GorgeSquareMock.jpg"
import Jewel from "../../images/AbstractSquare.jpg"
import Gathering from "../../images/Gathering.jpg"
import {
  Main,
  Tagline,
  Line,
  TopRow,
  PageLink,
  BottomRow,
  HoverPic,
  PicCol,
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
        <PicCol>
          <PageLink to="/flowers">
            <HoverPic src={Flowers} />
          </PageLink>
        </PicCol>
        <PicCol>
          <PageLink to="/scenes">
            <HoverPic src={Gorge} />
          </PageLink>
        </PicCol>
        <PicCol>
          <PageLink to="/stones">
            <HoverPic src={Ruby} />
          </PageLink>
        </PicCol>
      </TopRow>

      <BottomRow>
        <PicCol>
          <PageLink to="/feathers">
            <HoverPic src={Gathering} />
          </PageLink>
        </PicCol>
        <PicCol>
          <PageLink to="/fun">
            <HoverPic src={Jewel} />
          </PageLink>
        </PicCol>
      </BottomRow>
      <Row />
    </Main>
  )
}

export default Collections
