import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetail;
