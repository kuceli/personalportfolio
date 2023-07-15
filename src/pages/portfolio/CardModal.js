import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import CloseIcon from "../../assets/close.svg";
import { AiOutlineClose } from "react-icons/ai";
import { Data } from "../../data/PortfolioCardsData";
import Img1 from "../../assets/projects/img1.png";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Js from "../../assets/javascript.png";
import Tailwindcss from "../../assets/tailwindcss.png";
import ReactJs from "../../assets/react.png";

const Background = styled.div`
  width: 100%;
  height: 86.2vh;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  height: 470px;
  background: #f5f5f5;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  // padding: 30px 0px;
  overflow: auto;
  margin: 5px;
`;

const ModalContent = styled.div``;

const CardModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="sm:w-[600px] md:w-[700px] lg:w-[760px] mx-10 sm:mx-0 p-12">
              <div
                className="cursor-pointer absolute right-2 top-2 border-2 border-solid border-white rounded-lg hover:rounded-full transition-all duration-600 p-1"
                onClick={() => setShowModal((prev) => !prev)}
              >
                <AiOutlineClose color="white" size={25} />
              </div>
              <ModalWrapper showModal={showModal}>
                <div className="px-0 sm:px-[2rem]">
                  {/* {Data.map((card) => {
                    return ( */}
                  <ModalContent>
                    <div
                      className="flex gap-x-8 items-center"
                      // key={card.id}
                    >
                      <div className="w-[50%]">
                        <img src={Img1} className=" " />
                      </div>
                      <div className=" w-[50%] ">
                        <p className="font-bold text-3xl mb-3 tracking-wider">
                          MEALY
                        </p>
                        <p className="text-sm mt-">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure
                        </p>
                        <div className="flex gap-x-2  h-9 my-3">
                          <img src={Html} />
                          <img src={Css} />
                          <img src={ReactJs} />
                          <img src={Tailwindcss} />
                        </div>
                        <a
                          href="#_"
                          class="relative inline-flex items-center px-10 py-2 overflow-hidden text-base font-medium text-[#333333] border-2 border-[#333333] hover:text-white group hover:bg-gray-50"
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
                          <span class="relative font-medium">View Project</span>
                        </a>
                        {/* <button className="bg-[#ffffff] hover:bg-[#333333] text-[#333333] hover:text-[#ffffff]">
                          View Project
                        </button> */}
                      </div>
                    </div>
                  </ModalContent>
                  {/* );
                  })} */}
                </div>
              </ModalWrapper>
            </div>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default CardModal;
