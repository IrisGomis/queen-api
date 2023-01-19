import "./Top10CountryRigth.css";
import ApiConsum from "../../services/ApiConsum";

const Top10CountryRigth = () => {

  const dataCases = ApiConsum("countries/");
  dataCases.sort((a,b) =>  b.cases - a.cases);
  const TodayCases = ApiConsum("countries/");
  //TodayCases.sort((a,b) =>  b.cases - a.cases);
    
  return (
    <div className="div-top10country" >
      <h2 className="h-div-top10country">Top 10 Country wise Covid-19 Updates - Tiles</h2>
      <hr></hr>
      <div className="div-top10country-main">
        <div className="div-top10country-main-TopCases">
          <h3 className="h-div-top10country-main">Top Cases</h3>
          <ul class="pt-2">
            
            {dataCases.slice(0,10).map((item) => ( 
                <li class="li-top10country-main  " key = {item.countryInfo._id}>
                    <div className="div-list-top10country-main">
                        <p>
                          <span className="span-div-list-top10country-main-1">
                            <img src={item.countryInfo.flag} alt="" className="flag-top10country"  />  
                          </span>
                          <span className="span-div-list-top10country-main-2" >
                              <p className="p-span-div-list-top10country-main-2-1">{ item.country}</p>
                              <p className="p-span-div-list-top10country-main-2-2">{ item.cases }</p>
                          </span>
                        </p>
                    </div>
                </li>
            ))}
            </ul>
        </div>
        <div className="div-Top10Country-main-TodayCases">
          <h3 className="h-div-top10country-main">Today Cases</h3>
          <ul class="pt-2">
            
            {TodayCases.slice(0,10).map((item) => ( 
                <li class="li-top10country-main  " key = {item.countryInfo._id}>
                    <div className="div-list-top10country-main">
                        <div className="span-div-list-top10country-main-1">
                          <img src={item.countryInfo.flag} alt="" className="flag-top10country"  />  
                        </div>
                        <div className="span-div-list-top10country-main-2" >
                            <p className="p-span-div-list-top10country-main-2-1">{ item.country}</p>
                            <p className="p-span-div-list-top10country-main-2-2">{ item.cases }</p>
                        </div>
                    </div>
                </li>
            ))}
            </ul>
        </div>
        <div className="div-Top10Country-main-TopDeaths">
          <h3 className="h-div-top10country-main">Top Deaths</h3>
        </div>
        <div className="div-Top10Country-main-TodayDeaths">
          <h3 className="h-div-top10country-main">Today Deaths</h3>
        </div>
        <div className="div-Top10Country-main-TopActive">
          <h3 className="h-div-top10country-main">Top Active</h3>
        </div>
        <div className="div-Top10Country-main-TopRecover">
          <h3 className="h-div-top10country-main">Top Recover</h3>
        </div>

      </div>
        
    </div>
  );
};

export default Top10CountryRigth;