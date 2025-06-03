import React from "react";
import './App.css';
import Weather from "./components/weather/Weather";
import FavoriteLinks from "./components/favoritelinks/Favoritelinks";
import Calender from "./components/calender/Calender";
import BitcoinChart from "./components/diagram/BitcoinChart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <BitcoinChart />
          <Weather city="Sandvika" />
          <Calender />
        </div>
        <FavoriteLinks />
      </header>
      
    </div>
  );
}

export default App;
