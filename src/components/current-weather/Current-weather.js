import React from "react";
import "./current-weather.css";
import CloudyIcon from './pictures/Cloudy.png';
import MostlyCloudyIcon from './pictures/MostlyCloudy.png';
import ClearIcon from './pictures/Clear.png';
import RainyIcon from './pictures/Rainy.png';
import SnowyIcon from './pictures/Snowy.png';
import ShowersIcon from './pictures/Showers.png';
import ThunderstormsIcon from './pictures/Thunderstorms.png';
import FoggyIcon from './pictures/Foggy.png';
import WindyIcon from './pictures/Windy.png';
import SunnyIcon from './pictures/Sunny.png';
import PartlyCloudyicon from './pictures/Partly Cloudy.png'
import Fair from './pictures/Fair.png'













const weatherIcons = {
  "Cloudy": CloudyIcon,
  "Mostly Cloudy": MostlyCloudyIcon,
  "Clear": ClearIcon,
  "Sunny":SunnyIcon,
  "Rainy": RainyIcon,
  "Snowy": SnowyIcon,
  "Showers": ShowersIcon,
  "Thunderstorms": ThunderstormsIcon,
  "Foggy": FoggyIcon,
  "Windy": WindyIcon,
  "Partly Cloudy": PartlyCloudyicon,
  "Fair": Fair
};




const CurrentWeather = ({ weatherData }) => {
  if (!weatherData) {
    return null; // Return early if weatherData is null or undefined
  }
  // Extract relevant weather information from weatherData prop
  const city = weatherData.location.city;
  const weatherDescription = weatherData.current_observation.condition.text;
  const wind = weatherData.current_observation.wind.speed;
  const humidity = weatherData.current_observation.atmosphere.humidity;
  const pressure = weatherData.current_observation.atmosphere.pressure;
  const text = weatherData.current_observation.condition.text;
  console.log("text "+text);
  const temp = weatherData.current_observation.condition.temperature;

  console.log(`src/pictures/${text}.png`);
  return (
    <div className="weather-box">
      <div className="top">
        <div>
          <p className="city">{city}</p> {/* Display city name */}
          <p className="weather-description">{weatherDescription}</p> {/* Display weather description */}
        </div>
        <img alt="weather" className="weather-icon" src={weatherIcons[text]} />
        
      </div>
      <div className="bottom">
        <p className="temperature">{temp}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label-top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">{wind} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Humidity </span>
            <span className="parameter-value">{humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Pressure </span>
            <span className="parameter-value">{pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
