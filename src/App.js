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

// Component imports:
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

function App() {

  // Generate a number from -5 to 40 degrees (include 40!)
  const currentTemp = Math.floor(Math.random() * 46) - 5;

  return (
  <div className='container'>
    <span className='search-forecast'>
      <SearchBar/>
      <Forecast
      currentTemp={currentTemp}
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
