import "./App.css";
import "./index.css";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/Forecast";

function App() {
  // Holds the current weather and forecast data using state.
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // Function triggered when the search bar changes.
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    // Fetches the current weather and forecast data.
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // Waits for both requests and then updates the data.
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);

  // Creates the layout of the application.
  return (
    <div className="container">
      {/* The Search component with handleOnSearchChange function listening to search changes. */}
      <Search onSearchChange={handleOnSearchChange} />

      {/* Displays the CurrentWeather component if current weather data is available. */}
      {currentWeather && <CurrentWeather data={currentWeather} />}

      {/* Displays the Forecast component if forecast data is available. */}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
