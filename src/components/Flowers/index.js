import React from "react"
import { Row } from "reactstrap"
import FlowersMock from "../../images/FlowersMock.jpg"
import Monroe from "../../images/Monroe.jpg"
import NewBeginningsFlowers from "../../images/NewBeginningsFlowers.jpg"
import Grey from "../../images/PaynesGreyFloral.jpg"
import Poppies from "../../images/Poppies.jpg"
import Spring from "../../images/SpringFlowers.jpg"
import Summer from "../../images/SummerFlowers.jpg"
import { Main, MainRow, Left, Right, Photo, Center } from "./styled.js"

function Flowers() {
  return (
    <Main>
      <h1>Flowers</h1>
      <MainRow>
        <Left xs="auto">
          <Photo src={FlowersMock} />
          <Photo src={Spring} />
          <Photo src={Grey} />
        </Left>
        <Right xs="auto">
          <Photo src={Summer} />
          <Photo src={Poppies} />
          <Photo src={Monroe} />
        </Right>
      </MainRow>
      <row>
        <Center src={NewBeginningsFlowers} />
      </row>
      <Row />
    </Main>
  )
}

export default Flowers
