import React from "react";
import { PropertyCardProps } from "@/interfaces";
import { FaStar } from "react-icons/fa";
import { FaShower } from "react-icons/fa6";
import { IoIosBed } from "react-icons/io";
import { PiUsersFill } from "react-icons/pi";

const amenities = ["Top Villa", "Self Checkin", "Free Reschedule"];

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  address,
  price,
  rating,
  image,
  offers,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-[600px] max-w-sm transition-transform hover:scale-105 cursor-pointer">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <ul className="flex flex-wrap space-x-4 mt-2 ml-2">
        {amenities.map((amenity, index) => (
          <li
            key={index}
            className="bg-gray-200 rounded-md py-1 px-2 text-sm font-semibold"
          >
            {amenity}
          </li>
        ))}
      </ul>
      <div className="p-4 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            <FaStar color="#FAC02B" /> {rating}
          </p>
        </div>
        <h2 className="text-md mb-2 text-[#929292]">
          {address.city}, {address.country}
        </h2>
        <div className="flex justify-between flex-row-reverse items-center">
          <p className="text-[#34967C] font-medium mb-1 text-lg">{price}/n</p>
          <div className="flex justify-center gap-2 bg-white border border-[#e9e9e9] rounded-full py-2 text-sm font-semibold w-[160px]">
            <p className="flex items-center gap-1">
              <IoIosBed size={22} /> {offers.bed}
            </p>
            <p className="flex items-center gap-1">
              <FaShower size={22} />
              {offers.shower}
            </p>
            <p className="flex items-center gap-1">
              <PiUsersFill size={22} />
              {offers.occupants}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
