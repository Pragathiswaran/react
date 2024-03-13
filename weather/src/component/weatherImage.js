import React from "react";
import images from "../images/index.js";

const WeatherImage = ({ weather }) => {

    const imageName = ()=>{
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
    
    return(
        <>
            <div className="weatherLogo">
                <img src={imageName()} alt={images.hello} />
            </div>
            <div className="weatherInfo">
                {weather && weather.main && (
                <>
                    <h1>{Math.round(weather.main.temp)}&deg;C</h1>
                    <h3>{weather.name}</h3>
                </>
            )}
            </div>
        </> 
    );
};

export default WeatherImage;