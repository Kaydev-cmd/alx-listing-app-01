import React from "react";
import { PropertyCardProps } from "@/interfaces";
import { FaStar } from "react-icons/fa";

const amenities = ["Top Villa", "Self Checkin", "Free Reschedule"];

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  price,
  rating,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-[600px] max-w-sm transition-transform hover:scale-105 cursor-pointer">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <ul className="flex flex-wrap space-x-4 mt-2 ml-2">
        {amenities.map((amenity, index) => (
          <li key={index} className="bg-gray-200 rounded-md py-1 px-2 text-sm font-semibold">
            {amenity}
          </li>
        ))}
      </ul>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <div className="flex justify-between">
        <p className="text-[#34967C] font-medium mb-1">{price}</p>
        <p className="flex items-center gap-1 text-sm text-gray-500"><FaStar color="#FAC02B" /> {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
