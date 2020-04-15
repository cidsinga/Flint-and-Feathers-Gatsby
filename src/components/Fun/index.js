import React from "react"
import { Row } from "reactstrap"
import Balloons from "../../Images/Balloons.jpg"
import Arrows from "../../Images/CupidsArrows.jpg"
import Eggs from "../../Images/Eggs.jpg"
import Abstract from "../../Images/FirstAbstract.jpg"
import Jasmine from "../../Images/Jasmine.jpg"
import Mushroom from "../../Images/Mushroom.jpg"
import Shroom from "../../Images/WhiteShroomSquare.jpg"
import Jewel from "../../Images/Jewel.jpg"
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
