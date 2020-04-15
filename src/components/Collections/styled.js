import { Container, Row } from "reactstrap"
import styled from "styled-components"
import Link from "Gatsby"

export const Main = styled(Container)`
  width: 100%;
  height: 77%;
  display: inline-block;
  font-family: Julius Sans One, sans-serif;
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
  margin-left: 5%;
  margin-right: auto;
`

export const PageLink = styled(Link)`
  text-decoration: none;
`
export const BottomRow = styled(Row)`
  display: inline-block;
  width: 100%;
  float: left;
  margin-left: 20%;
  margin-right: auto;
`

export const HoverPic = styled.img`
  display: inline-block;
  width: 100%;
  padding: 2.5%;
  float: left;
  margin-top: 3%;
  /* marginLeft: 3% */
  color: #000;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`
