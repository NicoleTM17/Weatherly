import { useState } from 'react'; // manages state in functional components
import { useEffect} from "react"; // helps us perform side effects in React such as fetching from an API
import axios from 'axios';

// fontawesome libraries:
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake} from "@fortawesome/free-solid-svg-icons";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faSmog } from "@fortawesome/free-solid-svg-icons";

// Component imports:
// import Images from "./components/Images";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import WeeklyForecast from "./components/WeeklyForecast";
import Footer from "./components/Footer";

// CSS:
import './App.css';

// Google fonts:
import WebFont from 'webfontloader';


WebFont.load({
  google: {
    families: [
      'Inter:200,600',
      'Montserrat:200',
      'Noto+Sans:ital,wght@0,200;0,600;1,300',
      'PT+Serif:700',
      'Playfair+Display:400,700',
      'Quicksand',
    ],
  },
});


// Icon libraries:
library.add(faMagnifyingGlass);
library.add(faSun);
library.add(faWind);
library.add(faDroplet);
library.add(faHand);
library.add(faCloudSun);
library.add(faCloud);
library.add(faCloudShowersHeavy);
library.add(faSnowflake);
library.add(faCloudBolt);
library.add(faCloudRain);
library.add(faTemperatureArrowUp);
library.add(faSmog);

// Generate a number from -5 to 40 degrees (include 40!)
const currentTempGenerated = () => Math.floor(Math.random() * 46) - 5;

function App() {

  const [currentLocation, setCurrentLocation] = useState('London'); // state variable currentLocation is initially set to 'London'

  function updateLocation(newLocation) { // sets currentLocation state variable to the new location (so no longer 'London')
    setCurrentLocation(newLocation);
  }

  // State variable to store the current temperature
  const [currentTemp, setCurrentTemp] = useState(0);


  // Calculate weather type based on current temperature
  const getWeatherType = (temp) => {
    if (temp >= -5 && temp <= -1) {
      return 'Snow';
    } else if (temp >= 0 && temp <= 3) {
      return 'Fog';
    } else if (temp >= 4 && temp <= 10) {
      return 'Rain';
    } else if (temp >= 11 && temp <= 13) {
      return 'Drizzle';
    } else if (temp >= 14 && temp <= 16) {
    return 'Clouds';
  } else if (temp >= 17 && temp <= 20) {
    return 'Cloudy';
  } else if (temp >= 21 && temp <= 28) {
    return 'Sunny';
  } else if (temp >= 29 && temp <= 31) {
    return 'Thunder';
  } else if (temp >= 32 && temp <= 40) {
    return 'Heat';
  } else {
    return 'n/a';
  }
};

// State variable to store fetched image URL
const [backgroundImg, setBackgroundImg] = useState(null); // initialised with null

const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

// Default background image
  const defaultBackgroundImg =
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

// Fetch image from Unsplash
const fetchBackgroundImg = async (weatherType) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?query=${weatherType}&client_id=${apiKey}`
    );
    // console.log(`https://api.unsplash.com/photos/random?query=${weatherType}&client_id=${apiKey}`);
    const imageURL = response.data.urls.regular;
    setBackgroundImg(imageURL);
  } catch (error) {
    console.error('Error fetching image from Unsplash.com:', error);
    setBackgroundImg(defaultBackgroundImg);
  }
};

// Fetch background image when the component mounts and weatherType changes
useEffect(() => {
  const temp = currentTempGenerated();
  setCurrentTemp(temp);
  const weatherType = getWeatherType(temp);
  fetchBackgroundImg(weatherType);
}, []);


  return (
  <div className='container'style={{ backgroundImage: `url(${backgroundImg || defaultBackgroundImg})`, backgroundSize: "cover", backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>

    <h1 className='logo'>Weatherly</h1>

    <span className='search-forecast'>
      <SearchBar updateLocation={updateLocation} // passed the updateLocation prop
      />
      <Forecast currentTemp={currentTemp} location={currentLocation} // passed the location prop
      />
    </span>

    <WeeklyForecast currentTemp={currentTemp}/>
    <Footer/>
  </div>
  );
}

export default App;
