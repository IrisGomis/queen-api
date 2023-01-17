import React from 'react';
import NavBHome from '../organismos/NavBHome';
import Symptom from '../templates/Symptom';

function Home() {
  return (
    <div className='Home'>
      <header>
        <NavBHome />
      </header>
      <Symptom />
    </div>
  );
}

export default Home;