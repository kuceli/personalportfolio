import React, { useEffect } from "react";
import SchoolIcon from "../assets/school.svg";
import WorkIcon from "../assets/work.svg";
import "../components/Timeline.css";

const Timeline = () => {
  return (
    <>
      <div className="timeline">
        <div className="container left-container">
          <img src={SchoolIcon} />
          <div className="text-box">
            <h2 className="title">Cornell University</h2>
            <p className="position">MEng. Computer Science</p>

            <p className="date">August 2023 - May 2024</p>

            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img src={WorkIcon} />
          <div className="text-box">
            <h2 className="title">Federal Mortgage Bank of Nigeria</h2>
            <p className="date">August 2022 - May 2023</p>
            <p className="position">NYSC | Graduate Intern</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <img src={SchoolIcon} />
          <div className="text-box">
            <h2 className="title">American University of Nigeria</h2>
            <p className="position">BSc. Software Engineering (Hons)</p>
            <p className="date">August 2018 - May 2022</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img src={WorkIcon} />
          <div className="text-box">
            <h2 className="title">Omniswift Nigeria Limited</h2>
            <p className="date">July 2021 - August 2021</p>
            <p className="position">Intern</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
