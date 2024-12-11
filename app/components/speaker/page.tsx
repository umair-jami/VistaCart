import Image from "next/image";
import React from "react";
import speaker from "../../assets/music img/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";

export default function Speaker() {
  return (
    <section className="h-auto container mx-auto">
      <div className="bg-black h-auto mt-14 flex flex-col md:flex-row items-center md:items-stretch px-4 md:px-0">
        {/* Text Section */}
        <div className="text-Text basis-full md:basis-[40%] flex flex-col p-4 md:p-[50px] gap-4 md:gap-10">
          <p className="text-Button1 text-sm md:text-base">Categories</p>
          <h2 className="text-lg md:text-2xl font-medium leading-tight md:leading-normal">
            Enhance Your <br /> Music Experience
          </h2>
          {/* Timeline */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-4 mt-6">
            <div className="bg-Text w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center text-center">
              <p className="text-Text2 text-[8px] sm:text-xs md:text-sm font-medium">
                05 <br />
                <span className="text-[6px] sm:text-xs">Days</span>
              </p>
            </div>
            <div className="bg-Text w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center text-center">
              <p className="text-Text2 text-[8px] sm:text-xs md:text-sm font-medium">
                23 <br />
                <span className="text-[6px] sm:text-xs">Hours</span>
              </p>
            </div>
            <div className="bg-Text w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center text-center">
              <p className="text-Text2 text-[8px] sm:text-xs md:text-sm font-medium">
                58 <br />
                <span className="text-[6px] sm:text-xs">Minutes</span>
              </p>
            </div>
            <div className="bg-Text w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center text-center">
              <p className="text-Text2 text-[8px] sm:text-xs md:text-sm font-medium">
                23 <br />
                <span className="text-[6px] sm:text-xs">Seconds</span>
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
            className="w-[80%] sm:w-[60%] md:w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
