import React from "react"
import { Row } from "reactstrap"
import Alexandrite from "../../Images/Alexandrite.jpg"
import Amethyst from "../../Images/Amethyst.jpg"
import Aqua from "../../Images/Aquamarine.jpg"
import Citrine from "../../Images/Citrine.jpg"
import Emerald from "../../Images/Emerald.jpg"
import Garnet from "../../Images/Garnet.jpg"
import Tanzanite from "../../Images/Tanzanite.jpg"
import Ruby from "../../Images/Ruby.jpg"
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
