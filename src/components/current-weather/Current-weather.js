import "./current-weather.css";
import weatherIcon from "../../pictures/01d.png"; // Use relative path to navigate up from components directory

const CurrentWeather = () => {
  return (
    <div className="weather-box">
      <div className="top">
        <div>
          <p className="city"> Name</p>
          <p className="weather-description">Description</p>
        </div>
        <img alt="weather" className="weather-icon" src={weatherIcon} />{" "}
        {/* Use the imported image */}
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label-top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Humidity </span>
            <span className="parameter-value">82%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Pressure </span>
            <span className="parameter-value">1500 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
