import { useState } from 'react'; // manages state in functional components
// import logo from './logo.svg';

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
import Images from "./components/Images";
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

function App() {

  const [currentLocation, setCurrentLocation] = useState('London'); // state variable currentLocation is initially set to 'London'

  // State variable to store fetched image URL
  const [backgroundImg, setBackgroundImg] = useState(''); // initialised with an empty string


  // Generate a number from -5 to 40 degrees (include 40!)
  const currentTemp = Math.floor(Math.random() * 46) - 5;

  function updateLocation(newLocation) { // sets currentLocation state variable to the new location (so no longer 'London')
    setCurrentLocation(newLocation);
  }

  function setImagesBackgroundImg(imgUrl) { // a function that takes a parameter imgUrl and updates the value of backgroundImg based on the url
    setBackgroundImg(imgUrl);
  }

  return (
  <div
  className='container' // class sets the backgroundImg variable as the url for the background image, otherwise uses a default image
  style={{
    backgroundImage: backgroundImg ? `url(${backgroundImg})` : 'linear-gradient(rgba(255,255,255, 0.2), rgba(255,255,255,0.2)), url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: "cover"
  }}
  >
    <h1 className='logo'>Weatherly</h1>

    <Images currentTemp={currentTemp} setImagesBackgroundImg={setImagesBackgroundImg}/>
    <span className='search-forecast'>
      <SearchBar
      updateLocation={updateLocation} // passed the updateLocation prop
      />
      <Forecast
      currentTemp={currentTemp}
      location={currentLocation} // passed the location prop
      />
    </span>
    <WeeklyForecast
    currentTemp={currentTemp}
    />
    <Footer/>
  </div>
  );
}

export default App;
