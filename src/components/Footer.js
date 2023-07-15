import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const style = { color: "#333333" };
  return (
    <div className="flex justify-between items-center px-14 h-[7%] fixed bottom-0 w-[100%]">
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
        <a target="_blank" href="https://www.linkedin.com/in/kucelienglama/">
          <FaLinkedinIn style={style} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
