import React from "react";
import keyboard from "../../assets/Flash Sales/keyborad.png";
import chair from "../../assets/Flash Sales/chair.png";
import lcd from "../../assets/Flash Sales/lcd.png";
import clock from "../../assets/Flash Sales/clock.png";
import gaming from "../../assets/Flash Sales/gamingconsole.png";
import heart from "../../assets/Flash Sales/Fill Heart.png";
import vector1 from "../../assets/Flash Sales/Vector 1.png";
import vector2 from "../../assets/Flash Sales/Vector.png";
import eye from "../../assets/Flash Sales/Fill Eye.png";
import fiveStart from "../../assets/Flash Sales/Five star.png";
import fourStar from "../../assets/Flash Sales/Four Star.png";
import fourhalfstar from "../../assets/Flash Sales/Four Half Star.png";
import Image from "next/image";

export default function Sales() {
  return (
    <section className="h-auto container mx-auto p-4">
      {/* Header Section */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-10 bg-Secondary2 rounded-md"></div>
        <p className="text-Secondary2">Today’s</p>
      </div>
      <div className="flex flex-wrap items-center justify-between mt-9">
        <div className="flex gap-6 items-center">
          <h1 className="text-2xl font-medium">Flash Sales</h1>
          <Image src={clock} alt="clock" className="w-[150px] md:w-[250px]" />
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <div className="bg-secondary w-9 h-9 rounded-full flex items-center justify-center">
            <Image src={vector2} alt="vector2" className="w-4 h-4" />
          </div>
          <div className="bg-secondary w-9 h-9 rounded-full flex items-center justify-center">
            <Image src={vector1} alt="vector" className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {/* Card One */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
          <div className="w-full bg-gray-100 h-[220px] rounded-lg shadow-lg relative">
            {/* Discount */}
            <div className="absolute top-2 left-2 bg-red-500 rounded-md px-2 py-1">
              <p className="text-white text-[12px] font-semibold">-10%</p>
            </div>
            {/* Icons */}
            <div className="absolute top-2 right-2 flex flex-col">
              <Image
                src={heart}
                alt="heart"
                className="w-6 h-6 cursor-pointer mb-3"
              />
              <Image src={eye} alt="eye" className="w-6 h-6 cursor-pointer" />
            </div>
            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <Image
                src={gaming}
                alt="Gaming Monitor"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div className="mt-2">
            <p>HAVIT HV-G92 Gamepad</p>
            <p className="text-Secondary2 text-[14px]">
              $120 <span className="text-Text1 line-through">$160</span>
            </p>
            <div className="flex items-center">
              <Image src={fiveStart} alt="five start" className="h-5 w-20" />
              <p className="text-Text1 ml-2">(88)</p>
            </div>
          </div>
        </div>

        {/* Card Two */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
          <div className="w-full bg-gray-100 h-[220px] rounded-lg shadow-lg relative">
            <div className="absolute top-2 left-2 bg-red-500 rounded-md px-2 py-1">
              <p className="text-white text-[12px] font-semibold">-40%</p>
            </div>
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
                src={keyboard}
                alt="Keyboard"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div className="mt-2">
            <p>AK-900 Wired Keyboard</p>
            <p className="text-Secondary2 text-[14px]">
              $920 <span className="text-Text1 line-through">$1160</span>
            </p>
            <div className="flex items-center">
              <Image src={fourStar} alt="five start" className="h-5 w-20" />
              <p className="text-Text1 ml-2">(75)</p>
            </div>
          </div>
        </div>

        {/* Card Three */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
          <div className="w-full bg-gray-100 h-[220px] rounded-lg shadow-lg relative">
            <div className="absolute top-2 left-2 bg-red-500 rounded-md px-2 py-1">
              <p className="text-white text-[12px] font-semibold">-45%</p>
            </div>
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
                src={lcd}
                alt="Gaming Monitor"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div className="mt-2">
            <p>IPS LCD Gaming Monitor</p>
            <p className="text-Secondary2 text-[14px]">
              $420 <span className="text-Text1 line-through">$760</span>
            </p>
            <div className="flex items-center">
              <Image src={fourhalfstar} alt="five start" className="h-5 w-20" />
              <p className="text-Text1 ml-2">(98)</p>
            </div>
          </div>
        </div>

        {/* Card Four */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
          <div className="w-full bg-gray-100 h-[220px] rounded-lg shadow-lg relative">
            <div className="absolute top-2 left-2 bg-red-500 rounded-md px-2 py-1">
              <p className="text-white text-[12px] font-semibold">-33%</p>
            </div>
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
                src={chair}
                alt="Chair"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div className="mt-2">
            <p>S-Series Comfort Chair</p>
            <p className="text-Secondary2 text-[14px]">
              $120 <span className="text-Text1 line-through">$350</span>
            </p>
            <div className="flex items-center">
              <Image src={fiveStart} alt="five start" className="h-5 w-20" />
              <p className="text-Text1 ml-2">(75)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-red-500 text-white px-6 py-2 text-sm rounded hover:bg-red-600">
          View All Products
        </button>
      </div>
    </section>
  );
}
