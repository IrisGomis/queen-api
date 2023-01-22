import * as React from "react";
import "./App.css";
import Routes from "./Routes";
import {BrowserRouter } from "react-router-dom";
import CardsTracker from "./components/pages/CardsTracker";

function App() {
             
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
