import React from "react"
import { Row } from "reactstrap"
import Gorge from "../../Images/Gorge.jpg"
import Everest from "../../Images/Everest.jpg"
import { Main, Photo } from "./styled.js"

function Scenes() {
  return (
    <Main>
      <Row>
        <h1>Scenes</h1>
        <Photo src={Gorge} />
        <Photo src={Everest} />
      </Row>
    </Main>
  )
}

export default Scenes
