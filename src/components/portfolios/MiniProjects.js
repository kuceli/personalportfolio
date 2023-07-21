import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Img4 from "../../assets/projects/img4.png";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Js from "../../assets/javascript.png";
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

const MiniProjects = ({ showMiniProjectsModal, setShowMiniProjectsModal }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showMiniProjectsModal ? 1 : 0,
    transform: showMiniProjectsModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const closeMiniProjectsModal = (e) => {
    if (modalRef.current === e.target) {
      setShowMiniProjectsModal(false);
    }
  };
  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showMiniProjectsModal) {
        setShowMiniProjectsModal(false);
      }
    },
    [setShowMiniProjectsModal, showMiniProjectsModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      {showMiniProjectsModal ? (
        <Background ref={modalRef} onClick={closeMiniProjectsModal}>
          <animated.div style={animation}>
            <div className="sm:w-[600px] md:w-[700px] lg:w-[760px] mx-10 sm:mx-0 p-12">
              <div
                className="cursor-pointer absolute right-2 top-2 border-2 border-solid border-white rounded-lg hover:rounded-full transition-all duration-600 p-1"
                onClick={() => setShowMiniProjectsModal((prev) => !prev)}
              >
                <AiOutlineClose color="white" size={25} />
              </div>
              <ModalWrapper showMiniProjectsModal={showMiniProjectsModal}>
                <div className="px-0 sm:px-[2rem]">
                  <ModalContent>
                    <div className="flex gap-x-8 items-center">
                      <div className="w-[50%] ">
                        <img src={Img4} className=" " />
                      </div>
                      <div className=" w-[50%] ">
                        <p className="font-bold text-3xl mb-3 tracking-wider">
                          Mini Projects
                        </p>
                        <p className="text-sm mt-">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          A few of some projects that I have built to help
                          sharpen my skills. Some are replicated projects while
                          others are original designs. These projects were built
                          using a mix of some or all of these language: HTML,
                          CSS, JS and ReactJs.
                        </p>
                        <div className="flex gap-x-2  h-9 my-3">
                          <img src={Html} />
                          <img src={Css} />
                          <img src={Js} />
                          <img src={ReactJs} />
                        </div>
                        <a
                          href="https://kucelienglamaminiprojects.netlify.app/"
                          target="_blank"
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
                          <span class="relative font-medium">
                            View Projects
                          </span>
                        </a>
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

export default MiniProjects;
