import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Offer() {
  return (
    <section className={`${poppins.className} h-auto py-2 bg-black text-white`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 px-4">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5">
          <p style={{ fontWeight: 200 }} className="text-sm text-center md:text-left">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <h2 className="text-sm md:text-base font-medium cursor-pointer underline">
            Shop Now
          </h2>
        </div>
        <select className="bg-black text-white text-sm px-2 py-1 border border-white rounded">
          <option>English</option>
          <option>Spanish</option>
        </select>
      </div>
    </section>
  );
}
