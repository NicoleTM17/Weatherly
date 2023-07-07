// import React from 'react';

import '../style/Forecast.css';

function Forecast() {
  return(
    <div className="forecast-card">
      <div className='forecast-content'>
        <h1 className="current-temp">18℃</h1>
        <h2 className="current-location">London</h2>
        <p className="current-date-time">Fri 12:52</p>
        <p className="weather-type">Sunny</p>
        <span className="highest-lowest">
          <p className='highs'>H:29℃ </p>
          <p className='lows'>L: 11℃</p>
        </span>

        <div className='conditions-wrapper'>
          <div className="conditions-card">
            <br/>
            <span className='conditions-title'>Feels like:</span>
            <p className="conditions-details">15℃</p>
          </div>

          <div className="conditions-card">
            <br/>
            <span className='conditions-title'>Humidity:</span>
            <p className="conditions-details">82%</p>
          </div>

          <div className="conditions-card">
            <br/>
            <span className='conditions-title'>Wind:</span>
            <p className="conditions-details">5km/h</p>
          </div>
        </div>


      </div>
    </div>
  );
};


export default Forecast;
