<<<<<<< HEAD
import * as React from "react";
=======
import * as React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBHome from './components/organismos/NavBHome';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBHome/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Rutas


/*import * as React from "react";
>>>>>>> f0c2dde7c0189968bd80820ceb7b770816e8982d
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBTraker from './components/organismos/NavBTracker.jsx';
import AjaxData from './components/pages/AjaxData';
import CardsTracker from './components/pages/CardsTracker';
import CountryWise from './components/pages/CountryWise';
import ExGrafhic from './components/pages/ExGraphic';
import ExMap from './components/pages/ExMap';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Top10Country from './components/pages/Top10Country';
import Updates from './components/pages/Updates';

const Rutas = () => {
     return (
        <BrowserRouter>
            <Routes>
                <Route path="/NavBTraker" element={<NavBTraker/>}/>
                <Route path="/AjaxData" element={<AjaxData/>}/>
                <Route path="/CardsTraker" element={<CardsTracker/>}/>
                <Route path="/CountryWise" element={<CountryWise/>}/>
                <Route path="/ExGraphic" element={<ExGrafhic/>}/>
                <Route path="/ExMap" element={<ExMap/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/News" element={<News/>}/>
                <Route path="/Top10Country" element={<Top10Country/>}/>
                <Route path="/Updates" element={<Updates/>}/>


            </Routes>
        </BrowserRouter>
<<<<<<< HEAD
     )
 }
 export default Rutas
=======
    )
}
export default Rutas*/

>>>>>>> f0c2dde7c0189968bd80820ceb7b770816e8982d
