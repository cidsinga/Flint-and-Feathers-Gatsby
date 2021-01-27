import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import { FaEtsy, FaInstagram, FaFacebookSquare } from "react-icons/fa"

export const Main = styled(Container)`
  width: 100%;
  min-width: 600px;
  height: 20%;
  margin-top: 10%;
  margin-bottom: 0%
  padding-top: 0%;
`
export const MainRow = styled(Row)`
  margin-top: 0%;
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
  width: 35%;
  text-align: right;
  margin-bottom: 0%;
  margin-top: 2%;
  margin-left: 0%;
`
export const Etsy = styled(FaEtsy)`
  display: inline-block;
  ${"" /* float: right; */}
  width: 5%;
  text-align: center;
  margin-bottom: 10%;
  margin-top: 3%;
  margin-left: 1%;
`
export const FB = styled(FaFacebookSquare)`
  display: inline-block;
  ${"" /* float: right; */}
  width: 5%;
  text-align: center;
  margin-bottom: 10%;
  margin-top: 3%;
  margin-left: 1%;
`
export const Insta = styled(FaInstagram)`
  display: inline-block;
  ${"" /* float: right; */}
  width: 5%;
  text-align: center;
  margin-bottom: 10%;
  margin-top: 3%;
  margin-left: 1%;
`
