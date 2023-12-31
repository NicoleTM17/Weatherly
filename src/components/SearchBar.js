// import React from 'react';
import { useState } from "react";

// fontawesome libraries:
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS:
import '../style/SearchBar.css';

// When a user clicks (onClick) the 'search' button, the current-location text in Forecast.js should
// update whatever was typed in (innerhtml) so if I type in Bangkok, current location should change

function SearchBar({updateLocation}) {
  const [location, setLocation] = useState(''); // state variable with the name 'location' is set to an empty string

  function handleClick(event) { // function made for click event
    event.preventDefault(); // stops page from refreshing
    // console.log('clicked');
    updateLocation(location); // updateLocation is our prop passing the value of location

    setLocation(''); // resets location to empty string so new location can be entered
  }

  function handleChange(event) { // function made for type in event
    setLocation(event.target.value); // updates the value of location by the value typed in by the user
  }


  return (
    <div className="searchbar">
      <form className="searchbar-form">
        <input onChange={handleChange} // On change event for search bar
          className="search-input"
          style={{fontStyle: 'italic', letterSpacing: 1}}
          type="text"
          placeholder="Enter a city..."
          value = {location}
        />
        <button onClick={handleClick} // on click event for button
        className="submit-btn"
         type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass}
          className="magnifying-glass"
           />
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
