import React from "react";
import vector2 from "../../assets/Home/Vector2.png";
import Image from "next/image";
import apple from "../../assets/Home/1200px-Apple_gray_logo 1.png";
import arrow from "../../assets/Home/Vector.png";
import iphone from "../../assets/Home/hero_endframe__cvklg0xk3w6e_large 2.png";
import dots from "../../assets/Home/slidedot.png";

export default function Main() {
  return (
    <section className="container mx-auto h-auto md:h-[calc(100vh-7rem)] p-4">
      {/* Main Container */}
      <div className="flex flex-wrap md:flex-nowrap h-full">
        {/* Sidebar */}
        <div className="grid gap-4 shadow-md p-4 w-full md:p-6 h-auto md:h-[96%] grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-1 lg:basis-[20%]">
          <div className="flex items-center gap-x-2">
            <p>Woman&apos;s Fashion</p>
            <Image
              src={vector2}
              alt="vector2"
              className="w-3 h-3 cursor-pointer ml-1"
            />
          </div>
          <div className="flex items-center gap-x-2">
            <p>Men’s Fashion</p>
            <Image
              src={vector2}
              alt="vector2"
              className="w-3 h-3 cursor-pointer ml-1"
            />
          </div>
          <div className="flex">
            <p>Electronics</p>
          </div>
          <div className="flex">
            <p>Home & Lifestyle</p>
          </div>
          <div className="flex">
            <p>Medicine</p>
          </div>
          <div className="flex">
            <p>Sports & Outdoor</p>
          </div>
          <div className="flex">
            <p>Baby&#39;s & Toys</p>
          </div>
          <div className="flex">
            <p>Groceries & Pets</p>
          </div>
          <div className="flex">
            <p>Health & Beauty</p>
          </div>
        </div>

        {/* Main Banner */}
        <div className="p-4 md:p-10 basis-full md:basis-[80%]">
          <div className="bg-black h-full w-full flex flex-col md:flex-row relative rounded-lg overflow-hidden">
            {/* Left Content */}
            <div className="flex flex-col basis-full md:basis-[50%] p-4 md:pl-24 justify-evenly">
              <div className="flex items-center gap-2">
                <Image src={apple} alt="apple icon" className="w-6 h-6" />
                <p className="text-Text text-sm md:text-base">
                  iPhone 14 Series
                </p>
              </div>
              <div>
                <h2 className="text-Text text-3xl md:text-6xl font-light leading-snug">
                  Up to 10% off Voucher
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-Text underline text-sm md:text-base">
                  Shop Now
                </p>
                <Image src={arrow} alt="arrow" className="w-4 h-4" />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex justify-center items-center p-4">
              <Image
                src={iphone}
                alt="iphone"
                className="w-full md:w-auto max-h-[300px] md:max-h-none"
              />
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 right-1/2 translate-x-1/2">
              <Image src={dots} alt="slide dots" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
