import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Cards from "./Cards";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="px-3 sm:px-7 pt-10 h-full">
      <div className="flex items-center justify-between">
        <p className="md:w-[30%] xl:w-[20%] font-bold tracking-[0.35rem] text-[16px]">
          PORTFOLIO
        </p>
        <div className="flex h-[2px] md:w-[70%] xl:w-[80%]">
          <div className="h-[100%] w-[50%] bg-[#333333]"></div>
          <div className="h-[100%] w-[50%] bg-[#FFBC6A]"></div>
        </div>
      </div>
      {/* cards */}
      <Cards />
    </div>
  );
};

export default Portfolio;
