import React, { Component } from 'react';


import { useNavigate } from "react-router-dom";
function AboutUs() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  

 
  return (
    <div>
      <button onClick={handleClick}>go home</button>
      <br/>
      <br/>
      <br/>
      <button onClick={()=>{navigate("/",{replace : true})}}>go home without history</button>

    </div>
  );
}

export default AboutUs;