import './App.css';
import React, { useEffect, useState } from 'react';
import images from './images/index.js';

const apiKey = "a09da4da208fccf318a70ffa4a0cad6e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

// ... (import statements)

function App() {
  const [city, setCity] = useState("chennai");
  const [weather, setWeather] = useState(null);

  const fetchWeatherData = async () => {
    try {
      // Check if the city is not empty before making the API call
      if (city.trim() !== "") {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        const data = await response.json();
        setWeather(data);
        console.log(data);
        console.log(weather.weather[0].main);
      } else {
        // Optionally handle the case when the city is empty
        console.warn('City is empty. Please enter a valid city.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Optionally handle the error here
    }
  };

  useEffect(() => {
    fetchWeatherData();
    setCity("");
  }, []);

  const handler = (e) => {
    e.preventDefault();
    console.log(city);
    fetchWeatherData();
    setCity("");
  };

  const getImage = () =>{
    if(weather && weather.weather && weather.weather[0] && weather.weather[0].main){
      if(weather.weather[0].main === "Clear"){
        return images.clear;
      }else if(weather.weather[0].main === "Clouds"){
        return images.clouds;
      }else if(weather.weather[0].main === "Drizzle"){
        return images.drizzle;
      }else if(weather.weather[0].main === "Mist"){
        return images.mist;
      }else if(weather.weather[0].main === "Rain"){
        return images.rain;
      }else if(weather.weather[0].main === "Snow"){
        return images.snow;
      }else{
        return images.clear;
      }
    }
    
}

  return (
    <>
      <div className="weatherApp">
        <div className="weatherAppConatiner">
          <form className="searchCity">
            <input type="text" placeholder="Enter City Name" value={city} onChange={(e) => setCity(e.target.value)} />
            <button onClick={handler}><img src={images.search} alt="search" /></button>
          </form>
          <div className="weatherLogo">
            <img src={getImage()} alt={images.hello} />
          </div>
          <div className="weatherInfo">
            {weather && weather.main && (
              <>
                <h1>{Math.round(weather.main.temp)}&deg;C</h1>
                <h3>{weather.name}</h3>
              </>
            )}
          </div>
          <div className="weatherFooter">
            <div className="humidity">
              <div>
                <img className="humidityLogo" src={images.humidity} />
              </div>
              <div>
                <div className="humidityPercent">{weather && weather.main && weather.main.humidity}%</div>
                <h3>Humidity</h3>
              </div>
            </div>
            <div className="wind">
              <div>
                <img className="windLogo" src={images.wind} />
              </div>
              <div>
                {weather && weather.wind && (
                  <>
                    <div className="windSpeed">{weather.wind.speed}Km/h</div>
                    <h3>wind speed</h3>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
