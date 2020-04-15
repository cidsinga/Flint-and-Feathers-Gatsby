import React from "react"
import Gathering from "../../Images/Gathering.jpg"
import Monroe from "../../Images/Monroe2.jpg"
import Group from "../../Images/PeacockGroup.jpg"
import Group2 from "../../Images/Group2.jpg"
import Ruby from "../../Images/Ruby.jpg"
import Everest from "../../Images/Everest.jpg"
import Emerald2 from "../../Images/Emerald2.jpg"
import Summer from "../../Images/SummerFlowers.jpg"
import Gorge from "../../Images/Gorge.jpg"
import Iris from "../../Images/Iris.jpg"
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
