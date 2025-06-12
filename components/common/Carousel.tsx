import { CarouselProps } from "@/interfaces";
import React from "react";

const logos = [
  "/assets/logos/apartment1.png",
  "/assets/logos/barn1.png",
  "/assets/logos/cabin1.png",
  "/assets/logos/castle-tower1.png",
  "/assets/logos/cottage1.png",
  "/assets/logos/farm1.png",
  "/assets/logos/farm1(1).png",
  "/assets/logos/home1.png",
  "/assets/logos/island(1)1.png",
  "/assets/logos/key-chain1.png",
  "/assets/logos/living-room1.png",
  "/assets/logos/mansion1.png",
  "/assets/logos/palm-tree1.png",
  "/assets/logos/swimming-pool1.png",
  "/assets/logos/tent1.png",
  "/assets/logos/treehouse(1)1.png",
  "/assets/logos/vacations1.png",
  "/assets/logos/villa1.png",
];

const Carousel: React.FC = () => {
  return (
    <div className="flex justify-around items-center p-4">
      {logos.map((logo, index) => (
        <img key={index} src={logo} alt="Logo" className="w-6 cursor-pointer"/>
      ))}
    </div>
  );
};

export default Carousel;
