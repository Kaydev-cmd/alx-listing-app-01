import React from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label htmlFor="date">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          name="date"
          id="date"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="date">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          name="date"
          id="date"
        />
      </div>
    </div>
  );
};

export default BookingSection;
