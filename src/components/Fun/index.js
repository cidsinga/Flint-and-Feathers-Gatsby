import React from "react"
import { Row } from "reactstrap"
import Balloons from "../../images/Balloons.jpg"
import Arrows from "../../images/CupidsArrows.jpg"
import Eggs from "../../images/Eggs.jpg"
import Abstract from "../../images/FirstAbstract.jpg"
import Jasmine from "../../images/Jasmine.jpg"
import Mushroom from "../../images/Mushroom.jpg"
import Shroom from "../../images/WhiteShroomSquare.jpg"
import Jewel from "../../images/Jewel.jpg"
import { Main, MainRow, Photo, Left, Right } from "./styled.js"

function Fun() {
  return (
    <Main>
      <h1>Fun</h1>
      <MainRow>
        <Left xs="auto">
          <Photo src={Balloons} />
          <Photo src={Abstract} />
          <Photo src={Jasmine} />
          <Photo src={Eggs} />
        </Left>
        <Right xs="auto">
          <Photo src={Jewel} />
          <Photo src={Shroom} />
          <Photo src={Mushroom} />
          <Photo src={Arrows} />
        </Right>
      </MainRow>
      <Row />
    </Main>
  )
}

export default Fun
