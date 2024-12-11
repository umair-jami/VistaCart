import React from "react";
import Navbar from "../navbar/page";
import Offer from "../offer/page";
import mobile from "../../assets/signinpage.png";
import Image from "next/image";
import Footer from "../footer/page";

export default function Signup() {
  return (
    <>
      <Offer />
      <Navbar />
      <section className="container h-full">
        <div className="flex h-full">
          <div className="basis-[60%]">
            <Image src={mobile} alt="mobile" className="h-[80%] w-[90%] mt-6" />
          </div>
          <div className="flex items-center justify-center min-h-screen basis-[40%]">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-sm">
              <h1 className="text-2xl font-semibold text-gray-900">
                Log in to Exclusive
              </h1>
              <p className="text-gray-600 mt-2">Enter your details below</p>

              <form className="mt-6 space-y-4">
                {/* Email or Phone Number Field */}
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email or Phone Number
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Email or Phone Number"
                    className="w-full px-4 py-2 border-b border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="sr-only" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border-b border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="w-32 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none"
                  >
                    Log in
                  </button>
                  <a href="#" className="text-red-500 hover:underline text-sm">
                    Forget Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
