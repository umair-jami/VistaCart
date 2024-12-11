import Image from "next/image";
import React from "react";
import speaker from "../../assets/music img/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";

export default function Speaker() {
  return (
    <section className="h-[calc(100vh-5rem)] container mx-auto">
      <div className="bg-black h-[80%] mt-14 flex flex-col md:flex-row items-center md:items-stretch">
        {/* Text Section */}
        <div className="text-Text basis-full md:basis-[40%] flex flex-col p-4 md:p-[50px] gap-4 md:gap-10">
          <p className="text-Button1 text-sm md:text-base">Categories</p>
          <h2 className="text-lg md:text-2xl font-medium leading-tight md:leading-normal">
            Enhance Your <br /> Music Experience
          </h2>
          <div className="flex gap-3 md:gap-4">
            <div className="bg-Text w-10 h-10 md:w-12 md:h-12 rounded-full flex flex-col items-center justify-center">
              <p className="text-Text2 text-[8px] md:text-xs">
                05 <br />
                <span>Days</span>
              </p>
            </div>
            <div className="bg-Text w-10 h-10 md:w-12 md:h-12 rounded-full flex flex-col items-center justify-center">
              <p className="text-Text2 text-[8px] md:text-xs">
                23 <br />
                <span>Hours</span>
              </p>
            </div>
            <div className="bg-Text w-10 h-10 md:w-12 md:h-12 rounded-full flex flex-col items-center justify-center">
              <p className="text-Text2 text-[8px] md:text-xs">
                58 <br />
                <span>Minutes</span>
              </p>
            </div>
            <div className="bg-Text w-10 h-10 md:w-12 md:h-12 rounded-full flex flex-col items-center justify-center">
              <p className="text-Text2 text-[8px] md:text-xs">
                23 <br />
                <span>Seconds</span>
              </p>
            </div>
          </div>
          <button className="bg-Button1 text-white px-5 py-2 text-xs md:text-sm hover:bg-green-900 w-[100px] md:w-[120px]">
            Buy Now!
          </button>
        </div>

        {/* Image Section */}
        <div className="basis-full md:basis-[60%] m-4 md:m-10 flex justify-center items-center">
          <Image
            src={speaker}
            alt="speaker"
            className="w-[80%] md:w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
