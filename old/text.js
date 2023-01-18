<div className="card card-banner p-3" id="card-banner">
<div className="card-banner-content d-flex flex-row justify-content-between"></div>
</div> 


/*<svg width="135" height="135" viewBox="0 0 135 135" xmlns="http://www.w3.org/2000/svg" fill="#3639ae">
    <path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 67 67"
            to="-360 67 67"
            dur="2.5s"
            repeatCount="indefinite"/>
    </path>
    <path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 67 67"
            to="360 67 67"
            dur="8s"
            repeatCount="indefinite"/>
    </path>
</svg>*/
/*.container{
    display:flex;
    justify-content: flex-end;
    text-align: justify; 
    padding-top: 80px;
    
  }*/

  /*.card-banner{
    width: 150px;
    margin: 100px;
  }*/
/*background-image:radial-gradient(circle at 103.59% 50%, #a0b9ef 0, #2f6cb5 50%, #002a7d 100%);*/

  /*background-image: url("../../images/3626307.jpg");*/

  <p>{dataCountry.countryInfo.flag}
           <img src={dataCountry.countryInfo.flag} alt="" className="flag-covid-tracker"/></p>


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




//CARD A-B
<div className="card">
<div className="front">
  <h2> {dataUsa.country}{dataUsa.cases}</h2>
  <div>  <img
    src="https://disease.sh/assets/img/flags/usa.png" width="100px"
    alt=""
    className="usa-flag"/> 
  </div>
</div>
<div className="back card-country">
  <div>  <img
    src="https://disease.sh/assets/img/flags/es.png" width="100px"
    alt=""
    className="esp-flag"/> 
  </div>
<div>
  <h2>{dataEsp.cases}</h2>
  <p><spam> {dataEsp.deaths} </spam> <spam>{dataEsp.recovered}</spam></p>
</div>
  
</div>
</div>

//css
.card .front{
  background-color: white;
  transform: perspective(500px) rotateY(0deg);
}
.card .back{
  background-color: white;
  transform: perspective() rotateY(180deg);
 
}

.card:hover .front{
  
  transform: perspective(500px) rotateY(180deg);
}

.card:hover .back{
  
  transform: perspective(500px) rotateY(360deg);
}

//root
 /*--breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-xxl: 1440;*/

  
 // imagen 
  /*.img-fluid{
  height:200px;
  padding-right: 100px; 
  margin-top: 80px;

}*/