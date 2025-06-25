import React from "react";
import { OrderSummaryProps } from "@/interfaces";

const OrderSummary: React.FC<OrderSummaryProps> = ({
  propertyName,
  price,
  bookingFee,
  totalNights,
  startDate,
}) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>
      <div className="flex flex-col mt-4">
        <img
          src="/assets/listings/image_4.png"
          alt="Property"
          className="w-full  object-cover rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{propertyName}</h3>
          <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
          <p className="text-sm text-gray-500">
            {startDate} {totalNights} Nights
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
