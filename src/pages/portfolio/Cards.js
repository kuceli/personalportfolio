import React, { useState } from "react";
import Img1 from "../../assets/projects/img1.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Mealy from "../../components/portfolios/Mealy";
import ClonedSites from "../../components/portfolios/ClonedSites";
import SplashScreen from "../../components/portfolios/SplashScreen";
import MiniProjects from "../../components/portfolios/MiniProjects";

const Cards = () => {
  const [showClonedSitesModal, setShowClonedSitesModal] = useState(false);
  const [showMealyModal, setShowMealyModal] = useState(false);
  const [showSplashScreenModal, setShowSplashScreenModal] = useState(false);
  const [showMiniProjectsModal, setShowMiniProjectsModal] = useState(false);

  const openMealyModal = () => {
    setShowMealyModal((prev) => !prev);
  };

  const openClonedSitesModal = () => {
    setShowClonedSitesModal((prev) => !prev);
  };
  const openSplashScreenModal = () => {
    setShowSplashScreenModal((prev) => !prev);
  };
  const openMiniProjectsModal = () => {
    setShowMiniProjectsModal((prev) => !prev);
  };
  return (
    <div>
      <div className="mt-5 w-[100%] h-[267px] ">
        <ul className="columns-2">
          {/* Mealy */}
          <li className="relative mb-8 mr-4">
            <div>
              <div className="max-w-sm overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={Img1}
                  alt="Mealy"
                  className="max-w-sm transition duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div
                className="flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer"
                onClick={openMealyModal}
              >
                <div>
                  <p className="font-medium">Mealy</p>
                  <p className="text-xs font-base">Food Ordering App</p>
                </div>

                <BsFillArrowRightCircleFill size={25} />
              </div>
            </div>
          </li>
          {/* Cloned Sites */}
          <li className="relative mb-8 mr-4">
            <div>
              <div className="max-w-sm overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={Img1}
                  className="max-w-sm transition duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div
                className="flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer"
                onClick={openClonedSitesModal}
              >
                <div>
                  <p className="font-medium">Cloned Sites</p>
                  <p className="text-xs font-base">
                    Redesigned Webpages
                    {/* <span>Netflix | Udemy | Instagram</span> */}
                  </p>
                </div>

                <BsFillArrowRightCircleFill size={25} />
              </div>
            </div>
          </li>
          {/* Splash Screen */}
          <li className="relative mb-8 mr-4">
            <div>
              <div className="max-w-sm overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={Img1}
                  className="max-w-sm transition duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div
                className="flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer"
                onClick={openSplashScreenModal}
              >
                <div>
                  <p className="font-medium">Splash Screen</p>
                  <p className="text-xs font-base">Loading Screen</p>
                </div>

                <BsFillArrowRightCircleFill size={25} />
              </div>
            </div>
          </li>
          {/* Mini Projects */}
          <li className="relative mb-8 mr-4">
            <div>
              <div className="max-w-sm overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={Img1}
                  className="max-w-sm transition duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div
                className="flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer"
                onClick={openMiniProjectsModal}
              >
                <div>
                  <p className="font-medium">Mini Projects</p>
                  <p className="text-xs font-base">
                    Simple Practice Projects
                    {/* <span>Calculator | Tic-Tac-Toe | To-do List</span> */}
                  </p>
                </div>

                <BsFillArrowRightCircleFill size={25} />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <Mealy
          showMealyModal={showMealyModal}
          setShowMealyModal={setShowMealyModal}
        />
        <ClonedSites
          showClonedSitesModal={showClonedSitesModal}
          setShowClonedSitesModal={setShowClonedSitesModal}
        />
        <SplashScreen
          showSplashScreenModal={showSplashScreenModal}
          setShowSplashScreenModal={setShowSplashScreenModal}
        />
        <MiniProjects
          showMiniProjectsModal={showMiniProjectsModal}
          setShowMiniProjectsModal={setShowMiniProjectsModal}
        />
      </div>
    </div>
  );
};

export default Cards;
