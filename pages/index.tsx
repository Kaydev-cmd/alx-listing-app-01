import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/common/PropertyCard";
import Pill from "@/components/common/Pill";
import Hero from "@/components/common/Hero";
import Link from "next/link";

const leftPills = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay later",
  "Self Checkin",
  "Instant Book",
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="px-4 md:px-8 py-6">
        <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>
        <div className="flex justify-between mb-6">
          <div className="flex gap-20">
            {leftPills.map((label) => (
              <Pill key={label} label={label} />
            ))}
          </div>
          <div className="flex gap-4">
            <Pill label="Filter" image="/assets/icons/Filter.png" />
            <Pill label="Sort by: Highest Price" />
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <div className="flex justify-center">
              <Link href={`property/${property.id}`}>
                <PropertyCard
                  key={index}
                  name={property.name}
                  price={`$${property.price.toLocaleString()}`}
                  rating={property.rating}
                  image={property.image}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
