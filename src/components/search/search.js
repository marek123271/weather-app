import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL } from "../../api"; // Assuming GEO_API_URL is exported from '../../api'

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      return {
        options: data.map(city => ({ value: city.id, label: city.name })),
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

  const handleOnChange = (selectedOption) => {
    setSearch(selectedOption);
    onSearchChange(selectedOption);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      loadOptions={loadOptions}
      onChange={handleOnChange}
    />
  );
};

export default Search;
