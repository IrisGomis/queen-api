import React from 'react';
import ImgWash from "../../images/wash.png";
import "../../App";
import "../templates/Wash.jsx"


function Wash() {
  return (
    <div className='container'>
      <p>Wash</p>
      <h1>Wash your hands min 20 second</h1>
      <div className='hands-image'>
       <img src={ImgWash} alt="foto-hands"></img>  
       </div>   
    </div>
  )
}

export default Wash

