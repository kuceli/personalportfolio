import React, { useState } from "react";
import Footer from "./Footer";
import Img from "../assets/ACE_0333.png";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import "../components/Header.css";

const Layout = () => {
  const [activeTab, setActiveTab] = useState("tab1");
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
  return (
    <div className="h-[100vh]  ">
      {/* Header */}
      <div className="tabs flex justify-center items-center h-[7%]">
        <ul className="flex gap-x-8 text-[#333333] font-medium">
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
      </div>
      {/* Main */}
      <div className="flex px-14 h-[86%]  ">
        {/* <div className="border border-solid border-red-500 w-[35%] "></div> */}
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
