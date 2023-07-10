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

  // We need to access the sequence of days after today

  // Array to store the next 6 days
  const nextDays = []; // empty array

  for (let day = 1; day <= 6; day++) { // iterate over the next 6 days and increment by 1
    const nextDay = new Date(today.getTime() + (day * 24 * 60 * 60 * 1000)); // calculate the date
    const nextDayName = weekday[nextDay.getDay()]; // find the name of the day from weekday
    nextDays.push(nextDayName); // day name is added to empty array
  }

  // Assign each day to a separate variable
  const day1 = nextDays[0];
  const day2 = nextDays[1];
  const day3 = nextDays[2];
  const day4 = nextDays[3];
  const day5 = nextDays[4];
  const day6 = nextDays[5];

  // console.log(day1, day2, day3, day4, day5, day6);

  // Access currentTemp from props!
  const currentTemp = props.currentTemp;

  // Assigning weather icon according to day temp
    const getWeatherIcon = (temperature) => {
      if ((temperature >= -5) && (temperature <= -1)){
        return <FontAwesomeIcon icon={faSnowflake}/>;
      } else if ((temperature >= 0) && (temperature <= 10)){
        return <FontAwesomeIcon icon={faCloudShowersHeavy}/>;
      } else if ((temperature >= 11) && (temperature <= 13)){
        return <FontAwesomeIcon icon={faCloudRain}/>;
      } else if ((temperature >= 14) && (temperature <= 16)){
        return <FontAwesomeIcon icon={faCloud}/>;
      } else if ((temperature >= 17) && (temperature <= 20)){
        return <FontAwesomeIcon icon={faCloudSun}/>;
      } else if ((temperature >= 21) && (temperature <= 28)){
        return <FontAwesomeIcon icon={faSun}/>;
      } else if ((temperature >= 29) && (temperature <= 31)){
        return <FontAwesomeIcon icon={faCloudBolt}/>;
      } else if ((temperature >= 32) && (temperature <= 40)){
        return <FontAwesomeIcon icon={faTemperatureArrowUp}/>;
      } else {
        return <FontAwesomeIcon icon={faSnowflake}/>;
      }
    };

  return(
    <div className="weekly-forecast-card">
      <ul className='week-wrapper'>

      <div className='day-card'>
        <li className='day'>Today</li>
        <div className="weekly-forecast-icon">{getWeatherIcon(currentTemp + 2)}</div>
        <span className='day-forecast'>
          <span className="day-temp">{currentTemp + 2}°C |</span>
          <span className='eve-temp'>{currentTemp - 9}°C</span>
        </span>
      </div>

      <div className='day-card'>
        <li className='day'>{day1}</li>
        <div className="weekly-forecast-icon">{getWeatherIcon(currentTemp + 5)}</div>
        <span className='day-forecast'>
          <span className="day-temp">{currentTemp + 5}°C |</span>
          <span className='eve-temp'>{currentTemp - 5}°C</span>
        </span>
      </div>

      <div className='day-card'>
        <li className='day'>{day2}</li>
        <div className="weekly-forecast-icon">{getWeatherIcon(currentTemp + 4)}</div>
        <span className='day-forecast'>
          <span className="day-temp">{currentTemp + 4}°C |</span>
          <span className='eve-temp'>{currentTemp - 5}°C</span>
        </span>
      </div>

      <div className='day-card'>
        <li className='day'>{day3}</li>
        <div className="weekly-forecast-icon">{getWeatherIcon(currentTemp - 9)}</div>
        <span className='day-forecast'>
          <span className="day-temp">{currentTemp - 9}°C |</span>
          <span className='eve-temp'>{currentTemp - 14}°C</span>
        </span>
      </div>

      <div className='day-card'>
        <li className='day'>{day4}</li>
        <div className="weekly-forecast-icon">{getWeatherIcon(currentTemp - 8)}</div>
        <span className='day-forecast'>
          <span className="day-temp">{currentTemp - 8}°C |</span>
          <span className='eve-temp'>{currentTemp - 13}°C</span>
        </span>
      </div>

      <div className='day-card'>
        <li className='day'>{day5}</li>
        <div className="weekly-forecast-icon">{getWeatherIcon(currentTemp - 20)}</div>
        <span className='day-forecast'>
          <span className="day-temp">{currentTemp - 16}°C |</span>
          <span className='eve-temp'>{currentTemp - 18}°C</span>
        </span>
      </div>

      <div className='day-card'>
        <li className='day'>{day6}</li>
        <div className="weekly-forecast-icon">{getWeatherIcon(currentTemp - 22)}</div>
        <span className='day-forecast'>
          <span className="day-temp">{currentTemp - 17}°C |</span>
          <span className='eve-temp'>{currentTemp - 18}°C</span>
        </span>
      </div>

      </ul>
    </div>
  );
};


export default WeeklyForecast;
