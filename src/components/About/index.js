import React from "react";
import brandy from "../../Images/brandy.jpg";
import './styles.css';

function About() {


  return (
    <div className='container'>
      <h1 className='title'>About</h1>
      <img className='photo' src={brandy} />
      <p className='text'>
        Brandy is an amazing artist, and even more amazing person. She does
        everything better than you. I know. You're jealous. And you should be.
      </p>
    </div>
  );
}

export default About;
