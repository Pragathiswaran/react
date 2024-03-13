import './App.css';
import React, { useEffect, useState } from 'react';
import SearchForm from './component/weatherForm.js';
import WeatherImage from './component/weatherImage.js';
import WeatherDetails from './component/weatherDetails.js';

const apiKey = "a09da4da208fccf318a70ffa4a0cad6e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

function App() {
  const [city, setCity] = useState("chennai");
  const [weather, setWeather] = useState(null);

  const fetchWeatherData = async () => {
    try {
      // Check if the city is not empty before making the API call
      if (city.trim() !== "") {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        const data = await response.json();

        if(data.cod === "404"){
          alert("Please enter the valid City");
          return;
        } else {
          setWeather(data);
        }
      } else {
        // Optionally handle the case when the city is empty
        console.warn('City is empty. Please enter a valid city.');
        alert("City is empty. Please enter a valid city.");
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

  return (
    <>
      <div className="weatherApp">
        <div className="weatherAppConatiner">
          <SearchForm city={city} setCity={setCity} fetchWeatherData={fetchWeatherData} />
          <WeatherImage weather={weather}/>
          <WeatherDetails weather={weather}/>
        </div>
      </div>
    </>
  );
}

export default App;
