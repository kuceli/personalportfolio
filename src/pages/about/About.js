import React, { useEffect } from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import HorizontalProgressBar from "../../components/HorizontalProgressBar";
import Timeline from "../../components/Timeline";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="px-7 py-12 " data-aos="fade-up">
        {/* About Me Header */}
        <div className="flex items-center justify-between">
          <p className="w-[20%] font-bold tracking-[0.35rem] text-[16px]">
            ABOUT ME
          </p>
          <div className="flex h-[2px] w-[80%]">
            <div className="h-[100%] w-[50%] bg-[#333333]"></div>
            <div className="h-[100%] w-[50%] bg-[#FFBC6A]"></div>
          </div>
        </div>
        {/* About Me Details */}
        <div className="flex gap-x-16 w-[100%] justify-between text-[#7D7789] text-[15px] leading-6 mt-7 ">
          <div className="w-[50%] flex flex-col justify-between text-justify ">
            <p>
              Hi there! My name is
              <span className="font-semibold"> Kuceli Englama.</span> I am an
              extremely passionate and dedicated Software Engineer who can carry
              out your tasks to perfection.
            </p>
            <p className="">
              As the best Software Engineering graduate at the American
              University of Nigeria (class of 2022) coupled with a few online
              courses and internship experiences, I have acquired the skills and
              knowledge necessary to make your project a success!
            </p>
          </div>
          <div className="w-[50%]">
            <table className="">
              <tr className="">
                <td className="font-semibold pb-2 ">Name:</td>
                <td className=" pl-8 pb-2">Kuceli Susan Englama</td>
              </tr>
              <tr className="">
                <td className="font-semibold pb-2 ">Age:</td>
                <td className=" pl-8 pb-2">22 Years Old</td>
              </tr>
              <tr>
                <td className="font-semibold pb-2">Address:</td>
                <td className=" pl-8 pb-2">Abuja, Nigeria</td>
              </tr>
              <tr>
                <td className="font-semibold pb-2 ">State of Origin:</td>
                <td className=" pl-8 pb-2">Borno State</td>
              </tr>
              <tr>
                <td className="font-semibold pb-2 ">Languages:</td>
                <td className=" pl-8 pb-2">English | Hausa</td>
              </tr>
              <tr>
                <td className="font-semibold pb-2 ">Mail:</td>
                <td className="pl-8 pb-2">englamakuceli@gmail.com</td>
              </tr>
              <tr>
                <td className="font-semibold ">Phone:</td>
                <td className="pl-8">+234 903 009 1183</td>
              </tr>
            </table>
          </div>
        </div>
        {/* Services and Interests */}
        <div className="flex gap-x-16 w-[100%] justify-between text-[#7D7789] text-[15px] leading-6 mt-12">
          <div className="w-[50%]">
            <div className="flex items-center justify-between pb-7">
              <p className="w-[40%] font-bold tracking-[0.35rem] text-[#333333] text-[16px]">
                SERVICES
              </p>
              <div className="h-[2px] w-[60%] flex">
                <div className="h-[100%] w-[50%] bg-[#333333]"></div>
                <div className="h-[100%] w-[50%] bg-[#FFBC6A]"></div>
              </div>
            </div>
            <ul>
              <li className="flex items-center gap-x-5 pb-2">
                <span className="text-[#FFBC6A] ">
                  <AiOutlineAntDesign size={16} />
                </span>
                <p> Software Development</p>
              </li>
              <li className="flex items-center gap-x-5 pb-2">
                <span className="text-[#FFBC6A] ">
                  <AiOutlineAntDesign size={16} />
                </span>
                <p> Software Design</p>
              </li>
              <li className="flex items-center gap-x-5 pb-2">
                <span className="text-[#FFBC6A] ">
                  <AiOutlineAntDesign size={16} />
                </span>
                <p> Software Testing & Maintenance </p>
              </li>
              <li className="flex items-center gap-x-5 pb-2">
                <span className="text-[#FFBC6A] ">
                  <AiOutlineAntDesign size={16} />
                </span>
                <p>Creative Writing </p>
              </li>
            </ul>
          </div>
          <div className="w-[50%]">
            <div className="flex items-center justify-between pb-7">
              <p className="w-[40%] font-bold tracking-[0.35rem] text-[#333333]">
                INTERESTS
              </p>
              <div className="h-[2px] w-[60%] flex">
                <div className="h-[100%] w-[50%] bg-[#333333]"></div>
                <div className="h-[100%] w-[50%] bg-[#FFBC6A]"></div>
              </div>
            </div>
            <ul>
              <li className="flex items-center gap-x-5 pb-2">
                <span className="text-[#FFBC6A] ">
                  <AiOutlineAntDesign size={16} />
                </span>
                <p> Reading Novels</p>
              </li>
              <li className="flex items-center gap-x-5 pb-2">
                <span className="text-[#FFBC6A] ">
                  <AiOutlineAntDesign size={16} />
                </span>
                <p> Watching Series/Movies</p>
              </li>
              <li className="flex items-center gap-x-5 pb-2">
                <span className="text-[#FFBC6A] ">
                  <AiOutlineAntDesign size={16} />
                </span>
                <p> Working Out</p>
              </li>
              <li className="flex items-center gap-x-5 pb-2">
                <span className="text-[#FFBC6A] ">
                  <AiOutlineAntDesign size={16} />
                </span>
                <p> Playing Mobile Games</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Tools and Technologies */}
        <div className="mt-10 flex items-center justify-between">
          <p className="w-[40%] font-bold tracking-[0.35rem] text-[16px]">
            TOOLS & TECHNOLOGIES
          </p>
          <div className="h-[2px] w-[60%] flex">
            <div className="h-[100%] w-[50%] bg-[#333333]"></div>
            <div className="h-[100%] w-[50%] bg-[#FFBC6A]"></div>
          </div>
        </div>
        <HorizontalProgressBar />
        {/* Education and Experience */}
        <div>
          <div className="flex gap-x-16 w-[100%] justify-between text-[#7D7789] text-[15px] leading-6 mt-12">
            <div className="w-[50%]">
              <div className="flex items-center justify-between pb-7">
                <p className="w-[40%] font-bold tracking-[0.35rem] text-[#333333] text-[16px]">
                  EDUCATION
                </p>
                <div className="h-[2px] w-[60%] flex">
                  <div className="h-[100%] w-[50%] bg-[#333333]"></div>
                  <div className="h-[100%] w-[50%] bg-[#FFBC6A]"></div>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="flex items-center justify-between pb-7">
                <p className="w-[40%] font-bold tracking-[0.35rem] text-[#333333]">
                  EXPERIENCE
                </p>
                <div className="h-[2px] w-[60%] flex">
                  <div className="h-[100%] w-[50%] bg-[#333333]"></div>
                  <div className="h-[100%] w-[50%] bg-[#FFBC6A]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
