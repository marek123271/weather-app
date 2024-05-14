import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import CurrentWeather from "../current-weather/Current-weather.js"; // Import CurrentWeather component


const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const [weatherData, setWeatherData] = useState(null); // State to store weather data

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
        'X-RapidAPI-Key': '4bec3ea2b0msh2205a9a505a7c28p1a22d0jsn6fab38423ab2',
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
      {weatherData && <CurrentWeather weatherData={weatherData} />} {/* Render CurrentWeather component with weather data */}
    </>
  );
};

export default Search;
