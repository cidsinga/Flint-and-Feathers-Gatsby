import React from "react"
import { Row } from "reactstrap"
import FlowersMock from "../../Images/FlowersMock.jpg"
import Monroe from "../../Images/Monroe.jpg"
import NewBeginningsFlowers from "../../Images/NewBeginningsFlowers.jpg"
import Grey from "../../Images/PaynesGreyFloral.jpg"
import Poppies from "../../Images/Poppies.jpg"
import Spring from "../../Images/SpringFlowers.jpg"
import Summer from "../../Images/SummerFlowers.jpg"
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
