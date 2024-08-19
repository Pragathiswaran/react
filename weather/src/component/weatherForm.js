import React from 'react';
import images from '../images/index.js';

const SearchForm = ({city,setCity,fetchWeatherData}) => {
    const handler = (e) => {
        e.preventDefault();
        console.log(city);
        fetchWeatherData();
        setCity("");
      };
    return(
        <form className="searchCity">
            <input 
            type="text" 
            placeholder="Enter City Name" 
            value={city} onChange={(e) => setCity(e.target.value)} 
            />
            <button 
            onClick={handler}>
                <img src={images.search} alt="search" />
            </button>
        </form>
    )
};

export default SearchForm;