import React from "react"
import { Row } from "reactstrap"
import Alexandrite from "../../images/Alexandrite.jpg"
import Amethyst from "../../images/Amethyst.jpg"
import Aqua from "../../images/Aquamarine.jpg"
import Citrine from "../../images/Citrine.jpg"
import Emerald from "../../images/Emerald.jpg"
import Garnet from "../../images/Garnet.jpg"
import Tanzanite from "../../images/Tanzanite.jpg"
import Ruby from "../../images/Ruby.jpg"
import { Main, MainRow, Photo, Left, Right } from "./styled.js"

function Stones() {
  return (
    <Main>
      <h1>Stones</h1>
      <MainRow>
        <Left xs="auto">
          <Photo src={Ruby} />
          <Photo src={Alexandrite} />
          <Photo src={Citrine} />
          <Photo src={Tanzanite} />
        </Left>
        <Right xs="auto">
          <Photo src={Amethyst} />
          <Photo src={Emerald} />
          <Photo src={Aqua} />
          <Photo src={Garnet} />
        </Right>
      </MainRow>
      <Row />
    </Main>
  )
}

export default Stones
