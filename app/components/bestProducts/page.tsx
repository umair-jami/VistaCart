import Image from "next/image";
import bag from "../../assets/Best selling products/bag.png";
import sound from "../../assets/Best selling products/sound.png";
import sweter from "../../assets/Best selling products/sweter.png";
import table from "../../assets/Best selling products/table.png";
import eye from "../../assets/Best selling products/Fill Eye.png";
import heart from "../../assets/Best selling products/Fill Heart.png";
import fiveStar from "../../assets/Flash Sales/Five star.png";
import fourStar from "../../assets/Flash Sales/Four Star.png";
import fourHalfStar from "../../assets/Flash Sales/Four Half Star.png";
import React from "react";

export default function Bestproducts() {
  return (
    <section className="container mx-auto py-8">
      {/* Section Title */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-10 bg-Secondary2 rounded-md"></div>
        <p className="text-Secondary2">This Month</p>
      </div>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mt-9 gap-4">
        <h1 className="text-2xl font-medium">Best Selling Products</h1>
        <button className="bg-red-500 text-white px-6 py-2 text-sm hover:bg-red-600">
          View All
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {/* Card 1 */}
        <div>
          <div className="w-full bg-gray-100 h-[220px] rounded-lg shadow-lg relative">
            <div className="absolute top-2 right-2 flex flex-col">
              <Image
                src={heart}
                alt="heart"
                className="w-6 h-6 cursor-pointer mb-3"
              />
              <Image src={eye} alt="eye" className="w-6 h-6 cursor-pointer" />
            </div>
            <div className="flex items-center justify-center h-full">
              <Image
                src={sweter}
                alt="Gaming Monitor"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div>
            <p>HAVIT HV-G92 Gamepad</p>
            <p className="text-Secondary2 text-sm">
              $120 <span className="text-Text1 line-through">$160</span>
            </p>
            <div className="flex items-center">
              <Image src={fiveStar} alt="five star" className="h-5 w-auto" />
              <p className="text-Text1 ml-2">(88)</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div>
          <div className="w-full bg-gray-100 h-[220px] rounded-lg shadow-lg relative">
            <div className="absolute top-2 right-2 flex flex-col">
              <Image
                src={heart}
                alt="heart"
                className="w-6 h-6 cursor-pointer mb-3"
              />
              <Image src={eye} alt="eye" className="w-6 h-6 cursor-pointer" />
            </div>
            <div className="flex items-center justify-center h-full">
              <Image
                src={bag}
                alt="Keyboard"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div>
            <p>AK-900 Wired Keyboard</p>
            <p className="text-Secondary2 text-sm">
              $920 <span className="text-Text1 line-through">$1160</span>
            </p>
            <div className="flex items-center">
              <Image src={fourStar} alt="four star" className="h-5 w-auto" />
              <p className="text-Text1 ml-2">(75)</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div>
          <div className="w-full bg-gray-100 h-[220px] rounded-lg shadow-lg relative">
            <div className="absolute top-2 right-2 flex flex-col">
              <Image
                src={heart}
                alt="heart"
                className="w-6 h-6 cursor-pointer mb-3"
              />
              <Image src={eye} alt="eye" className="w-6 h-6 cursor-pointer" />
            </div>
            <div className="flex items-center justify-center h-full">
              <Image
                src={sound}
                alt="Gaming Monitor"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div>
            <p>IPS LCD Gaming Monitor</p>
            <p className="text-Secondary2 text-sm">
              $420 <span className="text-Text1 line-through">$760</span>
            </p>
            <div className="flex items-center">
              <Image
                src={fourHalfStar}
                alt="four half star"
                className="h-5 w-auto"
              />
              <p className="text-Text1 ml-2">(98)</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div>
          <div className="w-full bg-gray-100 h-[220px] rounded-lg shadow-lg relative">
            <div className="absolute top-2 right-2 flex flex-col">
              <Image
                src={heart}
                alt="heart"
                className="w-6 h-6 cursor-pointer mb-3"
              />
              <Image src={eye} alt="eye" className="w-6 h-6 cursor-pointer" />
            </div>
            <div className="flex items-center justify-center h-full">
              <Image
                src={table}
                alt="Chair"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div>
            <p>S-Series Comfort Chair</p>
            <p className="text-Secondary2 text-sm">
              $120 <span className="text-Text1 line-through">$350</span>
            </p>
            <div className="flex items-center">
              <Image src={fiveStar} alt="five star" className="h-5 w-auto" />
              <p className="text-Text1 ml-2">(75)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
