import React from "react";
import './App.css';
import Weather from "./components/weather/Weather";
import FavoriteLinks from "./components/favoritelinks/Favoritelinks";
import GoogleSearch from "./components/Googlesearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GoogleSearch />
        <Weather city="Sandvika" />
        <FavoriteLinks />
      </header>
    </div>
  );
}

export default App;
