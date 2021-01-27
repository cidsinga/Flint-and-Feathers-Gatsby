import { Container, Col } from "reactstrap"
import styled from "styled-components"
import { Link } from "gatsby"

export const Main = styled(Container)`
  width: 100vw;
  min-width: 600px;
  min-width: 600px;
  font-family: "Julius Sans One", sans-serif;
  color: #2f2f2d;
  height: 23vh;
  position: relative;
`

export const PageLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
`

export const HoverTitle = styled.h1`
  postition: absolute;
  width: 50%;
  height: 0px;
  padding-top: 75px;
  text-align: left;
  margin-left: 50px;
  font-size: 38px;
  color: #000;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`

export const HoverText = styled.h3`
  postition: absolute;
  color: #000;
  padding: 5px;
  text-align: center;
  display: block;
  float: right;
  font-size: 14px;
  :hover {
    color: gray;
    cursor: pointer;
    padding: 5px;
    text-align: center;
    float: right;
    font-size: 14px;
  }
`

export const A = styled.a`
  list-style-type: none;
  text-decoration: none;
  margin-top: 5px;
`

export const List = styled.li`
  list-style-type: none;
  text-decoration: none;
  postiton: relative;
  top: -150px;
`
export const Menu = styled(Col)`
  display: inline-block;
  margin-top: -33px;
  width: 94%;
`

export const Space = styled.div`
  display: inline-block;
`
