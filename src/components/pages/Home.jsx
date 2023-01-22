import React from 'react';
import NavBHome from '../organismos/NavBHome';
import Landing from '../templates/Landing';
import Symptom from '../templates/Symptom';
import Prevent from '../templates/Prevent';
import Spreads from '../templates/Spreads';
import Faqs from '../templates/Faqs';
import Wash from '../templates/Wash';
import Mobile from '../templates/Mobile';
import News from '../templates/News';
import Footer from '../organismos/Footer';

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
        <Faqs />
        <Wash />
        <Mobile />
        <News />
        <Footer/>
    </div>
  );
}

export default Home;