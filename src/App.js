import * as React from "react";
import './App.css';
import NavBHome from './components/organismos/NavBHome';
import Routes from "./Routes";


function App() {
  return (
    <div className="App">
      <Routes/>
      <NavBHome/>
    </div>
  );
}

export default App;
