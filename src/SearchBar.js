import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchText(searchValue);
    props.onInput(searchValue);
  };

  return (
    <input
      className="searchBar"
      type="search"
      onChange={handleSearch}
      value={searchText}
    ></input>
  );
};

export default SearchBar;
