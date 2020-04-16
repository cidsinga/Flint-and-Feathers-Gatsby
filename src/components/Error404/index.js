import React from "react"
import { Link } from "gatsby"
import Suarez from "../../images/Suarez.jpg"
import { Main, Photo } from "./styled.js"

function Error404() {
  return (
    <Main>
      <h2>The page you are looking for does not exist!</h2>
      <h3>
        Would you like to return <Link to="/">home</Link> instead?
      </h3>
      <Photo src={Suarez} />
    </Main>
  )
}

export default Error404
