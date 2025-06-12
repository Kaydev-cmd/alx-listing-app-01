import React from "react";

const logos = [
  {
    image: "/assets/logos/apartment1.png",
    alt: "Apartment",
  },
  {
    image: "/assets/logos/barn1.png",
    alt: "Barn",
  },
  {
    image: "/assets/logos/cabin1.png",
    alt: "Cabin",
  },
  {
    image: "/assets/logos/castle-tower1.png",
    alt: "Castle Tower",
  },
  {
    image: "/assets/logos/cottage1.png",
    alt: "Cottage",
  },
  {
    image: "/assets/logos/farm1.png",
    alt: "Farm",
  },
  {
    image: "/assets/logos/farm1(1).png",
    alt: "Farm",
  },
  {
    image: "/assets/logos/home1.png",
    alt: "Home",
  },
  {
    image: "/assets/logos/island(1)1.png",
    alt: "Island",
  },
  {
    image: "/assets/logos/key-chain1.png",
    alt: "Key chain",
  },
  {
    image: "/assets/logos/living-room1.png",
    alt: "Living room",
  },
  {
    image: "/assets/logos/mansion1.png",
    alt: "Mansion",
  },
  {
    image: "/assets/logos/palm-tree1.png",
    alt: "Palm tree",
  },
  {
    image: "/assets/logos/swimming-pool1.png",
    alt: "Swimming pool",
  },
  {
    image: "/assets/logos/tent1.png",
    alt: "Tent",
  },
  {
    image: "/assets/logos/treehouse(1)1.png",
    alt: "Treehouse",
  },
  {
    image: "/assets/logos/vacations1.png",
    alt: "Vacations",
  },
  {
    image: "/assets/logos/villa1.png",
    alt: "Villa",
  },
];

const Carousel: React.FC = () => {
  return (
    <div className="flex justify-around items-center p-4">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.image}
          alt={logo.alt}
          className="w-6 cursor-pointer"
        />
      ))}
    </div>
  );
};

export default Carousel;
