import React, { useEffect, useState } from "react";
import Img1 from "../../assets/projects/img1.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import CardModal from "./CardModal";
import { Data } from "../../data/PortfolioCardsData";

const Cards = () => {
  const [showModal, setShowModal] = useState(false);

  const openLogoutModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <div className="mt-5 w-[100%] h-[267px] ">
        <ul className="columns-2">
          {Data.map((card) => {
            return (
              <li className="relative mb-8 mr-4" key={card.id}>
                <div>
                  <div className="max-w-sm overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src={card.projectImg}
                      className="max-w-sm transition duration-300 ease-in-out hover:scale-110"
                    />
                  </div>

                  <div
                    className="flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer"
                    onClick={openLogoutModal}
                  >
                    <div>
                      <p className="font-medium">{card.projectName}</p>
                      <p className="text-xs font-base">{card.shortDesc}</p>
                    </div>

                    <BsFillArrowRightCircleFill size={25} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        {/* left */}
        {/* <div className="w-[50%] ">
          <div className="relative mb-14">
            <img src={Img1} />
            <a href="https://twitter.com/englama_" target="_blank">
              <div className="flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer">
                <div>
                  <p className="font-medium">Mealy</p>
                  <p className="text-xs font-base">Food Ordering App</p>
                </div>
                <BsFillArrowRightCircleFill size={25} />
              </div>
            </a>
          </div>

          <div className="relative mb-14">
            <img src={Img1} />
            <a href="https://twitter.com/englama_" target="_blank">
              <div className="flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer">
                <div>
                  <p className="font-medium">Calculator</p>
                </div>
                <BsFillArrowRightCircleFill size={25} />
              </div>
            </a>
          </div>

          <div className="relative mb-14">
            <img src={Img1} />
            <a href="https://twitter.com/englama_" target="_blank">
              <div className="flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer">
                <div>
                  <p className="font-medium">To-do List</p>
                </div>
                <BsFillArrowRightCircleFill size={25} />
              </div>
            </a>
          </div>

          <div className="relative mb-14">
            <img src={Img1} />
            <a href="https://twitter.com/englama_" target="_blank">
              <div className="flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer">
                <div>
                  <p className="font-medium">Registration Form</p>
                </div>
                <BsFillArrowRightCircleFill size={25} />
              </div>
            </a>
          </div>
        </div> */}
        {/* right */}
        {/* <div className="  w-[50%]  ">
          <div className="relative mb-14">
            <img src={Img1} />
            <div className="flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer">
              <p className="font-medium">Splash Screen</p>
              <BsFillArrowRightCircleFill size={25} />
            </div>
          </div>

          <div className="relative mb-14">
            <img src={Img1} />
            <div className="flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer">
              <p className="font-medium">Tic-Tac-Toe</p>
              <BsFillArrowRightCircleFill size={25} />
            </div>
          </div>

          <div className="relative mb-14">
            <img src={Img1} />
            <div className="flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer">
              <p className="font-medium">Login Form</p>
              <BsFillArrowRightCircleFill size={25} />
            </div>
          </div>
        </div> */}
      </div>
      <div>
        <CardModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Cards;
