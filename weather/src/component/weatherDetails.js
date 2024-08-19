import React from 'react';
import images from '../images/index.js';

const weathereDetails = ({weather}) => {
    return (
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
    );
};

export default weathereDetails;