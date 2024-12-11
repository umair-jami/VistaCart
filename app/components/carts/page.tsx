import Image from 'next/image';
import React from 'react';
import monitor from "../../assets/Monitor-Cart-Small.png";
import gamepad from "../../assets/Gamepad-Cart-Small.png";
import Offer from '../offer/page';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

export default function Carts() {
  return (
    <>
    <Offer/>
    <Navbar/>
    <section className='container mx-auto p-6'>
      <p className='text-Text1 text-sm my-10'>Home / <span className='text-Text2'>Cart</span></p>
      <div>
        <div className='h-[3rem] shadow-lg flex items-center justify-between px-6'>
          <h1 className='w-[150px]'>Product</h1>
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>Subtotal</h1>
        </div>
        <div className='h-[3rem] shadow-lg flex items-center justify-between px-6 mt-10'>
          <div className='flex items-center gap-2 w-[150px]'>
            <Image src={monitor} alt='monitor' className='h-10 w-10' />
            <p>LCD Monitor</p>
          </div>
          <h1>$650</h1>
          {/* Use defaultValue for initial value */}
          <input type="number" min="1" max="10" step="1" defaultValue="1" className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
          <h1>$650</h1>
        </div>
        <div className='h-[3rem] shadow-lg flex items-center justify-between px-6 mt-10'>
          <div className='flex items-center gap-2 w-[150px]'>
            <Image src={gamepad} alt='monitor' className='h-10 w-10' />
            <p>H1 Gamepad</p>
          </div>
          <h1>$550</h1>
          {/* Use defaultValue for initial value */}
          <input type="number" min="1" max="10" step="1" defaultValue="1" className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
          <h1>$550</h1>
        </div>
        <div className='mt-10 flex justify-between'>
            <button className='py-3 px-3 border border-black'>Return To Shop</button>
            <button className='py-3 px-3 border border-black'>Update Cart</button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Coupon Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 mt-10">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-gray-300 p-2 w-auto rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="border mt-8 border-gray-300 p-6 rounded-md shadow-md w-full md:w-1/3">
          <h2 className="text-lg font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">Subtotal:</p>
            <p className="font-bold text-Text1" style={{fontWeight:400}}>$1750</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">Shipping:</p>
            <p className="font-bold text-Text1" style={{fontWeight:400}}>Free</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-600">Total:</p>
            <p className="font-bold text-Text1" style={{fontWeight:400}}>$1750</p>
          </div>
          <button className="bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600">
            Process to checkout
          </button>
        </div>
      </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
