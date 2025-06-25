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
        <div>
          <h3 className="text-lg font-semibold">{propertyName}</h3>
          <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
          <p className="text-sm text-gray-500">
            {startDate} {totalNights} Nights
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>${bookingFee}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Sub Total</p>
          <p>${price}</p>
        </div>
        <div className="flex justify-between mt-2 font-semibold">
          <p>Grand Total</p>
          <p>${bookingFee + price}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
