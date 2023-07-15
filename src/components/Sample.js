import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Sample = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex flex-col gap-y-24 items-center mt-24">
      <div
        className="border border-solid border-red-500 w-[100px] h-[100px]"
        data-aos="fade-down"
      ></div>
      <div
        className="border border-solid border-red-500 w-[100px] h-[100px]"
        data-aos="fade-left"
      ></div>
      <div
        className="border border-solid border-red-500 w-[100px] h-[100px]"
        data-aos="fade-right"
      ></div>
      <div
        className="border border-solid border-red-500 w-[100px] h-[100px]"
        data-aos="fade-left"
      ></div>
      <div
        className="border border-solid border-red-500 w-[100px] h-[100px]"
        data-aos="fade-right"
      ></div>
      <div
        className="border border-solid border-red-500 w-[100px] h-[100px]"
        data-aos="fade-left"
      ></div>
      <div
        className="border border-solid border-red-500 w-[100px] h-[100px]"
        data-aos="fade-right"
      ></div>
      <div
        className="border border-solid border-red-500 w-[100px] h-[100px]"
        data-aos="fade-left"
      ></div>
    </div>
  );
};

export default Sample;
