import './current-weather.css';
import weatherIcon from '../../pictures/01d.png'; // Use relative path to navigate up from components directory

const CurrentWeather = () => {
    return(
        <div className="container">
            <div className='top'>
                <p className='city'> Name</p>
                <p className='weather-description'>Description</p>
            </div>
            <img alt="weather" className='weather-icon' src={weatherIcon}/> {/* Use the imported image */}
        </div>
    )
}

export default CurrentWeather;
