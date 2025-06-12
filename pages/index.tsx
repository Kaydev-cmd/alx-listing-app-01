import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/common/PropertyCard";
import Pill from "@/components/common/Pill";
import Hero from "@/components/common/Hero";
import Link from "next/link";
import Carousel from "@/components/common/Carousel";
import FilteredSection from "@/components/common/FilterSection";

export default function Home() {
  return (
    <>
      <Carousel />
      <Hero />
      <div className="px-4 md:px-8 py-6">
        <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>
        <div className="flex justify-between mb-6">
          <FilteredSection />
          <div className="flex flex-wrap items-center gap-4">
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
                  address={property.address}
                  price={`$${property.price.toLocaleString()}`}
                  rating={property.rating}
                  image={property.image}
                  offers={property.offers}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
