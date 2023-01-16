import "./CovidTracker.css"
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ApiConsum from "../../services/ApiConsum"

const CovidTracker = () => {
  
  const data = ApiConsum("https://disease.sh/v3/covid-19/all");
  
  const dataCountry = ApiConsum("https://disease.sh/v3/covid-19/countries/");
  dataCountry.sort((a,b) =>  b.cases - a.cases);
  
  return (
    <div className="div-covid-tracker">
        <h2 className="h-covid-tracker">Covid-19 Tracker </h2>

        <div className="div-btn-covid-tracker">
            <Button className="btn-covid-tracker cases_covid-tracker" variant="" id="">
                <span className="span-badge-covid-tracker1">
                    Total Case: {"  "}
                </span>
                <span className="span-badge-covid-tracker2">
                    <Badge bg="light" text="secondary">
                    +{data.todayCases}  
                    </Badge>
                    {"  "}{data.cases}
                </span>
            </Button>  
            
        </div>
        <div className="div-btn-covid-tracker" >
            <Button className="btn-covid-tracker active_covid-tracker" variant="" id="" >
                <span className="span-badge-covid-tracker1">
                    Active Case: {"       "}
                </span>
                <span  className="span-badge-covid-tracker2">
                    {data.active}
                </span>
            </Button>
        </div>
        <div className="div-btn-covid-tracker">
            <Button className="btn-covid-tracker recovered_covid-tracker" variant="" id="">
                <span className="span-badge-covid-tracker1">
                    Recovered Case: {"  "}
                </span>
                <span  className="span-badge-covid-tracker2">
                    <Badge bg="light" text="secondary">
                    +{data.todayRecovered}  
                    </Badge>
                    {"  "}{data.recovered}
                </span>
            </Button>
        </div>
        <div className="div-btn-covid-tracker ">
            <Button className="btn-covid-tracker deaths_covid-tracker" variant="" id="">
                <span className="span-badge-covid-tracker1">
                    Deaths Case: {"  "}
                </span>
                <span  className="span-badge-covid-tracker2">
                    <Badge bg="light" text="secondary">
                    +{data.todayDeaths}  
                    </Badge>
                    {"  "}{data.deaths}
                </span>
            </Button>
        </div>
        
        <h3 className="h-covid-tracker">Top 10 Country</h3>
        {
            dataCountry.slice(0,10).map((item) => ( 
                <div className="div-btn-covid-tracker" >
                    <Button className="btn-covid-tracker" variant="outline-secondary">
                        <Badge className="badge-covid-tracker"  bg="light"   >
                            <img src={item.countryInfo.flag} alt="" className="flag-covid-tracker"  />  
                        </Badge>
                        <span className="span-badge-covid-tracker1 text-start">
                            { item.country} 
                        </span>
                        <span className="span-badge-covid-tracker2 text-end" >
                            { item.cases } 
                        </span>
                    </Button>
                </div>
                
            ))
        }
    </div>
  );
};

export default CovidTracker;