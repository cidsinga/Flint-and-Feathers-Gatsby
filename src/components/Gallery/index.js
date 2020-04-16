import React from "react"
import Gathering from "../../images/Gathering.jpg"
import Monroe from "../../images/Monroe2.jpg"
import Group from "../../images/PeacockGroup.jpg"
import Group2 from "../../images/Group2.jpg"
import Ruby from "../../images/Ruby.jpg"
import Everest from "../../images/Everest.jpg"
import Emerald2 from "../../images/Emerald2.jpg"
import Summer from "../../images/SummerFlowers.jpg"
import Gorge from "../../images/Gorge.jpg"
import Iris from "../../images/Iris.jpg"
import { Main, MainRow, Left, Right, Photo } from "./styled.js"

function Gallery() {
  return (
    <Main>
      <h1>Gallery</h1>
      <MainRow>
        <Left xs="auto">
          <Photo src={Monroe} />
          <Photo src={Ruby} />
          <Photo src={Group2} />
          <Photo src={Summer} />
          <Photo src={Gorge} />
        </Left>
        <Right xs="auto">
          <Photo src={Gathering} />
          <Photo src={Group} />
          <Photo src={Everest} />
          <Photo src={Iris} />
          <Photo src={Emerald2} />
        </Right>
      </MainRow>
      <row />
    </Main>
  )
}
export default Gallery
