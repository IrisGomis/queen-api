import * as React from "react";
import './App.css';
import Home from './components/pages/Home';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
