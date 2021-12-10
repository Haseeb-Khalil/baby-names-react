import React from "react";

const Baby = (props) => {
  const { name, sex } = props.data;
  return (
    <li>
      {sex === "f" ? (
        <p className="pink">{name}</p>
      ) : (
        <p className="blue">{name}</p>
      )}
    </li>
  );
};

export default Baby;
  