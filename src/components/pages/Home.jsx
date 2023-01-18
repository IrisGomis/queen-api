import React from 'react';
import NavBHome from '../organismos/NavBHome';
import Spreads from '../templates/Spreads';

function Home() {
  return (
    <div className="home">
      <header>
        <NavBHome/>
      </header>
        <Spreads/>
    </div>  
  );
}

export default Home