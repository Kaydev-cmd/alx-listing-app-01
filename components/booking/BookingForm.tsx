import React from "react";

const BookingForm = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Details</h2>
      <form>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Email:</label>
            <input
              type="email"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Payment Details */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label>Card Number:</label>
          <input
            type="text"
            className="border p-2 w-full mt-2 rounded-lg"
            placeholder="Card Number"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Expiration Date"
            />
          </div>
          <div>
            <label>CVV:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="CVV"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
