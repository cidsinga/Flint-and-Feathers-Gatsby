import { Container } from "reactstrap"
import styled from "styled-components"

export const Main = styled(Container)`
  width: 100vw;
  min-width: 600px;
  display: inline-block;
  font-family: "Julius Sans One", sans-serif;
  color: #2f2f2d;
  height: 23vh;
  position: relative;
  text-align: center;
  margin-bottom: 70%;
`

export const Title = styled.h1`
  margin-bottom: 5%;
`

export const Photo = styled.img`
  display: inline-block;
  width: 50%;
  float: right;
`

export const Text = styled.p`
  float: left;
  width: 40%;
  text-align: center;
  margin-left: 5%;
`
