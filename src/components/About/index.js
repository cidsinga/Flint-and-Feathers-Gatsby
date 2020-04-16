import React from "react"
import brandy from "../../images/brandy.jpg"
import { Main, Title, Photo, Text } from "./styled.js"

function About() {
  return (
    <Main>
      <Title>About</Title>
      <Photo src={brandy} />
      <Text>
        Brandy is an amazing artist, and even more amazing person. She does
        everything better than you. I know. You're jealous. And you should be.
      </Text>
    </Main>
  )
}

export default About
