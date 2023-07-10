// import React from 'react';

// fontawesome icons:
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake} from "@fortawesome/free-solid-svg-icons";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons";

// default fontawesome import:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// CSS:
import '../style/WeeklyForecast.css';

function WeeklyForecast(props){

  // Get current day and sequence of weekday
  const today = new Date();
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  // set dayName to today
  let dayName = weekday[today.getDay()];

  // Access currentTemp from props!
  const currentTemp = props.currentTemp;

    // weather type:
    let weatherType;

    if ((currentTemp >= -5) && (currentTemp <= -1)) {
      weatherType = 'Frosty';
    } else if ((currentTemp >= 0) && (currentTemp <= 10)) {
      weatherType = 'Rainy';
    } else if ((currentTemp >= 11) && (currentTemp <= 13)) {
      weatherType = 'Drizzly';
    } else if ((currentTemp >= 14) && (currentTemp <= 16)) {
      weatherType = 'Cloudy';
    } else if ((currentTemp >= 17) && (currentTemp <= 20)) {
      weatherType = 'Partly cloudy';
    } else if ((currentTemp >= 21) && (currentTemp <= 28)) {
      weatherType = 'Sunny';
    } else if ((currentTemp >= 29) && (currentTemp <= 31)) {
      weatherType = 'Thunder';
    } else if ((currentTemp >= 32) && (currentTemp <= 40)) {
      weatherType = 'Heatwave';
    } else {
      weatherType = 'n/a';
    };

    // fontawesome
    let weatherIcon;

    switch (weatherType) {
      case 'Frosty':
        weatherIcon = <FontAwesomeIcon icon={faSnowflake}/>;
        break;
      case 'Rainy':
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy}/>;
        break;
      case 'Drizzly':
        weatherIcon = <FontAwesomeIcon icon={faCloudRain}/>;
        break;
      case 'Cloudy':
        weatherIcon = <FontAwesomeIcon icon={faCloud}/>;
        break;
      case 'Partly cloudy':
        weatherIcon = <FontAwesomeIcon icon={faCloudSun}/>;
        break;
      case 'Sunny':
        weatherIcon = <FontAwesomeIcon icon={faSun}/>;
        break;
      case 'Thunder':
        weatherIcon = <FontAwesomeIcon icon={faCloudBolt}/>;
        break;
      case 'Heatwave':
        weatherIcon = <FontAwesomeIcon icon={faTemperatureArrowUp}/>;
        break;
      default:
        weatherIcon = <FontAwesomeIcon icon={faCloud}/>;
    };


  return(
    <div className="weekly-forecast-card">
      <ul className='week-wrapper'>

      <div className='day-card'>
        <li className='day'>Today</li>
        <div className="weekly-forecast-icon">{weatherIcon}</div>
        <span className='day-forecast'>{currentTemp + 2}°C |
          <span className='eve-temp'>{currentTemp - 9}°C</span>
        </span>
      </div>

      <div className='day-card'>
        <li className='day'>{dayName}</li>
        <div className="weekly-forecast-icon">{weatherIcon}</div>
        <span className='day-forecast'>{currentTemp + 5}°C |
          <span className='eve-temp'>{currentTemp - 5}°C</span>
        </span>
      </div>

      <div className='day-card'>
        <li className='day'>{dayName}</li>
        <div className="weekly-forecast-icon">{weatherIcon}</div>
        <span className='day-forecast'>{currentTemp + 4}°C |
          <span className='eve-temp'>{currentTemp - 5}°C</span>
        </span>
      </div>

      <div className='day-card'>
        <li className='day'>{dayName}</li>
        <div className="weekly-forecast-icon">{weatherIcon}</div>
        <span className='day-forecast'>{currentTemp - 9}°C |
          <span className='eve-temp'>{currentTemp - 14}°C</span>
        </span>
      </div>

      <div className='day-card'>
        <li className='day'>{dayName}</li>
        <div className="weekly-forecast-icon">{weatherIcon}</div>
        <span className='day-forecast'>{currentTemp - 8}°C |
          <span className='eve-temp'>{currentTemp - 13}°C</span>
        </span>
      </div>

      <div className='day-card'>
        <li className='day'>{dayName}</li>
        <div className="weekly-forecast-icon">{weatherIcon}</div>
        <span className='day-forecast'>{currentTemp - 20}°C |
          <span className='eve-temp'>{currentTemp - 25}°C</span>
        </span>
      </div>

      <div className='day-card'>
        <li className='day'>{dayName}</li>
        <div className="weekly-forecast-icon">{weatherIcon}</div>
        <span className='day-forecast'>{currentTemp - 22}°C |
          <span className='eve-temp'>{currentTemp - 26}°C</span>
        </span>
      </div>

      </ul>
    </div>
  );
};


export default WeeklyForecast;
