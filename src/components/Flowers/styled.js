import { Container, Col, Row } from "reactstrap"
import styled from "styled-components"

export const Main = styled(Container)`
  width: 100%;
  height: 100%;
  display: inline-block;
  font-family: "Julius Sans One", sans-serif;
  color: #2f2f2d;
  font-size: 20px;
  margin-bottom: 20%;
  text-align: center;
`
export const MainRow = styled(Row)`
  width: 100%;
`

export const Left = styled(Col)`
  display: inline-block;
  float: left;
  width: 42.5%;
  margin-right: 2.5%;
  margin-left: 5%;
`

export const Right = styled(Col)`
  display: inline-block;
  float: Right;
  width: 42.5%;
  margin-right: 2.5%;
  margin-left: 5%;
`

export const Photo = styled.img`
  width: 100%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
`
export const Center = styled.img`
  width: 50%;
  text-align: center;
`
