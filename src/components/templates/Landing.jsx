import React from "react";
import image1 from "../../images/banner-right-image1.png";
import "../templates/landing.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Landing() {
  return (
    <div className="container">
      <div className="col-sm-12 col-md-6 banner-right">
        <h1 className="text-white display3 fw-bold h1-home">
          Stay Home, And Prayer For <br /> Victim Of Corona virus.
        </h1>
        <p className="text-white 1h-lg text-banner fs-6 p-home">
          Human coronaviruses are common and are typically associated with
          <br />
          illnesses, similar to the common cold, The corona virus COVID-19 is
          <br />
          affecting 210 countries & territories around the world and 2<br />
          international conveyances.
        </p>
        <div className='card'>
        <div className='front'>
           <h1>A</h1> 
        </div> 
        <div className='back'>
            <h1>B</h1>
        </div>
    </div>
      </div>
      <div className="col-sm-12 col-md-6 banner-left d-flex justify-content-center ">
        <img className="img-fluid" src={image1}></img>
      </div>
    </div>
  );
}

export default Landing;
