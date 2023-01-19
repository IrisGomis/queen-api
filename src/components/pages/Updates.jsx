import React from "react";
import "../../App";
import NavBTracker from '../organismos/NavBTracker';
import CovidTracker from '../organismos/CovidTracker';


function Updates() {
  return (
    <main className="d-flex">
    <section >
      <NavBTracker/>
    </section>  
    <section className="nav-info bg-white">  
      <CovidTracker/>
    </section>
    <section classNameName="track01 bg-aliceblue w-100 p-3" id="track01">
        <div className="card border-0 bg-transparent p-3">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="car">
              <div className="form-group">
                <select name=""
                    id="select_countries"
                    className="btn bg-white"
                    onchange="">
                </select>
              </div>  
            </div>
          </div> 
        </div>   
    </section>  
  </main>

      /* <section classNameName="track01 bg-aliceblue w-100 p-3" id="track01">
        <div className="card border-0 bg-transparent p-3">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="">
              <div className="form-group">
                <select
                  name=""
                  id="select_countries"
                  className="btn bg-white"
                  onchange="khowCountry()">
                </select>
              </div>
            </div>
            <div id="update"></div>
          </div>
        </div>
        <div
          className="card bg-transparent p-3 pt-4 border-0 border-top"
          id="cardCountry">
        </div>
      </section> */
    // </main>
  );
}

export default Updates;
