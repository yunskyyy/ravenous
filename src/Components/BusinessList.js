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
  {
    imageSrc: "../Images/ayam_cabe_ijo.jpg",
    name: "AYAM CABE IJO",
    address: "Santiong",
    city: "Ternate",
    state: "Indonesia",
    zipCode: "8667",
    category: "Makanan",
    rating: "7,8",
    reviewCount: "794",
  },
  {
    imageSrc: "../Images/Ikan_bakar_dabu.jpg",
    name: "IKAN BAKAR",
    address: "Santiong",
    city: "Ternate",
    state: "Indonesia",
    zipCode: "8667",
    category: "Makanan",
    rating: "7,8",
    reviewCount: "794",
  },
  {
    imageSrc: "../Images/sate.jpg",
    name: "SATE",
    address: "Santiong",
    city: "Ternate",
    state: "Indonesia",
    zipCode: "8667",
    category: "Makanan",
    rating: "7,8",
    reviewCount: "794",
  },
  {
    imageSrc: "../Images/salad_sayur.jpg",
    name: "SALAD SAYUR",
    address: "Santiong",
    city: "Ternate",
    state: "Indonesia",
    zipCode: "8667",
    category: "Makanan",
    rating: "7,8",
    reviewCount: "794",
  },
  {
    imageSrc: "../Images/tempe.jpg",
    name: "TEMPE",
    address: "Santiong",
    city: "Ternate",
    state: "Indonesia",
    zipCode: "8667",
    category: "Makanan",
    rating: "7,8",
    reviewCount: "794",
  },
  {
    imageSrc: "../Images/nasi_campur.jpg",
    name: "SATE",
    address: "Santiong",
    city: "Ternate",
    state: "Indonesia",
    zipCode: "8667",
    category: "Makanan",
    rating: "7,8",
    reviewCount: "794",
  },
  {
    imageSrc: "../Images/nasi_uduk.jpg",
    name: "SATE",
    address: "Santiong",
    city: "Ternate",
    state: "Indonesia",
    zipCode: "8667",
    category: "Makanan",
    rating: "7,8",
    reviewCount: "794",
  },
  {
    imageSrc: "../Images/nasi_kuning.jpg",
    name: "SATE",
    address: "Santiong",
    city: "Ternate",
    state: "Indonesia",
    zipCode: "8667",
    category: "Makanan",
    rating: "7,8",
    reviewCount: "794",
  },
  {
    imageSrc: "../Images/nasi_padang.jpg",
    name: "SATE",
    address: "Santiong",
    city: "Ternate",
    state: "Indonesia",
    zipCode: "8667",
    category: "Makanan",
    rating: "7,8",
    reviewCount: "794",
  },
  {
    imageSrc: "../Images/nasi_goreng.jpg",
    name: "SATE",
    address: "Santiong",
    city: "Ternate",
    state: "Indonesia",
    zipCode: "8667",
    category: "Makanan",
    rating: "7,8",
    reviewCount: "794",
  },
  {
    imageSrc: "../Images/sayur_kangkung.jpg",
    name: "SATE",
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
