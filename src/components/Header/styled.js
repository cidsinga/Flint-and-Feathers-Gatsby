import { Container } from "reactstrap"
import styled from "styled-components"
import { Link } from "gatsby"

export const HoverText = styled.h3`
  display: inline;
  color: #000;
  padding: 5px;
  text-align: center;
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

export const HoverTitle = styled.h1`
  display: inline-block;
  float: left;
  width: 30%;
  height: 200px;
  margin-top: 100px;
  text-align: left;
  margin-left: 50px;
  font-size: 38px;
  color: #000;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`
export const Main = styled(Container)`
  background-color: #222222;
  width: 100vw;
  display: inline-block;
  font-family: "Julius Sans One", sans-serif;
  color: #2f2f2d;
  height: 23vh;
  position: relative;
`

export const PageLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  display: inline-block;
  ${"" /* float: right; */}
  margin-top: 150px;
`

export const A = styled.a`
  list-style-type: none;
  text-decoration: none;
  display: inline-block;
  ${"" /* float: right; */}
  margin-top: 150px;
`

export const List = styled.li`
  list-style-type: none;
  text-decoration: none;
  display: inline-block;
  ${"" /* float: right; */}
  margin-top: 150px;
`
export const Menu = styled.div`
  display: inline-block;
  ${"" /* float: right; */}
  width: 69%;
`

export const Space = styled.div`
  display: inline-block;
  ${"" /* float: right; */}
  width: 5%;
`
