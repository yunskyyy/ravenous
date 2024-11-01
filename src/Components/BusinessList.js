import React from "react";
import Business from "./Business";

export const businesses = [
  {
    imageSrc: "../Images/ayam_geprek.jpg",
    name: "AYAM GEPREK",
    address: "Santiong",
    city: "Ternate",
    state: "Indonesia",
    zipCode: "8667",
    category: "Makanan",
    rating: "7,8",
    reviewCount: "794",
  },
];

const BusinessList = () => {
  return (
    <div className="BusinessList">
      {businesses.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
