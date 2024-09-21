import React from "react";
import './App.css';
import Weather from "./components/weather/Weather";
import FavoriteLinks from "./components/favoritelinks/Favoritelinks";
import Calender from "./components/calender/Calender";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Calender />
          <Weather city="Sandvika" />
        </div>
        <FavoriteLinks />
      </header>
      
    </div>
  );
}

export default App;
