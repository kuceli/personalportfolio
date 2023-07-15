import React, { useEffect } from "react";
import "../components/HorizontalProgressBar.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HorizontalProgressBar = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="relative flex gap-x-16 w-[100%] justify-between text-[#7D7789] text-[15px] leading-6 mt-7">
        <div className="w-[50%] flex flex-col justify-between">
          <div className="skill-box">
            <span className="title">HTML</span>
            <div className="skill-bar">
              <span className="skill-per p95">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">CSS</span>
            <div className="skill-bar">
              <span className="skill-per p95">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">JavaScript </span>
            <div className="skill-bar">
              <span className="skill-per p90">
                <span className="tooltip">90%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">ReactJs </span>
            <div className="skill-bar">
              <span className="skill-per p85">
                <span className="tooltip">85%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Python</span>
            <div className="skill-bar">
              <span className="skill-per p75">
                <span className="tooltip">75%</span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="skill-box">
            <span className="title">MySQL</span>
            <div className="skill-bar">
              <span className="skill-per p85">
                <span className="tooltip">85%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">WordPress</span>
            <div className="skill-bar">
              <span className="skill-per p85">
                <span className="tooltip">85%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Git</span>
            <div className="skill-bar">
              <span className="skill-per p90">
                <span className="tooltip">90%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">VS Code</span>
            <div className="skill-bar">
              <span className="skill-per p95">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Tailwind CSS</span>
            <div className="skill-bar">
              <span className="skill-per p95">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalProgressBar;
