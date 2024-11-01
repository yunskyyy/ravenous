import React from "react";

const Business = ({ business }) => {
  const {
    imageSrc,
    name,
    address,
    city,
    state,
    zipCode,
    category,
    rating,
    reviewCount,
  } = business;
  return (
    <div className="Business">
      <div className="Image-container">
        <img src={imageSrc} alt={name} />
      </div>
      <h2 className="Business-name">{name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{address}</p>
          <p>{city}</p>
          <p>{`${state} ${zipCode}`}</p>
        </div>
        <div className="Business-reviews">
          <h3>{category}</h3>
          <h3 className="rating">{`Rating ${rating}`}</h3>
          <p>{`${reviewCount} Ulasan`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
