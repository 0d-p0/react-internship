import React from "react";

import "./card.css";

const CardComponent = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image card" src={imageSrc} alt="Card" />
        <div className="card-overlay">
          <h2 className="card-title">{title}</h2>
          {/* <p className="card-description">{description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
