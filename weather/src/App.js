import './App.css';
import React from 'react';
import image from "./images/search.png"

function App() {
  return (
    <>
      <div className="weatherApp">
        <div className="weatherAppConatiner">
          <div className="searchCity">
            <input type="text" placeholder="Enter City Name" />
            <button><img  src={image} alt="" /></button>
          </div> 
          <div className="weatherLogo">
            <img src={image} alt="weather" />
          </div>
          <div className="weatherInfo">
            <h1>21°C</h1>
            <h3>city name</h3>
          </div>
          <div className="weatherFooter">
            <div className="humidity">
            <div className="humidityLogo"></div>
              <div className="humidityPercent">62%</div>
              <h3>Humidity</h3>
            </div>
            <div className="wind">
              <div className="windLogo"></div>
              <div className="windSpeed">2.1Km/h</div>
              <h3>Wind Speed</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
