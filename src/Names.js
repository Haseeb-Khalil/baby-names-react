import React from "react";
import BabyNamesData from "./BabyNamesData.json";
import Baby from "./Baby";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Names = (props) => {
  const SortedBabyNames = BabyNamesData.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  const [babyNames, setBabyNames] = useState(SortedBabyNames);

  const search = (searchText) => {
    const searchedName = BabyNamesData.filter((baby) => {
      return baby.name.toLowerCase().includes(searchText);
    });
    setBabyNames(searchedName);
  };

  return (
    <div className="all-names">
      <div className="searchSection">
        <p className="searchCaption">Search a Name: </p>
        <SearchBar onInput={search} />
      </div>

      <ul>
        {babyNames.map((baby, index) => {
          return <Baby key={index} data={baby} />;
        })}
      </ul>
    </div>
  );
};
export default Names;
