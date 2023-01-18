import React from 'react';
import NavBHome from '../organismos/NavBHome';
import Symptom from '../templates/Symptom';
import Spreads from '../templates/Spreads';

function Home() {
  return (
    <div className='Home'>
        <header>
          <NavBHome />
        </header>
        <Symptom />
        <Spreads />
    </div>
  );
}

export default Home;