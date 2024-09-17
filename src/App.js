import React from "react";
import './App.css';
import Weather from "./components/weather/Weather";
import FavoriteLinks from "./components/favoritelinks/Favoritelinks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="Sandvika" />
        <FavoriteLinks />
      </header>
    </div>
  );
}

export default App;
