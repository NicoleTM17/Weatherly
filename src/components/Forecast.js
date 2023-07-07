// import React from 'react';

// fontawesome libraries:
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS:
import '../style/Forecast.css';

function Forecast() {
  return(
    <div className="forecast-card">
      <div className='forecast-content'>

        <div className='current-wrapper'>

          <span className='current-temp'>

            <span className="temp-sun">
              <span className="temp">18°C</span>
              <FontAwesomeIcon icon={faSun}
              className="sun-icon"/>
            </span>

            <span className="highest-lowest">
              <p className='highs'>
                <span style={{fontWeight: "bold"}}>H:</span>
                29°C </p>
              <p className='lows'>
                <span style={{fontWeight: "bold"}}>L:</span>
                11°C</p>
            </span>
          </span>


          <span className="weather-details">
            <h2 className="current-location">London</h2>
            <p className="current-date-time">Fri 12:52</p>
            <p className="weather-type">Sunny</p>
          </span>

        </div>

        <div className='conditions-wrapper'>
          <div className="conditions-card">
            <br/>
            <span className='conditions-title'>Feels like:</span>
            <div><FontAwesomeIcon icon={faHand}/></div>
            <p className="conditions-details">15°C</p>
          </div>

          <div className="conditions-card">
            <br/>
            <span className='conditions-title'>Humidity:</span>
            <div><FontAwesomeIcon icon={faDroplet}/></div>
            <p className="conditions-details">82%</p>
          </div>

          <div className="conditions-card">
            <br/>
            <span className='conditions-title'>Wind:</span>
            <div><FontAwesomeIcon icon={faWind}/></div>
            <p className="conditions-details">5km/h</p>
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
