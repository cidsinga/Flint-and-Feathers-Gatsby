import { Container, Row } from "reactstrap"
import styled from "styled-components"
import { FaEtsy, FaInstagram, FaFacebookSquare } from "react-icons/fa"

export const Main = styled(Container)`
  width: 100%;
  height: 20%;
  margin-top: 97%;
  padding-top: 90%;
`
export const MainRow = styled(Row)`
  margin-top: 20%;
`
export const Left = styled.h5`
  display: inline-block;
  width: 50%;
  float: left;
  text-align: left;
  margin-left: 5%;
  opacity: 75%;
`
export const Icons = styled.div`
  display: inline-block;
  float: right;
  width: 40%;
  text-align: center;
  margin-bottom: 10%;
  margin-top: 2%;
  margin-left: 5%;
`
export const Etsy = styled(FaEtsy)`
  display: inline-block;
  float: right;
  width: 40%;
  text-align: center;
  margin-bottom: 10%;
  margin-top: 2%;
  margin-left: 5%;
`
export const FB = styled(FaFacebookSquare)`
  display: inline-block;
  float: right;
  width: 40%;
  text-align: center;
  margin-bottom: 10%;
  margin-top: 2%;
  margin-left: 5%;
`
export const Insta = styled(FaInstagram)`
  display: inline-block;
  float: right;
  width: 40%;
  text-align: center;
  margin-bottom: 10%;
  margin-top: 2%;
  margin-left: 5%;
`
