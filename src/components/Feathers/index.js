import React from "react"
import SmallP from "../../images/BackPeacock.jpg"
import Blue from "../../images/BlueJay.jpg"
import Flicker from "../../images/Flicker.jpg"
import Guinea from "../../images/Guinea.jpg"
import Kestral from "../../images/Kestral.jpg"
import Mac from "../../images/Macgregor.jpg"
import Peacock from "../../images/Peacock.jpg"
import Gathering from "../../images/Gathering.jpg"
import { Main, Photo, MainRow, Left, Right } from "./styled.js"

function Feathers() {
  return (
    <Main>
      <h1>Feathers</h1>
      <MainRow>
        <Left xs="auto">
          <Photo src={Gathering} />
          <Photo src={Blue} />
          <Photo src={Kestral} />
          <Photo src={Guinea} />
        </Left>
        <Right xs="auto">
          <Photo src={Flicker} />
          <Photo src={Mac} />
          <Photo src={SmallP} />
          <Photo src={Peacock} />
        </Right>
      </MainRow>
      <row />
    </Main>
  )
}

export default Feathers
