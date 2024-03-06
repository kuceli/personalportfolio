import React, { useState } from "react";
import Footer from "./Footer";
import Img from "../assets/ACE_0333.png";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import "../components/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Layout = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isOpen, setIsOpen] = useState(true);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  const handleTab4 = () => {
    setActiveTab("tab4");
  };

  const listStyle = {
    cursor: "pointer",
  };
  const style = { color: "#333333" };

  return (
    <div className="h-[100vh]">
      {/* Header */}
      <div className="tabs flex justify-center md:items-center h-[7%]">
        <ul className="hidden md:flex gap-x-8 text-[#333333] font-medium">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
            style={listStyle}
          >
            Home
          </li>

          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
            style={listStyle}
          >
            About
          </li>

          <li
            className={activeTab === "tab3" ? "active" : ""}
            onClick={handleTab3}
            style={listStyle}
          >
            Portfolio
          </li>

          <li
            className={activeTab === "tab4" ? "active" : ""}
            onClick={handleTab4}
            style={listStyle}
          >
            Contact
          </li>
        </ul>
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer absolute top-5 right-14"
        >
          {isOpen ? (
            <GiHamburgerMenu size={27} />
          ) : (
            <AiOutlineClose size={27} />
          )}
        </div>

        <ul
          className={
            !isOpen
              ? " text-[#333333] font-medium fixed flex flex-col pr-10 sm:pr-40 pl-10 gap-y-3 md:hidden left-0 pt-56 w-[70%] sm:w-[50%] h-full border-r border-r-grey-900 z-20 bg-white transition-all ease-in duration-500"
              : "fixed left-[-100%]"
          }
        >
          <img
            src={Img}
            alt="Kuceli's Photo"
            className={
              !isOpen
                ? " w-[11%] sm:w-[8%] mb-10 mt-24 sm:mt-24 fixed md:hidden top-0"
                : "fixed left-[-100%]"
            }
          />
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
            style={listStyle}
          >
            Home
          </li>

          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
            style={listStyle}
          >
            About
          </li>

          <li
            className={activeTab === "tab3" ? "active" : ""}
            onClick={handleTab3}
            style={listStyle}
          >
            Portfolio
          </li>

          <li
            className={activeTab === "tab4" ? "active" : ""}
            onClick={handleTab4}
            style={listStyle}
          >
            Contact
          </li>
          <div className="flex flex-col-reverse gap-y-3 w-[100%] mt-8">
            <div style={style}>Copyright © 2023</div>
            <div className="flex gap-x-2">
              <a target="_blank" href="https://www.facebook.com/kuceli.englama">
                <FaFacebookF style={style} />
              </a>
              <a target="_blank" href="https://twitter.com/englama_">
                <FaTwitter style={style} />
              </a>
              <a target="_blank" href="https://github.com/kuceli">
                <FaGithub style={style} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kucelienglama/"
              >
                <FaLinkedinIn style={style} />
              </a>
            </div>
          </div>
        </ul>
      </div>

      {/* Main */}
      <div className="flex px-8 sm:px-14 h-[86%]  ">
        <img
          src={Img}
          alt="Kuceli's Photo"
          className="w-[35%] hidden lg:block "
        />
        <div className="w-[100%] lg:w-[65%] overflow-scroll bg-[#F6FBFF] ">
          {activeTab === "tab1" && <Home />}
          {activeTab === "tab2" && <About />}
          {activeTab === "tab3" && <Portfolio />}
          {activeTab === "tab4" && <Contact />}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
