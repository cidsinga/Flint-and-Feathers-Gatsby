import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import { Link } from "gatsby"

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
export const Tagline = styled.h1`
  font-size: 24px;
  margin-top: 2%;
`
export const Line = styled.hr`
  width: 90%;
  margin-top: 4%;
  margin-bottom: 4%;
`
export const TopRow = styled(Row)`
  width: 100%;
  min-width: 600px;
`

export const PageLink = styled(Link)`
  text-decoration: none;
`
export const BottomRow = styled(Row)`
  display: inline-block;
  width: 100%;
  min-width: 600px;
  float: left;
  margin-left: 15%;
  margin-right: 15%;
`

export const HoverPic = styled.img`
  display: inline-block;
  width: 30vw;
  padding: 2.5%;
  float: left;
  margin-top: 3%;
  margin-left: 3%;
  margin-right: 3%;
  color: #000;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

export const PicCol = styled(Col)`
  ${"" /* display: inline-block; */}
  float: left;
`
