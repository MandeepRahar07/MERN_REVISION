// SingleWatch.js
import React from "react";

const SingleWatch = ({ name, image, category }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <img src={image} alt={image} />
      </div>
      <div>
        <div>{category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
