import {BrowserRouter} from "react-router-dom";
import '../../App';
import '../templates/spreads.css';
import "bootstrap/dist/css/bootstrap.min.css";
import P1 from '../../images/p-1.jpg';
import P2 from '../../images/p-2.jpg';
import P3 from '../../images/p-3.jpg';
import P4 from '../../images/p-4.jpg';
import P5 from '../../images/p-5.jpg';
import P6 from '../../images/p-6.jpg';

function Spreads() {
  return (
    <BrowserRouter>
    <div className="grid text-center">
        <div className="g-col-12">.g-col-12</div>
        
        <div className="g-col-6">.g-col-6
            <div className="card">
            <img src={P1} className="card-img-top" alt="enferma"></img>
            <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>
        <div className="g-col-6">.g-col-6
        <div className="card" >
            <img src={P2} className="card-img-top" alt="contagio"></img>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>

        <div className="g-col-6">.g-col-6
        <div className="card">
            <img src={P3} className="card-img-top" alt="toalla"></img>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>
        <div className="g-col-6">.g-col-6
        <div className="card">
            <img src={P4} className="card-img-top" alt="enferma"></img>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>
        <div className="g-col-6">.g-col-6
        <div className="card">
            <img src={P5} className="card-img-top" alt="enferma"></img>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>
        <div className="g-col-6">.g-col-6
        <div className="card">
            <img src={P6} className="card-img-top" alt="enferma"></img>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>

    </div>
</BrowserRouter>

  )
}

export default Spreads