import * as React from "react";
import "./App.css";
import Routes from "./Routes";
import {BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";

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
