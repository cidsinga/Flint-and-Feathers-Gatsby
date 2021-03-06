import { Container, Col, Row } from "reactstrap"
import styled from "styled-components"

export const Main = styled(Container)`
  width: 100%;
  min-width: 600px;
  height: 77%;
  display: inline-block;
  font-family: "Julius Sans One", sans-serif;
  color: #2f2f2d;
  font-size: 20px;
  margin-bottom: 20%;
  text-align: center;
`

export const Photo = styled.img`
  width: 100%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
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
  float: right;
  width: 42.5%;
  margin-left: 2.5%;
  margin-right: 5%;
`
