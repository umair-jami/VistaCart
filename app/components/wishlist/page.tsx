import Image from "next/image";
import bag from "../../assets/Best selling products/bag.png";
import sound from "../../assets/Best selling products/sound.png";
import sweter from "../../assets/Best selling products/sweter.png";
import table from "../../assets/Best selling products/table.png";
import eye from "../../assets/Best selling products/Fill Eye.png";
import fiveStar from "../../assets/Flash Sales/Five star.png";
import fourStar from "../../assets/Flash Sales/Four Star.png";
import fourHalfStar from "../../assets/Flash Sales/Four Half Star.png";
import deletImg from "../../assets/Best selling products/deleteItem.png";
import cart from "../../assets/Best selling products/Cart1.png";
import keyboard from "../../assets/Flash Sales/keyborad.png";
import chair from "../../assets/Flash Sales/chair.png";
import lcd from "../../assets/Flash Sales/lcd.png";
import gaming from "../../assets/Flash Sales/gamingconsole.png";
import fiveStart from "../../assets/Flash Sales/Five star.png";
import fourhalfstar from "../../assets/Flash Sales/Four Half Star.png";
import React from "react";
import Offer from "../offer/page";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Bestproducts() {
  return (
    <>
    <Offer/>
    <Navbar/>
    <section className="container mx-auto py-8">
      {/* Section Title */}
      <div className="flex items-center justify-between gap-2">
        <p>Wishlist (4)</p>
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
          <button className="bg-red-500 text-white px-6 py-2 text-sm hover:bg-red-600">
            View All
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {/* Card 1 */}
        <div>
          <div className="w-full bg-gray-100 h-auto rounded-lg shadow-lg relative p-4">
            {/* Discount Badge */}
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              -35%
            </div>

            {/* Delete Icon */}
            <div className="absolute top-2 right-2">
              <Image
                src={deletImg}
                alt="Delete Icon"
                className="w-6 h-6 cursor-pointer"
              />
            </div>

            {/* Product Image */}
            <div className="flex items-center justify-center h-40">
              <Image
                src={sweter}
                alt="Product"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Add to Cart Button */}
            <div className="bg-black flex justify-center gap-2 text-white text-center py-2 rounded mt-3 cursor-pointer">
              <Image src={cart} alt="cart"/>
              <p>Add To Cart</p>
            </div>

            {/* Product Details */}
          </div>

          <div>
            <p>The north coat</p>
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
                src={deletImg}
                alt="heart"
                className="w-6 h-6 cursor-pointer mb-3"
              />
            </div>
            <div className="flex items-center justify-center h-40">
              <Image
                src={bag}
                alt="Product"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Add to Cart Button */}
            <div className="bg-black flex justify-center gap-2 text-white text-center py-2 rounded mt-3 cursor-pointer">
              <Image src={cart} alt="cart"/>
              <p>Add To Cart</p>
            </div>
          </div>
          <div>
            <p>Gucci duffle bag</p>
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
                src={deletImg}
                alt="heart"
                className="w-6 h-6 cursor-pointer mb-3"
              />
            </div>
            <div className="flex items-center justify-center h-40">
              <Image
                src={sound}
                alt="Product"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Add to Cart Button */}
            <div className="bg-black flex justify-center gap-2 text-white text-center py-2 rounded mt-3 cursor-pointer">
              <Image src={cart} alt="cart"/>
              <p>Add To Cart</p>
            </div>
          </div>
          <div>
            <p>RGB liquid CPU Cooler</p>
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
                src={deletImg}
                alt="heart"
                className="w-6 h-6 cursor-pointer mb-3"
              />
            </div>
            <div className="flex items-center justify-center h-40">
              <Image
                src={table}
                alt="Product"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Add to Cart Button */}
            <div className="bg-black flex justify-center gap-2 text-white text-center py-2 rounded mt-3 cursor-pointer">
              <Image src={cart} alt="cart"/>
              <p>Add To Cart</p>
            </div>
          </div>
          <div>
            <p>Small BookSelf</p>
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
    <section className="container mx-auto py-8">
      {/* Section Title */}
      <div className="flex items-center justify-between gap-2">
        <p>Just for You</p>
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
          <button className="bg-red-500 text-white px-6 py-2 text-sm hover:bg-red-600">
            View All
          </button>
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
    </section>
    <Footer/>
    </>
  );
}
