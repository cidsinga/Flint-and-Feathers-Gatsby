import React from "react";
import { Link } from "gatsby";
import Suarez from "../../Images/Suarez.jpg";

function Error404() {


  return (
    <div className='container'>
      <h2>The page you are looking for does not exist!</h2>
      <h3>
        Would you like to return <Link to="/">home</Link> instead?
      </h3>
      <img className='photo' src={Suarez} />
    </div>
  );
}

export default Error404;