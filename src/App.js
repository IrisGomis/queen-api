import * as React from "react";
import './App.css';
import Home from './components/pages/Home';
import Routes from './Routes';



function App() {
  return (
    <div className="App">
      <Routes />
      <Home />
    </div>
  );
}

export default App;
