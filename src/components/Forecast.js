// import React from 'react';

// fontawesome libraries:
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faHand } from "@fortawesome/free-solid-svg-icons";
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
import '../style/Forecast.css';


function Forecast(props) {

  // Get current day, hours and minutes
  const today = new Date();
  const currentTime = today.getHours() + ":" + today.getMinutes();
  const currentDay = today.getDay();

  // assign days of the week to abbreviations
  let dayName;

  switch (currentDay) {
    case 0:
      dayName = 'Sun';
      break;
    case 1:
      dayName = 'Mon';
      break;
    case 2:
      dayName = 'Tues';
      break;
    case 3:
      dayName = 'Weds';
      break;
    case 4:
      dayName = 'Thurs';
      break;
    case 5:
      dayName = 'Fri';
      break;
    case 6:
      dayName = 'Sat';
      break;
    default:
      dayName = 'n/a';
  };

  // Access currentTemp from props!
  const currentTemp = props.currentTemp;

  // Generate a number from 0 to 100 (include 100!)
  const currentHumidity = Math.floor(Math.random() * 101);

  // Generate a number from 1 to 9 (include 9!)
  const currentWind = Math.floor(Math.random() * 9) + 1;

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
    <div className="forecast-card">
      <div className='forecast-content'>

        <div className='current-wrapper'>

          <span className='current-temp'>

            <span className="temp-icon">
              <span className="temp">{currentTemp}°C</span>
              <span className="f-icon">{weatherIcon}</span>
            </span>

            <span className="highest-lowest">
              <p className='highs'>
                {/* <span style={{fontWeight: "bold"}}>H:</span> */}
                {currentTemp + 2}°C | </p>
              <p className='lows'>
                {/* <span style={{fontWeight: "bold"}}>L:</span> */}
                <span className="eve-temp-main">{currentTemp - 9}°C</span></p>
            </span>
          </span>


          <span className="weather-details">
            <h2 className="current-location">London</h2>
            <p className="current-date-time">{dayName} {currentTime}</p>
            <p className="weather-type">{weatherType}</p>
          </span>

        </div>

        <div className='conditions-wrapper'>
          <div className="conditions-card">
            <br/>
            <span className='conditions-title'>Feels like:</span>
            <div><FontAwesomeIcon icon={faHand} className="conditions-icon"/></div>
            <p className="conditions-details">{currentTemp - 2}°C</p>
          </div>

          <div className="conditions-card">
            <br/>
            <span className='conditions-title'>Humidity:</span>
            <div><FontAwesomeIcon icon={faDroplet} className="conditions-icon"/></div>
            <p className="conditions-details">{currentHumidity}%</p>
          </div>

          <div className="conditions-card">
            <br/>
            <span className='conditions-title'>Wind:</span>
            <div><FontAwesomeIcon icon={faWind} className="conditions-icon"/></div>
            <p className="conditions-details">{currentWind}km/h</p>
          </div>
        </div>


      </div>
    </div>
  );
};


export default Forecast;


// weather fontawesome icons (goes in div weather-icon):

// sunny
/* <i class="fa-solid fa-sun"></i> */

// sunny w/ clouds
/* <i class="fa-solid fa-cloud-sun"></i> */

// cloudy
/* <i class="fa-solid fa-cloud"></i> */

// rainy
/* <i class="fa-solid fa-cloud-showers-heavy"></i> */

// frosty
/* <i class="fa-solid fa-snowflake"></i> */

// thunder
/* <i class="fa-solid fa-cloud-bolt"></i> */
