import React from "react";
import vector1 from "../../assets/Flash Sales/Vector 1.png";
import vector2 from "../../assets/Flash Sales/Vector.png";
import phone from "../../assets/Category/Category-CellPhone.png";
import computer from "../../assets/Category/Category-Computer.png";
import watch from "../../assets/Category/Category-SmartWatch.png";
import camera from "../../assets/Category/Category-Camera.png";
import headphone from "../../assets/Category/Category-Headphone.png";
import gaming from "../../assets/Category/Category-Gamepad.png";

import Image from "next/image";

export default function Category() {
  return (
    <section className="h-auto container mx-auto p-4">
      {/* Header Section */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-10 bg-Secondary2 rounded-md"></div>
        <p className="text-Secondary2">Categories</p>
      </div>
      <div className="flex flex-wrap items-center justify-between mt-9">
        <h1 className="text-2xl font-medium">Browse By Category</h1>
        <div className="flex gap-4 mt-4 md:mt-0">
          <div className="bg-secondary w-9 h-9 rounded-full flex items-center justify-center">
            <Image src={vector2} alt="vector2" className="w-3 h-3" />
          </div>
          <div className="bg-secondary w-9 h-9 rounded-full flex items-center justify-center">
            <Image src={vector1} alt="vector" className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/* Card 1 */}
        <div className="w-[120px] sm:w-[150px] bg-gray-100 h-[120px] sm:h-[150px] rounded-lg shadow-lg flex flex-col justify-center items-center">
          <Image src={phone} alt="phone" className="w-16 h-16" />
          <p className="text-Text1">Phones</p>
        </div>
        {/* Card 2 */}
        <div className="w-[120px] sm:w-[150px] bg-gray-100 h-[120px] sm:h-[150px] rounded-lg shadow-lg flex flex-col justify-center items-center">
          <Image src={computer} alt="computer" className="w-16 h-16" />
          <p className="text-Text1">Computers</p>
        </div>
        {/* Card 3 */}
        <div className="w-[120px] sm:w-[150px] bg-gray-100 h-[120px] sm:h-[150px] rounded-lg shadow-lg flex flex-col justify-center items-center">
          <Image src={watch} alt="watch" className="w-16 h-16" />
          <p className="text-Text1">Watches</p>
        </div>
        {/* Card 4 */}
        <div className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] rounded-lg shadow-lg flex flex-col justify-center items-center bg-Secondary2">
          <Image src={camera} alt="camera" className="w-16 h-16" />
          <p className="text-Text">Cameras</p>
        </div>
        {/* Card 5 */}
        <div className="w-[120px] sm:w-[150px] bg-gray-100 h-[120px] sm:h-[150px] rounded-lg shadow-lg flex flex-col justify-center items-center">
          <Image src={headphone} alt="headphone" className="w-16 h-16" />
          <p className="text-Text1">Headphones</p>
        </div>
        {/* Card 6 */}
        <div className="w-[120px] sm:w-[150px] bg-gray-100 h-[120px] sm:h-[150px] rounded-lg shadow-lg flex flex-col justify-center items-center">
          <Image src={gaming} alt="gaming" className="w-16 h-16" />
          <p className="text-Text1">Gaming</p>
        </div>
      </div>
    </section>
  );
}
