// import React from 'react';

// fontawesome libraries:
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS:
import '../style/SearchBar.css';



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
