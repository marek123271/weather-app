import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import CurrentWeather from "../current-weather/Current-weather.js"; // Import CurrentWeather component
import Forecast from "../forecast/forecast.js"; // Import Forecast component


const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const [weatherData, setWeatherData] = useState(null); // State to store weather data
  const [forecastData, setforecastData] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      if (!inputValue) {
        // Return empty options if inputValue is empty
        return { options: [], hasMore: false };
      }
      const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=36d6243e00864decaab2bfe9e033a658`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return {
        options: result.features.map(city => ({ value: city.properties.place_id, label: city.properties.formatted })),
        hasMore: false // Assuming there's no more data to load
      };
    } catch (error) {
      console.error(error);
      return {
        options: [],
        hasMore: false
      };
    }
  };
  

  const handleOnChange = async (selectedOption) => {
    setSearch(selectedOption);
    onSearchChange(selectedOption);
  
    // Construct the Yahoo Weather API URL using the selected city's location
    const location = encodeURIComponent(selectedOption.label);
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=c`;
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a57279112dmsh0146c93b37a6eabp139cc1jsnb4bedb4a5707',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      const responseData = JSON.parse(result);
      
      // Set weather data in state
      setWeatherData(responseData);
      setforecastData(responseData)
  
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        loadOptions={loadOptions}
        onChange={handleOnChange}
      />
      {weatherData && <CurrentWeather weatherData={weatherData} />}
      {weatherData && <Forecast weatherData={weatherData} />} {/* Pass weatherData as prop */}    </>
  );
};

export default Search;
