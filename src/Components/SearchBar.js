import React from "react";
import "./SearchBar.css"
const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          <li>
            Best
            <br />
            Match
          </li>
          <li>
            Highest
            <br />
            Rated
          </li>
          <li>
            Most
            <br />
            Reviewed
          </li>
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <button>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;
