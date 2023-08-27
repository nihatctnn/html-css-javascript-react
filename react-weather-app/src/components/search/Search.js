import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

// Define the 'Search' component that takes a 'onSearchChange' prop
const Search = ({ onSearchChange }) => {
  // Use the 'useState' hook to manage the 'search' state
  const [search, setSearch] = useState(null);

  // Define a function 'loadOptions' that fetches city data based on user input
  const loadOptions = (inputValue) => {
    return fetch(
      // Construct the API URL using 'GEO_API_URL' constant and user input
      `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
      // Pass API options defined in 'geoApiOptions'
      geoApiOptions
    )
      // Parse the response as JSON
      .then((response) => response.json())
      .then((response) => {
        // Transform fetched data into options for the dropdown
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  // Define a function 'handleOnChange' to handle selection changes
  const handleOnChange = (searchData) => {
    // Update the 'search' state with selected data
    setSearch(searchData);
    // Call the 'onSearchChange' prop with the selected data
    onSearchChange(searchData);
  };

  // Return the 'AsyncPaginate' component with necessary props
  return (
    <AsyncPaginate
      placeholder="Search for city" 
      debounceTimeout={600} 
      value={search} 
      onChange={handleOnChange} // Callback function for value changes
      loadOptions={loadOptions} // Function to fetch and provide options
    />
  );
};

export default Search;