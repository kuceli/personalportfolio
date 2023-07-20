import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Cards from "./Cards";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="px-7 pt-10 h-full">
      <div className="flex items-center  ">
        <p className="w-[20%] font-bold tracking-[0.35rem]">PORTFOLIO</p>
        <div className="h-[1px] w-[80%] bg-[#333333]"></div>
      </div>
      {/* cards */}
      <Cards />
    </div>
  );
};

export default Portfolio;
