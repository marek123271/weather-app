import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; // Import useState
import Search from './components/search/search'; // Update path to Search component
import CurrentWeather from './components/current-weather/Current-weather'; // Update path to CurrentWeather component
import Forecast from "./components/forecast/forecast.js"; // Import Forecast component

function App() {
  const [weatherData, setWeatherData] = useState(null); // State to store weather data

  const handleOnSearchChange = (weatherData) => {
    setWeatherData(weatherData); // Update weather data state when search data changes
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} /> {/* Pass handleOnSearchChange as prop */}
      <CurrentWeather />
      <Forecast/>
       {/* You may want to pass weatherData to CurrentWeather as well */}
      {weatherData && <Forecast responseData={weatherData} />} {/* Pass weatherData to Forecast if available */}
    </div>
  );
}

export default App;
