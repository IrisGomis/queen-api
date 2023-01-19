import React from "react";
import image1 from "../../images/banner-right-image1.png";
import "../templates/landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App";
import ApiConsum from "../../services/ApiConsum";

function Landing() {
  const dataUsa = ApiConsum("https://disease.sh/v3/covid-19/countries/usa");
  const dataEsp= ApiConsum("https://disease.sh/v3/covid-19/countries/esp");
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
        <div>
          {/* <p id={dataCountry.countryInfo._id}>
            {dataCountry.country}
            <img
              src={dataCountry.countryInfo.flag}
              alt=""
              className=""
            />
          </p> */}
          
        </div>
        <div className="card-country">
          <div className="card-country-left">  <img
              src="https://disease.sh/assets/img/flags/es.png" 
              alt=""
              className="card-country-flag"/> 
            </div>
          <div className="card-country-right">
            {/* <h2>{dataEsp.country}{dataEsp.cases}</h2> */}
            <h2>{dataEsp.cases}</h2>
            <p><spam> {dataEsp.deaths} </spam> <spam>{dataEsp.recovered}</spam></p>
          </div>
            
          </div>
        <div className="card">
          <div className="front">
            <h2> {dataUsa.country}{dataUsa.cases}</h2>
          </div>
          <div className="back card-country">
            <div>  <img
              src="https://disease.sh/assets/img/flags/es.png" width="100px"
              alt=""
              className=""/> 
            </div>
          <div>
            {/* <h2>{dataEsp.country}{dataEsp.cases}</h2> */}
            <h2>{dataEsp.cases}</h2>
            <p><spam> {dataEsp.deaths} </spam> <spam>{dataEsp.recovered}</spam></p>
          </div>
            
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
