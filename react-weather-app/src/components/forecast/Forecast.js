import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./Forecast.css";

// Define an array for the days of the week
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Define the Forecast component
const Forecast = ({ data }) => {
  // Get the current day of the week (0-6)
  const dayInAWeek = new Date().getDay();

  // Calculate the forecast days, considering the day as the start of the week
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title">Daily</label>

      {/* Accordion component for daily forecast */}
      <Accordion allowZeroExpanded>
        {/* Iterate through each forecast item */}
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {/* Display each day's forecast */}
                <div className="daily-item">
                  {/* Display weather icon */}
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="icon-small"
                    alt="weather"
                  />
                  {/* Display day */}
                  <label className="day">{forecastDays[idx]}</label>
                  {/* Display weather description */}
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  {/* Display temperature range */}
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            {/* Details panel */}
            <AccordionItemPanel>
              <div className="daily-details-grid">
                {/* Display pressure */}
                <div className="daily-details-grid-item">
                  <label>Pressure</label>
                  <label>{Math.round(item.main.pressure)}hPa</label>
                </div>

                {/* Display humidity */}
                <div className="daily-details-grid-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>

                {/* Display wind speed */}
                <div className="daily-details-grid-item">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed}m/s</label>
                </div>

                {/* Display feels like */}
                <div className="daily-details-grid-item">
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>

                {/* Display cloud cover */}
                <div className="daily-details-grid-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>

                {/* Display sea level */}
                <div className="daily-details-grid-item">
                  <label>Sea Level</label>
                  <label>{item.main.sea_level}m</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

// Export the Forecast component
export default Forecast;
