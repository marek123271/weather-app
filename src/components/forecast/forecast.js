import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './forecast.css'; // Import your custom CSS for styling
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
import PartlyCloudyIcon from './pictures/Partly Cloudy.png'
import Fair from './pictures/Fair.png'
import MostllySunny from './pictures/MostllySunny.png'

const weatherIcons = {
    "Cloudy": CloudyIcon,
    "Mostly Cloudy": MostlyCloudyIcon,
    "Clear": ClearIcon,
    "Sunny":SunnyIcon,
    "Rainy": RainyIcon,
    "Snowy": SnowyIcon,
    "Showers": ShowersIcon,
    "Scattered Showers":ShowersIcon,
    "Thunderstorms": ThunderstormsIcon,
    "Foggy": FoggyIcon,
    "Windy": WindyIcon,
    "Partly Cloudy": PartlyCloudyIcon,
    "Fair": Fair,
    "Mostly Sunny": MostllySunny
  };
  


const Forecast = ({ weatherData }) => {
  // Check if weatherData exists before accessing its properties
  if (!weatherData) {
    return null;
  }
  const text = weatherData.current_observation.condition.text;
  const forecasts = weatherData.forecasts || [];

  return (
    <>
      <label className="title"></label>
      <Accordion allowZeroExpanded>
        <div className="accordion-container">
          {forecasts.map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-header">
                  <div>{item.day}</div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion-panel">
                <div className="weather-details">
                  <div>High: {item.high}</div>
                  <div>Low: {item.low}</div>
                  <div>Description: {item.text}</div>
                  <img alt="weather" className="weather-icon" src={weatherIcons[item.text]} />
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </>
  );
};

export default Forecast;
