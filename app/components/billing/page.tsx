import Image from "next/image";
import React from "react";
import monitor from "../../assets/Monitor-Cart-Small.png";
import gamepad from "../../assets/Gamepad-Cart-Small.png";
import Offer from "../offer/page";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function CheckoutPage() {
  return (
    <>
    <Offer/>
    <Navbar/>
    <section className="container mx-auto p-6">
      {/* Breadcrumbs */}
      <p className="text-gray-500 text-sm mb-6">
        Account / My Account / Product / View Cart / <span className="text-black">Checkout</span>
      </p>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Billing Details Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="first-name">
                First Name*
              </label>
              <input
                type="text"
                id="first-name"
                className="w-[500px] border bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="company-name">
                Company Name
              </label>
              <input
                type="text"
                id="company-name"
                className="w-[500px] border bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="street-address">
                Street Address*
              </label>
              <input
                type="text"
                id="street-address"
                className="w-[500px] border bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="apartment">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                className="w-[500px] border bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="city">
                Town/City*
              </label>
              <input
                type="text"
                id="city"
                className="w-[500px] border bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="phone">
                Phone Number*
              </label>
              <input
                type="text"
                id="phone"
                className="w-[500px] border bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                className="w-[500px] border bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" id="save-info" className="mr-2" />
              <label htmlFor="save-info" className="text-gray-700">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-1/3 mr-20 p-6 rounded-md">
          {/* Product List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src={monitor} alt="LCD Monitor" className="w-12 h-12" />
                <p className="text-gray-700">LCD Monitor</p>
              </div>
              <p className="font-semibold">$650</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src={gamepad} alt="Gamepad" className="w-12 h-12" />
                <p className="text-gray-700">H1 Gamepad</p>
              </div>
              <p className="font-semibold">$1100</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal:</p>
              <p className="font-semibold">$1750</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Shipping:</p>
              <p className="font-semibold">Free</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Total:</p>
              <p className="font-bold">$1750</p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4">
              <input type="radio" id="bank" name="payment" className="h-4 w-4" />
              <label htmlFor="bank" className="text-gray-700">
                Bank
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="cash-on-delivery"
                name="payment"
                className="h-4 w-4"
              />
              <label htmlFor="cash-on-delivery" className="text-gray-700">
                Cash on delivery
              </label>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="flex items-center gap-2 mt-6">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-gray-300 p-2 w-auto rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Apply Coupon
            </button>
          </div>

          {/* Place Order */}
          <button className="bg-red-500 text-white w-[150px] py-2 mt-6 rounded-md hover:bg-red-600">
            Place Order
          </button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
