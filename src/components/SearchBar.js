// import React from 'react';

// fontawesome libraries:
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS:
import '../style/SearchBar.css';

// When a user clicks (onClick) the 'search' button, the current-location text in Forecast.js should
// update whatever was typed in (innerhtml) so if I type in Bangkok, current location should change

function SearchBar() {

  function handleClick(event) { // function made for click event
    event.preventDefault();
    console.log('clicked');
  }

  function handleChange(event) { // function made for type in event
    console.log('typed');
  }

  return (
    <div className="searchbar">
      <form className="searchbar-form">
        <input onChange={handleChange} // On change event for search bar
          className="search-input"
          type="text"
          placeholder="Enter a city"
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
