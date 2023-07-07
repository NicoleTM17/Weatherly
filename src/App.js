// import logo from './logo.svg';

// fontawesome libraries:
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// Component imports:
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import WeeklyForecast from "./components/WeeklyForecast";

// CSS:
import './App.css';

// Icon libraries:
library.add(faMagnifyingGlass);



function App() {
  return (
  <div className='container'>
    <SearchBar/>
    <Forecast/>
    <WeeklyForecast/>
  </div>
  );
}

export default App;
