import React from 'react'
import animalfood from "../../assets/Our Products/animalfood.png"
import laptop from "../../assets/Our Products/laptope.png"
import bodyspray from "../../assets/Our Products/bodySpra.png"
import toys from "../../assets/Our Products/cartoys.png"
import cameras from "../../assets/Our Products/camera.png"
import shoes from "../../assets/Our Products/shoes.png"
import games from "../../assets/Our Products/game.png"
import jacket from "../../assets/Our Products/jacket.png"
import fiveStart from "../../assets/Flash Sales/Five star.png";
import fourStar from "../../assets/Flash Sales/Four Star.png";
import fourhalfstar from "../../assets/Flash Sales/Four Half Star.png";
import vector1 from "../../assets/Flash Sales/Vector 1.png";
import vector2 from "../../assets/Flash Sales/Vector.png";
import heart from "../../assets/Flash Sales/Fill Heart.png";
import eye from "../../assets/Flash Sales/Fill Eye.png";
import Image from 'next/image'

export default function OurProducts() {
  return (
    <section className="h-full container">
      <div className="flex items-center gap-2">
        <div className="w-4 h-10 bg-Secondary2 rounded-md"></div>
        <p className="text-Secondary2">Our Products</p>
      </div>
      <div className="flex items-center w-full justify-between mt-9">
        <div className="flex gap-16">
          <h1 className="text-2xl" style={{ fontWeight: 500 }}>
          Explore Our Products
          </h1>
        </div>
        <div className="flex gap-5">
          <div className="bg-secondary w-9 h-9 rounded-full">
            <Image src={vector2} alt="vector2" className="w-3 h-3 m-[30%]" />
          </div>
          <div className="bg-secondary w-9 h-9 rounded-full">
            <Image src={vector1} alt="vector" className="w-3 h-3 m-[30%]" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-between mt-10">
        {/* Card one */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
          <div className="w-[100%] bg-gray-100 h-[220px] mt-10 rounded-lg shadow-lg relative">
            {/* dicount */}
            <div className="absolute top-2 left-2 bg-red-500 rounded-md px-2 py-1">
              <p className="text-white text-[12px] font-semibold">-10%</p>
            </div>
            {/* icon */}
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
                src={animalfood}
                alt="Gaming Monitor"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div>
            <p>Breed Dry Dog Food</p>
            <p className="text-Secondary2 text-[14px]">
              $120 <span className="text-Text1 line-through">$160</span>
            </p>
            <div className="flex">
              <Image src={fiveStart} alt="five start" className="h-5 w-20" />
              <p className="text-Text1">(88)</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%]'>
          {/* card */}
          <div className="w-[100%] bg-gray-100 h-[220px] mt-10 rounded-lg shadow-lg relative">
            {/* dicount */}
            <div className="absolute top-2 left-2 bg-red-500 rounded-md px-2 py-1">
              <p className="text-white text-[12px] font-semibold">-40%</p>
            </div>
            {/* icon */}
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
                src={cameras}
                alt="Keyboard"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div>
            <p>CANON EOS DSLR Camera</p>
            <p className="text-Secondary2 text-[14px]">
              $920 <span className="text-Text1 line-through">$1160</span>
            </p>
            <div className="flex">
              <Image src={fourStar} alt="five start" className="h-5 w-20" />
              <p className="text-Text1">(75)</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%]'>
          {/* card */}
          <div className="w-[100%] bg-gray-100 h-[220px] mt-10 rounded-lg shadow-lg relative">
            {/* dicount */}
            <div className="absolute top-2 left-2 bg-red-500 rounded-md px-2 py-1">
              <p className="text-white text-[12px] font-semibold">-45%</p>
            </div>
            {/* icon */}
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
                src={laptop}
                alt="Gaming Monitor"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div>
            <p>ASUS FHD Gaming Laptop</p>
            <p className="text-Secondary2 text-[14px]">
              $420 <span className="text-Text1 line-through">$760</span>
            </p>
            <div className="flex">
              <Image src={fourhalfstar} alt="five start" className="h-5 w-20" />
              <p className="text-Text1">(98)</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%]'>
          {/* card */}
          <div className="w-[100%] bg-gray-100 h-[220px] mt-10 rounded-lg shadow-lg relative">
            {/* dicount */}
            <div className="absolute top-2 left-2 bg-red-500 rounded-md px-2 py-1">
              <p className="text-white text-[12px] font-semibold">-33%</p>
            </div>
            {/* icon */}
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
                src={bodyspray}
                alt="Chiar"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div>
            <p>Curology Product Set  </p>
            <p className="text-Secondary2 text-[14px]">
              $120 <span className="text-Text1 line-through">$350</span>
            </p>
            <div className="flex">
              <Image src={fiveStart} alt="five start" className="h-5 w-20" />
              <p className="text-Text1">(75)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-between mt-10">
        {/* Card one */}
        <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%]'>
          <div className="w-[100%] bg-gray-100 h-[220px] mt-10 rounded-lg shadow-lg relative">
            {/* icon */}
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
                src={toys}
                alt="Gaming Monitor"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div>
            <p>Kids Electric Car</p>
            <p className="text-Secondary2 text-[14px]">
              $120 <span className="text-Text1 line-through">$160</span>
            </p>
            <div className="flex">
              <Image src={fiveStart} alt="five start" className="h-5 w-20" />
              <p className="text-Text1">(88)</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%]'>
          {/* card */}
          <div className="w-[100%] bg-gray-100 h-[220px] mt-10 rounded-lg shadow-lg relative">
            {/* dicount */}
            <div className="absolute top-2 left-2 bg-Button1 rounded-md px-2 py-1">
              <p className="text-white text-[12px] font-semibold">New</p>
            </div>
            {/* icon */}
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
                src={shoes}
                alt="Keyboard"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div>
            <p>Jr. Zoom Soccer Cleats</p>
            <p className="text-Secondary2 text-[14px]">
              $920 <span className="text-Text1 line-through">$1160</span>
            </p>
            <div className="flex">
              <Image src={fourStar} alt="five start" className="h-5 w-20" />
              <p className="text-Text1">(75)</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%]'>
          {/* card */}
          <div className="w-[100%] bg-gray-100 h-[220px] mt-10 rounded-lg shadow-lg relative">
            {/* dicount */}
            
            {/* icon */}
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
                src={games}
                alt="Gaming Monitor"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div>
            <p>GP11 Shooter USB Gamepad</p>
            <p className="text-Secondary2 text-[14px]">
              $420 <span className="text-Text1 line-through">$760</span>
            </p>
            <div className="flex">
              <Image src={fourhalfstar} alt="five start" className="h-5 w-20" />
              <p className="text-Text1">(98)</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%]'>
          {/* card */}
          <div className="w-[100%] bg-gray-100 h-[220px] mt-10 rounded-lg shadow-lg relative">
            {/* dicount */}
            <div className="absolute top-2 left-2 bg-Button1 rounded-md px-2 py-1">
              <p className="text-white text-[12px] font-semibold">New</p>
            </div>
            {/* icon */}
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
                src={jacket}
                alt="Chiar"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div>
            <p>Quilted Satin Jacket </p>
            <p className="text-Secondary2 text-[14px]">
              $120 <span className="text-Text1 line-through">$350</span>
            </p>
            <div className="flex">
              <Image src={fiveStart} alt="five start" className="h-5 w-20" />
              <p className="text-Text1">(75)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pb-4 flex justify-center">
        <button className="bg-red-500 text-white px-6 py-2 text-sm hover:bg-red-600">
          View All Products
        </button>
      </div>
    </section>
  )
}
