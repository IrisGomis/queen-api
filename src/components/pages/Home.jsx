import React from 'react';
import NavBHome from '../organismos/NavBHome';
import Landing from '../templates/Landing';
import Symptom from '../templates/Symptom';
import Prevent from '../templates/Prevent';
import Spreads from '../templates/Spreads';
import Footer from '../organismos/Footer';
import Wash from '../templates/Wash';
import Mobile from '../templates/Mobile';


function Home() {
  return (
    <div className='Home'>
        <header>
          <NavBHome />
        </header>
        <Landing />
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