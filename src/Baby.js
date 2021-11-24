import React from "react";

const Baby = (props) => {
  const { name, sex } = props.data;
  return (
    <div>
      {sex === "f" ? (
        <p className="pink">{name}</p>
      ) : (
        <p className="blue">{name}</p>
      )}
    </div>
  );
};

export default Baby;
