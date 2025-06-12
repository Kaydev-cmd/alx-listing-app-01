import React from "react";
import { HERO_BACKGROUND } from "@/constants";

const Hero: React.FC = () => {
  return (
    <div className="bg-cover bg-center h-[500px] w-full flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl mb-6">
        Find your favorite
        <br />
        place here!
      </h1>
      <p>The best prices for over 2 million properties worldwide</p>
    </div>
  );
};

export default Hero;
