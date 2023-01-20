import React from 'react';
import NavBHome from '../organismos/NavBHome';
import Symptom from '../templates/Symptom';
import Prevent from '../templates/Prevent';
import Spreads from '../templates/Spreads';
import Footer from '../organismos/Footer';
import Landing from '../templates/Landing';

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
        <Footer/>
    </div>
  );
}

export default Home;