import React from "react";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  const style = { color: "#333333" };
  return (
    <div className="hidden md:flex justify-between items-center px-14 h-[7%] fixed bottom-0 w-[100%]">
      <div style={style}>Copyright © 2023</div>
      <div className="flex gap-x-2">
        <a target="_blank" href="https://www.linkedin.com/in/kucelienglama/">
          <FaLinkedinIn style={style} />
        </a>
        <a target="_blank" href="https://github.com/kuceli">
          <FaGithub style={style} />
        </a>
        <a target="_blank" href="https://medium.com/@englamakuceli">
          <FaMediumM style={style} />
        </a>
        <a target="_blank" href="https://www.instagram.com/englama_/">
          <FaSquareInstagram style={style} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
