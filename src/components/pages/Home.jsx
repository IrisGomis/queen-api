import React from 'react';
import NavBHome from '../organismos/NavBHome';
import Symptom from '../templates/Symptom';
import Prevent from '../templates/Prevent';
import Spreads from '../templates/Spreads';
import Footer from '../organismos/Footer';
import Wash from '../templates/Wash';
import Mobile from '../templates/Mobile';
import {BrowserRouter } from "react-router-dom";


function Home() {
  return (
    <div className='Home'>
        <header>
          <NavBHome />
        </header>
        <Symptom />
        <Prevent />
        <Spreads />
        <Wash />
        <Mobile />
        <Footer/>
    </div>
  );
}

export default Home;