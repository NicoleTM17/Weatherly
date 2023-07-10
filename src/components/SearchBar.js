// import React from 'react';

// fontawesome libraries:
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS:
import '../style/SearchBar.css';

// When a user clicks (onClick) the 'search' button, the current-location text in Forecast.js should
// update whatever was typed in (innerhtml) so if I type in Bangkok, current location should change

function SearchBar() {
  return (
    <div className="searchbar">
      <form className="searchbar-form">
        <input
          className="search-input"
          type="text"
          placeholder="Enter a city"
        />
        <button
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
