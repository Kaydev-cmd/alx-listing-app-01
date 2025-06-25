import BookingForm from "@/components/booking/BookingForm";
import React from "react";

const BookingPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;
