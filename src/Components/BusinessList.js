import React from "react";
import Business from "./Business";

export const Businesses =[
    {
        imageSrc:"",
        name:"",
        address:"",
        city:"",
        state:"",
        zipCode:"",
        category:"",
        rating:"",
        reviewCount:"",
    },
];

const BusinessList = () => {
    return(
    <div className="BusinessList">
        {Businesses.map((business, index)=>(
    <Business key={index} bussines={business}/>
))}
</div>
    );
};

export default BusinessList;