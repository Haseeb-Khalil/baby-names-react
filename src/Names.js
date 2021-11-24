import React from "react";
import BabyNamesData from "./BabyNamesData.json";
import Baby from "./Baby";

const Names = () => {
  const SortedBabyNames = BabyNamesData.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  return (
    <div className="all-names">
      <ul>
        {SortedBabyNames.map((baby, index) => {
          return <Baby key={index} data={baby} />;
        })}
      </ul>
    </div>
  );
};
export default Names;
