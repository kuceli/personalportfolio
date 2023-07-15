import { React, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Designer", "Writer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const ButtonStyle = {
    // background: "#333333",
    // color: "white",
    padding: "15px 27px ",
    fontWeight: "600",
    border: "2px solid #333333",
    transition: "all 0.7s",
  };

  return (
    <>
      <div
        className=" h-full flex flex-col justify-center pl-14"
        data-aos="fade-up"
      >
        <p className="font-bold text-[55px] pb-5">
          KUCELI <span className="">ENGLAMA</span>
        </p>
        <div className="w-24 h-1 bg-[#333333]"></div>
        <p className="font-normal text-2xl py-8 text-[#FFBC6A]">
          Creative
          <span className="font-bold text-[#333333]">
            {" "}
            {text} <Cursor />
          </span>
        </p>
        <div className="flex gap-x-6">
          <a
            href="https://drive.google.com/file/d/19R4DeUMmCbPfiVnmi4YR8NECY8gIPUSF/view?usp=drive_link"
            target="_blank"
            class="relative inline-flex items-center px-9 py-2 overflow-hidden text-lg font-medium text-[#333333] border-2 border-[#333333] hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-[#333333] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-2 ease">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative font-medium">Resumé</span>
          </a>

          {/* <button
            style={ButtonStyle}
            className="bg-[#333333] hover:bg-[#F6FBFF] text-[#ffffff] hover:text-[#333333]"
          >
            Download My Resume
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Home;
