import React from "react"
import SmallP from "../../Images/BackPeacock.jpg"
import Blue from "../../Images/BlueJay.jpg"
import Flicker from "../../Images/Flicker.jpg"
import Guinea from "../../Images/Guinea.jpg"
import Kestral from "../../Images/Kestral.jpg"
import Mac from "../../Images/Macgregor.jpg"
import Peacock from "../../Images/Peacock.jpg"
import Gathering from "../../Images/Gathering.jpg"
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
