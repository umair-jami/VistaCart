import React from "react";
import ps5 from "../../assets/New Arrivals/ps5.png";
import hates from "../../assets/New Arrivals/hates.png";
import speakers from "../../assets/New Arrivals/speakers.png";
import perfumes from "../../assets/New Arrivals/perfumes.png";
import Image from "next/image";

export default function NewArrival() {
  return (
    <section className="container h-full px-4 mx-auto">
      {/* Header Section */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-10 bg-Secondary2 rounded-md"></div>
        <p className="text-Secondary2 text-lg sm:text-xl">Featured</p>
      </div>

      <div className="flex items-center justify-between mt-5">
        <h1 className="text-2xl sm:text-3xl font-medium">New Arrival</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Left Large Card */}
        <div className="relative bg-black text-white rounded-lg overflow-hidden">
          <Image
            src={ps5}
            alt="PlayStation 5"
            className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
              PlayStation 5
            </h2>
            <p className="text-sm sm:text-base mt-1">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-2 bg-white text-black px-4 py-2 text-sm rounded-lg hover:bg-gray-200">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Cards Container */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="relative bg-black text-white rounded-lg overflow-hidden col-span-2">
            <Image
              src={hates}
              alt="Women's Collections"
              className="w-full h-[200px] sm:h-[300px] object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h2 className="text-lg sm:text-xl font-bold">
                Women&apos;s Collections
              </h2>
              <p className="text-sm sm:text-base mt-1">
                Featured women collections that give you another vibe.
              </p>
              <button className="mt-2 bg-white text-black px-4 py-2 text-sm rounded-lg hover:bg-gray-200">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-black text-white rounded-lg overflow-hidden">
            <Image
              src={speakers}
              alt="Speakers"
              className="w-full h-[200px] sm:h-[250px] object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h2 className="text-sm sm:text-lg font-bold">Speakers</h2>
              <p className="text-xs sm:text-sm mt-1">
                Amazon wireless speakers.
              </p>
              <button className="mt-2 bg-white text-black px-4 py-2 text-xs sm:text-sm rounded-lg hover:bg-gray-200">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-black text-white rounded-lg overflow-hidden">
            <Image
              src={perfumes}
              alt="Perfume"
              className="w-full h-[200px] sm:h-[250px] object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h2 className="text-sm sm:text-lg font-bold">Perfume</h2>
              <p className="text-xs sm:text-sm mt-1">GUCCI INTENSEOUD EDP.</p>
              <button className="mt-2 bg-white text-black px-4 py-2 text-xs sm:text-sm rounded-lg hover:bg-gray-200">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
